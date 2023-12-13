import { notFound } from "next/navigation";
import Image from "next/image";
import SideBar from "@/components/ui/sidebar/SideBar";

export default async function Page({ searchParams }) {
  const category = searchParams?.category;
  const query = searchParams?.query;
  let products;
  let res;
  // if (category) {
  //   res = await fetch(`${process.env.URL}/api/products?category=${category}`);
  //   products = (await res.json()).data;
  // }
  if (query) {
    res = await fetch(`${process.env.URL}/api/products?query=${query}`);
    products = (await res.json()).data;
  } else {
    res = await fetch(`${process.env.URL}/api/products`);
    products = (await res.json()).data;
  }
  if (!res.ok || !products) return notFound();

  return (
    <main className="flex  mx-8">
      <SideBar />
      <div className="">
        <section className="flex flex-col space-x-2">
          {products.map((product) => (
            <article key={product.id} className="shadow p-2 ">
              <h1 className=" font-bold text-lg">{product.name}</h1>

              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={300}
              />
              <p>Precio: ${product.price}</p>

              {/* <p className="text-gray-500">{product.description}</p> */}
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
