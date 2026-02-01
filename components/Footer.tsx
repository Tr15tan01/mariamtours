// import {
//   Plane,
//   Mail,
//   Phone,
//   MapPin,
//   Facebook,
//   Instagram,
//   Twitter,
// } from "lucide-react";
// import { Button } from "@/components/ui/button";

// export function Footer() {
//   return (
//     <footer className="bg-gradient-to-b from-white to-blue-50 border-t pt-16 pb-8">
//       <div className="container mx-auto px-4">
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
//           {/* Company Info */}
//           <div>
//             <div className="flex items-center space-x-2 mb-6">
//               <Plane className="h-8 w-8 text-blue-600" />
//               <span className="text-2xl font-bold text-gradient font-serif">
//                 Mari Tours
//               </span>
//             </div>
//             <p className="text-muted-foreground mb-6">
//               Creating unforgettable journeys through Georgia since 2013.
//               Experience the warmth of Georgian hospitality with us.
//             </p>
//             <div className="flex space-x-4">
//               {[Facebook, Instagram, Twitter].map((Icon, index) => (
//                 <Button
//                   key={index}
//                   variant="outline"
//                   size="icon"
//                   className="rounded-full"
//                 >
//                   <Icon className="h-4 w-4" />
//                 </Button>
//               ))}
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="text-lg font-bold mb-6">Quick Links</h3>
//             <ul className="space-y-4">
//               {[
//                 "Home",
//                 "Tours",
//                 "About Us",
//                 "Contact",
//                 "FAQ",
//                 "Testimonials",
//               ].map((item) => (
//                 <li key={item}>
//                   <a
//                     href="#"
//                     className="text-muted-foreground hover:text-primary transition-colors"
//                   >
//                     {item}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div>
//             <h3 className="text-lg font-bold mb-6">Contact Us</h3>
//             <ul className="space-y-4">
//               <li className="flex items-center space-x-3 text-muted-foreground">
//                 <Phone className="h-5 w-5 text-blue-600" />
//                 <span>+995 123 456 789</span>
//               </li>
//               <li className="flex items-center space-x-3 text-muted-foreground">
//                 <Mail className="h-5 w-5 text-blue-600" />
//                 <span>info@maritours.ge</span>
//               </li>
//               <li className="flex items-center space-x-3 text-muted-foreground">
//                 <MapPin className="h-5 w-5 text-blue-600" />
//                 <span>Rustaveli Ave 17, Tbilisi</span>
//               </li>
//             </ul>
//           </div>

//           {/* Newsletter */}
//           {/* <div>
//             <h3 className="text-lg font-bold mb-6">Stay Updated</h3>
//             <p className="text-muted-foreground mb-4">
//               Subscribe for travel tips and exclusive offers.
//             </p>
//             <div className="flex space-x-2">
//               <input
//                 type="email"
//                 placeholder="Your email"
//                 className="flex-1 px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//               <Button className="bg-gradient-to-r from-blue-600 to-emerald-600">
//                 Subscribe
//               </Button>
//             </div>
//           </div> */}
//         </div>

//         <div className="border-t pt-8 text-center text-muted-foreground">
//           <p>
//             &copy; {new Date().getFullYear()} Mari Tours. All rights reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// }

import {
  Plane,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  MessageCircle,
  Heart,
  Globe,
  Calendar,
  Users,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-blue-50/50 to-white border-t relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-200 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-20 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-200 rounded-full translate-x-1/3 translate-y-1/3 opacity-20 blur-3xl" />

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Social Media Banner */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 mb-6 px-6 py-3 rounded-full bg-white border shadow-sm">
            <Sparkles className="h-5 w-5 text-blue-600" />
            <span className="text-sm font-medium text-blue-600">
              Follow Our Adventures
            </span>
          </div>

          <h3 className="text-2xl font-bold mb-8 font-serif">
            Join <span className="text-gradient">5,000+</span> Travelers
          </h3>

          {/* Large Social Media Icons */}
          <div className="flex justify-center gap-8 mb-12">
            {[
              {
                icon: Facebook,
                label: "Facebook",
                color:
                  "bg-blue-100 border-blue-200 hover:bg-blue-200 text-blue-600",
                size: "h-14 w-14",
                followers: "2.5K",
              },
              {
                icon: Instagram,
                label: "Instagram",
                color:
                  "bg-pink-100 border-pink-200 hover:bg-pink-200 text-pink-600",
                size: "h-16 w-16",
                followers: "3.8K",
              },
              {
                icon: MessageCircle,
                label: "WhatsApp",
                color:
                  "bg-emerald-100 border-emerald-200 hover:bg-emerald-200 text-emerald-600",
                size: "h-14 w-14",
                followers: "Direct",
              },
            ].map((social) => (
              <div
                key={social.label}
                className="flex flex-col items-center group"
              >
                <a
                  href="#"
                  className={`${social.size} ${social.color} rounded-2xl border-2 flex items-center justify-center shadow-md hover:shadow-xl hover:scale-110 transition-all duration-300`}
                  aria-label={social.label}
                >
                  <social.icon className="h-8 w-8" />
                </a>
                <span className="text-xs mt-2 text-gray-500">
                  {social.label}
                </span>
                <span className="text-xs font-medium text-gray-700 mt-1">
                  {social.followers}
                </span>
              </div>
            ))}
          </div>

          <p className="text-gray-600 max-w-md mx-auto">
            Daily updates, travel tips, and stunning photos from Georgia
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-xl blur-md opacity-30" />
                <Plane className="h-12 w-12 text-blue-600 relative z-10" />
              </div>
              <div>
                <h2 className="text-3xl font-bold font-serif">
                  <span className="text-gradient">Mari Tours</span>
                </h2>
                <p className="text-sm text-blue-600 font-medium">
                  Since 2013 • 1000+ Happy Travelers
                </p>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed">
              Specializing in authentic Georgian experiences, from mountain
              treks to wine tasting adventures. Let us show you the real
              Georgia.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="text-center p-3 rounded-lg bg-white border">
                <div className="text-xl font-bold text-gradient mb-1">10+</div>
                <div className="text-xs text-gray-600">Years Experience</div>
              </div>
              <div className="text-center p-3 rounded-lg bg-white border">
                <div className="text-xl font-bold text-gradient mb-1">50+</div>
                <div className="text-xs text-gray-600">Destinations</div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              <Users className="h-5 w-5 text-blue-500" />
              For Travelers
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                "All Tours",
                "Custom Trips",
                "Group Travel",
                "Family Adventures",
                "Solo Travel",
                "Luxury Experiences",
                "Budget Tours",
                "Seasonal Offers",
              ].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-gray-600 hover:text-blue-600 hover:translate-x-2 transition-all duration-300 flex items-center gap-2 text-sm"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-300" />
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              <Calendar className="h-5 w-5 text-blue-500" />
              Plan Your Trip
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white border shadow-sm">
                <Phone className="h-6 w-6 text-blue-600 mt-1" />
                <div>
                  <div className="font-medium text-gray-900">Call Us</div>
                  <a
                    href="tel:+995123456789"
                    className="text-lg font-bold text-gradient hover:opacity-80 transition-opacity"
                  >
                    +995 123 456 789
                  </a>
                  <div className="text-xs text-gray-500 mt-1">
                    Mon-Sun, 9AM-9PM
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-white border shadow-sm">
                <Mail className="h-6 w-6 text-blue-600 mt-1" />
                <div>
                  <div className="font-medium text-gray-900">Email Us</div>
                  <a
                    href="mailto:info@maritours.ge"
                    className="text-lg font-bold text-gradient hover:opacity-80 transition-opacity"
                  >
                    info@maritours.ge
                  </a>
                  <div className="text-xs text-gray-500 mt-1">
                    Response within 24h
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-blue-100">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4">
              <MapPin className="h-5 w-5 text-blue-600" />
              <div className="text-sm text-gray-600">
                <span className="font-medium">Tbilisi Office:</span> Rustaveli
                Ave 17, Tbilisi, Georgia
              </div>
            </div>

            <div className="flex items-center gap-6 text-sm text-gray-600">
              <a href="#" className="hover:text-blue-600 transition-colors">
                Privacy Policy
              </a>
              <div className="w-1 h-1 rounded-full bg-gray-300" />
              <a href="#" className="hover:text-blue-600 transition-colors">
                Terms of Service
              </a>
              <div className="w-1 h-1 rounded-full bg-gray-300" />
              <a href="#" className="hover:text-blue-600 transition-colors">
                Travel Insurance
              </a>
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Heart className="h-4 w-4 text-rose-500 fill-rose-500 animate-pulse" />
              <span>Made with passion in Georgia</span>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center mt-8 pt-6 border-t border-blue-100">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Mari Tours Georgia. All rights
              reserved.
              <span className="mx-2">•</span>
              Licensed Tour Operator #TB-1234
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
