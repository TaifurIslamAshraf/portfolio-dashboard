"use client";

import { z } from "zod";

import { LoadingButton } from "@/components/LoaderButton";
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
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { useRegister } from "@/hooks/useFetch/UseAuth";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";

const registerFormSchema = z
  .object({
    name: z.string().min(1, "Enter Your Full Name"),
    email: z
      .string()
      .min(1, "Enter Your Email Address")
      .email("Invalid Email Address"),

    password: z
      .string()
      .min(1, "Password is required")
      .min(6, "Password should be at least 6 characters"),
    confirmPassword: z
      .string()
      .min(1, "Password is required")
      .min(6, "Password should be at least 6 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password do not match",
    path: ["confirmPassword"],
  });

const Register = () => {
  const { register, isLoading, isSuccess, error } = useRegister();

  const form = useForm<z.infer<typeof registerFormSchema>>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const handleSubmit = (value: z.infer<typeof registerFormSchema>) => {
    let { confirmPassword, ...data } = value;
    register(data);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <Card className="max-w-[500px] w-full">
        <CardHeader>
          <CardTitle>Sign Up</CardTitle>
          <CardDescription>
            If you dont have an account register now. else sign in
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className="space-y-5"
            >
              <FormField
                name="name"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <Label className="text-primary">Full Name</Label>
                    <FormControl>
                      <Input
                        disabled={isLoading}
                        placeholder="Enter Your Full Name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                name="email"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <Label className="text-primary">Email</Label>
                    <FormControl>
                      <Input
                        disabled={isLoading}
                        placeholder="Enter Your Email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                name="password"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <Label className="text-primary">Password</Label>
                    <FormControl>
                      <Input
                        disabled={isLoading}
                        placeholder="Enter Your password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="confirmPassword"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <Label className="text-primary">Confirm Password</Label>
                    <FormControl>
                      <Input
                        disabled={isLoading}
                        placeholder="Enter Your confirm password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {isLoading ? (
                <LoadingButton className="w-full" />
              ) : (
                <Button className="w-full" type="submit">
                  Sign Up
                </Button>
              )}
            </form>
          </Form>
        </CardContent>

        <CardFooter className="gap-1 font-semibold">
          <h2>You alredy have an account?</h2>
          <Link href={"/login"} className="hover:underline text-blue-500">
            login
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Register;
