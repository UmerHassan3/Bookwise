import config from "@/lib/config"
import ImageKit from "imagekit"
import { NextResponse } from "next/server"

const imagekitConfig = config.env.imagekit

const publicKey = imagekitConfig?.publicKey
const privateKey = imagekitConfig?.privateKey
const urlEndpoint = imagekitConfig?.urlEndpoint

if (!publicKey || !privateKey || !urlEndpoint) {
  throw new Error("Missing ImageKit environment variables")
}

const imagekit = new ImageKit({
  publicKey,
  privateKey,
  urlEndpoint,
})

export async function GET() {
  return NextResponse.json(imagekit.getAuthenticationParameters())
}