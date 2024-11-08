import React from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Home,
  Calendar,
  Users,
  BookOpen,
  MessageSquare,
  Settings,
  LogOut
} from 'lucide-react';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('user_role');
    navigate('/login');
  };

  const isActive = (path: string) => {
    return location.pathname.startsWith(path) ? 'bg-indigo-50 text-indigo-600' : 'text-gray-600 hover:bg-indigo-50 hover:text-indigo-600';
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <motion.aside
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        className="w-64 bg-white border-r"
      >
        <div className="p-6">
          <Link to="/" className="flex items-center space-x-2 group">
            <GraduationCap className="h-8 w-8 text-indigo-600 group-hover:scale-110 transition-transform" />
            <span className="text-xl font-bold group-hover:text-indigo-600 transition-colors">Future Skills</span>
          </Link>
        </div>

        <nav className="mt-6">
          <div className="px-4 space-y-2">
            <Link
              to="/dashboard"
              className={`flex items-center space-x-2 w-full px-4 py-2 rounded-lg transition ${isActive('/dashboard')}`}
            >
              <Home className="h-5 w-5" />
              <span>Dashboard</span>
            </Link>
            
            <Link
              to="/schedule"
              className={`flex items-center space-x-2 w-full px-4 py-2 rounded-lg transition ${isActive('/schedule')}`}
            >
              <Calendar className="h-5 w-5" />
              <span>Schedule</span>
            </Link>
            
            <Link
              to="/clients"
              className={`flex items-center space-x-2 w-full px-4 py-2 rounded-lg transition ${isActive('/clients')}`}
            >
              <Users className="h-5 w-5" />
              <span>Clients</span>
            </Link>
            
            <Link
              to="/resources"
              className={`flex items-center space-x-2 w-full px-4 py-2 rounded-lg transition ${isActive('/resources')}`}
            >
              <BookOpen className="h-5 w-5" />
              <span>Resources</span>
            </Link>
            
            <Link
              to="/settings"
              className={`flex items-center space-x-2 w-full px-4 py-2 rounded-lg transition ${isActive('/settings')}`}
            >
              <Settings className="h-5 w-5" />
              <span>Settings</span>
            </Link>
          </div>

          <div className="absolute bottom-0 w-full p-4">
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 w-full px-4 py-2 text-gray-600 hover:bg-red-50 hover:text-red-600 rounded-lg transition"
            >
              <LogOut className="h-5 w-5" />
              <span>Logout</span>
            </button>
          </div>
        </nav>
      </motion.aside>

      <main className="flex-1">
        <header className="bg-white border-b">
          <div className="px-6 py-4">
            <h1 className="text-2xl font-semibold">Dashboard</h1>
          </div>
        </header>

        {children}
      </main>
    </div>
  );
}