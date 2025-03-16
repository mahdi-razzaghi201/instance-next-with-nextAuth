import type {
  ApiError,
  ApiResponse,
  UseMutationProps,
} from "@/api/types/api.types";
import { useMutation } from "@tanstack/react-query";
import { postTest } from "./post-test";
import {} from "./post-test.schema";
import type {
  PostTestRequest,
  PostTestResponseTransformed,
} from "./post-test.types";

export type UsePostTestProps = UseMutationProps<
  ApiResponse<PostTestResponseTransformed>,
  ApiError,
  PostTestRequest
>;

export const postTestMutationKey = () => ["postTest"];

export const usePostTest = (props?: UsePostTestProps) => {
  const mutation = useMutation<
    ApiResponse<PostTestResponseTransformed>,
    ApiError,
    PostTestRequest
  >({
    mutationKey: postTestMutationKey(),
    mutationFn: (data) => postTest(data),
    ...props,
  });

  return mutation;
};
