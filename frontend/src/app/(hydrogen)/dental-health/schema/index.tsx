import { z } from 'zod';

export const dentalHealtSchema = z.object({
  debrisindex: z.string().min(1),
  CPITN: z.string().min(1),
  countTeeth: z.string().min(1),
  countTeethLoose: z.string().min(1),
  gingivitisConditions: z.string().min(1),
});

export type DentalHealthInput = z.infer<typeof dentalHealtSchema>;
