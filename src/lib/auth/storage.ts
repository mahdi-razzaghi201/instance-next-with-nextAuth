import { cookies } from "next/headers";

export const cookieName = "USER_SESSION";

export async function saveSession(accessToken: string) {
  const cookieStore = await cookies();
  cookieStore.set(cookieName, accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
  });
}

export async function removeSession() {
  const cookieStore = await cookies();
  cookieStore.delete(cookieName);
}
