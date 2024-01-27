import LoginButton from "@/components/auth/LoginButton";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="h-full flex flex-col items-start justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to bg-fuchsia-500">
      <div className="w-full space-y-6 text-center">
        <h1 className="text-6xl font-semibold text-white drop-shadow-md">
          Auth
        </h1>
        <p className="text-white text-lg">A simple authentication service</p>
        <div>
          <LoginButton>
            <Button variant="secondary" size="lg">
              Sign In
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
