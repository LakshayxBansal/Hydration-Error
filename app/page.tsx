"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Welcome to Hydration Errors Overview
      </h1>
      <p className="text-xl text-center text-gray-600 mb-8">
        Click the links below to see each Hydration issue and its fix in action
      </p>
      <ul className="space-y-4 text-center">
        <li>
          <Link
            href="/random/bad"
            className="inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Random value Hydration Error (Bad practice)
          </Link>
        </li>
        <li>
          <Link
            href="/random/good"
            className="inline-block bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
          >
            Random value Hydration Error (Good practice)
          </Link>
        </li>
        <li>
          <Link
            href="/state/bad"
            className="inline-block bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
          >
            Inconsistent state Hydration Error (Bad practice)
          </Link>
        </li>
        <li>
          <Link
            href="/state/good"
            className="inline-block bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition"
          >
            Inconsistent state Hydration Error (Good practice)
          </Link>
        </li>
        <li>
          <Link
            href="/styling/bad"
            className="inline-block bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition"
          >
            Styling Hydration Error (Bad practice)
          </Link>
        </li>
        <li>
          <Link
            href="/styling/good"
            className="inline-block bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 transition"
          >
            Styling Hydration Error (Good practice)
          </Link>
        </li>
        <li>
          <Link
            href="/event-handler/bad"
            className="inline-block bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition"
          >
            Event Handler Hydration Error (Bad practice)
          </Link>
        </li>
        <li>
          <Link
            href="/event-handler/good"
            className="inline-block bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600 transition"
          >
            Event Handler Hydration Error (Good practice)
          </Link>
        </li>
      </ul>
    </div>
  );
}