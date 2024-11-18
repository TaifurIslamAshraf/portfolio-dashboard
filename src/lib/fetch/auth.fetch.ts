import config from "../config";

export interface IRegisterData {
  name: string;
  email: string;
  password: string;
}
export interface IResetPassData {
  newPassword: string;
  token: string;
  userId: string;
}

const forgotPassword = async (email: string) => {
  try {
    const res = await fetch(`${config.serverApi}/auth/forgot-password`, {
      method: "POST",
      body: JSON.stringify({ email }),
      headers: {
        "Content-Type": "Application/json",
      },
    });

    const data = await res.json();

    return data;
  } catch (error) {
    console.log("Fetch forgot password", error);
  }
};
const resetPassword = async (resetData: IResetPassData) => {
  try {
    const res = await fetch(`${config.serverApi}/auth/reset-password`, {
      method: "PUT",
      body: JSON.stringify(resetData),
      headers: {
        "Content-Type": "Application/json",
      },
    });

    const data = await res.json();

    return data;
  } catch (error) {
    console.log("Fetch reset password", error);
  }
};

const register = async (userData: IRegisterData) => {
  try {
    const res = await fetch(`${config.serverApi}/auth/register`, {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    return await res.json();
  } catch (error) {
    console.log("Register data fetch", error);
  }
};

export const authData = { forgotPassword, register, resetPassword };
