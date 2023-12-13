import { conn } from "@/lib/database";
export async function GET(request) {
  try {
    // Hacer la query para obtener todos los productos de la tabla products y el nombre de la categoría de la tabla categories
    if (request.nextUrl.searchParams.get("category")) {
      const query =
        "SELECT products.id, products.name, categories.name AS category_name, products.description, products.price, products.image FROM products JOIN categories ON products.category_id = categories.id WHERE categories.name = $1";
      const values = [request.nextUrl.searchParams.get("category")];
      const result = await conn.query(query, values);
      return new Response(JSON.stringify({ data: result.rows }));
    }
    if (request.nextUrl.searchParams.get("query")) {
      const query =
        "SELECT products.id, products.name, categories.name AS category_name, products.description, products.price, products.image FROM products JOIN categories ON products.category_id = categories.id WHERE products.name LIKE $1";
      const values = [`%${request.nextUrl.searchParams.get("query")}%`];
      const result = await conn.query(query, values);
      return new Response(JSON.stringify({ data: result.rows }));
    }
    const query =
      "SELECT products.id, products.name, categories.name AS category_name, products.description, products.price, products.image FROM products JOIN categories ON products.category_id = categories.id";
    const result = await conn.query(query);
    return new Response(JSON.stringify({ data: result.rows }));
  } catch (error) {
    return new Response(JSON.stringify(error), { status: 500 });
  }
}
