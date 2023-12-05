import { notFound } from "next/navigation";
import CategoriesList from "@/components/ui/nav/categories-list";
export default async function CategoriesListServer() {
  const res = await fetch("https://fakestoreapi.com/products/categories");
  const categories = await res.json();
  if (!categories) return notFound();
  return <CategoriesList categories={categories} />;
}
