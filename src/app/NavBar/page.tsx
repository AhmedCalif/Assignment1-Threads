import Link from "next/link";
import { HomeIcon } from "@heroicons/react/24/solid";

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
          <Link href="/Notifications">
            <svg
              className="h-8 w-8 text-gray-300"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                d="M12 21c-4.5-4-8-6.9-8-10a6 6 0 0112 0 6 6 0 0112 0c0 3.1-3.5 6-8 10z"
              />
            </svg>
          </Link>
        </li>
        <li>
          <Link href="/profile">
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
                d="M12 15c3.3 0 6 2.7 6 6M6 21c0-3.3 2.7-6 6-6zm0-6a6 6 0 0112 0a6 6 0 01-12 0zM12 3a4 4 0 110 8a4 4 0 010-8z"
              />
            </svg>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
