export const canAccess = (userAccessList: string[], roles: string[]) => {
  // return true;
  if (userAccessList === undefined) return false;
  if (userAccessList?.length === 1 && userAccessList[0] === '*') return true;
  return roles.some((role) => userAccessList?.includes(role));
};
