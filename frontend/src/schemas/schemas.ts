import { z } from 'zod';

export const newTaskSchema = z.object({
    name: z.string().max(50),
    description: z.string().max(500).optional(),
    dueDate: z.string().optional(),
})