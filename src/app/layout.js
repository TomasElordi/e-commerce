import { inter } from "@/components/fonts";
import Nav from "@/components/ui/nav/nav";
import { auth } from "@/auth/auth";
import "@/app/globals.css";
export const metadata = {
  title: "E-commerce",
  description: "Generated by tokify",
};

export default async function RootLayout({ children }) {
  const session = await auth();
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} `}>
        <div className=" ">
          <div className="w-full flex-none ">
            <Nav user={session?.user} />
          </div>
          {/* <div className="flex-grow p-6 md:overflow-y-auto md:p-12"> */}
          <div className="">{children}</div>
        </div>
      </body>
    </html>
  );
}
