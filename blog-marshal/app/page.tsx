import { Button } from "@/components/ui/button";
import { RegisterLink, LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function Home() {
  const { getUser } = getKindeServerSession()
  const session = await getUser()

  return (
  <div>
    <h1>Hello World</h1>
    {session ? (
      <LogoutLink>Logout</LogoutLink>
    ) : (
      <div>
    <RegisterLink>
      <Button>
        Register
      </Button>
    </RegisterLink>
    <LoginLink>
      <Button>
        Login
      </Button>
    </LoginLink>
      </div>
    )}
  </div>
  );
}
