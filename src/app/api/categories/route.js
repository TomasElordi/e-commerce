import { conn } from "@/lib/database";
export async function GET(request) {
  try {
    const query = "SELECT id, name, description FROM categories ";
    const result = await conn.query(query);
    return new Response(JSON.stringify({ data: result.rows }));
  } catch (error) {
    return new Response(JSON.stringify(error), { status: 500 });
  }
}
