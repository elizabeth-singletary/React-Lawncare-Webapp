import { createClient } from '@supabase/supabase-js'
import { NextResponse } from 'next/server'

export async function POST(request) {
    const supabaseUrl = 'https://armysdalwzlfvbxvsyxi.supabase.co'
    const supabaseKey = process.env.SUPABASE_KEY
    const supabase = createClient(supabaseUrl, supabaseKey)

    try {
        const { data, error } = await supabase
          .from("users")
          .insert(request);
    
        if (error) {
          console.error("Error:", error);
        } else {
          console.log("Success:", data);
        }
      } catch (err) {
        console.error("Error:", err.message);
      }

    return NextResponse.json(data)
  }