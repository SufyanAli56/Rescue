"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import Link from "next/link";

export default function Header() {
  const [user, setUser] = useState<{ id: string; email?: string } | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data.user);
    };

    getUser();

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
    <header className="fixed top-0 z-50 w-full bg-slate-900/80 backdrop-blur-xl border-b border-white/10">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="absolute inset-0 bg-red-500 blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
            <div className="relative w-10 h-10 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center">
              <span className="text-2xl">🚨</span>
            </div>
          </div>
          <span className="text-xl font-bold text-white">
            Rapid<span className="text-red-400">Rescue</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {!user ? (
            <>
              <Link href="/features" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                Features
              </Link>
              <Link href="/how-it-works" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                How it Works
              </Link>
              <Link href="/volunteers" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                Volunteers
              </Link>
            </>
          ) : (
            <>
              <Link href="/dashboard" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                Dashboard
              </Link>
              <Link href="/alert" className="text-sm font-medium text-red-400 hover:text-red-300 transition-colors">
                Emergency
              </Link>
              <Link href="/map" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                Live Map
              </Link>
            </>
          )}
        </nav>

        {/* Auth Buttons */}
        <div className="flex items-center gap-4">
          {!user ? (
            <>
              <Link href="/login" className="hidden sm:block text-sm font-medium text-gray-300 hover:text-white transition-colors">
                Login
              </Link>
              <Link
                href="/signup"
                className="px-6 py-2.5 bg-gradient-to-r from-red-600 to-red-700 text-white text-sm font-bold rounded-lg hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-lg shadow-red-500/30"
              >
                Get Started
              </Link>
            </>
          ) : (
            <button
              onClick={logout}
              className="px-6 py-2.5 bg-white/10 backdrop-blur-sm text-white text-sm font-medium rounded-lg border border-white/20 hover:bg-white/20 transition-all"
            >
              Logout
            </button>
          )}

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-white"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-800/95 backdrop-blur-xl border-t border-white/10">
          <nav className="px-6 py-4 space-y-3">
            {!user ? (
              <>
                <Link href="/features" className="block text-gray-300 hover:text-white py-2">
                  Features
                </Link>
                <Link href="/how-it-works" className="block text-gray-300 hover:text-white py-2">
                  How it Works
                </Link>
                <Link href="/volunteers" className="block text-gray-300 hover:text-white py-2">
                  Volunteers
                </Link>
                <Link href="/login" className="block text-gray-300 hover:text-white py-2">
                  Login
                </Link>
              </>
            ) : (
              <>
                <Link href="/dashboard" className="block text-gray-300 hover:text-white py-2">
                  Dashboard
                </Link>
                <Link href="/alert" className="block text-red-400 hover:text-red-300 py-2">
                  Emergency
                </Link>
                <Link href="/map" className="block text-gray-300 hover:text-white py-2">
                  Live Map
                </Link>
              </>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
