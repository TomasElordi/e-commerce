import { notFound } from "next/navigation";
export default async function Page({ params }) {
  const { category } = params;
  const res = await fetch(
    `https://fakestoreapi.com/products/category/${category}`
  );
  const products = await res.json();
  if (!products) return notFound();
  console.log(products);
  return (
    <div>
      <h1>Category Page</h1>
      <p>Category {category}</p>
      {/* Make card for product
      

      */}

      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <div className="flex flex-row">
              <div className="flex flex-col">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-10 w-10"
                />
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <p>{product.price}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
