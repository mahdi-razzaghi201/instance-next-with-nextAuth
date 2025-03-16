import { storageDeserializer, storageSerializer } from './strings';

export enum LOCAL_STORAGE_KEYS {
  userAccessList = 'userAccessList',
  openWelcomeAlertDialog = 'openWelcomeAlertDialog',
}

const getFromSessionStorage = (key: LOCAL_STORAGE_KEYS) =>
  storageDeserializer(window.localStorage.getItem(key));

const setInSessionStorage = (key: LOCAL_STORAGE_KEYS, value: unknown) => {
  window.localStorage.setItem(key, storageSerializer(value));
};

export const localStorage = {
  [LOCAL_STORAGE_KEYS.userAccessList]: {
    get: () => getFromSessionStorage(LOCAL_STORAGE_KEYS.userAccessList),
    set: (value: unknown) => {
      setInSessionStorage(LOCAL_STORAGE_KEYS.userAccessList, value);
    },
    remove: () => {
      window.localStorage.removeItem(LOCAL_STORAGE_KEYS.userAccessList);
    },
  },

  [LOCAL_STORAGE_KEYS.openWelcomeAlertDialog]: {
    get: () => getFromSessionStorage(LOCAL_STORAGE_KEYS.openWelcomeAlertDialog),
    set: (value: unknown) => {
      setInSessionStorage(LOCAL_STORAGE_KEYS.openWelcomeAlertDialog, value);
    },
    remove: () => {
      window.localStorage.removeItem(LOCAL_STORAGE_KEYS.openWelcomeAlertDialog);
    },
  },

  clear: () => {
    window.localStorage.clear();
  },
};
