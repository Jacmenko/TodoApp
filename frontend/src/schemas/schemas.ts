import { z } from 'zod';

export const newTaskSchema = z.object({
    name: z.string().nonempty(),
    description: z.string().max(500).optional(),
    dueDate: z.date().optional(),
})