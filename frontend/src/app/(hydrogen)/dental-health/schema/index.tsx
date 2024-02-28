import { z } from 'zod';
import Cookies from 'js-cookie';

export const dentalHealtSchema = z.object({
  debrisindex: z
    .string()
    .min(1)
    .regex(/^(0|[1-9]\d*)(\.\d+)?$/, { message: 'Invalid input debris index' }),
  CPITN: z.string().min(1),
  countTeeth: z.string().min(1),
  countTeethLoose: z.string().min(1),
  numberofcavities: z.string().min(1),
  gingivitisConditions: z.string().min(1),
  userID:
    Cookies.get('role') == 'doctor' ? z.string().min(1) : z.string().optional(),
    date:z.string().min(1)
});

export type DentalHealthInput = z.infer<typeof dentalHealtSchema>;
