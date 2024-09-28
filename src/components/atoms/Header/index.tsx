import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Facebook, Instagram, Twitter, Globe, Menu } from "lucide-react";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";

export const Header = ({ header, className }: any) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLanguageChange = () => {
    alert("Language change button clicked!");
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/distanation", label: "Distanation" },
    { href: "/top-excursions", label: "Excursions" },
    { href: "/blogs", label: "Blogs" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 w-full z-40 px-4 sm:px-16 bg-white shadow-md 
        ${isScrolled ? "lg:relative lg:translate-y-0 lg:shadow-md" : ""}`}
      >
        <div className="flex items-center justify-between py-4">
          {/* Logo aligned to the left */}
          <div className="flex-shrink-0 lg:w-1/3">
            <Link href="/">
              <span className="text-xl font-bold">Egypt Travel Lite</span>
            </Link>
          </div>

          {/* Center - Desktop Menu (links centered only on desktop) */}
          <div className="hidden lg:flex lg:w-1/3 justify-center">
            <DesktopMenu navLinks={navLinks} />
          </div>

          {/* Right side - Social Icons, Language Change, and Book Tour Button */}
          <div className="flex items-center lg:w-1/3 justify-end space-x-4">
            <div className="hidden sm:flex space-x-2">
              <Facebook className="w-5 h-5 text-[#6095e4] cursor-pointer" />
              <Instagram className="w-5 h-5 text-[#6095e4] cursor-pointer" />
              <Twitter className="w-5 h-5 text-[#6095e4] cursor-pointer" />
            </div>
            <button
              className="hidden lg:block focus:outline-none"
              onClick={handleLanguageChange}
              title="Change Language"
            >
              <Globe
                className={`w-6 h-6 ${
                  isScrolled ? "text-[#132f4e]" : "text-[#123b4b]"
                }`}
              />
            </button>
            <button className="bg-[#6095e4] text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-[#4a7ac7]">
              Book Tour Now
            </button>
          </div>

          {/* Mobile Menu Toggle (visible on small screens) */}
          <button
            className="lg:hidden text-[#191e61] focus:outline-none"
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        navLinks={navLinks}
        onLanguageChange={handleLanguageChange}
      />
    </>
  );
};
