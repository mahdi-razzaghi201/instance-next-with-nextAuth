import path from "path";
import { toast } from 'sonner';
import t from '@/json/fa.json';
import { coreApi } from "@/api/instance/core-api"; 
import type { ApiResponse } from "@/api/types/api.types";
import { requestHandler } from "@/api/utils/request-handler";
import { putTestSchema as schema } from "./put-test.schema";
import type {
  PutTestRequest,
  PutTestResponseTransformed,
} from "./put-test.types";

export const putTestURL = (id: PutTestRequest['id']) => 
  path.join("/Test", `${id}`);

export const putTest = async (
  props?: PutTestRequest,
): Promise<ApiResponse<PutTestResponseTransformed>> => {
  const payloadParsed = schema.request.parse(props);

  const URL = putTestURL(payloadParsed.id);

  const response = await requestHandler(
    () => coreApi.put(URL, payloadParsed),
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
