import { z } from 'zod';
import { messages } from '@/config/messages';
import {
  validateEmail,
  validatePassword,
  validateConfirmPassword,
} from '@/utils/validators/common-rules';

// form zod validation schema
export const signUpSchema = z.object({
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
  // isAgreed: z.boolean(),
});

// generate form types from zod validation schema
export type SignUpSchema = z.infer<typeof signUpSchema>;
