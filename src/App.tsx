import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Contact } from './pages/Contact';
import { Team } from './pages/Team';
import { Blog } from './pages/Blog';
import { LoginForm } from './components/auth/LoginForm';
import { AdminLayout } from './components/admin/AdminLayout';
import { AdminBlogPosts } from './pages/admin/AdminBlogPosts';
import { AdminTeam } from './pages/admin/AdminTeam';
import { AdminServices } from './pages/admin/AdminServices';
import { AdminTestimonials } from './pages/admin/AdminTestimonials';
export function App() {
  return <BrowserRouter>
      <Routes>
        <Route path="/*" element={<div className="flex flex-col min-h-screen bg-white">
              <Header />
              <main className="flex-grow">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/team" element={<Team />} />
                  <Route path="/blog" element={<Blog />} />
                </Routes>
              </main>
              <Footer />
            </div>} />
        <Route path="/admin/login" element={<LoginForm />} />
        <Route path="/admin/*" element={<AdminLayout>
              <Routes>
                <Route path="/blog" element={<AdminBlogPosts />} />
                <Route path="/team" element={<AdminTeam />} />
                <Route path="/services" element={<AdminServices />} />
                <Route path="/testimonials" element={<AdminTestimonials />} />
              </Routes>
            </AdminLayout>} />
      </Routes>
    </BrowserRouter>;
}