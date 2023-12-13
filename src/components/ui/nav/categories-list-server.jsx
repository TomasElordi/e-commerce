import { notFound } from "next/navigation";
import CategoriesList from "@/components/ui/nav/categories-list";
export default async function CategoriesListServer() {
  let categories;
  try {
    const res = await fetch(`${process.env.URL}/api/categories`);
    categories = (await res.json()).data;
    if (!categories || res.status >= 400)
      return <p>Error categories no encontradas</p>;
  } catch (error) {
    return <p>Error {error}</p>;
  }

  return <CategoriesList categories={categories} />;
}
