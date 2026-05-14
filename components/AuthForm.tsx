"use client"

import React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z, ZodObject, ZodRawShape } from "zod"
import {
    Form, FormField, FormItem,
    FormLabel, FormControl, FormMessage,
} from "./ui/form"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import ImageUpload from "./ImageUpload"
import Link from "next/link"
import { toast } from "sonner"
import { useRouter } from "next/navigation"
import { Field_Name, Field_Type } from "@/constants"

interface Props<T extends ZodRawShape> {
    Schema: ZodObject<T>
    defaultvalues: z.infer<ZodObject<T>>
    type: "SIGN_IN" | "SIGN_UP"
    onSubmit: (data: z.infer<ZodObject<T>>) => Promise<{ success: boolean; error?: string }>
}

export default function AuthForm<T extends ZodRawShape>({
    type,
    defaultvalues,
    Schema,
    onSubmit,
}: Props<T>) {

    const router = useRouter()

    // ✅ Use `any` here — this is the only way to satisfy useForm's
    // internal FieldValues constraint with dynamic Zod generics
    const form = useForm<any>({
        resolver: zodResolver(Schema) as any,
        defaultValues: defaultvalues,
    })

    // ✅ Type the submitted data properly using the schema
    const handleSubmit = async (data: z.infer<ZodObject<T>>) => {
        const result = await onSubmit(data)
        if (result.success) {
            toast.success(type === "SIGN_IN" ? "Welcome back!" : "Account created successfully!")
            router.push("/")
        } else {
            toast.error(result.error || "Failed")
        }
    }

    const fields = Object.keys(Schema.shape) as string[]

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="w-full max-w-md bg-white border rounded-2xl shadow-sm p-8">
                <Form {...form}>
                    {/* ✅ Cast handleSubmit to any to avoid the callback type mismatch */}
                    <form onSubmit={form.handleSubmit(handleSubmit as any)} className="space-y-6">

                        <div className="text-center">
                            <h2 className="text-2xl font-bold">
                                {type === "SIGN_IN" ? "Welcome back" : "Create account"}
                            </h2>
                        </div>

                        <div className="space-y-4">
                            {fields.map((fieldName) => (
                                <FormField
                                    key={fieldName}
                                    control={form.control}
                                    name={fieldName}
                                   render={({ field }: { field: any }) => (  // ✅ No more error — form is typed as any
                                        <FormItem>
                                            <FormLabel>
                                                {Field_Name[fieldName as keyof typeof Field_Name]}
                                            </FormLabel>
                                            <FormControl>
                                                {fieldName === "universityCard" ? (
                                                    <ImageUpload
                                                        value={field.value}
                                                        onChange={field.onChange}
                                                    />
                                                ) : (
                                                    <Input
                                                        {...field}
                                                        type={Field_Type[fieldName as keyof typeof Field_Type] || "text"}
                                                    />
                                                )}
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            ))}
                        </div>

                        <Button type="submit" className="w-full">
                            {type === "SIGN_IN" ? "Sign In" : "Sign Up"}
                        </Button>

                        <div className="text-center text-sm">
                            {type === "SIGN_IN" ? (
                                <Link href="/sign-up">Create account</Link>
                            ) : (
                                <Link href="/sign-in">Sign in</Link>
                            )}
                        </div>

                    </form>
                </Form>
            </div>
        </div>
    )
}