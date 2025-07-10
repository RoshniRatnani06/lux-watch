'use client'

import { InstagramIcon } from "lucide-react";
import React from "react";
import Image from "next/image";
import TrustpilotBanner from "./TrustpilotBanner";

const navLinks = [
  { name: "Home", url: "/" },
  { name: "Winners", url: "/winners" },
  {
    name: "Planting Trees",
    url: "/planting-trees/",
  },
  {
    name: "How To Enter",
    url: "/how-to-enter",
  },
  { name: "Journal", url: "/journal" },
  { name: "Press", url: "/press" },
  { name: "FAQ", url: "/faq" },
];

const footerLinks = [
  { name: "Returns Policy", url: "/returns" },
  {
    name: "Terms and Conditions",
    url: "/terms-and-conditions",
  },
  { name: "Privacy", url: "/privacy" },
  { name: "Contact", url: "/contact" },
];

export const Footer = ()=> {
  return (
    <footer className="flex flex-col w-full">
      <TrustpilotBanner />
      <div className="flex flex-col items-center py-[30px] w-full bg-[#1b1b1b]">
        <div className="flex flex-col w-full items-center">
          <div className="flex flex-col items-center w-full">
            <div className="flex items-center justify-center pb-8 w-full">
              <div className="flex items-center justify-center">
                <Image
                  className="w-[50px] h-[15px]"
                  alt="Logo"
                  src="/component-1-2.svg"
                  width={50}
                  height={15}
                />
              </div>
            </div>

            <nav className="flex items-center justify-center pb-6 w-full flex-wrap">
              {navLinks.map((link, index) => (
                <div key={index} className="px-4">
                  <a
                    href={link.url}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="px-4 py-2 inline-block font-semibold text-base leading-4 text-white [font-family:'Inter',Helvetica] hover:text-opacity-80 transition-colors"
                  >
                    {link.name}
                  </a>
                </div>
              ))}
            </nav>

            <p className="text-center text-base text-white leading-6 [font-family:'Inter',Helvetica]">
              For news, exclusive offers and beautiful watches, follow us on
              Instagram.
            </p>

            <div className="flex items-center justify-center py-6 w-full">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:scale-110 transition-transform"
              >
                <InstagramIcon className="w-[35px] h-[35px] text-white" />
              </a>
            </div>

            <div className="w-[146px] h-[45px] relative">
              <Image
                src="/secure-payments.png"
                alt="Secure payments"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center py-3 md:py-6 w-full bg-[#fff]">
        <div className="flex flex-col w-full px-[15px]">
          <div className="flex flex-col md:flex-row items-center justify-between w-full">
            <div className="flex items-center flex-wrap flex-col md:flex-row justify-center md:justify-start w-full">
              {footerLinks.map((link, index) => (
                <div key={index} className="p-0 md:pr-8">
                  <a
                    href={link.url}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="text-xs text-black leading-3 [font-family:'Inter',Helvetica] hover:text-opacity-80 transition-colors"
                  >
                    {link.name}
                  </a>
                </div>
              ))}
            </div>

            <div className="flex items-center flex-col md:flex-row">
              <div className="text-xs text-black max-w-[250px] md:max-w-none text-center md:text-start leading-[18px] [font-family:'Inter',Helvetica]">
                Luxury Supply Group Ltd is registered at 86-90 Paul St, London,
                EC2A 4NE, UK
              </div>
              <div className="pl-6">
                <div className="text-xs text-black leading-[18px] [font-family:'Inter',Helvetica]">
                  © Lux Group 2025
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};