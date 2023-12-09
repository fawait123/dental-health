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
        bloodPressure: data[0]['bloodPressure'],
        bloodSugarPressure: data[0]['bloodSugarPressure'],
        controlDrugConsumption: JSON.parse(
          data[0]['controlDrugConsumption']
        ) as [],
        physicalActivity: data[0]['physicalActivity'] == true ? 'YES' : 'NO',
      }
    : {
        bloodPressure: '',
        bloodSugarPressure: '',
        controlDrugConsumption: [],
        physicalActivity: '',
      };
}

function defaultValue(data): ControlDiabetesSchema {
  return {
    bloodPressure: data?.bloodSugarPressure,
    bloodSugarPressure: data?.bloodSugarPressure,
    controlDrugConsumption: data?.controlDrugConsumption as [],
    physicalActivity: data?.physicalActivity == true ? 'YES' : 'NO',
  };
}

export default function FormControlDiabetesDoctor({
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
          userID: session.user['idUser'],
          controlDrugConsumption: JSON.stringify(data.controlDrugConsumption),
          bloodPressure: parseInt(data.bloodPressure),
          bloodSugarPressure: parseInt(data.bloodSugarPressure),
          physicalActivity: data.physicalActivity == 'YES' ? true : false,
        };
        httpRequest({
          method: 'post',
          url: '/control-diabetes',
          data: payload,
        })
          .then((response) => {
            setLoading(false);
            console.log('product_data', data);
            toast.success(
              <Text as="b">
                Product successfully {slug ? 'updated' : 'created'}
              </Text>
            );
            methods.reset();
            console.log('response', response);
            setCount(payload.bloodSugarPressure);
            setShowModal(true);
          })
          .catch((err) => {
            console.log(err);
            setLoading(false);
          });
      } else {
        const payload = {
          ...data,
          userID: session.user['idUser'],
          controlDrugConsumption: JSON.stringify(data.controlDrugConsumption),
          bloodPressure: parseInt(data.bloodPressure),
          bloodSugarPressure: parseInt(data.bloodSugarPressure),
          physicalActivity: data.physicalActivity == 'YES' ? true : false,
        };
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
            toast.success(
              <Text as="b">
                Product successfully {slug ? 'updated' : 'created'}
              </Text>
            );
            methods.reset();
            console.log('response', response);
            setCount(payload.bloodSugarPressure);
            setShowModal(true);
          })
          .catch((err) => {
            console.log(err);
            setLoading(false);
          });
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
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
          console.log(result);
          methods.setValue('bloodPressure', result.bloodPressure.toString());
          methods.setValue(
            'bloodSugarPressure',
            result.bloodSugarPressure.toString()
          );
          methods.setValue(
            'controlDrugConsumption',
            result.controlDrugConsumption
          );
          methods.setValue('physicalActivity', result.physicalActivity);
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
              slug ? 'Update Control Diabetes' : 'Create Control Diabetes'
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
