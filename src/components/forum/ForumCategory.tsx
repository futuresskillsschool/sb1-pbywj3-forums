import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, User, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { formatDistanceToNow } from 'date-fns';
import type { ForumCategory as ForumCategoryType } from '../../data/forumData';

interface ForumCategoryProps {
  category: ForumCategoryType;
}

export default function ForumCategory({ category }: ForumCategoryProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl shadow-sm overflow-hidden"
    >
      <div className="p-6 border-b">
        <div className="flex items-center space-x-4">
          <div className="p-3 bg-indigo-100 rounded-lg">
            <MessageSquare className="h-6 w-6 text-indigo-600" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-900">{category.title}</h2>
            <p className="text-gray-600">{category.description}</p>
          </div>
        </div>
      </div>

      {category.subcategories.map((subcategory) => (
        <div key={subcategory.id} className="border-b last:border-b-0">
          <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {subcategory.title}
            </h3>
            <p className="text-gray-600 mb-4">{subcategory.description}</p>

            <div className="space-y-4">
              {subcategory.topics.map((topic) => (
                <Link
                  key={topic.id}
                  to={`/forums/${category.id}/${subcategory.id}/${topic.id}`}
                  className="block bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-gray-900">{topic.title}</h4>
                      <p className="text-sm text-gray-600">{topic.description}</p>
                    </div>
                    {topic.lastPost && (
                      <div className="text-right">
                        <div className="flex items-center text-sm text-gray-500">
                          <User className="h-4 w-4 mr-1" />
                          {topic.lastPost.author}
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <Calendar className="h-4 w-4 mr-1" />
                          {formatDistanceToNow(new Date(topic.lastPost.date), { addSuffix: true })}
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="mt-2 flex items-center text-sm text-gray-500">
                    <MessageSquare className="h-4 w-4 mr-1" />
                    {topic.posts} posts
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      ))}
    </motion.div>
  );
}