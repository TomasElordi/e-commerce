import { notFound } from "next/navigation";
import Image from "next/image";

export default async function Page({ searchParams }) {
  const category = searchParams?.category;
  let products;
  let res;
  if (category) {
    res = await fetch(`${process.env.URL}/api/products?category=${category}`);
    products = (await res.json()).data;
  } else {
    res = await fetch(`${process.env.URL}/api/products`);
    products = (await res.json()).data;
  }
  if (!res.ok || !products) return notFound();

  return (
    <main className="flex justify-center mx-8">
      <section className="grid grid-cols-4 space-x-2">
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

            <p className="text-gray-500">{product.description}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
