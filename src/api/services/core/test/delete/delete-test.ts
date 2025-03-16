import path from "path";
import { toast } from 'sonner';
import t from '@/json/fa.json';
import { coreApi } from "@/api/instance/core-api"; 
import type { ApiResponse } from "@/api/types/api.types";
import { requestHandler } from "@/api/utils/request-handler";
import { deleteTestSchema as schema } from "./delete-test.schema";
import type {
  DeleteTestRequest,
  DeleteTestResponseTransformed,
} from "./delete-test.types";

export const deleteTestURL = (id: DeleteTestRequest['id']) => 
  path.join("/Test", `${id}`);

export const deleteTest = async (
  props?: DeleteTestRequest,
): Promise<ApiResponse<DeleteTestResponseTransformed>> => {
  const payloadParsed = schema.request.parse(props);

  const URL = deleteTestURL(payloadParsed.id);

  const response = await requestHandler(
    () => coreApi.delete(URL, payloadParsed),
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
