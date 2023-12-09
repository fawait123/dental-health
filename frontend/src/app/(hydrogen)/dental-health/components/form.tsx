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
import ProductSummary from '@/app/shared/ecommerce/product/create-edit/product-summary';
import { defaultValues } from '@/app/shared/ecommerce/product/create-edit/form-utils';
import FormFooter from '@/components/form-footer';
import {
  CreateProductInput,
  productFormSchema,
} from '@/utils/validators/create-product.schema';
import { useLayout } from '@/hooks/use-layout';
import { LAYOUT_OPTIONS } from '@/config/enums';
import DentalHealthSummary from './summary';
import { DentalHealthInput, dentalHealtSchema } from '../schema';
import httpRequest from '@/config/httpRequest';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { dentalHealthRecomendation } from '@/data/dental-health-recomendation';
import { Button, Modal } from 'rizzui';

const MAP_STEP_TO_COMPONENT = {
  [formParts.summary]: DentalHealthSummary,
};
type TypeJsonFormat = {
  debrisindex: number;
  CPITN: number;
  countTeeth: number;
  countTeethLoose: number;
  gingivitisConditions: boolean;
  userID: string;
};
function toJson(data): TypeJsonFormat {
  return data.length > 0
    ? {
        debrisindex: data[0]['debrisIndex'],
        CPITN: data[0]['CPITN'],
        countTeeth: data[0]['countTeeth'],
        countTeethLoose: data[0]['countTeethLoose'],
        gingivitisConditions: data[0]['gingivitisConditions'],
        userID: data[0]['userID'],
      }
    : {
        debrisindex: '',
        CPITN: '',
        countTeeth: '',
        countTeethLoose: '',
        gingivitisConditions: '',
        userID: '',
      };
}

interface IndexProps {
  slug?: string;
  className?: string;
  product?: DentalHealthInput;
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
  const { data: session } = useSession();
  const methods = useForm<DentalHealthInput>({
    resolver: zodResolver(dentalHealtSchema),
    // defaultValues: defaultValues(product),
  });
  const navigation = useRouter();

  const onSubmit: SubmitHandler<DentalHealthInput> = (data) => {
    try {
      setLoading(true);
      if (!slug) {
        const payload = {
          ...data,
          CPITN: parseInt(data.CPITN),
          countTeeth: parseInt(data?.countTeeth),
          countTeethLoose: parseInt(data?.countTeethLoose),
          debrisIndex: parseInt(data?.debrisindex),
          gingivitisConditions:
            data?.gingivitisConditions == 'YA' ? true : false,
          userID: data?.userID || session.user['idUser'],
        };

        httpRequest({
          url: '/dental-health',
          method: 'post',
          data: payload,
        })
          .then((response) => {
            console.log(response);
            setLoading(false);
            console.log('product_data', data);
            toast.success(<Text as="b">Data berhasil ditambah</Text>);
            methods.reset();
            setCountTeeth(parseInt(data.countTeeth));
            setCountTeethLoose(parseInt(data.countTeethLoose));
            setShowModal(true);
          })
          .catch((err) => {
            console.log(err);
            setLoading(false);
          });
      } else {
        const payload = {
          ...data,
          CPITN: parseInt(data.CPITN),
          countTeeth: parseInt(data?.countTeeth),
          countTeethLoose: parseInt(data?.countTeethLoose),
          debrisIndex: parseInt(data?.debrisindex),
          gingivitisConditions:
            data?.gingivitisConditions == 'YA' ? true : false,
          userID: data?.userID || session.user['idUser'],
        };

        httpRequest({
          url: '/dental-health',
          method: 'put',
          data: payload,
          params: {
            id: slug,
          },
        })
          .then((response) => {
            console.log(response);
            setLoading(false);
            console.log('product_data', data);
            toast.success(<Text as="b">Data berhasil ditambah</Text>);
            methods.reset();
            setCountTeeth(parseInt(data.countTeeth));
            setCountTeethLoose(parseInt(data.countTeethLoose));
            setShowModal(true);
          })
          .catch((err) => {
            console.log(err);
            setLoading(false);
          });
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const getData = () => {
    try {
      httpRequest({
        method: 'get',
        url: '/dental-health',
        params: {
          id: slug,
        },
      })
        .then((response) => {
          const result = toJson(response?.data?.data?.results?.data?.rows);
          console.log(result, 'result');
          methods.setValue('CPITN', result?.CPITN?.toString());
          methods.setValue('countTeeth', result?.countTeeth?.toString());
          methods.setValue(
            'countTeethLoose',
            result?.countTeethLoose?.toString()
          );
          methods.setValue('debrisindex', result?.debrisindex?.toString());
          methods.setValue(
            'gingivitisConditions',
            result?.gingivitisConditions == true ? 'YA' : 'TIDAK'
          );
          methods.setValue('userID', result?.userID);
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
                {<Component className="pt-7 @2xl:pt-9 @3xl:pt-11" />}
              </Element>
            ))}
          </div>

          <FormFooter
            isLoading={isLoading}
            submitBtnText={
              slug ? 'Update Kesehatan Gigi' : 'Create Kesehatan Gigi'
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
