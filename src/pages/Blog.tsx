import React, { useState } from 'react';
import { PageHeader } from '../components/common/PageHeader';
import { BlogCard } from '../components/blog/BlogCard';
import { SearchIcon } from 'lucide-react';
export const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const posts = [{
    title: 'A Guide to German Healthcare System',
    excerpt: 'Understanding how the German healthcare system works and what to expect as a healthcare professional.',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80',
    author: 'Dr. Sarah Kimani',
    date: 'June 15, 2023',
    category: 'Healthcare',
    slug: 'german-healthcare-system'
  }, {
    title: 'Top Tips for Learning Medical German',
    excerpt: 'Effective strategies and resources for mastering medical terminology in German.',
    image: 'https://images.unsplash.com/photo-1544776193-0dd8de15ef73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    author: 'Grace Ochieng',
    date: 'June 1, 2023',
    category: 'Language',
    slug: 'medical-german-tips'
  }, {
    title: 'Success Story: From Nairobi to Berlin',
    excerpt: "Read about Jane's journey from being a nurse in Nairobi to working in a top Berlin hospital.",
    image: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2091&q=80',
    author: 'Jane Mwangi',
    date: 'May 20, 2023',
    category: 'Success Stories',
    slug: 'nairobi-to-berlin'
  }];
  const categories = ['All', 'Healthcare', 'Language', 'Success Stories', 'Culture', 'Tips & Advice'];
  return <>
      <PageHeader title="Blog & News" subtitle="Stay updated with the latest insights, success stories, and news" backgroundImage="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80" />
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8 mb-12">
            <div className="md:w-2/3">
              <div className="relative mb-8">
                <input type="text" placeholder="Search articles..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" />
                <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {posts.map((post, index) => <BlogCard key={index} {...post} />)}
              </div>
            </div>
            <div className="md:w-1/3">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Categories
                </h3>
                <ul className="space-y-2">
                  {categories.map((category, index) => <li key={index}>
                      <button className="text-gray-600 hover:text-blue-600 w-full text-left py-2">
                        {category}
                      </button>
                    </li>)}
                </ul>
              </div>
              <div className="bg-blue-50 rounded-lg p-6 mt-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Subscribe to Our Newsletter
                </h3>
                <p className="text-gray-600 mb-4">
                  Get the latest updates and insights delivered to your inbox.
                </p>
                <input type="email" placeholder="Enter your email" className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" />
                <Button fullWidth>Subscribe</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>;
};