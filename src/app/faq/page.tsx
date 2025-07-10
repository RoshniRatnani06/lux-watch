"use client";

import { useEffect, useState, useMemo, SetStateAction } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FAQPage() {
//   const dispatch = useDispatch();
  //   const { faqData, status } = useSelector((state: { faq: any; }) => state.faq);
  const [openIndex, setOpenIndex] = useState(null);
  const faqData = [
    {
      name: "What is your return policy?",
      description:
        "You can return any item within 30 days of purchase. The product must be unused and in its original packaging. Please refer to our <a href='/' class='text-blue-500 underline'>Return Policy</a> for more details.",
    },
    {
      name: "How do I track my order?",
      description:
        "Once your order is shipped, you’ll receive a tracking number via email. You can use this number to track your shipment <a href='/' class='text-blue-500 underline'>here</a>.",
    },
    {
      name: "Do you offer international shipping?",
      description:
        "Yes, we ship internationally to most countries. Shipping costs and delivery times vary depending on the destination.",
    },
    {
      name: "Can I change or cancel my order?",
      description:
        "Orders can be changed or canceled within 1 hour of placing them. After that, they’re already being processed and can't be modified. Contact our <a href='/' class='text-blue-500 underline'>Support Team</a> for help.",
    },
    {
      name: "How can I contact customer service?",
      description:
        "You can reach out to our customer service team via email at <a href='mailto:support@example.com' class='text-blue-500 underline'>support@example.com</a> or use our live chat available on the website.",
    },
  ];

  // Memoize the FAQs data
  //   const memoizedFAQs = useMemo(() => faqData, [faqData]);
  const memoizedFAQs = useMemo(() => faqData, []);

  // Toggle FAQ accordion
  const toggleFAQ = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Fetch FAQs when status is idle
//   useEffect(() => {
//     if (status === "idle") {
//       dispatch((fetchFAQs as any)());
//     }
//   }, [dispatch, status]);

  return (
    <div className="flex min-h-screen bg-gray-50">
      <main className="flex-1 py-6 sm:py-8 px-4 sm:px-6 lg:px-8 flex flex-col">
        {/* Hero Section */}
        <section className="relative">
          <div className="mx-auto max-w-4xl text-start p-[10px]">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Q&A
            </h2>
          </div>
        </section>
        {/* FAQ Section */}
        <section className="container mx-auto max-w-4xl p-[10px] rounded">
          {/* {status === "loading" && (
            <div className="flex justify-center py-8">
              <p className="text-sm text-gray-500">Loading</p>
            </div>
          )}

          {status === "failed" && (
            <div className="flex justify-center py-8">
              <p className="text-sm text-red-500">Failed</p>
            </div>
          )}

          {status === "succeeded" && memoizedFAQs.length === 0 && (
            <div className="flex justify-center py-8">
              <p className="text-sm text-gray-500">No FAQ</p>
            </div>
          )} */}

          {/* {status === "succeeded" && memoizedFAQs.length > 0 && ( */}
          {memoizedFAQs.length > 0 && (
            <div className="flex flex-col gap-3">
              {memoizedFAQs.map((faq: any, index: any) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg bg-white shadow-sm transition-all duration-300 hover:shadow-md"
                >
                  <div
                    className="flex justify-between items-center p-4 sm:p-5 cursor-pointer bg-gray-100 hover:bg-gray-200 transition-colors"
                    onClick={() => toggleFAQ(index)}
                  >
                    <h4 className="text-base sm:text-lg font-semibold text-gray-800">
                      {faq.name}
                    </h4>
                    <span className="text-black">
                      {openIndex === index ? (
                        <ChevronUp className="h-6 w-6" />
                      ) : (
                        <ChevronDown className="h-6 w-6" />
                      )}
                    </span>
                  </div>
                  {openIndex === index && (
                    <div className="p-4 sm:p-5 text-sm sm:text-base text-gray-600">
                      <div
                        dangerouslySetInnerHTML={{ __html: faq.description }}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
