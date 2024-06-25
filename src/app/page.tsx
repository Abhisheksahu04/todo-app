import { Button } from "@/components/ui/button";
import Tasks from "@/components/todolist-client/tasks";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      TODO LIST
      <Button>HI</Button>
      <Tasks/>
    </main>
  );
}
