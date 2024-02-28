import { z } from 'zod';
import Cookies from 'js-cookie';

const role = Cookies.get('role') ?? '';

// form zod validation schema
export const controlDiabetesSchema = z.object({
  bloodSugarPressure: z.string().min(1),
  systole: z.string().min(1),
  diastole: z.string().min(1),
  controlDrugConsumption: z.array(z.string()).min(1),
  physicalActivity: z.string().min(1),
  userID: role == 'doctor' ? z.string().min(1) : z.string().optional(),
  date:z.string().min(1),
  checkhba1c:z.string().nullable(),
  types_of_checks:z.string().min(1)
});

// generate form types from zod validation schema
export type ControlDiabetesSchema = z.infer<typeof controlDiabetesSchema>;
