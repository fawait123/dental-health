import { useFormContext } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import FormGroup from '@/app/shared/form-group';
import cn from '@/utils/class-names';
import dynamic from 'next/dynamic';
import SelectLoader from '@/components/loader/select-loader';
import { Checkbox, Radio } from 'rizzui';
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
        type="number"
        label="Debris Index"
        placeholder="Debris Index"
        {...register('debrisindex')}
        error={errors.debrisindex?.message as string}
      />
      <Input
        type="number"
        label="CPITN"
        placeholder="CPITN"
        {...register('CPITN')}
        error={errors.CPITN?.message as string}
      />
      <Input
        type="number"
        label="Jumlah Gigi"
        placeholder="Jumlah Gigi"
        {...register('countTeeth')}
        error={errors.countTeeth?.message as string}
      />
      <Input
        type="number"
        label="Jumlah Gigi Goyang"
        placeholder="Jumlah Gigi Goyang"
        {...register('countTeethLoose')}
        error={errors.countTeethLoose?.message as string}
      />
      <div className="block">
        <label className="mb-2 block font-medium">Kondisi Radang Gusi</label>
        <div className="flex w-full justify-between">
          <Radio
            className="col-span-1"
            label="YA"
            color="primary"
            variant="flat"
            value={'YA'}
            {...register('gingivitisConditions')}
            error={errors.gingivitisConditions?.message as string}
          />
          <Radio
            className="col-span-1"
            label="TIDAK"
            color="primary"
            variant="flat"
            {...register('gingivitisConditions')}
            error={errors.gingivitisConditions?.message as string}
            value={'TIDAK'}
          />
        </div>
      </div>
    </FormGroup>
  );
}
