"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

export default function Header() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data.user);
    };

    getUser();

    // Optional: listen to auth state changes
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  const logout = async () => {
    await supabase.auth.signOut();
    window.location.reload();
  };

  return (
    <header className="z-50 w-full bg-white backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-2 text-xl font-bold tracking-tight text-gray-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="red"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6"
            >
              <rect x="9" y="3" width="6" height="18" fill="red" />
              <rect x="3" y="9" width="18" height="6" fill="red" />
            </svg>
            RapidRescue
          </span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {!user ? (
            <>
              <a href="/features" className="text-sm font-medium text-gray-600 hover:text-gray-900">
                Features
              </a>
              <a href="/how-it-works" className="text-sm font-medium text-gray-600 hover:text-gray-900">
                How it Works
              </a>
              <a href="/volunteers" className="text-sm font-medium text-gray-600 hover:text-gray-900">
                Volunteers
              </a>
            </>
          ) : (
            <>
              {/* New menu items after login */}
              <a href="/dashboard" className="text-sm font-medium text-gray-600 hover:text-gray-900">
                Dashboard
              </a>
              <a href="/emergency" className="text-sm font-medium text-red-600 hover:text-red-700">
                Emergency
              </a>
              <a href="/map" className="text-sm font-medium text-gray-600 hover:text-gray-900">
                Live Map
              </a>
              {/* Add your new menu item here */}
              <a href="/notifications" className="text-sm font-medium text-gray-600 hover:text-gray-900">
                Notifications
              </a>
            </>
          )}
        </nav>

        {/* Auth Buttons */}
        <div className="flex items-center gap-4">
          {!user ? (
            <>
              <a href="/login" className="text-sm font-medium text-gray-700 hover:text-gray-900">
                Login
              </a>
              <a
                href="/signup"
                className="rounded-lg bg-red-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-red-700 transition"
              >
                Sign Up
              </a>
            </>
          ) : (
            <button
              onClick={logout}
              className="rounded-lg bg-gray-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-800"
            >
              Logout
            </button>
          )}
        </div>

      </div>
    </header>
  );
}