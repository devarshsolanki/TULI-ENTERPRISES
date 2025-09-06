import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Brochure from '../assets/B.S. Fasteners.pdf'
import logo from '../assets/logo.jpg'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/products', label: 'Products' },
    { href: '/industries', label: 'Industries' },
    { href: '/why-choose-us', label: 'Why Choose Us' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <motion.nav 
      // initial={{ y: -10 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 bg-charcoal shadow-lg border-b border-metallic-silver/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-industrial-blue to-accent rounded-lg shadow-glow group-hover:animate-glow transition-all duration-300">
              {/* <Wrench className="w-6 h-6 text-white" /> */}
              <img src={logo} alt="Logo" className="w-full rounded-lg" />
            </div>
            <div className="">
              <h1 className="text-xl font-bold text-clean-white">TULI</h1>
              <p className="text-xs text-metallic-silver">ENTERPRISES</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => {
                      // window.location.href = item.href;
                      setTimeout(() => {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }, 100); // delay to ensure navigation finishes
                    }}
                className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  location.pathname === item.href 
                    ? 'text-industrial-blue' 
                    : 'text-clean-white hover:text-industrial-blue'
                }`}
              >
                {item.label}
                {location.pathname === item.href && (
                  <motion.div
                    layoutId="underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-industrial-blue"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            ))}
            <a href={Brochure} download className="inline-block">
              <Button variant="outline" size="sm" className="border-industrial-blue bg-industrial-blue hover:bg-industrial-blue/50 text-white hover:text-[#ddd8d8] transition-all duration-300">
                Brochure <Download className="inline-block w-4 h-4 " />
              </Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-clean-white hover:text-industrial-blue"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 bg-charcoal border-t border-metallic-silver/20">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                    location.pathname === item.href 
                      ? 'text-industrial-blue bg-metallic-silver/10' 
                      : 'text-clean-white hover:text-industrial-blue hover:bg-metallic-silver/5'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-3 py-2">
                <a href={Brochure} download className="inline-block w-full">
                  <Button variant="outline" size="sm" className="w-full border-industrial-blue bg-industrial-blue hover:bg-industrial-blue/50 text-white hover:text-[#ddd8d8]">
                    Brochure <Download className="inline-block w-4 h-4 ml-1" />
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navigation;