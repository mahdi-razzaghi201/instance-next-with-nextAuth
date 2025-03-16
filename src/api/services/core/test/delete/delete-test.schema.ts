import { z } from 'zod';
import { coreApiMutationResponseSchema } from '@/api/instance/core-api';
import t from '@/json/fa.json';

// Request
export const deleteTestRequestSchemaTransformed = z
  .object({
    id: z.number().int(),
    title: z
      .string({ message: t.form.validation.required })
      .nonempty({ message: t.form.validation.required }),
    isActive: z.boolean(),
  })
  .transform((data) => data);

// Response
export const deleteTestResponseSchemaTransofrmed = 
  coreApiMutationResponseSchema().transform((data) => data);

export const deleteTestSchema = {
  request: deleteTestRequestSchemaTransformed,
  response: deleteTestResponseSchemaTransofrmed,
};