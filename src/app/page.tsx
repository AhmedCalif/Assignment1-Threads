import Image from "next/image";
import NavBar from './NavBar/page';
import HomePage from "./home-page/page";
import * as fakeDb from "@/fakeDb";

export default function Home() {

  
  const fakePosts = fakeDb.getPosts(); 
  
  return (
    <>
      <NavBar />
      <div className="flex flex-col divide-y" style={{ height: 3000 }}>
        {fakePosts.map((post) => (
          <HomePage key={post.id} post={post} />
        ))}
      </div>
    </>
  );
}
