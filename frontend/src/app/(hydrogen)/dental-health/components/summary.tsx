import { useFormContext } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import FormGroup from '@/app/shared/form-group';
import cn from '@/utils/class-names';
import dynamic from 'next/dynamic';
import SelectLoader from '@/components/loader/select-loader';
import { Checkbox } from 'rizzui';
const Select = dynamic(() => import('@/components/ui/select'), {
  ssr: false,
  loading: () => <SelectLoader />,
});

export default function DentalHealthSummary({
  className,
}: {
  className?: string;
}) {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <FormGroup
      title="Summary"
      description="Create your control diabetes melitus here"
      className={cn(className)}
    >
      <Input
        label="Debris Index"
        placeholder="Product title"
        {...register('title')}
        error={errors.title?.message as string}
      />
      <Input
        label="CPITN"
        placeholder="Product sku"
        {...register('sku')}
        error={errors.sku?.message as string}
      />
      <Input
        label="Jumlah Gigi"
        placeholder="Product title"
        {...register('title')}
        error={errors.title?.message as string}
      />
      <div className="block">
        <label className="mb-2 block font-medium">Kondisi Radang Gusi</label>
        <div className="flex w-full justify-between">
          <Checkbox
            className="col-span-1"
            label="YA"
            color="primary"
            variant="flat"
          />
          <Checkbox
            className="col-span-1"
            label="TIDAK"
            color="primary"
            variant="flat"
          />
        </div>
      </div>
    </FormGroup>
  );
}
