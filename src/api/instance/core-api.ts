/* eslint-disable @typescript-eslint/no-empty-object-type */
import axios, { AxiosError } from 'axios';
import { toast } from 'sonner';
import { z } from 'zod';
import t from '@/json/fa.json';
import { capitalize, trimRequestData } from '@/utils/strings';
// import { cookie, COOKIE_KEYS } from '@/utils/cookies';
// import { localStorage } from '@/utils/local-storage';
import { BASE_URLS } from '@/constants/base-urls';

export const coreApiPaginatedRequestSchema = <
  T extends z.AnyZodObject = z.ZodObject<{}>,
>(
  schema: T = z.object({}) as T,
) => {
  return z
    .object({
      pageNumber: z.number().int().optional(),
      pageSize: z.number().int().optional(),
      searchKey: z.string().optional(),
      sortName: z.string().optional().nullable(),
      sortType: z.string().optional().nullable(),
    })
    .merge(schema)
    .transform((data) => ({
      ...data,
      sortName: data?.sortType ? capitalize(data.sortName ?? '') : null,
      sortType: data?.sortName ? data.sortType : null,
    }));
};

export const coreApiPaginatedResponseSchema = <T>(schema: z.ZodType<T>) => {
  return z
    .object({
      hasNextPage: z.boolean(),
      hasPreviousPage: z.boolean(),
      pageNumber: z.number().int().nonnegative(),
      totalCount: z.number().int().nonnegative(),
      totalPages: z.number().int().nonnegative(),
      items: z.array(schema),
    })
    .transform((data) => data);
};

export const coreApiMutationResponseSchema = <T>(schema?: z.ZodType<T>) => {
  return z
    .unknown()
    .or(schema || z.object({}).passthrough().optional())
    .optional()
    .transform((data) => data);
};

export type CoreSortType = 'asc' | 'desc' | null;

export const coreApi = axios.create({
  baseURL: BASE_URLS.baseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: false,
});

// coreApi.interceptors.request.use((config) => {
//   const token = cookie[COOKIE_KEYS.USER_INFO].get()?.token;
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   if (config.data) {
//     // Skip trimming for special types like FormData, Files, Blobs, etc.
//     if (
//       typeof config.data === 'string' ||
//       (typeof config.data === 'object' &&
//         !(config.data instanceof FormData) &&
//         !(config.data instanceof File) &&
//         !(config.data instanceof Blob))
//     ) {
//       config.data = trimRequestData(config.data);
//     }
//   }
//   return config;
// });

// coreApi.interceptors.response.use(
//   function (response) {
//     return response;
//   },
//   function (error: AxiosError<{ errors?: string[]; detail?: string }>) {
//     if (error.status === 401) {
//       cookie[COOKIE_KEYS.USER_INFO].remove();
//       localStorage.clear();
//       window.location.href = `/login?next=${window.location.pathname}${window.location.search}`;
//     }
//     if (error.status === 401) {
//       toast.error(t.toast.error.authorization);
//     }
//     if (error.response?.data?.detail) {
//       toast.error(error.response?.data?.detail || t.toast.error.common);
//     } else {
//       Object.values(
//         error.response?.data?.errors || { '': [t.toast.error.common] },
//       ).map((item) => {
//         toast.error(item || t.toast.error.common);
//       });
//     }
//     return Promise.reject(error);
//   },
// );
