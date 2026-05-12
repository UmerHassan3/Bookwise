"use client"

import config from "@/lib/config"
import { IKContext, IKUpload, IKImage } from "imagekitio-react"
import React, { useRef, useState } from "react"
import { Upload } from "lucide-react"

type Props = {
  value?: string
  onChange: (url: string) => void
}

const ImageUpload = ({ value, onChange }: Props) => {

  const imagekitConfig = config.env.imagekit

  const publicKey = imagekitConfig?.publicKey
  const urlEndpoint = imagekitConfig?.urlEndpoint

  if (!publicKey || !urlEndpoint) {
    throw new Error("Missing ImageKit environment variables")
  }

  const authenticator = async () => {
    const response = await fetch(`/api/auth/imagekit`)
    const res = await response.json()
    return res
  }

  const [file, setFile] = useState<string | null>(null)
  const uploadRef = useRef<any>(null)

  const onSuccess = (res: any) => {
    setFile(res.url)
    onChange(res.url)
    console.log("Upload success:", res)
  }

  const onError = (err: any) => {
    console.log("Upload error:", err)
  }

  return (
    <IKContext
      publicKey={publicKey}
      urlEndpoint={urlEndpoint}
      authenticator={authenticator}
    >

      <div className="space-y-4">

        {/* HIDDEN UPLOAD */}
        <IKUpload
          ref={uploadRef}
          className="hidden"
          onSuccess={onSuccess}
          onError={onError}
          fileName="upload.png"
        />

        {/* BUTTON */}
        <button
          type="button"
          onClick={() => uploadRef.current?.click()}
          className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition"
        >
          {file ? (
            <span className="truncate max-w-[200px]">
              {file}
            </span>
          ) : (
            <>
              <Upload className="w-5 h-5" />
              <span>Upload Image</span>
            </>
          )}
        </button>

        {/* PREVIEW */}
        {file && (
          <div className="mt-3">
            <IKImage
              src={file}
              width={300}
              height={300}
              alt="uploaded-image"
            />
          </div>
        )}

      </div>

    </IKContext>
  )
}

export default ImageUpload