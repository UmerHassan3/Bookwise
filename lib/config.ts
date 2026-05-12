const config = {
    env: {
        databaseURL:process.env.DATABASE_URL!,
        apiEndpoint:process.env.API_ENDPOINT!,
        imagekit: {
            urlEndpoint: process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT!,
            publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY!,
            privateKey: process.env.IMAGEKIT_PRIVATE_KEY!,
        }
    }
}

export default config;