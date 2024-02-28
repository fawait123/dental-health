'use client';

import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Element } from 'react-scroll';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';
import cn from '@/utils/class-names';
import { Text } from '@/components/ui/text';
import FormNav, {
  formParts,
} from '@/app/shared/ecommerce/product/create-edit/form-nav';
import FormFooter from '@/components/form-footer';
import { useLayout } from '@/hooks/use-layout';
import { LAYOUT_OPTIONS } from '@/config/enums';
import ControlDiabetesSummary from './summary';
import {
  ControlDiabetesSchema,
  controlDiabetesSchema,
} from '../shema/controldiabetesschema';
import httpRequest from '@/config/httpRequest';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Button, Modal } from 'rizzui';
import { controlDiabetesRecomendation } from '@/data/control-diabetes-recomendation';
import moment from 'moment';

const MAP_STEP_TO_COMPONENT = {
  [formParts.summary]: ControlDiabetesSummary,
};

interface IndexProps {
  slug?: string;
  className?: string;
  data?: ControlDiabetesSchema;
}

function toJson(data): ControlDiabetesSchema {
  return data.length > 0
    ? {
        systole: data[0]['systole'],
        diastole: data[0]['diastole'],
        bloodSugarPressure: data[0]['bloodSugarPressure'],
        controlDrugConsumption: JSON.parse(
          data[0]['controlDrugConsumption']
        ) as [],
        physicalActivity: data[0]['physicalActivity'],
        userID: data[0]['userID'],
        date: data[0]['createdAt'],
        types_of_checks: data[0]['types_of_checks'],
        checkhba1c:data[0]['checkhba1c']
      }
    : {
        systole: '',
        diastole: '',
        bloodSugarPressure: '',
        controlDrugConsumption: [],
        physicalActivity: '',
        userID: '',
        date:'',
        types_of_checks:'',
        checkhba1c:''
      };
}

export default function FormControlDiabetes({
  slug,
  data,
  className,
}: IndexProps) {
  const { layout } = useLayout();
  const [isLoading, setLoading] = useState(false);
  const methods = useForm<ControlDiabetesSchema>({
    resolver: zodResolver(controlDiabetesSchema),
  });
  const { data: session } = useSession();
  const [count, setCount] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const navigation = useRouter();

  const onSubmit: SubmitHandler<ControlDiabetesSchema> = (data) => {
    try {
      setLoading(true);
      if (!slug) {
        const payload = {
          ...data,
          userID: data?.userID || session.user['idUser'],
          controlDrugConsumption: JSON.stringify(data.controlDrugConsumption),
          systole: parseInt(data.systole),
          diastole: parseInt(data.diastole),
          bloodSugarPressure: parseInt(data.bloodSugarPressure),
          physicalActivity: data.physicalActivity,
          createdAt: data?.date
        }; 
        delete payload.date
        httpRequest({
          method: 'post',
          url: '/control-diabetes',
          data: payload,
        })
          .then((response) => {
            setLoading(false);
            toast.success(<Text as="b">Data berhasil ditambah</Text>);
            methods.reset();
            setCount(payload.bloodSugarPressure);
            setShowModal(true);
          })
          .catch((err) => {
            toast.error(<Text as="b">{err?.response?.data?.message}</Text>);
            setLoading(false);
          });
      } else {
        const payload = {
          ...data,
          userID: data?.userID || session.user['idUser'],
          controlDrugConsumption: JSON.stringify(data.controlDrugConsumption),
          systole: parseInt(data.systole),
          diastole: parseInt(data.diastole),
          bloodSugarPressure: parseInt(data.bloodSugarPressure),
          physicalActivity: data.physicalActivity,
          createdAt: data?.date
        };
        delete payload.date
        httpRequest({
          method: 'put',
          url: '/control-diabetes',
          params: {
            id: slug,
          },
          data: payload,
        })
          .then((response) => {
            setLoading(false);
            console.log('product_data', data);
            toast.success(<Text as="b">Data berhasil diubah</Text>);
            methods.reset();
            console.log('response', response);
            setCount(payload.bloodSugarPressure);
            setShowModal(true);
          })
          .catch((err) => {
            toast.error(<Text as="b">{err?.response?.data?.message}</Text>);
            setLoading(false);
          });
      }
    } catch (error) {
      setLoading(false);
      toast.error(<Text as="b">{error?.response?.data?.message}</Text>);
    }
  };

  const getData = () => {
    try {
      httpRequest({
        method: 'get',
        url: '/control-diabetes',
        params: {
          id: slug,
        },
      })
        .then((response) => {
          const result = toJson(response?.data?.data?.results?.data?.rows);
          console.log(result,'res');
          methods.setValue(
            'bloodSugarPressure',
            result.bloodSugarPressure.toString()
          );
          methods.setValue('systole', result?.systole?.toString());
          methods.setValue('diastole', result?.diastole?.toString());
          methods.setValue(
            'controlDrugConsumption',
            result.controlDrugConsumption
          );
          methods.setValue('physicalActivity', result?.physicalActivity);
          methods.setValue('userID', result?.userID);
          methods.setValue('date', moment(result?.date).format("YYYY-MM-DD"));
          methods.setValue('checkhba1c', result?.checkhba1c);
          methods.setValue('types_of_checks', result?.types_of_checks);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (slug) {
      getData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);
  return (
    <div className="@container">
      <FormNav
        className={cn(layout === LAYOUT_OPTIONS.BERYLLIUM && '2xl:top-[72px]')}
      />
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className={cn('[&_label.block>span]:font-medium', className)}
        >
          <div className="mb-10 grid gap-7 divide-y divide-dashed divide-gray-200 @2xl:gap-9 @3xl:gap-11">
            {Object.entries(MAP_STEP_TO_COMPONENT).map(([key, Component]) => (
              <Element
                key={key}
                name={formParts[key as keyof typeof formParts]}
              >
                {<Component slug={slug} className="pt-7 @2xl:pt-9 @3xl:pt-11" />}
              </Element>
            ))}
          </div>

          <FormFooter
            altBtnText="Kembali"
            handleAltBtn={() => navigation.back()}
            isLoading={isLoading}
            submitBtnText={
              slug ? 'Ubah Kontrol Diabetes' : 'Tambah Kontrol Diabetes'
            }
          />
        </form>
      </FormProvider>
      <Modal isOpen={showModal} onClose={() => null}>
        <div className="m-auto px-7 pb-8 pt-6">
          <div className="mb-7 flex items-center justify-between">
            <Text as="strong" className="text-lg">
              Rekomendasi
            </Text>
          </div>
          <div className="mb-7">
            <ul>
              {controlDiabetesRecomendation(count).map((item, index) => (
                <li key={index} className="my-1 text-justify font-medium">
                  {item.list}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-x-5 gap-y-6 [&_label>span]:font-medium">
            <Button
              type="submit"
              size="DEFAULT"
              className="col-span-2 mt-2"
              onClick={() => navigation.push('/control-diabetes')}
            >
              MENGERTI
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
