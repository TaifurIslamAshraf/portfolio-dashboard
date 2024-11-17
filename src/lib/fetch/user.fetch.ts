import { getServerSession } from "next-auth";
import { authOptions } from "../auth";
import config from "../config";

const getUsers = async () => {
  const session = await getServerSession(authOptions);

  try {
    const res = await fetch(`${config.serverApi}/user/all-users`, {
      method: "GET",
      headers: {
        "Content-Type": "Application/json",
        authorization: `Bearer ${session?.accessToken}`,
      },
      cache: "force-cache",
      next: { tags: ["User"] },
    });

    const users = await res.json();

    return users;
  } catch (error) {
    console.log("Fetch all users", error);
  }
};

export const userData = { getUsers };
