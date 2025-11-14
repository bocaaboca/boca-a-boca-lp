import { createClient } from "@supabase/supabase-js"

export async function POST(request: Request) {
  try {
    const { name, contact } = await request.json()

    if (!name || !contact) {
      return new Response(JSON.stringify({ error: "Name and contact are required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      })
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY

    if (!supabaseUrl || !supabaseKey) {
      console.error("Missing Supabase environment variables")
      return new Response(JSON.stringify({ error: "Server configuration error" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      })
    }

    const supabase = createClient(supabaseUrl, supabaseKey)

    const { error } = await supabase.from("waitlist").insert({
      name,
      contact,
      created_at: new Date().toISOString(),
    })

    if (error) {
      console.error("Supabase error:", error)
      return new Response(JSON.stringify({ error: error.message }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      })
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    })
  } catch (error) {
    console.error("API error:", error)
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
}
