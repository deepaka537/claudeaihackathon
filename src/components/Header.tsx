import { Link } from "react-router-dom";
import { Home, Calendar, Shuffle, Users, Bell, Lightbulb } from "lucide-react";

export function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-2xl font-bold">
            <Lightbulb className="w-8 h-8" />
            ChoreSense
          </Link>
          <nav className="flex gap-6">
            <Link
              to="/"
              className="flex items-center gap-1 hover:bg-blue-700 px-3 py-2 rounded transition"
            >
              <Home className="w-5 h-5" />
              Dashboard
            </Link>
            <Link
              to="/schedule"
              className="flex items-center gap-1 hover:bg-blue-700 px-3 py-2 rounded transition"
            >
              <Calendar className="w-5 h-5" />
              Schedule
            </Link>
            <Link
              to="/swap"
              className="flex items-center gap-1 hover:bg-blue-700 px-3 py-2 rounded transition"
            >
              <Shuffle className="w-5 h-5" />
              Swap
            </Link>
            <Link
              to="/roommates"
              className="flex items-center gap-1 hover:bg-blue-700 px-3 py-2 rounded transition"
            >
              <Users className="w-5 h-5" />
              Roommates
            </Link>
            <Link
              to="/notifications-demo"
              className="flex items-center gap-1 hover:bg-blue-700 px-3 py-2 rounded transition"
            >
              <Bell className="w-5 h-5" />
              Notifications
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
