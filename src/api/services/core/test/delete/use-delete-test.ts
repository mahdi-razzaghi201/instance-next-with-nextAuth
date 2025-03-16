import type {
  ApiError,
  ApiResponse,
  UseMutationProps,
} from "@/api/types/api.types";
import { useMutation } from "@tanstack/react-query";
import { deleteTest } from "./delete-test";
import {} from "./delete-test.schema";
import type {
  DeleteTestRequest,
  DeleteTestResponseTransformed,
} from "./delete-test.types";

export type UseDeleteTestProps = UseMutationProps<
  ApiResponse<DeleteTestResponseTransformed>,
  ApiError,
  DeleteTestRequest
>;

export const deleteTestMutationKey = () => ["deleteTest"];

export const useDeleteTest = (props?: UseDeleteTestProps) => {
  const mutation = useMutation<
    ApiResponse<DeleteTestResponseTransformed>,
    ApiError,
    DeleteTestRequest
  >({
    mutationKey: deleteTestMutationKey(),
    mutationFn: (data) => deleteTest(data),
    ...props,
  });

  return mutation;
};
