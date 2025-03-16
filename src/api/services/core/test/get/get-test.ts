import path from "path";
import { toast } from 'sonner';
import t from '@/json/fa.json';
import { coreApi } from "@/api/instance/core-api"; 
import type { ApiResponse } from "@/api/types/api.types";
import { requestHandler } from "@/api/utils/request-handler";
import { getTestSchema as schema } from "./get-test.schema";
import type {
  GetTestRequest,
  GetTestResponse,
  GetTestResponseTransformed,
} from "./get-test.types";

const getTestURL = () => path.join("/Test");

export const getTest = async (
  props?: GetTestRequest,
): Promise<ApiResponse<GetTestResponseTransformed>> => {
  const payloadParsed = schema.request.parse(props);
  const URL = getTestURL();

  const response = await requestHandler(
    () => coreApi.get<GetTestResponse>(URL, { params: payloadParsed }),
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
