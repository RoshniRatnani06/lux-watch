"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";

interface HeaderProps {
  isLoggedIn: boolean | null;
  setIsLoggedIn: any;
  isMenuOpen: boolean;
  setIsMenuOpen: any;
}

export default function Header({
  isLoggedIn,
  setIsLoggedIn,
  isMenuOpen,
  setIsMenuOpen,
}: HeaderProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const profileMenuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsProfileMenuOpen(false); // Close profile menu when toggling mobile menu
  };

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen((prev) => !prev);
  };

  // Close profile dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        profileMenuRef.current &&
        !profileMenuRef.current.contains(event.target as Node)
      ) {
        setIsProfileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="border-b bg-white py-2">
      <div className="flex items-center justify-between w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center">
            <Image
              src="/component-1-1.svg"
              alt="logo"
              width={0}
              height={36}
              className="object-fit w-auto h-[50px]"
              quality={100}
            />
          </Link>
        </div>

        {/* Mobile Language Switcher and Toggle Button (visible on small/medium, hidden on large) */}
        <div className="flex items-center gap-4 xl:hidden">
          {isLoggedIn && (
            <div
              className="relative p-2 flex h-9 w-9 items-center justify-center cursor-pointer rounded-full bg-gray-100 hover:bg-gray-200 transition"
              ref={profileMenuRef}
            >
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  toggleProfileMenu();
                }}
              >
                <Image
                  src="/images/logo-small.png"
                  alt="logo"
                  width={36}
                  height={36}
                  className="w-6 sm:w-9"
                />
              </div>
              {isProfileMenuOpen && (
                <ul className="absolute top-12 right-0 bg-white border shadow-md rounded-md w-48 z-20">
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <Link
                      href={isLoggedIn ? "/my-account" : "/login"}
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsProfileMenuOpen(false);
                      }}
                    >
                      Home
                    </Link>
                  </li>
                </ul>
              )}
            </div>
          )}
          <button
            onClick={toggleMenu}
            className="p-2 text-gray-700 focus:outline-none"
            aria-label="Menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Desktop Navbar (hidden on small/medium, shown on large) */}
        <nav className="hidden xl:flex items-center gap-4">
          <ul className="flex items-center gap-4 text-sm sm:text-xs md:text-[15px]">
            <li className="nav-li">
              <Link href="/" className="text-gray-700 hover:text-gray-900">
                HOME
              </Link>
            </li>
            <li className="nav-li">
              <Link href="/" className="text-gray-700 hover:text-gray-900">
                WINNERS
              </Link>
            </li>
            <li className="nav-li">
              <Link href="/" className="text-gray-700 hover:text-gray-900">
                HOW TO ENTER
              </Link>
            </li>
            <li className="nav-li">
              <Link href="/" className="text-gray-700 hover:text-gray-900">
                JOURNAL
              </Link>
            </li>
            <li className="nav-li">
              <Link href="/" className="text-gray-700 hover:text-gray-900">
                PRESS
              </Link>
            </li>
            <li className="nav-li">
              <Link href="/faq" className="text-gray-700 hover:text-gray-900">
                FAQ
              </Link>
            </li>
          </ul>
        </nav>

        <div className="hidden xl:flex items-center gap-2">
          {isLoggedIn === false ? (
            <>
              <Link
                href="/login"
                className="nav-button login-btn text-xs sm:text-sm"
              >
                LOGIN
              </Link>
              <Link
                href="/register"
                className="nav-button register-btn text-xs sm:text-sm"
              >
                REGISTER
              </Link>
            </>
          ) : (
            <>
              <div
                className="relative mr-2 p-2 flex h-9 w-9 items-center justify-center cursor-pointer rounded-full bg-gray-100 hover:bg-gray-200 transition"
                ref={profileMenuRef}
              >
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleProfileMenu();
                  }}
                >
                  <Image
                    src="/component-1-1.svg"
                    alt="profile"
                    width={36}
                    height={36}
                    className="w-6 sm:w-9"
                  />
                </div>
                {isProfileMenuOpen && (
                  <ul className="absolute top-12 right-0 bg-white border shadow-md rounded-md w-48 z-10">
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <Link
                        href={isLoggedIn ? "/" : "/login"}
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsProfileMenuOpen(false);
                        }}
                      >
                        MY ACCOUNT
                      </Link>
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => {
                        localStorage.clear();
                        setIsProfileMenuOpen(false);
                        setIsLoggedIn(false);
                        window.location.href = "/";
                      }}
                    >
                      LOGOUT
                    </li>
                  </ul>
                )}
              </div>
            </>
          )}
          <div className="relative p-2 flex h-9 w-9 items-center justify-center cursor-pointer rounded-full bg-gray-100 hover:bg-gray-200 transition">
            <Link
              href={isLoggedIn ? "/my-cart" : "/login"}
              onClick={() => {
                if (pathname === "/my-cart") return;
                isLoggedIn
                  ? router.push("/my-cart")
                  : router.push("/login");
              }}
            >
              <Image
                src="/Cart.png"
                alt="cart"
                width={36}
                height={36}
                className="w-6 sm:w-9"
              />
            </Link>
          </div>
        </div>

        {/* Mobile Menu (shown on small/medium when open, hidden on large) */}
        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } absolute top-16 left-0 w-full bg-white border-b shadow-md transition-all duration-300 ease-in-out z-10 xl:hidden`}
        >
          <ul className="flex flex-col items-center gap-4 py-4 text-sm">
            <li className="nav-li">
              <Link
                href="/"
                className="text-gray-700 hover:text-gray-900"
                onClick={toggleMenu}
              >
                HOME
              </Link>
            </li>
            <li className="nav-li">
              <Link
                href="/"
                className="text-gray-700 hover:text-gray-900"
                onClick={toggleMenu}
              >
                WINNERS
              </Link>
            </li>
            <li className="nav-li">
              <Link
                href="/"
                className="text-gray-700 hover:text-gray-900"
                onClick={toggleMenu}
              >
                HOW TO ENtER
              </Link>
            </li>
            <li className="nav-li">
              <Link
                href="/"
                className="text-gray-700 hover:text-gray-900"
                onClick={toggleMenu}
              >
                JOURNAL
              </Link>
            </li>
            <li className="nav-li">
              <Link
                href="/"
                className="text-gray-700 hover:text-gray-900"
                onClick={toggleMenu}
              >
                PRIZES
              </Link>
            </li>
            <li className="nav-li">
              <Link
                href="/faq"
                className="text-gray-700 hover:text-gray-900"
                onClick={toggleMenu}
              >
                FAQ
              </Link>
            </li>
            {isLoggedIn === false ? (
              <>
                <li className="nav-li">
                  <Link
                    href="/login"
                    className="text-gray-700 hover:text-gray-900"
                    onClick={toggleMenu}
                  >
                    LOGIN
                  </Link>
                </li>
                <li className="nav-li">
                  <Link
                    href="/register"
                    className="text-gray-700 hover:text-gray-900"
                    onClick={toggleMenu}
                  >
                    REGISTER
                  </Link>
                </li>
              </>
            ) : (
              <li className="nav-li">
                <Link
                  href="/"
                  className="text-gray-700 hover:text-gray-900"
                  onClick={() => {
                    localStorage.clear();
                    toggleMenu();
                    setIsLoggedIn(false);
                    window.location.href = "/";
                  }}
                >
                  LOGOUT
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}
