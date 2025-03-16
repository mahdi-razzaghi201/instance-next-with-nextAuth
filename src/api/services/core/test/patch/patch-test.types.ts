import { z } from "zod";
import { patchTestSchema } from "./patch-test.schema";

// Request
export type PatchTestRequest = z.input<typeof patchTestSchema.request>;

export type PatchTestRequestTransofrmed = z.infer<
  typeof patchTestSchema.request
>;

// Response
export type PatchTestResponse = z.input<typeof patchTestSchema.response>;

export type PatchTestResponseTransformed = z.infer<
  typeof patchTestSchema.response
>;
