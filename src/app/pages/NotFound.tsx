import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

export function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-9xl font-bold gradient-text animate-float">404</h1>
          <h2 className="text-4xl font-bold text-white">Page Not Found</h2>
          <p className="text-xl text-gray-400 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/">
            <Button 
              size="lg" 
              className="gap-2 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 border-0 px-8 py-6 text-lg rounded-xl shadow-lg"
            >
              <Home className="w-5 h-5" />
              Go Home
            </Button>
          </Link>
          <Button
            size="lg"
            variant="outline"
            onClick={() => window.history.back()}
            className="gap-2 glass border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-xl"
          >
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
}
