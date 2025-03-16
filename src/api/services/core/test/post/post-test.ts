import path from "path";
import { toast } from 'sonner';
import t from '@/json/fa.json';
import { coreApi } from "@/api/instance/core-api"; 
import type { ApiResponse } from "@/api/types/api.types";
import { requestHandler } from "@/api/utils/request-handler";
import { postTestSchema as schema } from "./post-test.schema";
import type {
  PostTestRequest,
  PostTestResponseTransformed,
} from "./post-test.types";

export const postTestURL = (id: PostTestRequest['id']) => 
  path.join("/Test", `${id}`);

export const postTest = async (
  props?: PostTestRequest,
): Promise<ApiResponse<PostTestResponseTransformed>> => {
  const payloadParsed = schema.request.parse(props);

  const URL = postTestURL(payloadParsed.id);

  const response = await requestHandler(
    () => coreApi.post(URL, payloadParsed),
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
