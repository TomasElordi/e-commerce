"use client";
import { notFound, usePathname } from "next/navigation";
import Link from "next/link";
export default function CategoriesList({ categories }) {
  const pathname = usePathname();
  return (
    <nav className="flex flex-row">
      {categories.map((category) => (
        <Link
          key={category}
          href={`/category/${category}`}
          className={`text-gray-600 hover:text-gray-900 p-1 border-b-2 border-transparent hover:border-gray-900 m-1 text-lg ${
            pathname === `/category/${category}`
              ? "border-gray-900 text-gray-900"
              : ""
          } `}
        >
          {category}
        </Link>
      ))}
    </nav>
  );
}
