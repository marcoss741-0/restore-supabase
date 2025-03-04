/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  email: z
    .string({
      required_error: "Email is required",
    })
    .email("Please enter a valid email address"),
  password: z
    .string({
      required_error: "Password is required",
    })
    .min(8, "Password must be at least 6 characters")
    .max(20, "Password must be at most 20 characters"),
});

export default function CreateAccountForm() {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const supabase = createClientComponentClient();
      const { email, password } = values;

      const {
        error,
        data: { user },
      } = await supabase.auth.signUp({
        email,
        password,
      });

      form.reset();
      if (user) router.push("/");
    } catch (error) {
      console.log("CreateAccountForm ", error);
    }
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center space-y-2">
        <Form {...form}>
          <form
            className="flex flex-col space-y-2"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>E-mail:</FormLabel>
                  <FormControl>
                    <Input placeholder="Digite seu e-mail." {...field} />
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
                  <FormLabel>Password:</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Digite sua senha."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit">Criar conta</Button>
          </form>
        </Form>
      </div>
    </>
  );
}
