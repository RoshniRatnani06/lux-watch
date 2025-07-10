import { ArrowRightIcon } from "lucide-react";
import React from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

export default function Login() {
  return (
    <div className="flex flex-col w-full items-start">
      <main className="flex w-full justify-center pt-10 pb-[60px] px-4 sm:px-10">
        <div className="flex w-full max-w-[1600px]">
          {/* Left watch image - hidden on mobile */}
          <div className="hidden md:flex flex-1 bg-white">
            <div className="h-full max-w-[400px] w-full relative aspect-[4/3]">
              <Image
                src="/lux-watch-supply--watch-cover-left.png"
                alt="Luxury Watch Left"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Login form section */}
          <div className="w-full md:w-[545px] py-10 md:py-[100px] bg-white">
            <div className="flex flex-col w-full px-4 sm:px-[15px]">
              <div className="flex justify-between items-start w-full">
                <div className="pb-0 md:pb-4">
                  <h2 className="text-[#212121] text-[24px] sm:text-[30px] leading-[28px] sm:leading-[34.2px]">
                    Log In
                  </h2>
                </div>

                <div className="pt-[10px] md:pt-[18px]">
                  <a
                    href="/forgot-password"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="font-normal text-[#1b1b1b] text-sm hover:underline"
                  >
                    Forgot Password?
                  </a>
                </div>
              </div>

              <div className="mt-4 space-y-6 sm:space-y-10">
                <div className="relative">
                  <Input
                    className="h-[48px] sm:h-[53px] border border-[#212121] bg-white px-4 py-3"
                    placeholder="Email Address"
                    type="email"
                    required
                  />
                </div>

                <div className="relative">
                  <Input
                    type="password"
                    className="h-[48px] sm:h-[53px] border border-[#212121] bg-white px-4 py-3"
                    placeholder="Password"
                    required
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="remember" />
                  <label
                    htmlFor="remember"
                    className="font-normal text-[#212121] text-xs leading-[22px]"
                  >
                    Remember Me
                  </label>
                </div>

                <Button className="w-full sm:w-[311px] h-[40px] bg-[#FBCD4E] text-black rounded-sm border-2 border-solid hover:bg-[#f9c74f]">
                  <span className="text-center">LOG IN</span>
                  <ArrowRightIcon className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Right watch image - hidden on mobile */}
          <div className="hidden md:flex flex-1 bg-white justify-end">
            <div className="h-full max-w-[400px] w-full relative aspect-[4/3]">
              <Image
                src="/lux-watch-supply--watch-cover-right.png"
                alt="Luxury Watch Right"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}