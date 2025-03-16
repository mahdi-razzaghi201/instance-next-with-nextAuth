import { z } from 'zod';
import {
  coreApiPaginatedRequestSchema,
  coreApiPaginatedResponseSchema,
} from '@/api/instance/core-api';

// Request
export const getTestRequestSchemaTransformed =
  coreApiPaginatedRequestSchema();

// Response
export const getTestResponseSchemaTransofrmed = 
  coreApiPaginatedResponseSchema(
    z
      .object({
        id: z.number().int(),
        title: z.string(),
        isActive: z.boolean(),
      })
      .passthrough()
      .transform((data) => data),
  );

export const getTestSchema = {
  request: getTestRequestSchemaTransformed,
  response: getTestResponseSchemaTransofrmed,
};