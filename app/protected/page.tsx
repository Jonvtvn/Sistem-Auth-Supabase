import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { signOutAction } from "../actions";
import Link from "next/link";

export default async function ProtectedPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  return (
    <>
      <main className="flex flex-col mx-auto justify-center items-center min-h-screen">
        <div className="flex flex-col justify-center items-center">
          <div className="flex-col flex items-center">
            <span className="text-2xl font-light">
              Ey, Hola <span className="font-bold">{user.user_metadata.username}</span>!
            </span>
            <span className="text-sm font-light">Bienvenido!</span>
          </div>

          <form action={signOutAction} className="mt-7">
            <button
              type="submit"
              className="text-neutral-800 border px-3 py-1 rounded-lg border-neutral-600 hover:bg-slate-50"
            >
              Cerrar sesión
            </button>
          </form>
          <Link href="/protected/reset-password" className="text-sm hover:underline font-light mt-1">
            Restablecer contraseña
          </Link>



        </div>
      </main>

    </>
  );
}
