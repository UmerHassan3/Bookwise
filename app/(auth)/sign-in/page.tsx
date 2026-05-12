'use client'
import AuthForm from '@/components/AuthForm'
import { signInwithCredentials } from '@/lib/action/auth'
import { signInSchema } from '@/lib/validation'

const Page = () => {
  return (
    <AuthForm
      type="SIGN_IN"
      Schema={signInSchema}
      defaultvalues={{
        email: "",
        password: "",
      }}
      onSubmit={signInwithCredentials}
    />
  )
}

export default Page