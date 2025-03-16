import type {
  ApiError,
  ApiResponse,
  UseMutationProps,
} from "@/api/types/api.types";
import { useMutation } from "@tanstack/react-query";
import { putTest } from "./put-test";
import {} from "./put-test.schema";
import type {
  PutTestRequest,
  PutTestResponseTransformed,
} from "./put-test.types";

export type UsePutTestProps = UseMutationProps<
  ApiResponse<PutTestResponseTransformed>,
  ApiError,
  PutTestRequest
>;

export const putTestMutationKey = () => ["putTest"];

export const usePutTest = (props?: UsePutTestProps) => {
  const mutation = useMutation<
    ApiResponse<PutTestResponseTransformed>,
    ApiError,
    PutTestRequest
  >({
    mutationKey: putTestMutationKey(),
    mutationFn: (data) => putTest(data),
    ...props,
  });

  return mutation;
};
