import Link from "next/link";
import NavLinks from "@/components/ui/nav/nav-links";
import Power from "@/icons/power";
import Image from "next/image";
import { signOut } from "@/auth/auth";
import LoginIcon from "@/icons/login";
import PopOver from "@/components/ui/popover/PopOver";
import OptionsUser from "@/components/ui/nav/options-user";
import Search from "@/components/ui/nav/search";
import CategoriesListServer from "@/components/ui/nav/categories-list-server";

export default function Nav({ user }) {
  return (
    <>
      <div className="flex h-full flex-row px-3 py-4 md:px-2">
        <Link
          className=" flex  items-end justify-start rounded-md  mr-2  "
          href="/"
        >
          <div className=" px-2 ">
            <div
              className={` flex flex-row  leading-none text-black  h-[48px] w-full grow items-center justify-center gap-2 rounded-md  p-3 text-sm font-medium hover:text-gray-600 md:flex-none md:justify-start md:p-2 md:px-3`}
            >
              <p className="text-4xl ml-2">E-commerce</p>
            </div>
          </div>
        </Link>
        <div className="flex grow flex-row justify-between space-x-2  ">
          <NavLinks />
          <Search />
          <div className="hidden w-auto h-full grow rounded-md  md:block"></div>
          <div className="flex h-[48px]  grow items-center justify-center gap-2 rounded-md   text-sm font-medium  md:flex-none md:justify-start md:p-2 md:px-3">
            <span className="sr-only">Open user menu</span>
            <PopOver
              title={
                <Image
                  className=" rounded-full p-1"
                  src={user?.image || "https://avatar.vercel.sh/leerob"}
                  height={48}
                  width={48}
                  alt={`${user?.name || "placeholder"} avatar`}
                />
              }
              className="   flex justify-center "
              classNameContent="w-40 top-16 right-0"
            >
              {user ? (
                <>
                  <OptionsUser />
                  <form
                    action={async () => {
                      "use server";
                      await signOut();
                    }}
                  >
                    <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium  hover:text-gray-900 text-gray-600 md:flex-none md:justify-start md:p-2 md:px-3">
                      <Power className="w-6" />
                      <div className="hidden md:block">Sign Out</div>
                    </button>
                  </form>
                </>
              ) : (
                <div>
                  <Link
                    href="/login"
                    className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium  hover:text-gray-900 text-gray-600 md:flex-none md:justify-start md:p-2 md:px-3"
                  >
                    <LoginIcon className="w-6" />
                    <div className="hidden md:block">Sign In</div>
                  </Link>
                </div>
              )}
            </PopOver>
          </div>
        </div>
      </div>
      {/* <CategoriesListServer /> */}
    </>
  );
}
