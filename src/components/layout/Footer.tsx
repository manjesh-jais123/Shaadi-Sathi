import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 gradient-gold rounded-full flex items-center justify-center">
                <span className="text-xl font-bold font-display text-foreground">S</span>
              </div>
              <span className="text-xl font-bold font-display">ShaadiSave</span>
            </div>
            <p className="text-sm opacity-80 mb-4">
              India's most trusted wedding services marketplace. Connecting families with verified vendors for all wedding needs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 font-display">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/services" className="opacity-80 hover:opacity-100 transition-opacity">
                  Browse Services
                </Link>
              </li>
              <li>
                <Link to="/cloth-rentals" className="opacity-80 hover:opacity-100 transition-opacity">
                  Cloth Rentals
                </Link>
              </li>
              <li>
                <Link to="/shopping-orders" className="opacity-80 hover:opacity-100 transition-opacity">
                  Wedding Shopping
                </Link>
              </li>
              <li>
                <Link to="/vendor/register" className="opacity-80 hover:opacity-100 transition-opacity">
                  Become a Vendor
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-4 font-display">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="opacity-80 hover:opacity-100 transition-opacity">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="opacity-80 hover:opacity-100 transition-opacity">
                  Contact
                </Link>
              </li>
              <li>
                <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                  Testimonials
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4 font-display">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 opacity-80" />
                <span className="opacity-80">7631088592</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 opacity-80" />
                <span className="opacity-80">manjeshjaiswal90@gmail.com</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 opacity-80 mt-0.5" />
                <span className="opacity-80">Motihari, Bihar, India</span>
              </li>
            </ul>
            <div className="mt-4 p-3 bg-background/10 rounded-lg">
              <p className="text-xs opacity-80">
                <strong>Owner:</strong> Manjesh Jaiswal
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center text-sm opacity-80">
          <p>&copy; {new Date().getFullYear()} ShaadiSave. All rights reserved.</p>
          <p className="mt-1">Made with ❤️ for Indian Weddings</p>
        </div>
      </div>
    </footer>
  );
}
