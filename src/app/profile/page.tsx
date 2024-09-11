import NavBar from "../NavBar/page";
import * as fakeDb from '@/fakeDb';
import { type Post, type User } from "@/fakeDb";

export default function Profile() {
    const username = 'ahmedcalif'; // Change to desired username
    const getUser = fakeDb.getUser(username);

    return (
        <>
            <NavBar />
                {getUser ? (
                    <div className="flex flex-col items-center mt-24">
                        {/* Avatar */}
                        <img
                            className="rounded-full h-24 w-24 object-cover mb-4"
                            src={getUser.avatar}
                            alt={`${getUser.firstName}'s avatar`}
                        />

                        {/* User Information */}
                        <h1 className="text-3xl font-bold">{getUser.firstName} {getUser.lastName}</h1>
                        <h2 className="text-lg text-gray-300">{getUser.username}</h2>
                        <p className="text-gray-400 mt-2">{getUser.followers} followers</p>

                        {/* Posts Section */}
                        <div className="mt-8 w-full px-8 max-w-4xl">
                            <h3 className="text-xl font-semibold border-b border-gray-600 pb-2">Posts</h3>
                            <ul>
                                {fakeDb.getPostsFromUser(username)?.map((post) => (
                                    <li key={post.id} className="text-gray-200 mt-4">
                                        <p>{post.content}</p>
                                        <p className="text-sm text-gray-400">Likes: {post.likes}, Replies: {post.replies}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ) : (
                    <p className="text-red-500">User not found for username: {username}</p>
                )}
</>
    )
}
