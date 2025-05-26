import { signInAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default async function Login(props: { searchParams: Promise<Message> }) {
  const searchParams = await props.searchParams;
  return (
    <main className="flex flex-col mx-auto justify-center items-center min-h-screen">
      <Badge variant={"outline"} className="font-normal mb-5">
        <Link href="/">
          Ir a pagina principal
        </Link>
      </Badge>
      <form className="flex flex-col min-w-80 max-w-80 mx-auto">
        <h1 className="text-3xl font-bold">Iniciar sesión</h1>
      <p className="text-sm text-foreground">
          ¿No tienes una cuenta?{" "}
        <Link className="text-foreground font-medium underline" href="/sign-up">
            Crear cuenta
        </Link>
      </p>
      <div className="flex flex-col gap-2 [&>input]:mb-3 mt-8">
        <Label htmlFor="email">Email</Label>
        <Input name="email" placeholder="you@example.com" required />
        <div className="flex justify-between items-center">
          <Label htmlFor="password">Password</Label>
          <Link
            className="text-xs text-foreground underline"
            href="/forgot-password"
          >
              ¿Has olvidado tu contraseña?
          </Link>
        </div>
        <Input
          type="password"
          name="password"
          placeholder="Your password"
          required
        />
          <SubmitButton pendingText="Iniciando sesión..." formAction={signInAction}>
            Iniciar sesión
        </SubmitButton>
        <FormMessage message={searchParams} />
      </div>
    </form>
    </main>
  );
}
