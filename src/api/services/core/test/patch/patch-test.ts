import path from "path";
import { toast } from 'sonner';
import t from '@/json/fa.json';
import { coreApi } from "@/api/instance/core-api"; 
import type { ApiResponse } from "@/api/types/api.types";
import { requestHandler } from "@/api/utils/request-handler";
import { patchTestSchema as schema } from "./patch-test.schema";
import type {
  PatchTestRequest,
  PatchTestResponseTransformed,
} from "./patch-test.types";

export const patchTestURL = (id: PatchTestRequest['id']) => 
  path.join("/Test", `${id}`);

export const patchTest = async (
  props?: PatchTestRequest,
): Promise<ApiResponse<PatchTestResponseTransformed>> => {
  const payloadParsed = schema.request.parse(props);

  const URL = patchTestURL(payloadParsed.id);

  const response = await requestHandler(
    () => coreApi.patch(URL, payloadParsed),
    schema.response._def.schema,
    {
      isMock: false,
    },
  );

  try {
    response.data = schema.response.parse(response.data);
  } catch {
    toast.error(t.toast.error.parseResponse);
  }

  return response;
};
