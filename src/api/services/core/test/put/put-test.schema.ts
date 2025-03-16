import { z } from 'zod';
import { coreApiMutationResponseSchema } from '@/api/instance/core-api';
import t from '@/json/fa.json';

// Request
export const putTestRequestSchemaTransformed = z
  .object({
    id: z.number().int(),
    title: z
      .string({ message: t.form.validation.required })
      .nonempty({ message: t.form.validation.required }),
    isActive: z.boolean(),
  })
  .transform((data) => data);

// Response
export const putTestResponseSchemaTransofrmed = 
  coreApiMutationResponseSchema().transform((data) => data);

export const putTestSchema = {
  request: putTestRequestSchemaTransformed,
  response: putTestResponseSchemaTransofrmed,
};