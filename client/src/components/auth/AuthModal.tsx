import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import AuthTabs from "./Tabs";
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"

export default function AuthModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger>
      <DialogContent className="">
        <AuthTabs />
      </DialogContent>
    </Dialog>
  );
}
