import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    title: "5 Smart Investment Strategies for 2025",
    date: "June 14, 2025",
    excerpt: "Discover proven financial tactics to grow wealth with confidence in today’s market.",
  },
  {
    id: 2,
    title: "How to Build an Emergency Fund",
    date: "June 9, 2025",
    excerpt: "An emergency fund is the foundation of financial security. Here's how to build one step-by-step.",
  },
  {
    id: 3,
    title: "Beginner’s Guide to Stock Market Investing",
    date: "May 29, 2025",
    excerpt: "Want to start investing in stocks? Here’s a beginner-friendly guide to help you start smart.",
  },
];

const Blog = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
        Financial Insights & Tips
      </h1>
      <div className="grid md:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <div key={post.id} className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h2>
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <Calendar size={16} className="mr-2" />
              {post.date}
            </div>
            <p className="text-gray-600 mb-4">{post.excerpt}</p>
            <Link
              to={`/blog/${post.id}`}
              className="inline-flex items-center text-blue-600 hover:underline"
            >
              Read More <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
