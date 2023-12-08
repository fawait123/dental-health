import { z } from 'zod';
import {
  validateEmail,
  validatePassword,
  validateConfirmPassword,
} from '@/utils/validators/common-rules';

export const dentalHealtSchema = z.object({
  name: z.string().min(1),
  email: validateEmail,
  username: z.string().min(4),
  address: z.string().min(4),
  placebirth: z.string().min(4),
  birthdate: z.string().min(4),
  phone: z.string().min(4),
  gender: z.string().min(1),
  password: validatePassword,
  confirmPassword: validateConfirmPassword,
  role: z.string().min(1),
  photo: z.any(),
});

export type DentalHealthInput = z.infer<typeof dentalHealtSchema>;

export const dentalHealtSchemaEdit = z.object({
  name: z.string().min(1),
  email: validateEmail,
  username: z.string().min(4),
  address: z.string().min(4),
  placebirth: z.string().min(4),
  birthdate: z.string().min(4),
  phone: z.string().min(4),
  gender: z.string().min(1),
  password: z.string().optional(),
  confirmPassword: z.string().optional(),
  role: z.string().min(1),
  photo: z.any(),
});

export type DentalHealthInputEdit = z.infer<typeof dentalHealtSchemaEdit>;
