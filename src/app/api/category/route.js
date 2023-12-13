import { conn } from "@/lib/database";
export async function GET() {
  try {
    const query = "SELECT id, name, description FROM categories WHERE id = $1";
    const values = [request.params.id];
    const result = await conn.query(query, values);
    return new Response(JSON.stringify({ data: result.rows }));
  } catch (error) {
    return new Response(JSON.stringify(error), { status: 500 });
  }
}
