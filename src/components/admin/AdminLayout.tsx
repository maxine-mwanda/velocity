import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboardIcon, NewspaperIcon, UsersIcon, WrenchIcon, MessageSquareIcon, LogOutIcon } from 'lucide-react';
const sidebarItems = [{
  icon: <LayoutDashboardIcon size={20} />,
  label: 'Dashboard',
  path: '/admin'
}, {
  icon: <NewspaperIcon size={20} />,
  label: 'Blog Posts',
  path: '/admin/blog'
}, {
  icon: <UsersIcon size={20} />,
  label: 'Team',
  path: '/admin/team'
}, {
  icon: <WrenchIcon size={20} />,
  label: 'Services',
  path: '/admin/services'
}, {
  icon: <MessageSquareIcon size={20} />,
  label: 'Testimonials',
  path: '/admin/testimonials'
}];
export const AdminLayout: React.FC<{
  children: React.ReactNode;
}> = ({
  children
}) => {
  const location = useLocation();
  return <div className="min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-lg">
        <div className="flex flex-col h-full">
          <div className="p-4 border-b">
            <h1 className="text-2xl font-bold text-blue-600">Velocity Admin</h1>
          </div>
          <nav className="flex-1 p-4">
            <ul className="space-y-2">
              {sidebarItems.map((item, index) => <li key={index}>
                  <Link to={item.path} className={`flex items-center space-x-3 px-4 py-2 rounded-md transition-colors ${location.pathname === item.path ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'}`}>
                    {item.icon}
                    <span>{item.label}</span>
                  </Link>
                </li>)}
            </ul>
          </nav>
          <div className="p-4 border-t">
            <button className="flex items-center space-x-3 text-gray-600 hover:text-red-600 w-full px-4 py-2 rounded-md transition-colors">
              <LogOutIcon size={20} />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>
      {/* Main content */}
      <div className="ml-64 p-8">{children}</div>
    </div>;
};