import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const tools = [
    {
        icon: (
            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.58203 5.08207C8.01172 2.65238 11.9375 2.64066 14.3828 5.043L12.7734 6.64847C12.5039 6.918 12.4258 7.32035 12.5703 7.67191C12.7148 8.02347 13.0586 8.25004 13.4375 8.25004H18.1055H18.4375C18.957 8.25004 19.375 7.83207 19.375 7.31254V2.31254C19.375 1.93363 19.1484 1.58988 18.7969 1.44535C18.4453 1.30082 18.043 1.37894 17.7734 1.64847L16.1484 3.27347C12.7266 -0.105433 7.21484 -0.0937142 3.8125 3.31254C2.85938 4.26566 2.17188 5.38675 1.75 6.58597C1.51953 7.23832 1.86328 7.94925 2.51172 8.17972C3.16016 8.41019 3.875 8.06644 4.10547 7.418C4.40625 6.56644 4.89453 5.76566 5.58203 5.08207ZM0.625 11.6875V11.9844V12.0118V16.6875C0.625 17.0664 0.851562 17.4102 1.20312 17.5547C1.55469 17.6993 1.95703 17.6211 2.22656 17.3516L3.85156 15.7266C7.27344 19.1055 12.7852 19.0938 16.1875 15.6875C17.1406 14.7344 17.832 13.6133 18.2539 12.418C18.4844 11.7657 18.1406 11.0547 17.4922 10.8243C16.8438 10.5938 16.1289 10.9375 15.8984 11.586C15.5977 12.4375 15.1094 13.2383 14.4219 13.9219C11.9922 16.3516 8.06641 16.3633 5.62109 13.961L7.22656 12.3516C7.49609 12.0821 7.57422 11.6797 7.42969 11.3282C7.28516 10.9766 6.94141 10.75 6.5625 10.75H1.89062H1.86328H1.5625C1.04297 10.75 0.625 11.168 0.625 11.6875Z" fill="#22C55E" />
            </svg>


        ),
        title: "League Sync",
        description: "Connect your fantasy leagues for personalized insights and tailored recommendations.",
        button: "Connect League",
        buttonColor: "bg-[var(--accent-orange)] text-[var(--deep-bluck-blue)] hover:bg-yellow-400",
    },
    {
        icon: (
            <svg width="26" height="21" viewBox="0 0 26 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.34375 0.5C7.17255 0.5 7.96741 0.82924 8.55346 1.41529C9.13951 2.00134 9.46875 2.7962 9.46875 3.625C9.46875 4.4538 9.13951 5.24866 8.55346 5.83471C7.96741 6.42076 7.17255 6.75 6.34375 6.75C5.51495 6.75 4.72009 6.42076 4.13404 5.83471C3.54799 5.24866 3.21875 4.4538 3.21875 3.625C3.21875 2.7962 3.54799 2.00134 4.13404 1.41529C4.72009 0.82924 5.51495 0.5 6.34375 0.5ZM20.7188 0.5C21.5476 0.5 22.3424 0.82924 22.9285 1.41529C23.5145 2.00134 23.8438 2.7962 23.8438 3.625C23.8438 4.4538 23.5145 5.24866 22.9285 5.83471C22.3424 6.42076 21.5476 6.75 20.7188 6.75C19.8899 6.75 19.0951 6.42076 18.509 5.83471C17.923 5.24866 17.5938 4.4538 17.5938 3.625C17.5938 2.7962 17.923 2.00134 18.509 1.41529C19.0951 0.82924 19.8899 0.5 20.7188 0.5ZM0.71875 12.168C0.71875 9.86719 2.58594 8 4.88672 8H6.55469C7.17578 8 7.76562 8.13672 8.29688 8.37891C8.24609 8.66016 8.22266 8.95312 8.22266 9.25C8.22266 10.7422 8.87891 12.082 9.91406 13C9.90625 13 9.89844 13 9.88672 13H1.55078C1.09375 13 0.71875 12.625 0.71875 12.168ZM16.5508 13C16.543 13 16.5352 13 16.5234 13C17.5625 12.082 18.2148 10.7422 18.2148 9.25C18.2148 8.95312 18.1875 8.66406 18.1406 8.37891C18.6719 8.13281 19.2617 8 19.8828 8H21.5508C23.8516 8 25.7188 9.86719 25.7188 12.168C25.7188 12.6289 25.3438 13 24.8867 13H16.5508ZM9.46875 9.25C9.46875 8.25544 9.86384 7.30161 10.5671 6.59835C11.2704 5.89509 12.2242 5.5 13.2188 5.5C14.2133 5.5 15.1671 5.89509 15.8704 6.59835C16.5737 7.30161 16.9688 8.25544 16.9688 9.25C16.9688 10.2446 16.5737 11.1984 15.8704 11.9017C15.1671 12.6049 14.2133 13 13.2188 13C12.2242 13 11.2704 12.6049 10.5671 11.9017C9.86384 11.1984 9.46875 10.2446 9.46875 9.25ZM5.71875 19.457C5.71875 16.582 8.05078 14.25 10.9258 14.25H15.5117C18.3867 14.25 20.7188 16.582 20.7188 19.457C20.7188 20.0312 20.2539 20.5 19.6758 20.5H6.76172C6.1875 20.5 5.71875 20.0352 5.71875 19.457Z" fill="#2563EB" />
            </svg>


        ),
        title: "Mock Draft Simulator",
        description: "Practice your draft strategy with AI-powered simulations and expert recommendations.",
        button: "Start Draft",
        buttonColor: "bg-[var(--accent-orange)] text-[var(--deep-bluck-blue)] hover:bg-yellow-400",
    },
    {
        icon: (
            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.25 4.24998H13.75V1.74998C13.75 1.24607 14.0547 0.78904 14.5234 0.593727C14.9922 0.398415 15.5273 0.50779 15.8867 0.863259L19.6367 4.61326C19.8711 4.84763 20.0039 5.16404 20.0039 5.49607C20.0039 5.8281 19.8711 6.14451 19.6367 6.37888L15.8867 10.1289C15.5273 10.4883 14.9922 10.5937 14.5234 10.3984C14.0547 10.2031 13.75 9.74998 13.75 9.24216V6.74998H1.25C0.558594 6.74998 0 6.19138 0 5.49998C0 4.80857 0.558594 4.24998 1.25 4.24998ZM18.75 14.25C19.4414 14.25 20 14.8086 20 15.5C20 16.1914 19.4414 16.75 18.75 16.75H6.25V19.25C6.25 19.7539 5.94531 20.2109 5.47656 20.4062C5.00781 20.6015 4.47266 20.4922 4.11328 20.1367L0.363281 16.3867C0.128906 16.1523 -0.00390625 15.8359 -0.00390625 15.5039C-0.00390625 15.1719 0.128906 14.8554 0.363281 14.6211L4.11328 10.8711C4.47266 10.5117 5.00781 10.4062 5.47656 10.6015C5.94531 10.7969 6.25 11.25 6.25 11.7578V14.2578H18.75V14.25Z" fill="#9333EA" />
            </svg>

        ),
        title: "Trade Analyzer",
        description: "Evaluate trade proposals and get win-loss insights with advanced analytics.",
        button: "Analyze Trade",
        buttonColor: "bg-[var(--accent-orange)] text-[var(--deep-bluck-blue)] hover:bg-yellow-400",
    },
];

const DraftTools = () => {
    return (
        <section className="w-full bg-[var(--gray-border)] py-10">
            <div className="max-w-5xl mx-auto px-3">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-[var(--green-dim)] font-chakra-petch  mb-2">
                    Fantasy Draft Tools
                </h2>
                <div className="text-center text-[var(--green-dim)] font-chakra-petch text-lg font-semibold mb-2">
                    Draft Smart. Dominate Sundays.
                </div>
                <div
                        className="w-[270px] mx-auto h-1 mb-2"
                        style={{ background: "var(--accent-yellow)", borderRadius: 2 }}
                ></div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 mt-8">
                    {tools.map((tool, idx) => (
                        <Card key={tool.title} className="rounded-2xl shadow-md border border-[#E5E7EB] bg-white flex flex-col items-center text-center py-8 px-6">
                            <CardContent className="flex flex-col items-center p-0">
                                <div className="mb-4">{tool.icon}</div>
                                <h3 className="text-xl font-bold font-chakra-petch text-[var(--primary)] mb-2">
                                    {tool.title}
                                </h3>
                                <p className="text-[var(--gray-deep)] text-base mb-6 font-chakra-petch">
                                    {tool.description}
                                </p>
                                <Button className={`w-full mt-auto font-chakra-petch font-semibold text-base rounded-md py-2 ${tool.buttonColor}`}>
                                    {tool.button}
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
                <div className="text-center mt-2">
                    <Link href="/tools" className="text-[var(--green-dim)] font-chakra-petch font-semibold text-lg hover:underline flex items-center justify-center gap-2">
                        View All Tools →
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default DraftTools;