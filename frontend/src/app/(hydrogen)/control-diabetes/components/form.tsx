'use client';

import { useState } from 'react';
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

const MAP_STEP_TO_COMPONENT = {
  [formParts.summary]: ProductSummary,
};

interface IndexProps {
  slug?: string;
  className?: string;
  product?: CreateProductInput;
}

export default function FormControlDiabetes({
  slug,
  product,
  className,
}: IndexProps) {
  const { layout } = useLayout();
  const [isLoading, setLoading] = useState(false);
  const methods = useForm<CreateProductInput>({
    resolver: zodResolver(productFormSchema),
    defaultValues: defaultValues(product),
  });

  const onSubmit: SubmitHandler<CreateProductInput> = (data) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      console.log('product_data', data);
      toast.success(
        <Text as="b">Product successfully {slug ? 'updated' : 'created'}</Text>
      );
      methods.reset();
    }, 600);
  };

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
    </div>
  );
}
