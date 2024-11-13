"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { LoadingButton } from "@/components/LoaderButton";
import { updateUser } from "@/redux/features/auth/authSlice";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

const loginFormSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(6, "Password should be at least 6 charecters"),
});

const Login = () => {
  const router = useRouter();
  const [isLoadng, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const session = useSession();

  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleOnSubmit = async (value: z.infer<typeof loginFormSchema>) => {
    setIsLoading(true);
    const signinData = await signIn("credentials", {
      email: value.email,
      password: value.password,
      redirect: false,
    });

    if (signinData?.status === 401) {
      toast.error("Invalid Email or Password");
      setIsLoading(false);
    } else if (signinData?.ok) {
      router.push("/");
      router.refresh();
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (session?.status === "authenticated") {
      dispatch(updateUser({ user: session?.data?.user }));
    }
  }, [dispatch, session?.data?.user, session?.status]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <Card className="max-w-[500px] w-full">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>
            Login you account with your credentials
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleOnSubmit)}
              className="space-y-5"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-primary">Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-primary">Password</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter Your password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="underline flex flex-col items-end">
                <Link href={"/forgotPassword"}>Forgot Password?</Link>
              </div>

              {isLoadng ? (
                <LoadingButton className="w-full" />
              ) : (
                <Button className="w-full" type="submit">
                  Sign In
                </Button>
              )}
            </form>
          </Form>
        </CardContent>
        <CardFooter className="gap-1 font-semibold">
          <h2>You don&apos;t have an account?</h2>
          <Link href={"/register"} className="hover:underline text-blue-500">
            Register
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
