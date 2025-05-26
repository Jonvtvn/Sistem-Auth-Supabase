import { signOutAction } from "@/app/actions";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { createClient } from "@/utils/supabase/server";

export default async function AuthButton() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!hasEnvVars) {
    return (
      <>
        <div className="flex flex-col gap-4 items-center">
          <div>
            <Badge
              variant={"default"}
              className="font-normal pointer-events-none"
            >
              Actualice el archivo .env.local con una clave y URL anónimas
            </Badge>
          </div>
          <div className="flex gap-4">
            <button className="text-neutral-800 font-medium border px-3 py-1 rounded-lg border-neutral-600 hover:bg-slate-50">
              <Link href="/sign-in">Sign in</Link>
            </button>
            <button className="bg-neutral-900 font-medium text-white rounded-lg  px-3 py-1 hover:bg-zinc-800">
              <Link href="/sign-up">Sign up</Link>
            </button>
          </div>
        </div>
      </>
    );
  }
  return user ? (
    <div className="flex items-center gap-4">
      Hey, {user.email}!
      <form action={signOutAction}>
        <Button type="submit" variant={"outline"}>
          Sign out
        </Button>
      </form>
    </div>
  ) : (
      <main className="flex flex-col gap-2 justify-center items-center min-h-screen">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-5">Sistema de Autenticación</h2>
          <span>¿No has iniciado sesión?</span>
        </div>
        <div className="flex gap-4">
          <button className="text-neutral-800 font-medium border px-3 py-1 rounded-lg border-neutral-600 hover:bg-slate-50">
            <Link href="/sign-in">Sign in</Link>
          </button>
          <button className="bg-neutral-900 font-medium text-white rounded-lg px-3 py-1 hover:bg-zinc-800">
            <Link href="/sign-up">Sign up</Link>
          </button>
        </div>
      </main>


  );
}
