import {
  Plane,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-white to-blue-50 border-t pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Plane className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gradient font-serif">
                Mari Tours
              </span>
            </div>
            <p className="text-muted-foreground mb-6">
              Creating unforgettable journeys through Georgia since 2013.
              Experience the warmth of Georgian hospitality with us.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Instagram, Twitter].map((Icon, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="icon"
                  className="rounded-full"
                >
                  <Icon className="h-4 w-4" />
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {[
                "Home",
                "Tours",
                "About Us",
                "Contact",
                "FAQ",
                "Testimonials",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-muted-foreground">
                <Phone className="h-5 w-5 text-blue-600" />
                <span>+995 123 456 789</span>
              </li>
              <li className="flex items-center space-x-3 text-muted-foreground">
                <Mail className="h-5 w-5 text-blue-600" />
                <span>info@maritours.ge</span>
              </li>
              <li className="flex items-center space-x-3 text-muted-foreground">
                <MapPin className="h-5 w-5 text-blue-600" />
                <span>Rustaveli Ave 17, Tbilisi</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          {/* <div>
            <h3 className="text-lg font-bold mb-6">Stay Updated</h3>
            <p className="text-muted-foreground mb-4">
              Subscribe for travel tips and exclusive offers.
            </p>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Button className="bg-gradient-to-r from-blue-600 to-emerald-600">
                Subscribe
              </Button>
            </div>
          </div> */}
        </div>

        <div className="border-t pt-8 text-center text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Mari Tours. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
