import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect, RedirectType } from "next/navigation";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AccountForm from "@/components/auth/create-accont-form";

export default async function Home() {
  let loggedIn = false;

  try {
    const supabase = createServerComponentClient({ cookies });
    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (session) {
      loggedIn = true;
    }
  } catch (error) {
    console.log("Home ", error);
  } finally {
    if (loggedIn) {
      redirect("/user-app", RedirectType.replace);
    }
  }
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen w-full">
        <Tabs defaultValue="create-account" className="w-[400px] shadow">
          <TabsList className="flex justify-around rounded-b-none items-center h-14">
            <TabsTrigger value="create-account">Criar conta</TabsTrigger>
            <TabsTrigger value="login">Fazer Login</TabsTrigger>
          </TabsList>
          <TabsContent value="create-account">
            <AccountForm />
          </TabsContent>
          <TabsContent value="login"></TabsContent>
        </Tabs>
      </div>
    </>
  );
}
