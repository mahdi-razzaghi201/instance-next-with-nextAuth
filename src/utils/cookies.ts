// import Cookies from 'js-cookie';
// import { storageDeserializer, storageSerializer } from './strings';
// import { UserInfo } from '@/apis/services/core/Account/login/post/post-login.types';

// export enum COOKIE_KEYS {
//   USER_INFO = 'userInfo',
// }

// const getFromCookie = (key: COOKIE_KEYS) =>
//   storageDeserializer(Cookies.get(key) || '');

// const setInCookie = (
//   key: COOKIE_KEYS,
//   value: unknown,
//   options?: Cookies.CookieAttributes,
// ) => {
//   Cookies.set(key, storageSerializer(value), {
//     sameSite: 'Strict',
//     secure: true,
//     ...options,
//   });
// };

// export const cookie = {
//   [COOKIE_KEYS.USER_INFO]: {
//     get: () => getFromCookie(COOKIE_KEYS.USER_INFO) as UserInfo | null,
//     set: (value: UserInfo, options?: Cookies.CookieAttributes) => {
//       setInCookie(COOKIE_KEYS.USER_INFO, value, options);
//     },
//     remove: () => {
//       Cookies.remove(COOKIE_KEYS.USER_INFO);
//     },
//   },
// };
