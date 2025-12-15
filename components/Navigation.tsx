"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="text-2xl font-extrabold bg-gradient-to-r from-primary-600 to-blue-600 bg-clip-text text-transparent hover:scale-105 transition-transform">
            Teen Preneur
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="/idea-survey" className="text-gray-700 hover:text-primary-600 transition-colors font-semibold relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary-600 hover:after:w-full after:transition-all">
              Idea Survey
            </Link>
            <Link href="/mentor-hub" className="text-gray-700 hover:text-primary-600 transition-colors font-semibold relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary-600 hover:after:w-full after:transition-all">
              Mentor Hub
            </Link>
            <Link href="/alumni-network" className="text-gray-700 hover:text-primary-600 transition-colors font-semibold relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary-600 hover:after:w-full after:transition-all">
              Alumni Network
            </Link>
            <Link href="/incubator" className="text-gray-700 hover:text-primary-600 transition-colors font-semibold relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary-600 hover:after:w-full after:transition-all">
              Incubator
            </Link>
            <Link href="/revenue-tracking" className="text-gray-700 hover:text-primary-600 transition-colors font-semibold relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary-600 hover:after:w-full after:transition-all">
              Revenue Tracking
            </Link>
            <Link href="/profile" className="text-gray-700 hover:text-primary-600 transition-colors font-semibold relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary-600 hover:after:w-full after:transition-all">
              Profile
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 hover:text-primary-600 transition-colors p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-100 mt-2 pt-4 animate-slideDown">
            <div className="flex flex-col space-y-3">
              <Link
                href="/idea-survey"
                className="text-gray-700 hover:text-primary-600 transition-colors font-semibold px-4 py-2 rounded-lg hover:bg-primary-50"
                onClick={() => setIsMenuOpen(false)}
              >
                💡 Idea Survey
              </Link>
              <Link
                href="/mentor-hub"
                className="text-gray-700 hover:text-primary-600 transition-colors font-semibold px-4 py-2 rounded-lg hover:bg-primary-50"
                onClick={() => setIsMenuOpen(false)}
              >
                🎯 Mentor Hub
              </Link>
              <Link
                href="/alumni-network"
                className="text-gray-700 hover:text-primary-600 transition-colors font-semibold px-4 py-2 rounded-lg hover:bg-primary-50"
                onClick={() => setIsMenuOpen(false)}
              >
                🌟 Alumni Network
              </Link>
              <Link
                href="/incubator"
                className="text-gray-700 hover:text-primary-600 transition-colors font-semibold px-4 py-2 rounded-lg hover:bg-primary-50"
                onClick={() => setIsMenuOpen(false)}
              >
                🚀 Incubator
              </Link>
              <Link
                href="/revenue-tracking"
                className="text-gray-700 hover:text-primary-600 transition-colors font-semibold px-4 py-2 rounded-lg hover:bg-primary-50"
                onClick={() => setIsMenuOpen(false)}
              >
                📊 Revenue Tracking
              </Link>
              <Link
                href="/profile"
                className="text-gray-700 hover:text-primary-600 transition-colors font-semibold px-4 py-2 rounded-lg hover:bg-primary-50"
                onClick={() => setIsMenuOpen(false)}
              >
                👤 Profile
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
