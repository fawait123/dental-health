import { z } from 'zod';
import Cookies from 'js-cookie';

const role = Cookies.get('role') ?? '';

// form zod validation schema
export const controlDiabetesSchema = z.object({
  bloodSugarPressure: z.string().min(1),
  bloodPressure: z.string().min(1),
  controlDrugConsumption: z.string().array(),
  physicalActivity: z.string().min(1),
  userID: role == 'doctor' ? z.string().min(1) : z.string().optional(),
});

// generate form types from zod validation schema
export type ControlDiabetesSchema = z.infer<typeof controlDiabetesSchema>;
