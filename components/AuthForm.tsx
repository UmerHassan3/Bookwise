"use client"

import React from "react"
import {
    useForm,
    SubmitHandler,
    UseFormReturn,
    FieldValues,
    DefaultValues,
} from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import z, { ZodType } from "zod"

import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage,
} from "./ui/form"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { Field_Name, Field_Type } from "@/constants"
import ImageUpload from "./ImageUpload"
import Link from "next/link"
import { toast } from "sonner"
import { useRouter } from "next/navigation"


interface Props<T extends FieldValues> {
    Schema: z.ZodType<T>
    defaultvalues: T
    type: "SIGN_IN" | "SIGN_UP"
    onSubmit: (data: T) => Promise<{ success: boolean; error?: string }>
}

const AuthForm = <T extends FieldValues,>({
    type,
    defaultvalues,
    Schema,
    onSubmit,
}: Props<T>) => {
    const router = useRouter();
    const form = useForm<T>({
        resolver: zodResolver(Schema),
        defaultValues: defaultvalues,
    })

    const handleSubmit: SubmitHandler<T> = async (data) => {
        const result = await onSubmit(data)

        if (result.success) {
            toast.success(
                type === "SIGN_IN"
                    ? "Welcome back!"
                    : "Account created successfully!"
            )
        } else {
            toast.error(result.error || "Failed to authenticate")
        }

        router.push("/");
    }

    const fields = Object.keys(defaultvalues) as (keyof T)[]

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl shadow-sm p-8">

                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(handleSubmit)}
                        className="space-y-6"
                    >

                        {/* HEADER */}
                        <div className="text-center space-y-2">
                            <h2 className="text-2xl font-bold text-gray-900">
                                {type === "SIGN_IN"
                                    ? "Welcome back to BookWise"
                                    : "Create your account"}
                            </h2>

                            <p className="text-sm text-gray-500">
                                {type === "SIGN_IN"
                                    ? "Access your library and continue reading"
                                    : "Fill in your details to get started"}
                            </p>
                        </div>

                        {/* FIELDS */}
                        <div className="space-y-4">
                            {fields.map((fieldName) => (
                                <FormField
                                    key={String(fieldName)}
                                    control={form.control}
                                    name={fieldName}
                                    render={({ field, fieldState }: any) => (
                                        <FormItem>

                                            <FormLabel>
                                                {Field_Name[fieldName as keyof typeof Field_Name]}
                                            </FormLabel>

                                            <FormControl>
                                                {fieldName === "universityCard" ? (
                                                    <div className="border rounded-lg p-3 bg-gray-50">
                                                        <ImageUpload
                                                            value={field.value}
                                                            onChange={field.onChange}
                                                        />
                                                    </div>
                                                ) : (
                                                    <Input
                                                        {...field}
                                                        type={
                                                            Field_Type[fieldName as keyof typeof Field_Type] || "text"
                                                        }
                                                        className="h-11 rounded-lg border-gray-300 focus:border-black focus:ring-black"
                                                    />
                                                )}
                                            </FormControl>

                                            <FormMessage>
                                                {fieldState?.error?.message}
                                            </FormMessage>

                                        </FormItem>
                                    )}
                                />
                            ))}
                        </div>

                        {/* BUTTON */}
                        <Button
                            type="submit"
                            className="w-full h-11 rounded-lg bg-black text-white hover:bg-gray-900 transition"
                        >
                            {type === "SIGN_IN" ? "Sign In" : "Create Account"}
                        </Button>

                        {/* FOOTER */}
                        <div className="text-center text-sm text-gray-600">
                            {type === "SIGN_IN" ? (
                                <span>
                                    Don’t have an account?{" "}
                                    <Link href="/sign-up" className="text-black font-medium hover:underline">
                                        Sign up
                                    </Link>
                                </span>
                            ) : (
                                <span>
                                    Already have an account?{" "}
                                    <Link href="/sign-in" className="text-black font-medium hover:underline">
                                        Sign in
                                    </Link>
                                </span>
                            )}
                        </div>

                    </form>
                </Form>
            </div>
        </div>
    )
}

export default AuthForm