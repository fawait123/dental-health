import { z } from 'zod';
import { messages } from '@/config/messages';
import { fileSchema, validateEmail } from '@/utils/validators/common-rules';

// form zod validation schema
export const profileSchema = z.object({
  name: z.string().min(1),
  email: z.string().email().min(1),
  address: z.string().min(1),
  birthdate: z.string().min(1),
  gender: z.string().min(1),
  image: z.string().optional(),
  phone: z.string().min(1),
  placebirth: z.string().min(1),
  username: z.string().min(1),
});

// generate form types from zod validation schema
export type ProfileSchemaInput = z.infer<typeof profileSchema>;

export const defaultValues = {
  first_name: '',
  last_name: undefined,
  email: '',
  avatar: undefined,
  role: undefined,
  country: undefined,
  timezone: undefined,
  bio: undefined,
  portfolios: undefined,
};
