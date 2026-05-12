import { number, string } from "zod"

export const sampleBooks = [
    {
        "id": 1,
        "title": "The Silent Patient",
        "author": "Alex Michaelides",
        "genre": "Psychological Thriller",
        "rating": 4.5,
        "total_copies": 10,
        "available_copies": 6,
        "description": "A shocking psychological thriller about a woman who stops speaking after a violent crime.",
        "color": "#1f2937",
        "cover": "https://images.unsplash.com/photo-1544947950-fa07a98d237f",
        "video": "https://example.com/videos/silent-patient.mp4",
        "summary": "A woman shoots her husband and then stops speaking. A psychotherapist tries to uncover the truth behind her silence.",
        "isloaned": false
    },
    {
        "id": 2,
        "title": "Atomic Habits",
        "author": "James Clear",
        "genre": "Self-Help",
        "rating": 4.8,
        "total_copies": 15,
        "available_copies": 3,
        "description": "A guide to building good habits and breaking bad ones.",
        "color": "#f59e0b",
        "cover": "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
        "video": "https://example.com/videos/atomic-habits.mp4",
        "summary": "Small habits compound into big results. This book teaches how tiny changes create remarkable outcomes.",
        "isloaned": true
    },
    {
        "id": 3,
        "title": "Harry Potter and the Sorcerer's Stone",
        "author": "J.K. Rowling",
        "genre": "Fantasy",
        "rating": 4.9,
        "total_copies": 20,
        "available_copies": 12,
        "description": "A young wizard discovers his magical destiny.",
        "color": "#7c3aed",
        "cover": "https://images.unsplash.com/photo-1512820790803-83ca734da794",
        "video": "https://example.com/videos/harry-potter.mp4",
        "summary": "Harry Potter learns he is a wizard and begins his journey at Hogwarts School of Witchcraft and Wizardry.",
        "isloaned": false
    },
    {
        "id": 4,
        "title": "Deep Work",
        "author": "Cal Newport",
        "genre": "Productivity",
        "rating": 4.6,
        "total_copies": 8,
        "available_copies": 2,
        "description": "Rules for focused success in a distracted world.",
        "color": "#0ea5e9",
        "cover": "https://images.unsplash.com/photo-1455390582262-044cdead277a",
        "video": "https://example.com/videos/deep-work.mp4",
        "summary": "Focused, distraction-free work is becoming rare but extremely valuable in modern life.",
        "isloaned": true
    },
    {
        "id": 5,
        "title": "The Alchemist",
        "author": "Paulo Coelho",
        "genre": "Philosophical Fiction",
        "rating": 4.7,
        "total_copies": 12,
        "available_copies": 9,
        "description": "A journey of a shepherd boy searching for treasure.",
        "color": "#10b981",
        "cover": "https://images.unsplash.com/photo-1519681393784-d120267933ba",
        "video": "https://example.com/videos/alchemist.mp4",
        "summary": "A boy travels across deserts to discover that treasure lies within the journey itself.",
        "isloaned": false
    },
    {
        "id": 6,
        "title": "Rich Dad Poor Dad",
        "author": "Robert Kiyosaki",
        "genre": "Finance",
        "rating": 4.4,
        "total_copies": 18,
        "available_copies": 5,
        "description": "Lessons on financial literacy and wealth building.",
        "color": "#ef4444",
        "cover": "https://images.unsplash.com/photo-1553729459-efe14ef6055d",
        "video": "https://example.com/videos/rich-dad.mp4",
        "summary": "Two fathers teach different lessons about money, shaping the author's financial mindset.",
        "isloaned": true
    }
]
export const Field_Name={
    fullName:"Full Name",
    email:"Email",
    password:"Password",
    universityId:"University Id Number",
    universityCard:"University Card",
}

export const Field_Type = {
  fullName: "text",
  email: "email",
  password: "password",
  universityId: "number",
}