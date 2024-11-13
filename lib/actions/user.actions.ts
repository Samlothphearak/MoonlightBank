"use server";

import { ID } from "node-appwrite";
import { createAdminClient, createSessionClient } from "../appwrite";
import { cookies } from "next/headers";
import { parse } from "path";
import { parseStringify } from "../utils";

export const signIn = async () => {
  try {
  } catch (error) {
    console.error("Error", error);
  }
};

export const signUp = async (userData: SignUpParams) => {
  const { firstName, lastName, email, password } = userData;

  try {
    const { account } = await createAdminClient();

    const newUserAccount = await account.create(
      ID.unique(),
      password,
      email,
      `${firstName} ${lastName}`
    );
    const session = await account.createEmailPasswordSession(email, password);

    cookies().set("appwrite-session", session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    });

    return parseStringify(newUserAccount)
  } catch (error) {
    console.error("Error", error);
  }
};

export async function getLoggedInUser() {
  try {
    const { account } = await createSessionClient();
    return await account.get();
  } catch (error) {
    return null;
  }
}
