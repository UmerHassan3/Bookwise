'use client'

import AuthForm from '@/components/AuthForm'
import { signUp } from '@/lib/action/auth'
import { signUpSchema } from '@/lib/validation'

export default function Page() {
  return (
    <AuthForm
      type="SIGN_UP"
      Schema={signUpSchema}
      defaultvalues={{
        fullName: "",
        email: "",
        password: "",
        universityId: 0,
        universityCard: "",
      }}
      onSubmit={signUp}
    />
  )
}