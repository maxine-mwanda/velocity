import React from 'react';
import { CalendarIcon, UserIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
interface BlogPostProps {
  title: string;
  excerpt: string;
  image: string;
  author: string;
  date: string;
  category: string;
  slug: string;
}
export const BlogCard: React.FC<BlogPostProps> = ({
  title,
  excerpt,
  image,
  author,
  date,
  category,
  slug
}) => {
  return <article className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <div className="flex items-center mb-4">
          <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-600 bg-blue-50 rounded-full">
            {category}
          </span>
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">
          <Link to={`/blog/${slug}`} className="hover:text-blue-600">
            {title}
          </Link>
        </h3>
        <p className="text-gray-600 mb-4">{excerpt}</p>
        <div className="flex items-center text-sm text-gray-500">
          <div className="flex items-center mr-4">
            <UserIcon size={16} className="mr-1" />
            {author}
          </div>
          <div className="flex items-center">
            <CalendarIcon size={16} className="mr-1" />
            {date}
          </div>
        </div>
      </div>
    </article>;
};