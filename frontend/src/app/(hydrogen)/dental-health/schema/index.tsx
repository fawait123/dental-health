import { z } from 'zod';
import Cookies from 'js-cookie';

export const dentalHealtSchema = z.object({
  debrisindex: z.string().min(1),
  CPITN: z.string().min(1),
  countTeeth: z.string().min(1),
  countTeethLoose: z.string().min(1),
  gingivitisConditions: z.string().min(1),
  userID:
    Cookies.get('role') == 'doctor' ? z.string().min(1) : z.string().optional(),
});

export type DentalHealthInput = z.infer<typeof dentalHealtSchema>;
