import {
  authData,
  IRegisterData,
  IResetPassData,
} from "@/lib/fetch/auth.fetch";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useToast } from "../use-toast";

export const useForgotPassword = () => {
  const toast = useToast();

  const { mutate, isPending, isSuccess, error } = useMutation({
    mutationFn: (email: string) => authData.forgotPassword(email),
    onSuccess: (data) => {
      toast.toast({
        title: "Success",
        description: data?.message,
      });
    },
    onError: (error: any) => {
      toast.toast({
        variant: "destructive",
        title: "Error",
        description: error.data?.message || "Something went wrong",
      });
    },
  });

  return { mutate, isPending, isSuccess, error };
};

export const useRegister = () => {
  const toast = useToast();
  const router = useRouter();

  const { mutate, isPending, isSuccess, error } = useMutation({
    mutationFn: (userData: IRegisterData) => authData.register(userData),
    onSuccess: (data) => {
      toast.toast({
        title: data?.message || "Registration Successful",
      });
      if (data?.success) {
        router.push("/login");
      }
    },
    onError: (error: any) => {
      toast.toast({
        variant: "destructive",
        title: "Registration Error",
        description: error.message || "Something went wrong",
      });
    },
  });

  return {
    register: mutate,
    isLoading: isPending,
    isSuccess,
    error,
  };
};

export const useResetPassword = () => {
  const toast = useToast();
  const router = useRouter();

  const { mutate, isPending, isSuccess, error } = useMutation({
    mutationFn: (data: IResetPassData) => authData.resetPassword(data),
    onSuccess: (data) => {
      toast.toast({
        title: data?.message || "Password reset successfull",
      });
      if (data?.success) {
        router.push("/login");
      }
    },
    onError: (error: any) => {
      toast.toast({
        variant: "destructive",
        title: "Reset Password Error",
        description: error.message || "Something went wrong",
      });
    },
  });

  return {
    resetPassword: mutate,
    isLoading: isPending,
    isSuccess,
    error,
  };
};
