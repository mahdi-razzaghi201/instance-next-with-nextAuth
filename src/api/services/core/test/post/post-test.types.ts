import { z } from "zod";
import { postTestSchema } from "./post-test.schema";

// Request
export type PostTestRequest = z.input<typeof postTestSchema.request>;

export type PostTestRequestTransofrmed = z.infer<
  typeof postTestSchema.request
>;

// Response
export type PostTestResponse = z.input<typeof postTestSchema.response>;

export type PostTestResponseTransformed = z.infer<
  typeof postTestSchema.response
>;
