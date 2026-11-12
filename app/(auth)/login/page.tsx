import { SocialLogins } from "@/components/auth/social-logins";
import React from "react"

const page = () => {
  return (
    <div className=" space-y-6">
      <div className="flex flex-col gap-0.5">
        <h1 className="text-2xl font-bold">Welcome Again!</h1>
        <h2 className="text-md">Login again to start learning!</h2>
      </div>
        <div className="max-w-md mx-auto">
            <SocialLogins/>
        </div>
    </div>
  )
}

export default page
