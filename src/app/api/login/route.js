import { conn } from "@/lib/database";

export async function POST(request) {
  const body = await request.json();
  try {
    const query = "SELECT * FROM users WHERE email= $1";
    const values = [body.email];
    const result = await conn.query(query, values);
    const user = result.rows[0];
    return new Response(JSON.stringify({ data: user }));
  } catch (error) {
    return new Response(JSON.stringify(error));
  }
}
