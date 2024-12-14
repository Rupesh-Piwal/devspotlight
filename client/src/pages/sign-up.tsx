import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-[#C6C6C6]">
          Create your account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-500">
          Or{" "}
          <Link
            to="/login"
            className="font-medium bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text"
          >
            sign in to your existing account
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <Label className="text-[#C6C6C6]" htmlFor="username">
                Username
              </Label>
              <div className="mt-1">
                <Input
                  className="border border-[#52525B] bg-[#3F3F46]"
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  required
                />
              </div>
            </div>

            <div>
              <Label className="text-[#C6C6C6]" htmlFor="email">
                Email address
              </Label>
              <div className="mt-1">
                <Input
                  className="border border-[#52525B] bg-[#3F3F46]"
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                />
              </div>
            </div>

            <div>
              <Label className="text-[#C6C6C6]" htmlFor="password">
                Password
              </Label>
              <div className="mt-1">
                <Input
                  className="border border-[#52525B] bg-[#3F3F46]"
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                />
              </div>
            </div>

            <div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-orange-800 hover:bg-[#FFA05C]"
              >
                Sign up
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
