"use client";

import { ArrowRightIcon } from "lucide-react";
import React, { useState } from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

export default function Register() {
  const [formData, setFormData] = useState({
    firstName: "",
    surname: "",
    email: "",
    password: "",
    agreeTerms: false,
    agreeCommunications: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  // Form fields data
  const formFields = [
    {
      id: "firstName",
      name: "firstName",
      label: "First Name",
      type: "text",
    },
    {
      id: "surname",
      name: "surname",
      label: "Surname",
      type: "text",
    },
    {
      id: "email",
      name: "email",
      label: "Email Address",
      type: "email",
    },
    {
      id: "password",
      name: "password",
      label: "Password",
      type: "password",
    },
  ];

  return (
    <div className="flex w-full items-start">
      <main className="flex items-start justify-center pt-10 pb-[60px] px-4 sm:px-10 w-full flex-[0_0_auto] z-0">
        {/* Left watch image - hidden on mobile */}
        <div className="hidden md:flex flex-col items-start justify-center self-stretch">
          <div className="flex-1 grow max-w-[400px] w-[400px] relative">
            <Image
              src="/lux-watch-supply--watch-cover-left.png"
              alt="Luxury watch left"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Registration form */}
        <div className="w-full md:max-w-[545px] md:w-[545px] items-start px-0 py-10 md:py-[100px] flex flex-col self-stretch">
          <div className="items-center w-full flex-[0_0_auto] flex flex-col self-stretch">
            <div className="flex flex-col w-full md:max-w-[545px] items-start px-4 sm:px-[15px] py-0">
              {/* Header section */}
              <div className="flex items-start gap-0 self-stretch w-full">
                <div className="flex items-center justify-between w-full pt-0 pb-6 sm:pb-8 px-0">
                  {/* Register Heading */}
                  <h1 className="text-[#212121] text-[24px] sm:text-[30px] leading-[28px] sm:leading-[34.2px] whitespace-nowrap">
                    Register
                  </h1>

                  {/* Already have an account */}
                  <div className="flex items-center gap-1">
                    <span className="text-sm text-[#212121] font-normal leading-[14px] [font-family:'Inter',Helvetica] whitespace-nowrap">
                      Already have an account?
                    </span>
                    <a
                      href="/login"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[#1b1b1b] hover:underline transition-colors [font-family:'Inter',Helvetica] leading-[14px]"
                    >
                      Click here
                    </a>
                  </div>
                </div>
              </div>

              {/* Form fields */}
              <form
                onSubmit={handleSubmit}
                className="flex flex-col items-start w-full"
              >
                {formFields.map((field, index) => (
                  <div
                    key={field.id}
                    className={`flex flex-col items-start ${
                      index < formFields.length - 1 ? "pt-0 pb-4 sm:pb-6" : ""
                    } px-0 relative self-stretch w-full flex-[0_0_auto]`}
                  >
                    <div className="relative self-stretch w-full h-[48px] sm:h-[53px]">
                      <Input
                        id={field.id}
                        name={field.name}
                        type={field.type}
                        placeholder={field.label}
                        value={
                          formData[
                            field.name as keyof typeof formData
                          ] as string
                        }
                        onChange={handleInputChange}
                        className="h-[48px] sm:h-[53px] border border-solid border-[#212121] focus:ring-2 focus:ring-blue-500 transition-all"
                        required
                      />
                    </div>
                  </div>
                ))}

                {/* Terms and conditions checkbox */}
                <div className="flex items-center gap-2 pt-1 pb-0.5 w-full">
                  {/* Checkbox */}
                  <Checkbox
                    id="terms"
                    className="w-[15px] h-[15px] mt-[2px]"
                    checked={formData.agreeTerms}
                    onCheckedChange={(checked: boolean) =>
                      handleCheckboxChange("agreeTerms", checked as boolean)
                    }
                  />

                  {/* Label with links */}
                  <span className="text-xs text-[#212121] leading-[22px] font-normal [font-family:'Inter',Helvetica] flex flex-wrap gap-1">
                    I agree to the
                    <a
                      href="#"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="font-semibold text-blue hover:text-opacity-80 transition-colors"
                    >
                      Terms & Conditions
                    </a>
                    and
                    <a
                      href="/"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="font-semibold text-blue hover:text-opacity-80 transition-colors"
                    >
                      Privacy Policy
                    </a>
                    .
                  </span>
                </div>

                <div className="flex items-center gap-2 pt-1 pb-2 px-0 w-full">
                  {/* Checkbox */}
                  <Checkbox
                    id="communications"
                    className="w-[15px] h-[15px] mt-[2px]"
                    checked={formData.agreeCommunications}
                    onCheckedChange={(checked: boolean) =>
                      handleCheckboxChange(
                        "agreeCommunications",
                        checked as boolean
                      )
                    }
                  />

                  {/* Label */}
                  <label
                    htmlFor="communications"
                    className="text-xs text-[#212121] font-normal leading-[22px] [font-family:'Inter',Helvetica]"
                  >
                    I agree to receive communications about Luxury Watch Supply
                    that might be of interest to me.
                  </label>
                </div>

                {/* Register button */}
                <Button
                  type="submit"
                  className="flex w-full sm:max-w-[311px] sm:w-[311px] text-black items-center gap-0 px-[18px] py-2.5 bg-[#fbcd4e] rounded-sm border-2 border-solid hover:bg-[#f9c74f]"
                  disabled={!formData.agreeTerms}
                >
                  <span className="mt-[-1.50px]">
                    REGISTER
                  </span>
                  <div className="flex min-w-[23px] h-[18px] items-end pl-[184.16px] pr-0 py-0 flex-1 grow flex-col">
                    <div className="items-start ml-[-0.16px] flex flex-col w-[23px] h-[18px]">
                      <div className="items-center justify-center px-[1.15px] py-0 flex flex-col w-[23px] h-[18px]">
                        <ArrowRightIcon className="w-[20.7px] h-[18px]" />
                      </div>
                    </div>
                  </div>
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Right watch image - hidden on mobile */}
        <div className="hidden md:flex w-[647.5px] items-start justify-end self-stretch">
          <div className="self-stretch max-w-[400px] w-[400px] relative">
            <Image
              src="/lux-watch-supply--watch-cover-right.png"
              alt="Luxury watch right"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </main>
    </div>
  );
}