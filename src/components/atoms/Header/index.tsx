import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Facebook, Instagram, Twitter, Globe, Menu, X } from "lucide-react";

const MobileMenu = ({ isOpen, onClose, navLinks, onLanguageChange }) => (
  <div
    className={`fixed inset-0 z-50 transform ${
      isOpen ? "translate-x-0" : "translate-x-full"
    } transition-transform duration-300 ease-in-out lg:hidden`}
  >
    <div
      className="absolute inset-0 bg-black opacity-50"
      onClick={onClose}
    ></div>
    <nav className="relative z-10 px-8 py-4 bg-white h-full w-64 float-right">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-xl font-bold">Menu</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          <X className="w-6 h-6" />
        </button>
      </div>
      <ul className="space-y-4">
        {navLinks.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className="block py-2 text-gray-800 hover:text-blue-600"
              onClick={onClose}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
      <button
        onClick={onLanguageChange}
        className="mt-8 flex items-center text-gray-800 hover:text-blue-600"
      >
        <Globe className="w-5 h-5 mr-2" />
        Change Language
      </button>
    </nav>
  </div>
);

export const Header = ({ header, className }: any) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

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
        className={`
        fixed top-0 w-full z-40 px-4 sm:px-16 bg-white shadow-md 
        ${isScrolled ? "lg:relative lg:translate-y-0 lg:shadow-md" : ""}
      `}
      >
        <div className="flex items-center justify-between py-4">
          {/* Left side - Navigation Links (Desktop) */}
          <nav className="hidden lg:block">
            <ul className="flex space-x-6">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={`font-semibold text-sm ${
                      router.pathname === href
                        ? "text-blue-800"
                        : "text-[#6095e4] hover:text-[#71a0dd]"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-[#191e61] focus:outline-none"
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>

          {/* Center - Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <span className="text-xl font-bold">Egypt Travel Lite</span>
            </Link>
          </div>

          {/* Right side - Social Icons, Language Change, and Book Tour Button */}
          <div className="flex items-center space-x-4">
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
