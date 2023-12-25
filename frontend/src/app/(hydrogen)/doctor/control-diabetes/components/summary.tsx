import { useFormContext } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import FormGroup from '@/app/shared/form-group';
import cn from '@/utils/class-names';
import { Checkbox, Radio, Switch } from 'rizzui';

export default function ControlDiabetesSummary({
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
      title="Form"
      description="Tambahkan data anda disini"
      className={cn(className)}
    >
      <Input
        type="number"
        label="Kadar Gula Darah"
        placeholder="Kadar Gula Darah"
        {...register('bloodSugarPressure')}
        error={errors.bloodSugarPressure?.message as string}
      />
      <Input
        type="number"
        label="Tekanan Darah"
        placeholder="Tekanan Darah"
        {...register('bloodPressure')}
        error={errors.bloodPressure?.message as string}
      />
      <div className="block">
        <label className="mb-2 block font-medium">Kontrol Konsumsi Obat</label>
        <div className="flex w-full justify-between">
          <Checkbox
            className="col-span-1"
            label="Pagi"
            color="primary"
            value={'morning'}
            variant="flat"
            {...register('controlDrugConsumption')}
            error={errors.controlDrugConsumption?.message as string}
          />
          <Checkbox
            className="col-span-1"
            label="Siang"
            color="primary"
            value={'afternoon'}
            variant="flat"
            {...register('controlDrugConsumption')}
            error={errors.controlDrugConsumption?.message as string}
          />
          <Checkbox
            className="col-span-1"
            label="Malam"
            value={'night'}
            color="primary"
            variant="flat"
            {...register('controlDrugConsumption')}
            error={errors.controlDrugConsumption?.message as string}
          />
        </div>
      </div>
      <br />
      <div className="w-full">
        <label className="mb-2 block font-medium">
          Aktifitas Fisik Dalam Sehari
        </label>
        <div className="flex w-full justify-between">
          <Radio
            className="col-span-1"
            label="YA"
            value={'YES'}
            color="primary"
            variant="flat"
            {...register('physicalActivity')}
            error={errors.physicalActivity?.message as string}
          />

          <Radio
            className="col-span-1"
            label="TIDAK"
            value={'NO'}
            color="primary"
            variant="flat"
            {...register('physicalActivity')}
            error={errors.physicalActivity?.message as string}
          />
        </div>
      </div>
    </FormGroup>
  );
}
