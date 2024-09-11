

import Link from "next/link";
import { HomeIcon } from "@heroicons/react/24/solid";
import { HeartIcon } from "@heroicons/react/16/solid";
import { UserCircleIcon } from "@heroicons/react/16/solid";

export default function NavBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 w-full bg-black flex justify-around items-center p-4">
      <ul className="flex justify-between w-full max-w-lg">
        <li>
          <Link href="/">
            <HomeIcon className="h-8 w-8 text-gray-300" />
          </Link>
        </li>
        <li>
          <Link href="/search">
            <svg
              className="h-8 w-8 text-gray-300"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m21 21l-6-6m2-5a7 7 0 1 1-14 0a7 7 0 0 1 14 0"
              />
            </svg>
          </Link>
        </li>
        <li>
          <Link href="/create-post">
            <svg
              className="h-8 w-8 text-gray-300"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M18 10h-4V6a2 2 0 0 0-4 0l.071 4H6a2 2 0 0 0 0 4l4.071-.071L10 18a2 2 0 0 0 4 0v-4.071L18 14a2 2 0 0 0 0-4"
              />
            </svg>
          </Link>
        </li>
        <li>
          <Link href="/activity">
          <HeartIcon className="h-8 w-8" />
          </Link>
        </li>
        <li>
          <Link href="/profile">
          <UserCircleIcon className="h-8 w-8" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
