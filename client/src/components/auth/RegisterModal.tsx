import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useAuth } from "@/context/AuthContext";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { api } from "@/axios";
import { useToast } from "../ui/use-toast";
import { AxiosError } from "axios";
import SubmitLoader from "../loaders/SubmitLoader";
import Footer from "./Footer";

export default function RegisterModal() {
  const { register, setRegister, setUser } = useAuth();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPending, setIsPending] = useState(false);

  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || !email || !password) {
      toast({
        title: "Registration failed",
        description: "Please fill in all fields.",
        variant: "destructive",
      });

      return;
    }

    try {
      setIsPending(true);
      const response = await api.post("/user/register", { name, email, password });
      localStorage.setItem("token", response.data.data.token);
      setUser(response.data.data.user);

      setIsPending(false);

      toast({
        title: "Login successful",
        description: "You have successfully logged in.",
      });
    } catch (error) {
      setIsPending(false);
      let err = "";

      if (error instanceof AxiosError) {
        err = error.response?.data.message || error.message;
      } else {
        err = "An error occurred";
      }

      toast({
        title: "Login failed",
        description: err,
        variant: "destructive",
      });
    }
  };

  return (
    <Dialog
      open={register}
      onOpenChange={(open) => {
        setRegister(open);
      }}
    >
      <DialogContent className="max-w-[380px] py-10">
        <DialogHeader className="mb-5">
          <DialogTitle className="text-center text-3xl">
            Create an account <span className="">🤞</span>{" "}
          </DialogTitle>

          <DialogDescription className="text-center">
            Login to your account to continue your journey
          </DialogDescription>
        </DialogHeader>

        <div className={"grid gap-6"}>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4">
              <div className="grid gap-1">
                <Label className="sr-only" htmlFor="name">
                  Name
                </Label>
                <Input
                  id="name"
                  placeholder="John Doe"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  autoCapitalize="words"
                  autoComplete="name"
                  autoCorrect="off"
                  disabled={isPending}
                />
              </div>

              <div className="grid gap-1">
                <Label className="sr-only" htmlFor="email">
                  Email
                </Label>
                <Input
                  id="email"
                  placeholder="name@example.com"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoCapitalize="none"
                  autoComplete="email"
                  autoCorrect="off"
                  disabled={isPending}
                />
              </div>

              <div className="grid gap-1">
                <Label className="sr-only" htmlFor="password">
                  Password
                </Label>
                <Input
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="abc123"
                  type="password"
                  autoCapitalize="none"
                  autoComplete="password"
                  autoCorrect="off"
                  disabled={isPending}
                />
              </div>

              <Button disabled={isPending}>{isPending ? <SubmitLoader /> : "Signup"}</Button>
            </div>
          </form>

          <Footer />
        </div>
      </DialogContent>
    </Dialog>
  );
}
