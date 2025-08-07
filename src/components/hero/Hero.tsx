import React from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
    return (
        <div className="max-w-[1000px] mx-auto bg-white rounded-[8px] mt-4">
            {/* Hero Content */}
            <div className="max-w-[600px] p-5">
                <div className="">
                    <h1 className="text-left text-[48px] text-[var(--gray-deep)] font-bold mb-6 font-chakra-petch leading-tight">
                        Smarter Drafts Start Here – Powered by{' '}
                        <span className="inline-flex items-center">
                            Draft
                            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.0983 1.74205C15.3616 1.20689 15.1652 0.581891 14.625 0.238141C14.0849 -0.105609 13.3483 -0.0743594 12.8438 0.308453L1.41522 9.05845C0.968787 9.4022 0.808073 9.95298 1.01789 10.4374C1.22772 10.9217 1.76343 11.2499 2.35718 11.2499H7.33486L3.90182 18.2577C3.63843 18.7928 3.83486 19.4178 4.37504 19.7616C4.91522 20.1053 5.65182 20.0741 6.15629 19.6913L17.5849 10.9413C18.0313 10.5975 18.192 10.0467 17.9822 9.56236C17.7724 9.07798 17.2411 8.75377 16.6429 8.75377H11.6652L15.0983 1.74205Z" fill="#046A38" />
                            </svg>
                            AI™
                            <svg className="w-8 h-8 text-[var(--accent-yellow)]" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M13 2.05v3.03c3.39.49 6 3.39 6 6.92 0 .9-.18 1.75-.5 2.54l2.6 1.53c.56-1.24.9-2.62.9-4.07 0-5.18-3.95-9.45-9-9.95zM12 19c-3.87 0-7-3.13-7-7 0-3.53 2.61-6.43 6-6.92V2.05c-5.05.5-9 4.77-9 9.95 0 5.52 4.47 10 9.99 10 3.31 0 6.24-1.61 8.06-4.09l-2.6-1.53C16.17 17.98 14.21 19 12 19z" />
                            </svg>
                        </span>
                    </h1>

                    {/* Description */}
                    <p className="text-[18px] text-gray-600 mb-12 max-w-3xl  font-chakra-petch leading-relaxed">
                        Dominate your league with real-time analytics, expert insights, and championship-winning strategies.
                    </p>

                    {/* Call-to-Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 ">
                        <Button
                            size="lg"
                            className="bg-[var(--green-dark)] text-[var(--gray-muted)] hover:bg-[var(--green-dark)]/90 
             font-chakra-petch font-semibold text-[18px] leading-[100%] 
             border border-[#D9DBDF] px-8 py-3 flex items-center justify-center gap-2 text-center"
                        >
                            Explore Tools
                            <svg
                                width="17"
                                height="14"
                                viewBox="0 0 17 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M15.9195 8.04453C16.359 7.60508 16.359 6.8914 15.9195 6.45195L10.2945 0.82695C9.85508 0.387497 9.14141 0.387497 8.70195 0.82695C8.2625 1.2664 8.2625 1.98007 8.70195 2.41953L12.4109 6.125H1.625C1.00273 6.125 0.5 6.62773 0.5 7.25C0.5 7.87226 1.00273 8.375 1.625 8.375H12.4074L8.70547 12.0805C8.26602 12.5199 8.26602 13.2336 8.70547 13.673C9.14492 14.1125 9.85859 14.1125 10.298 13.673L15.923 8.04804L15.9195 8.04453Z"
                                    fill="#D1D5DB"
                                />
                            </svg>
                        </Button>


                        <Button
                            variant="outline"
                            size="lg"
                            className="text-[var(--gray-muted)] bg-[var(--green-dark)] font-semibold text-[18px] px-8 py-3 font-chakra-petch border-[2px] border-white shadow-[0px_4px_4px_0px_#00000040]"
                        >
                            Start Free
                        </Button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
