import { Button } from "@/components/ui/button"
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex bg-muted p-4 rounded-lg gap-2">
        <Button variant="default">
          <Link href="/signup">
          Signup
          </Link>
        </Button>
          <Button variant="secondary">
          <Link href="/login">
          login
          </Link>
        </Button>
      </div>
    </div>
  )
}
