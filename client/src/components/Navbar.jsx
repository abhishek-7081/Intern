import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-10 py-5 flex items-center justify-between">
        
        {/* Logo */}
        <h1 className="text-3xl font-extrabold tracking-widest">
          <span className="text-yellow-300">Gig</span>Flow
        </h1>

        {/* Links */}
        <div className="flex items-center space-x-10">
          <Link
            to="/"
            className="uppercase tracking-wide font-medium 
                       hover:text-cyan-200 transition-colors"
          >
            Gigs
          </Link>

          <Link
            to="/post"
            className="uppercase tracking-wide font-medium 
                       hover:text-cyan-200 transition-colors"
          >
            Post Gig
          </Link>

          <Link
            to="/dashboard"
            className="uppercase tracking-wide font-medium 
                       hover:text-cyan-200 transition-colors"
          >
            Dashboard
          </Link>

          <Link
            to="/login"
            className="bg-white/10 backdrop-blur-md border border-white/20 
                       px-6 py-2 rounded-full text-sm uppercase tracking-wider
                       hover:bg-white/20 transition-all shadow-lg"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}
