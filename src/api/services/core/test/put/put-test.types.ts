import { z } from "zod";
import { putTestSchema } from "./put-test.schema";

// Request
export type PutTestRequest = z.input<typeof putTestSchema.request>;

export type PutTestRequestTransofrmed = z.infer<
  typeof putTestSchema.request
>;

// Response
export type PutTestResponse = z.input<typeof putTestSchema.response>;

export type PutTestResponseTransformed = z.infer<
  typeof putTestSchema.response
>;
