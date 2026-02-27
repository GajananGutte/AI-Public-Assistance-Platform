import { Outlet, Link, useLocation } from "react-router";
import { Button } from "../components/ui/button";
import { Menu, X, Home, FileText, Search, Languages, Sparkles } from "lucide-react";
import { useState } from "react";

export function Root() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/file-complaint", label: "File Complaint", icon: FileText },
    { path: "/track-complaints", label: "Track Status", icon: Search },
    { path: "/translator", label: "Translator", icon: Languages },
  ];

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a1e] via-[#1a1a3e] to-[#0a0a1e] relative overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 -left-40 w-80 h-80 bg-purple-500/20 rounded-full blur-[128px] animate-pulse"></div>
        <div className="absolute top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-[128px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-0 left-1/2 w-80 h-80 bg-cyan-500/20 rounded-full blur-[128px] animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10">
        <div className="glass-strong">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              <Link to="/" className="flex items-center gap-3 group">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative w-12 h-12 bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-xl">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    CivicEase
                  </h1>
                  <p className="text-xs text-gray-400 font-medium">AI-Powered Public Services</p>
                </div>
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center gap-2">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const active = isActive(item.path);
                  return (
                    <Link key={item.path} to={item.path}>
                      <Button
                        variant="ghost"
                        className={`gap-2 relative group ${
                          active 
                            ? "text-white" 
                            : "text-gray-300 hover:text-white"
                        }`}
                      >
                        {active && (
                          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-lg blur-sm"></div>
                        )}
                        <Icon className="w-4 h-4 relative z-10" />
                        <span className="relative z-10">{item.label}</span>
                      </Button>
                    </Link>
                  );
                })}
              </nav>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-white"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </Button>
            </div>

            {/* Mobile Navigation */}
            {mobileMenuOpen && (
              <nav className="md:hidden pb-4 space-y-2">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const active = isActive(item.path);
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <Button
                        variant="ghost"
                        className={`w-full justify-start gap-2 ${
                          active 
                            ? "bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-white" 
                            : "text-gray-300 hover:text-white"
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                        {item.label}
                      </Button>
                    </Link>
                  );
                })}
              </nav>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Outlet />
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 mt-20">
        <div className="glass">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="md:col-span-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-500 rounded-xl flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xl font-bold gradient-text">CivicEase</span>
                </div>
                <p className="text-gray-400 text-sm mb-4 max-w-md">
                  An AI-powered platform to improve access to public services,
                  especially for rural areas and senior citizens. No middlemen,
                  full transparency.
                </p>
                <div className="flex gap-3">
                  {['twitter', 'facebook', 'instagram', 'linkedin'].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="w-10 h-10 glass rounded-lg flex items-center justify-center hover:bg-white/10 transition-colors group"
                    >
                      <div className="w-5 h-5 bg-gradient-to-br from-indigo-400 to-purple-400 rounded group-hover:from-cyan-400 group-hover:to-purple-400 transition-all"></div>
                    </a>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold text-white mb-4 text-lg">
                  Quick Links
                </h3>
                <ul className="space-y-3 text-sm">
                  <li>
                    <Link to="/file-complaint" className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></span>
                      File a Complaint
                    </Link>
                  </li>
                  <li>
                    <Link to="/track-complaints" className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></span>
                      Track Status
                    </Link>
                  </li>
                  <li>
                    <Link to="/translator" className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></span>
                      Document Translator
                    </Link>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-white mb-4 text-lg">
                  Contact
                </h3>
                <div className="space-y-3 text-sm text-gray-400">
                  <p className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full"></span>
                    Toll Free: 1800-XXX-XXXX
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full"></span>
                    Email: support@civicease.gov
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full"></span>
                    Available 24/7
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 pt-8 border-t border-white/10 text-center">
              <p className="text-sm text-gray-400">
                © 2026 <span className="gradient-text font-semibold">CivicEase</span>. Empowering citizens with accessible public services.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
