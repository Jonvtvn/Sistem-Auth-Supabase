import { resetPasswordAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default async function ResetPassword(props: {
  searchParams: Promise<Message>;
}) {
  const searchParams = await props.searchParams;
  return (
    <main className="flex flex-col mx-auto justify-center items-center min-h-screen">
      <Badge variant={"outline"} className="font-normal mb-5">
        <Link href="/protected">
          Ir a pagina principal
        </Link>
      </Badge>
      <form className="flex flex-col w-full max-w-lg p-4 gap-2 [&>input]:mb-4">
        <h1 className="text-4xl font-bold">Restablecer contraseña</h1>
      <p className="text-sm text-foreground/60">
          Por favor, introduzca su nueva contraseña a continuación.
      </p>
        <Label htmlFor="password">Nueva contraseña</Label>
      <Input
        type="password"
        name="password"
        placeholder="New password"
        required
      />
        <Label htmlFor="confirmPassword">Confirmar contraseña</Label>
      <Input
        type="password"
        name="confirmPassword"
        placeholder="Confirm password"
        required
      />
      <SubmitButton formAction={resetPasswordAction}>
          Restablecer contraseña
      </SubmitButton>
      <FormMessage message={searchParams} />
    </form>
    </main>

  );
}
