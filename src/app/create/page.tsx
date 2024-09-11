import CreatePostForm from "@/components/Create-Post-Form";
import { notFound } from "next/navigation";
import * as fakeDb from "@/fakeDb";
import NavBar from "../NavBar/page";

export default function Create() {
    const username = 'ahmedcalif';
    const user = fakeDb.getUser(username);
    if (!user) {
        notFound();
    }

    return (
        <>
            <NavBar />
            
            <div className="min-h-screen bg-black text-white flex flex-col items-center pt-16">
                <div className="w-full max-w-2xl px-8 py-8 bg-gray-900 rounded-lg shadow-lg">
                    <CreatePostForm user={user} />
                </div>
            </div>
        </>
    );
}
