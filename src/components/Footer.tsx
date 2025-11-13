import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const footerLinks = {
    "Shop": ["Electronics", "Fashion", "Home & Living", "Sports", "Books"],
    "Support": ["FAQs", "Shipping Info", "Returns", "Track Order", "Contact Us"],
    "Company": ["About Us", "Careers", "Press", "Partnerships", "Terms of Service"],
    "Resources": ["Blog", "Product Guides", "Store Locator", "Gift Cards", "Privacy Policy"],
  };

  return (
    <footer className="bg-gradient-to-r from-primary to-secondary text-primary-foreground border-t border-border">
      {/* Newsletter Section */}
      <div className="border-b border-border bg-primary/5">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">Stay Connected, Stay Updated</h3>
              <p className="text-muted-foreground">
                Subscribe to get special offers, exclusive deals, and latest updates.
              </p>
            </div>
            
            <div className="flex w-full md:w-auto gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="w-full md:w-80 rounded-full border-2"
              />
              <Button className="rounded-full bg-accent hover:bg-accent-hover text-accent-foreground font-semibold px-8">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center">
                <img src="/Rasss-logo.png" alt="Rasss logo" className="h-20 w-auto md:h-24 object-contain brightness-110 contrast-125 saturate-150 drop-shadow-xl ring-1 ring-white/60 rounded-md bg-white/5" />
              </div>
              <span className="text-xl font-bold text-yellow-400">Rasss</span>
            </div>
            
            <p className="text-sm text-primary-foreground mb-4">
              Your trusted online shopping destination since 2020.
            </p>

            {/* Contact Info */}
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-primary-foreground">
                <Phone className="h-4 w-4" />
                <span>1-800-HEALTH</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground">
                <Mail className="h-4 w-4" />
                <span>support@rasss.com</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground">
                <MapPin className="h-4 w-4" />
                <span>123 Shop St, Commerce City</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-primary-foreground hover:text-primary-foreground/80 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Links & Payment Methods */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Social Media */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-primary-foreground">Follow us:</span>
              <div className="flex gap-2">
                <Button size="icon" variant="outline" className="h-9 w-9 rounded-full hover:bg-primary hover:text-primary-foreground hover:border-primary">
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="outline" className="h-9 w-9 rounded-full hover:bg-primary hover:text-primary-foreground hover:border-primary">
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="outline" className="h-9 w-9 rounded-full hover:bg-primary hover:text-primary-foreground hover:border-primary">
                  <Instagram className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="outline" className="h-9 w-9 rounded-full hover:bg-primary hover:text-primary-foreground hover:border-primary">
                  <Youtube className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="flex items-center gap-3">
              <span className="text-sm text-primary-foreground">We accept:</span>
              <div className="flex gap-2 opacity-60">
                <div className="h-8 w-12 rounded border border-border bg-background flex items-center justify-center text-xs font-semibold">
                  VISA
                </div>
                <div className="h-8 w-12 rounded border border-border bg-background flex items-center justify-center text-xs font-semibold">
                  MC
                </div>
                <div className="h-8 w-12 rounded border border-border bg-background flex items-center justify-center text-xs font-semibold">
                  AMEX
                </div>
                <div className="h-8 w-12 rounded border border-border bg-background flex items-center justify-center text-xs font-semibold">
                  PP
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 text-center text-sm text-muted-foreground">
            <p>© 2024 Rasss. All rights reserved. | Trusted by 50,000+ customers worldwide</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
