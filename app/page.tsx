import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
export default function Home() {
  return (
    <div>
      this is a thing there is an button bellow
      <Button>Click me</Button>
      <UserButton />
    </div>
  );
}
