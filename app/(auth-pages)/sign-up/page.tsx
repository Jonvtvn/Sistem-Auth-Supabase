import { signUpAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { SmtpMessage } from "../smtp-message";
import { Badge } from "@/components/ui/badge";

export default async function Signup(props: {
  searchParams: Promise<Message>;
}) {
  const searchParams = await props.searchParams;
  if ("message" in searchParams) {
    return (
      <div className="w-full flex-1 flex items-center h-screen sm:max-w-md justify-center gap-2 p-4">
        <FormMessage message={searchParams} />
      </div>
    );
  }

  return (
    <>
      <main className="flex flex-col mx-auto justify-center items-center min-h-screen">
        <Badge variant={"outline"} className="font-normal mb-5">
          <Link href="/">
            Ir a pagina principal
          </Link>
        </Badge>

        <form className="flex flex-col min-w-80 max-w-80 mx-auto">
          <h1 className="text-3xl font-bold">Crear cuenta</h1>
          <p className="text-sm text text-foreground">
            ¿Ya tienes una cuenta?{" "}
            <Link className="text-primary font-medium underline" href="/sign-in">
              Iniciar sesión
            </Link>
          </p>
          <div className="flex flex-col gap-2 [&>input]:mb-3 mt-8">
            {/* Nuevo campo para el nombre de usuario */}
            <Label htmlFor="username">Nombre de usuario</Label>
            <Input
              name="username"
              placeholder="Tu nombre de usuario"
              required
            />

            <Label htmlFor="email">Email</Label>
            <Input name="email" placeholder="you@example.com" required />

            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              name="password"
              placeholder="Tu contraseña"
              minLength={6}
              required
            />

            <SubmitButton formAction={signUpAction} pendingText="Creando cuenta...">
              Crear cuenta
            </SubmitButton>
            <FormMessage message={searchParams} />
          </div>
        </form>

        <SmtpMessage />
      </main>
    </>
  );
}
