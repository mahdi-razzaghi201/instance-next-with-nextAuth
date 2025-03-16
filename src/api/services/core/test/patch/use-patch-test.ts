import type {
  ApiError,
  ApiResponse,
  UseMutationProps,
} from "@/api/types/api.types";
import { useMutation } from "@tanstack/react-query";
import { patchTest } from "./patch-test";
import {} from "./patch-test.schema";
import type {
  PatchTestRequest,
  PatchTestResponseTransformed,
} from "./patch-test.types";

export type UsePatchTestProps = UseMutationProps<
  ApiResponse<PatchTestResponseTransformed>,
  ApiError,
  PatchTestRequest
>;

export const patchTestMutationKey = () => ["patchTest"];

export const usePatchTest = (props?: UsePatchTestProps) => {
  const mutation = useMutation<
    ApiResponse<PatchTestResponseTransformed>,
    ApiError,
    PatchTestRequest
  >({
    mutationKey: patchTestMutationKey(),
    mutationFn: (data) => patchTest(data),
    ...props,
  });

  return mutation;
};
