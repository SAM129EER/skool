import React from 'react'

const AuthLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-xl rounded-lg bg-background p-4">
        {children}
      </div>
    </div>
  )
}

export default AuthLayout
