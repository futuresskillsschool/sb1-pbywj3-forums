import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Users, Search, Plus, ChevronRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ForumCategory from '../components/forum/ForumCategory';
import { forumData } from '../data/forumData';
import CreateTopicModal from '../components/forum/CreateTopicModal';

export default function Forums() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-indigo-600 to-purple-600 text-white">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")',
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}
        ></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="flex justify-center mb-6"
            >
              <div className="p-3 bg-white/10 rounded-full backdrop-blur-sm">
                <Sparkles className="h-8 w-8" />
              </div>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Welcome to Future Skills Forums
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-indigo-100 max-w-2xl mx-auto"
            >
              Join our vibrant community of professionals, share your experiences, and learn from peers around the world.
            </motion.p>
          </motion.div>
        </div>
        
        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-[60px] transform translate-y-1"
          >
            <path
              d="M0 30L60 25C120 20 240 10 360 15C480 20 600 40 720 45C840 50 960 40 1080 35C1200 30 1320 30 1380 30L1440 30V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V30Z"
              fill="#f9fafb"
            />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Forum Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 -mt-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-indigo-100 rounded-lg">
                <MessageSquare className="h-8 w-8 text-indigo-600" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Total Topics</h3>
                <p className="text-2xl font-bold text-gray-900">2.4K</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-green-100 rounded-lg">
                <MessageSquare className="h-8 w-8 text-green-600" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Total Posts</h3>
                <p className="text-2xl font-bold text-gray-900">14.2K</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Active Users</h3>
                <p className="text-2xl font-bold text-gray-900">892</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Search and Create Topic */}
        <div className="mt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search forums..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>
          <button
            onClick={() => setIsCreateModalOpen(true)}
            className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition shadow-md hover:shadow-lg"
          >
            <Plus className="h-5 w-5 mr-2" />
            New Topic
          </button>
        </div>

        {/* Breadcrumbs */}
        <div className="flex items-center space-x-2 text-sm text-gray-600 mt-6">
          <Link to="/forums" className="hover:text-indigo-600">Forums</Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-gray-400">All Categories</span>
        </div>

        {/* Forum Categories */}
        <div className="space-y-6 mt-6">
          {forumData.map((category) => (
            <ForumCategory key={category.id} category={category} />
          ))}
        </div>

        {/* Create Topic Modal */}
        <CreateTopicModal
          isOpen={isCreateModalOpen}
          onClose={() => setIsCreateModalOpen(false)}
        />
      </div>
    </div>
  );
}