import type {
  ApiError,
  ApiResponse,
  UseQueryProps,
  WithParams,
} from "@/api/types/api.types";
import { useQuery } from "@tanstack/react-query";
import { getTest } from "./get-test";
import type {
  GetTestRequest,
  GetTestResponseTransformed,
} from "./get-test.types";

export type UseGetTestProps = UseQueryProps<
  ApiResponse<GetTestResponseTransformed>,
  WithParams<GetTestRequest>
>;

export const getTestQueryKey = (params?: GetTestRequest) => ["getTest", ...Object.values(params || {})];

export const useGetTest = (props?: UseGetTestProps) => {
  const { params, ...resProps } = props || {};

  const query = useQuery<ApiResponse<GetTestResponseTransformed>, ApiError>({
  queryKey: getTestQueryKey(params),
  queryFn: () => getTest(params),
    ...resProps,
  });

  return query;
};
