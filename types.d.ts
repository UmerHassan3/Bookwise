interface Books {
    id: number;
    title: string;
    author: string;
    genre: string;
    rating: number;
    description: string;
    color: string;
    cover: string;
    available_copies: number;
    total_copies: number;
    isloaned: boolean;
    timeRemaining?: string; // optional (important for loaned books)
}

interface AuthCredentials {
    email: string,
    fullName: string,
    password: string,
    universityCard: string,
    universityId: number,
}