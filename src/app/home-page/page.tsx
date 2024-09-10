import { type Post } from "@/fakeDb";
import Image from 'next/image'
import Link from 'next/link'
import Time from '@/components/TimeComponent'
import PostActions from "@/components/PostActions";

export default function HomePage({ post }: { post: Post }) {
  
  function renderPostMedia() {
    if (!post.media) return null; 
    
    if (post.media.type === 'image') { 
      return (
        <Image
          src={post.media.url}
          alt={post.content}
          width={post.media.width}
          height={post.media.height}
          className="rounded-lg"
        />
      );
    }
    return null;
  }

  return (
    <article className="flex flex-col justify-center items-center gap-6 py-6 mt-16 w-full max-w-xl mx-auto relative">
      <div className="flex gap-4 items-start w-full">
        
        <Link href={`/${post.user.username}`}>
          <div className="rounded-full h-12 w-12 overflow-hidden relative">
            <Image
              className="object-cover"
              src={post.user.avatar}
              alt={post.user.username}
              priority={true}
              fill={true}
            />
          </div>
        </Link>

        <div className="flex flex-col gap-4 w-full">
          <div className="flex justify-between items-center">
            <Link href={`/${post.user.username}`}>
              <div className="font-bold">{post.user.username}</div>
            </Link>
           
            <p className="dark:text-neutral-400 text-neutral-600 text-sm">
              {Time(new Date(post.date))}
            </p>
          </div>

          {/* Post content */}
          <Link href={`/post/${post.id}`}>
            <p className="font-light text-md">{post.content}</p>
          </Link>

          {renderPostMedia()}

          <PostActions />
        </div>
      </div>

      <div className="flex gap-4 dark:text-neutral-400 text-neutral-600 text-sm">
        <p>{post.likes} likes</p>
        <p>·</p>
        <p>{post.replies} replies</p>
      </div>
    </article>
  );
}
