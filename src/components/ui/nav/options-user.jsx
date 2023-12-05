"use client";
import UserCircleIcon from "@/icons/user-circle";
import { usePathname } from "next/navigation";
import Link from "next/link";
import TruckDeliveryIcon from "@/icons/truck-delivery";

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
// const links = [{ name: "Home", href: "/home", icon: Home }];
const links = [
  { name: "Mi cuenta", href: "/account", icon: UserCircleIcon },
  { name: "Mis pedidos", href: "/orders", icon: TruckDeliveryIcon },
];
export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={`flex h-[48px]  w-full items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium  hover:text-gray-900 md:justify-start text-gray-600 ${
              pathname === link.href ? "bg-sky-100 text-gray-900" : ""
            }`}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
