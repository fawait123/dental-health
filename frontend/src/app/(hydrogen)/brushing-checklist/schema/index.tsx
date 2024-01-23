import { z } from 'zod';

export type TypeBrushingListSchema = {};

export const formBrushingChecklist = z.object({
  checkList: z.array(z.string()).refine((data) => data.length > 0, {
    message: 'Checklist must contain at least one item.',
  }),
  id: z.string().optional(),
  date: z.string(),
});

// generate form types from zod validation schema
export type FormBrushingChecklist = z.infer<typeof formBrushingChecklist>;

export interface CalendarEventBrushingChecklist {
  id?: string;
  start: Date;
  end: Date;
  allDay?: boolean;
  title: string;
  description?: string;
  location?: string;
  checkList?: string[];
}
