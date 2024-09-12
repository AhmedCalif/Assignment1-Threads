'use client'

import { useParams } from 'next/navigation';
import * as fakeDb from '@/fakeDb';
import NavBar from '@/app/NavBar/page';

export default function SinglePost() {
  const {id} = useParams();

  const singularPost = fakeDb.getPost(Number(id));

  return (
    <>
      <NavBar />
      <div className="flex flex-col justify-center items-center h-screen mt-22">
        {singularPost ? (
          <>
            <h1 className="text-2xl font-bold">{singularPost.content}</h1>
            <p>By: {singularPost.user.firstName} {singularPost.user.lastName}</p>
            <p>{singularPost.likes} Likes</p>
          </>
        ) : (
          <p>Post not found</p>
        )}
      </div>
    </>
  );
}
