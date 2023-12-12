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
import DentalHealthSummary from './summary';
import {
  DentalHealthInput,
  dentalHealtSchema,
  dentalHealtSchemaEdit,
} from '../schema';
import httpRequest from '@/config/httpRequest';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { dentalHealthRecomendation } from '@/data/dental-health-recomendation';
import { Button, Modal } from 'rizzui';
import { TypeJsonFormat } from './table';

const MAP_STEP_TO_COMPONENT = {
  [formParts.summary]: DentalHealthSummary,
};

interface IndexProps {
  slug?: string;
  className?: string;
  product?: DentalHealthInput;
}

function toJson(data): TypeJsonFormat {
  return data.length > 0
    ? {
        id: data[0]['id'],
        username: data[0]['username'],
        email: data[0]['email'],
        name: data[0]['name'],
        placebirth: data[0]['placebirth'],
        birthdate: data[0]['birthdate'],
        gender: data[0]['gender'],
        address: data[0]['address'],
        phone: data[0]['phone'],
        history_sicknes: data[0]['history_sicknes'],
        photo: data[0]['photo'],
        role: data[0]['role'],
        createdAt: data[0]['createdAt'],
        updatedAt: data[0]['updatedAt'],
        isActive: data[0]['isActive'],
      }
    : {
        id: '',
        username: '',
        email: '',
        name: '',
        placebirth: '',
        birthdate: '',
        gender: '',
        address: '',
        phone: '',
        history_sicknes: '',
        photo: '',
        role: '',
        createdAt: '',
        updatedAt: '',
        isActive: '',
      };
}

export default function FormDentalHealth({
  slug,
  product,
  className,
}: IndexProps) {
  const { layout } = useLayout();
  const [isLoading, setLoading] = useState(false);
  const [countTeeth, setCountTeeth] = useState(0);
  const [countTeethLoose, setCountTeethLoose] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const resolver = slug ? dentalHealtSchemaEdit : dentalHealtSchema;

  const methods = useForm<DentalHealthInput>({
    resolver: zodResolver(resolver),
    // defaultValues: defaultValues(product),
  });
  const navigation = useRouter();

  const onSubmit: SubmitHandler<DentalHealthInput> = (data) => {
    try {
      console.log(data, 'data');
      setLoading(true);
      if (!slug) {
        httpRequest({
          url: '/user',
          method: 'post',
          data,
        })
          .then((response) => {
            setLoading(false);
            toast.success(<Text as="b">Data berhasil ditambah</Text>);
            methods.reset();
            navigation.push('/admin/user');
          })
          .catch((e) => {
            toast.error(<Text as="b">{e?.response?.data?.message}</Text>);
            setLoading(false);
          });
      } else {
        httpRequest({
          url: '/user',
          method: 'put',
          data,
          params: {
            id: slug,
          },
        })
          .then((response) => {
            console.log(response);
            setLoading(false);
            toast.success(<Text as="b">Data berhasil diubah</Text>);
            methods.reset();
            navigation.push('/admin/user');
          })
          .catch((e) => {
            toast.error(<Text as="b">{e?.response?.data?.message}</Text>);
            setLoading(false);
          });
      }
    } catch (error) {
      toast.error(<Text as="b">{error?.response?.data?.message}</Text>);
      setLoading(false);
    }
  };

  const getData = () => {
    try {
      httpRequest({
        method: 'get',
        url: '/user',
        params: {
          id: slug,
        },
      })
        .then((response) => {
          const result = toJson(response?.data?.data?.results?.data?.rows);
          console.log(result, 'data');
          methods.setValue('name', result?.name);
          methods.setValue('username', result?.username);
          methods.setValue('email', result?.email);
          methods.setValue('placebirth', result?.placebirth);
          methods.setValue('birthdate', result?.birthdate);
          methods.setValue('gender', result?.gender);
          methods.setValue('address', result?.address);
          methods.setValue('phone', result?.phone);
          methods.setValue('role', result?.role);
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
  }, []);

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
                {
                  <Component
                    slug={slug}
                    className="pt-7 @2xl:pt-9 @3xl:pt-11"
                  />
                }
              </Element>
            ))}
          </div>

          <FormFooter
            isLoading={isLoading}
            submitBtnText={slug ? 'Ubah Pengguna' : 'Tambah Pengguna'}
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
              {dentalHealthRecomendation.length > 0 ? (
                dentalHealthRecomendation(countTeeth, countTeethLoose).map(
                  (item, index) => (
                    <li key={index} className="my-1 text-justify font-medium">
                      {item.list}
                    </li>
                  )
                )
              ) : (
                <Text as="b">Kondisi Gigi Anda Baik</Text>
              )}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-x-5 gap-y-6 [&_label>span]:font-medium">
            <Button
              type="submit"
              size="DEFAULT"
              className="col-span-2 mt-2"
              onClick={() => navigation.push('/dental-health')}
            >
              MENGERTI
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
