"use server"

import { signIn } from "@/auth"
import { db } from "@/database/drizzle"
import { usersTable } from "@/database/schema"
import { eq } from "drizzle-orm"
import { hash } from "bcryptjs" // ✅ FIXED

// TYPES (make sure you have this)
type AuthCredentials = {
    fullName: string
    email: string
    password: string
    universityId: number
    universityCard: string
}

// ✅ SIGN UP
export const signUp = async (params: AuthCredentials) => {
    const { fullName, email, password, universityId, universityCard } = params

    try {
        // check existing user
        const existingUser = await db
            .select()
            .from(usersTable)
            .where(eq(usersTable.email, email))
            .limit(1)

        if (existingUser.length > 0) {
            return { success: false, error: "User already exists!" }
        }

        // hash password
        const hashedPassword = await hash(password, 10)

        // insert user
        await db.insert(usersTable).values({
            fullName,
            email,
            password: hashedPassword,
            universityId,
            universityCard,
        })

        // auto login
        const loginResult = await signInwithCredentials({ email, password })

        if (!loginResult.success) {
            return loginResult
        }

        return { success: true }

    } catch (err: any) {
        return { success: false, error: err.message || "Something went wrong" }
    }
}

// ✅ SIGN IN
export const signInwithCredentials = async (
    params: Pick<AuthCredentials, "email" | "password">
) => {
    const { email, password } = params

    try {
        const result = await signIn("credentials", {
            email,
            password,
            redirect: false,
        })

        if (result?.error) {
            return { success: false, error: result.error }
        }

        return { success: true } // ✅ FIXED typo

    } catch (err: any) {
        return { success: false, error: err.message || "Login failed" }
    }
}