// components/Header.tsx
export default function Header() {
    return (
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tight text-gray-900">
              YourSaaS
            </span>
          </div>
  
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium text-gray-600 hover:text-gray-900">
              Features
            </a>
            <a href="#pricing" className="text-sm font-medium text-gray-600 hover:text-gray-900">
              Pricing
            </a>
            <a href="#docs" className="text-sm font-medium text-gray-600 hover:text-gray-900">
              Docs
            </a>
          </nav>
  
          <div>
            <a
              href="/login"
              className="rounded-lg bg-gray-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-800 transition"
            >
              Login
            </a>
          </div>
        </div>
      </header>
    );
  }