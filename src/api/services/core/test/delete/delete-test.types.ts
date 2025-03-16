import { z } from "zod";
import { deleteTestSchema } from "./delete-test.schema";

// Request
export type DeleteTestRequest = z.input<typeof deleteTestSchema.request>;

export type DeleteTestRequestTransofrmed = z.infer<
  typeof deleteTestSchema.request
>;

// Response
export type DeleteTestResponse = z.input<typeof deleteTestSchema.response>;

export type DeleteTestResponseTransformed = z.infer<
  typeof deleteTestSchema.response
>;
