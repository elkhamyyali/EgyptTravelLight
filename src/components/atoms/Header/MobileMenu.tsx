import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { CiGlobe } from "react-icons/ci";

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
  onLanguageChange: () => void;
};

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  onLanguageChange,
}) => {
  const router = useRouter();

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/distanation", label: "Distanation" },
    { href: "/top-excursions", label: "Excursions" },
    { href: "/blogs", label: "Blogs" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <div
      className={`fixed inset-y-0 right-0 z-50 bg-white p-6 w-[100%] max-w-sm mx-auto rounded-lg shadow-lg transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <button
        className="absolute top-4 right-4 text-[#2e81b1] focus:outline-none"
        onClick={onClose}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <ul className="flex flex-col items-center gap-y-4 mt-12">
        {menuItems.map(({ href, label }) => (
          <li key={href} onClick={onClose}>
            <Link
              href={href}
              className={`block font-segoe font-semibold text-[14px] px-3 py-1 rounded ${
                router.pathname === href
                  ? "text-blue-950"
                  : "text-[#6095e4] hover:border-b hover:border-b-blue-500 hover:text-[#71a0dd]"
              }`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex items-center justify-center mt-8">
        <button
          className="text-black focus:outline-none"
          onClick={onLanguageChange}
          title="Change Language"
        >
          <CiGlobe size={30} />
        </button>
      </div>
    </div>
  );
};
