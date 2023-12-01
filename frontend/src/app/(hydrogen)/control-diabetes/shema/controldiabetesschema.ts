import { z } from 'zod';

// form zod validation schema
export const controlDiabetesSchema = z.object({
  bloodSugarPressure: z.string().min(1),
  bloodPressure: z.string().min(1),
  controlDrugConsumption: z.string().array(),
  physicalActivity: z.string().min(1),
});

// generate form types from zod validation schema
export type ControlDiabetesSchema = z.infer<typeof controlDiabetesSchema>;
