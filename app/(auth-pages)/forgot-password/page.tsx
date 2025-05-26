import { forgotPasswordAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { SmtpMessage } from "../smtp-message";
import { Badge } from "@/components/ui/badge";

export default async function ForgotPassword(props: {
  searchParams: Promise<Message>;
}) {
  const searchParams = await props.searchParams;
  return (
    <>
      <main className="flex flex-col mx-auto justify-center items-center min-h-screen">
        <Badge variant={"outline"} className="font-normal mb-5">
          <Link href="/">
            Ir a pagina principal
          </Link>
        </Badge>
        <form className="flex flex-col min-w-80 max-w-80 mx-auto">
        <div>
            <h1 className="text-3xl font-bold">Restablecer contraseña</h1>
          <p className="text-sm text-secondary-foreground">
              ¿Ya tienes una cuenta?{" "}
            <Link className="text-primary underline" href="/sign-in">
                Iniciar sesión
            </Link>
          </p>
        </div>
        <div className="flex flex-col gap-2 [&>input]:mb-3 mt-8">
          <Label htmlFor="email">Email</Label>
          <Input name="email" placeholder="you@example.com" required />
          <SubmitButton formAction={forgotPasswordAction}>
              Restablecer contraseña
          </SubmitButton>
          <FormMessage message={searchParams} />
        </div>
      </form>
      <SmtpMessage />
      </main>


    </>
  );
}
