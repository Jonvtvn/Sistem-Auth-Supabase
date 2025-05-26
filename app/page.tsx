import { EnvVarWarning } from "@/components/env-var-warning";
import HeaderAuth from "@/components/header-auth";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";

export default async function Home() {
  return (
    <>
      <div>
        {!hasEnvVars ? <EnvVarWarning /> : <HeaderAuth />}
      </div>
    </>
  );
}
