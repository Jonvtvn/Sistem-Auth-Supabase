import { InfoIcon } from "lucide-react";

export function SmtpMessage() {
  return (
    <div className="min-w-80 max-w-80 bg-muted/50 px-5 py-3 border rounded-md flex gap-4">
      <InfoIcon size={25} className="" />
      <div className="flex flex-col gap-1">
        <small className="text-sm text-secondary-foreground">
          <strong> Nota:</strong> Los correos electrónicos tienen una tasa limitada.
        </small>
      </div>
    </div>
  );
}
