import { z } from "zod";
import { getTestSchema } from "./get-test.schema";

// Request
export type GetTestRequest = z.input<typeof getTestSchema.request>;

export type GetTestRequestTransofrmed = z.infer<
  typeof getTestSchema.request
>;

// Response
export type GetTestResponse = z.input<typeof getTestSchema.response>;

export type GetTestResponseTransformed = z.infer<
  typeof getTestSchema.response
>;
