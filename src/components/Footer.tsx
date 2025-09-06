import React from 'react';
import { Link } from 'react-router-dom';
import { Wrench, Phone, Mail, MapPin, Facebook, Twitter, Linkedin,MessageCircle} from 'lucide-react';
import logo from '../assets/logo.jpg'

const Footer = () => {
  return (
    <footer className="bg-charcoal text-clean-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-industrial-blue to-accent rounded-lg">
                <img src={logo} alt="Logo" className="w-full rounded-lg" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Tuli Enterprises</h3>
                <p className="text-sm text-metallic-silver">Since 1986</p>
              </div>
            </div>
            <p className="text-sm text-metallic-silver">
              Leading manufacturer of precision fasteners, serving industries worldwide with quality bolts, screws, and industrial components.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-metallic-silver hover:text-industrial-blue transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#"  className="text-metallic-silver hover:text-industrial-blue transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-metallic-silver hover:text-industrial-blue transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-metallic-silver hover:text-industrial-blue transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-metallic-silver hover:text-industrial-blue transition-colors">About Us</Link></li>
              <li><Link to="/products" className="text-metallic-silver hover:text-industrial-blue transition-colors">Products</Link></li>
              <li><Link to="/industries" className="text-metallic-silver hover:text-industrial-blue transition-colors">Industries</Link></li>
              <li><Link to="/why-choose-us" className="text-metallic-silver hover:text-industrial-blue transition-colors">Why Choose Us</Link></li>
              <li><Link to="/contact" className="text-metallic-silver hover:text-industrial-blue transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-metallic-silver">Cycle Parts Bolts</li>
              <li className="text-metallic-silver">Industrial Bolts</li>
              <li className="text-metallic-silver">Screws & Fasteners</li>
              <li className="text-metallic-silver">Carriage Bolts</li>
              <li className="text-metallic-silver">Custom Solutions</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-industrial-blue" />
                <span className="text-sm text-metallic-silver">+91 788 882 8694<br /> +91 941 748 8062</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-industrial-blue" />
                <span className="text-sm text-metallic-silver">parampreetsinghwork@gmail.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-industrial-blue mt-1" />
                <span className="text-sm text-metallic-silver">
                  Jaspal Bangar Road, Industrial Area C, <br />
                  Dhandari Kalan, Punjab, India
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-metallic-silver/20 mt-8 pt-8 text-center">
          <p className="text-sm text-metallic-silver">
            © 2025 Tuli Enterprises. All rights reserved. | Founded by Mr. Gurbax Singh in 1986
          </p>
          <p className="text-sm text-metallic-silver">Design & Develop by <a href="https://codexdigital.ltd" target="_blank" rel="noopener noreferrer" className='text-metallic-silver hover:text-industrial-blue transition-colors'>CodexDigital</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;