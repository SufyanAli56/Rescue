"use client";

import { useState } from "react";
import { supabase } from "@/app/lib/supabase";

export default function SignupPage() {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const handleSignup = async () => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if(error){
      alert(error.message)
    }else{
      alert("Check your email to confirm signup")
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center">

      <div className="w-full max-w-md p-8 bg-white rounded-xl shadow">

        <h1 className="text-2xl font-bold mb-6 text-center">
          Create Account
        </h1>

        <input
          className="w-full border p-2 mb-4 rounded"
          placeholder="Email"
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          type="password"
          className="w-full border p-2 mb-4 rounded"
          placeholder="Password"
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button
          onClick={handleSignup}
          className="w-full bg-red-500 text-white py-2 rounded"
        >
          Sign Up
        </button>

      </div>

    </div>
  )
}