import Link from "next/link";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

export function EnvVarWarning() {
  return (
    <div className="flex flex-col gap-4 items-center">
      <Badge variant={"outline"} className="font-normal">
        Variables de entorno de Supabase requeridas
      </Badge>
      <div className="flex gap-4">
        <button className="text-neutral-800 font-medium border px-3 py-1 rounded-lg border-neutral-600 hover:bg-slate-50">
          <Link href="/sign-in">Sign in</Link>
        </button>
        <button className="bg-neutral-900 font-medium text-white rounded-lg  px-3 py-1 hover:bg-zinc-800">
          <Link href="/sign-up">Sign up</Link>
        </button>
      </div>
    </div>
  );
}
