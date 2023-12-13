import { conn } from "@/lib/database";
import { NextRequest } from "next/server";
export async function GET(request) {
  try {
    const query =
      "SELECT id, name, description, image, price FROM products WHERE category-id = $1";
    const values = [request.nextUrl.searchParams.get("category")];
    const result = await conn.query(query, values);
    return new Response(JSON.stringify({ data: result.rows }));
  } catch (error) {
    return new Response(JSON.stringify(error), { status: 500 });
  }
}
