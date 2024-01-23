'use client';

import { PiXBold } from 'react-icons/pi';
import { SubmitHandler, Controller } from 'react-hook-form';
import { ActionIcon, Button, Checkbox, Switch, Text, Title } from 'rizzui';
import { useModal } from '@/app/shared/modal-views/use-modal';
import { Form } from '@/components/ui/form';
import toast from 'react-hot-toast';
import cn from '@/utils/class-names';
import useEventCalendar from '@/hooks/use-event-calendar';
import moment from 'moment';
import {
  CalendarEventBrushingChecklist,
  FormBrushingChecklist,
  formBrushingChecklist,
} from '../schema';
import httpRequest from '@/config/httpRequest';
import { useSession } from 'next-auth/react';
import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';

interface CreateEventProps {
  startDate?: Date;
  endDate?: Date;
  event?: CalendarEventBrushingChecklist;
  getData?: () => void;
}

export default function FormModal({
  startDate,
  endDate,
  event,
  getData,
}: CreateEventProps) {
  const { closeModal } = useModal();
  const { createEvent, updateEvent } = useEventCalendar();
  const { data: session } = useSession();

  const isUpdateEvent = event !== undefined;

  const onSubmit: SubmitHandler<FormBrushingChecklist> = (data) => {
    try {
      const isNewEvent = data.id === '' || data.id === undefined;
      console.log('data', data);

      if (isNewEvent) {
        const payload = {
          date: data.date,
          checklist: JSON.stringify(data.checkList),
          userID: session.user['idUser'],
        };
        httpRequest({
          url: '/brushing-checklist',
          method: 'post',
          data: payload,
        })
          .then((response) => {
            closeModal();
            toast.success(
              <Text as="b">
                Berhasil {isNewEvent ? 'Menambahkan' : 'Mengubah'} Ceklist
                Menggosok Gigi
              </Text>
            );
            getData();
          })
          .catch((err) => {
            toast.error(<Text as="b">{err?.response?.data?.message}</Text>);
            closeModal();
          });
      } else {
        const payload = {
          date: data.date,
          checklist: JSON.stringify(data.checkList),
          userID: session.user['idUser'],
        };
        httpRequest({
          url: '/brushing-checklist',
          method: 'put',
          data: payload,
          params: {
            id: data.id,
          },
        })
          .then((response) => {
            console.log(response);
            closeModal();
            toast.success(
              <Text as="b">
                Berhasil {isNewEvent ? 'Menambahkan' : 'Mengubah'} Ceklist
                Menggosok Gigi
              </Text>
            );
            getData();
          })
          .catch((err) => {
            console.log(err, 'err');
            closeModal();
            toast.error(<Text as="b">{err?.response?.data?.message}</Text>);
          });
      }
    } catch (error) {
      console.log('error', error);
      closeModal();
      toast.error(<Text as="b">{error?.response?.data?.message}</Text>);
    }
  };

  return (
    <div className="m-auto p-4 md:px-7 md:py-10">
      <div className="mb-6 flex items-center justify-between">
        <Title as="h3" className="text-lg">
          Ceklis Menggosok Gigi
        </Title>
        <ActionIcon
          size="sm"
          variant="text"
          onClick={() => closeModal()}
          className="p-0 text-gray-500 hover:!text-gray-900"
        >
          <PiXBold className="h-[18px] w-[18px]" />
        </ActionIcon>
      </div>

      <Form<FormBrushingChecklist>
        validationSchema={formBrushingChecklist}
        onSubmit={onSubmit}
        useFormProps={{
          defaultValues: {
            checkList: event?.checkList || [],
            date: startDate?.toString() || event?.start?.toString(),
          },
          resolver: zodResolver(formBrushingChecklist),
        }}
        className="grid grid-cols-1 gap-5 @container md:grid-cols-2 [&_label]:font-medium"
      >
        {({ register, control, setValue, watch, formState: { errors } }) => {
          const startDate = watch('date');
          return (
            <>
              <input type="hidden" {...register('id')} value={event?.id} />
              <label className="font-medium">
                {moment(startDate).format('DD MMMM YYYY')}
              </label>
              <br />
              <Controller
                name="checkList"
                control={control}
                render={({ field }) => (
                  <>
                    {['pagi', 'malam'].map((item) => (
                      <Switch
                        key={item}
                        label={item}
                        {...register('checkList')}
                        error={errors?.checkList?.message as string}
                        value={item}
                        onChange={(e) => {
                          const checked = e.target.checked;
                          setValue(
                            'checkList',
                            checked
                              ? [...field.value, e.target.value]
                              : field.value.filter(
                                  (val) => val !== e.target.value
                                )
                          );
                        }}
                      />
                    ))}
                  </>
                )}
              />
              <div className={cn('col-span-full grid grid-cols-2 gap-4 pt-5')}>
                <Button
                  variant="outline"
                  className="w-full @xl:w-auto dark:hover:border-gray-400"
                  onClick={() => closeModal()}
                >
                  Batal
                </Button>
                <Button
                  type="submit"
                  className="hover:gray-700 w-full hover:bg-gray-700 @xl:w-auto dark:bg-gray-200 dark:text-white dark:hover:bg-gray-300 dark:active:enabled:bg-gray-300"
                >
                  {event ? 'Ubah' : 'Tambah'}
                </Button>
              </div>
            </>
          );
        }}
      </Form>
    </div>
  );
}
