import React from "react";


const Footer = () => {
  return (
    <div className="bg-[var(--deep-slate)] mt-5">

      <div className="max-w-[1200px] mx-auto px-4  font-chakra-petch ">

        <div className="w-full flex justify-center">
          <form className="flex flex-col sm:flex-col justify-center items-center m-8 gap-3 max-w-2xl w-full">
            <h2 className="text-[var(--gray-muted)] text-[24px] text-center">GET THE LATEST FANTASY NEWS</h2>

            <div className="flex flex-col sm:flex-row gap-3 w-full justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-md w-full sm:w-96 bg-white text-black"
              />
              <button
                type="submit"
                className="cursor-pointer bg-[var(--accent-orange-light)] hover:bg-[var(--accent-orange)] text-black px-5 py-2 rounded-md font-semibold transition-transform duration-300 hover:scale-110"
              >
                Subscribe
              </button>
            </div>

            <label className="flex gap-2 w-full max-w-[400px]">
              <input
                type="checkbox"
                className="mt-1 w-[14px] h-[14px] opacity-100 rounded-[2px] border-[0.5px] border-black bg-white accent-[var(--accent-orange)] hover:bg-[var(--accent-orange-light)] transition-colors duration-300"
              />
              <p className="text-[var(--gray-muted)] font-chakra-petch text-[14px] font-normal leading-snug">
                I agree to receive marketing emails from FantasyBuzz
              </p>
            </label>
          </form>
        </div>




        <div className="flex flex-wrap gap-14">
          {/* Logo + Social */}
          <div className="flex-1 space-y-3 min-w-[220px]">
            <h3 className="font-bold text-lg flex text-white items-center gap-2">
              {/* Your SVG */}<svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.91907 1.39379C10.1034 0.965664 9.96594 0.465664 9.58782 0.190664C9.20969 -0.0843364 8.69407 -0.0593364 8.34094 0.246914L0.340944 7.24691C0.0284438 7.52191 -0.0840562 7.96254 0.0628188 8.35004C0.209694 8.73754 0.584694 9.00004 1.00032 9.00004H4.48469L2.08157 14.6063C1.89719 15.0344 2.03469 15.5344 2.41282 15.8094C2.79094 16.0844 3.30657 16.0594 3.65969 15.7532L11.6597 8.75316C11.9722 8.47816 12.0847 8.03754 11.9378 7.65004C11.7909 7.26254 11.4191 7.00316 11.0003 7.00316H7.51594L9.91907 1.39379Z" fill="#F2E205" />
              </svg>

              FantasyBuzz
            </h3>
            <p className="text-[var(--gray-muted)]">
              The ultimate platform for fantasy football analytics, news, and tools to help you dominate your league.
            </p>
            <div className="flex space-x-4 text-white text-lg">
              <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.9441 4.42638C17.9568 4.60403 17.9568 4.78173 17.9568 4.95938C17.9568 10.3781 13.8325 16.6218 6.29441 16.6218C3.97207 16.6218 1.81473 15.9492 0 14.7817C0.329961 14.8198 0.647187 14.8325 0.989844 14.8325C2.90605 14.8325 4.67004 14.1853 6.07867 13.0812C4.27664 13.0431 2.76648 11.8629 2.24617 10.2386C2.5 10.2766 2.75379 10.302 3.02031 10.302C3.38832 10.302 3.75637 10.2512 4.09898 10.1624C2.22082 9.78169 0.812148 8.13196 0.812148 6.13958V6.08884C1.35781 6.39341 1.99238 6.58376 2.66492 6.60911C1.56086 5.87306 0.837539 4.61673 0.837539 3.1954C0.837539 2.43399 1.04055 1.73603 1.3959 1.12688C3.41367 3.61419 6.44668 5.23853 9.84766 5.41622C9.78422 5.11165 9.74613 4.79442 9.74613 4.47716C9.74613 2.21825 11.5736 0.378174 13.8451 0.378174C15.0253 0.378174 16.0913 0.873096 16.84 1.67259C17.7664 1.49493 18.6547 1.15228 19.4416 0.682744C19.137 1.63454 18.4898 2.43403 17.6395 2.94161C18.4644 2.85282 19.2639 2.62435 19.9999 2.30712C19.4416 3.11927 18.7436 3.84259 17.9441 4.42638Z" fill="#9CA3AF" />
              </svg>
              <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.6875 10.5C19.6875 5.14844 15.3516 0.8125 10 0.8125C4.64844 0.8125 0.3125 5.14844 0.3125 10.5C0.3125 15.3352 3.85508 19.343 8.48633 20.0703V13.3004H6.02539V10.5H8.48633V8.36562C8.48633 5.93789 9.93164 4.59687 12.1453 4.59687C13.2055 4.59687 14.3141 4.78594 14.3141 4.78594V7.16875H13.0922C11.8891 7.16875 11.5137 7.91562 11.5137 8.68164V10.5H14.2004L13.7707 13.3004H11.5137V20.0703C16.1449 19.343 19.6875 15.3352 19.6875 10.5Z" fill="#9CA3AF" />
              </svg>
              <svg width="22" height="15" viewBox="0 0 22 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.4706 2.34699C21.2252 1.42316 20.5023 0.695586 19.5845 0.448672C17.9208 0 11.2497 0 11.2497 0C11.2497 0 4.57859 0 2.91488 0.448672C1.99703 0.695625 1.27414 1.42316 1.02879 2.34699C0.583008 4.02148 0.583008 7.51516 0.583008 7.51516C0.583008 7.51516 0.583008 11.0088 1.02879 12.6833C1.27414 13.6071 1.99703 14.3044 2.91488 14.5513C4.57859 15 11.2497 15 11.2497 15C11.2497 15 17.9208 15 19.5845 14.5513C20.5023 14.3044 21.2252 13.6071 21.4706 12.6833C21.9164 11.0088 21.9164 7.51516 21.9164 7.51516C21.9164 7.51516 21.9164 4.02148 21.4706 2.34699ZM9.06785 10.6871V4.34316L14.6436 7.51523L9.06785 10.6871Z" fill="#9CA3AF" />
              </svg>
              <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.25391 5.00781C6.76953 5.00781 4.76562 7.01172 4.76562 9.49609C4.76562 11.9805 6.76953 13.9844 9.25391 13.9844C11.7383 13.9844 13.7422 11.9805 13.7422 9.49609C13.7422 7.01172 11.7383 5.00781 9.25391 5.00781ZM9.25391 12.4141C7.64844 12.4141 6.33594 11.1055 6.33594 9.49609C6.33594 7.88672 7.64453 6.57812 9.25391 6.57812C10.8633 6.57812 12.1719 7.88672 12.1719 9.49609C12.1719 11.1055 10.8594 12.4141 9.25391 12.4141ZM14.9727 4.82422C14.9727 5.40625 14.5039 5.87109 13.9258 5.87109C13.3438 5.87109 12.8789 5.40234 12.8789 4.82422C12.8789 4.24609 13.3477 3.77734 13.9258 3.77734C14.5039 3.77734 14.9727 4.24609 14.9727 4.82422ZM17.9453 5.88672C17.8789 4.48438 17.5586 3.24219 16.5312 2.21875C15.5078 1.19531 14.2656 0.875 12.8633 0.804687C11.418 0.722656 7.08594 0.722656 5.64062 0.804687C4.24219 0.871094 3 1.19141 1.97266 2.21484C0.945313 3.23828 0.628906 4.48047 0.558594 5.88281C0.476562 7.32812 0.476562 11.6602 0.558594 13.1055C0.625 14.5078 0.945313 15.75 1.97266 16.7734C3 17.7969 4.23828 18.1172 5.64062 18.1875C7.08594 18.2695 11.418 18.2695 12.8633 18.1875C14.2656 18.1211 15.5078 17.8008 16.5312 16.7734C17.5547 15.75 17.875 14.5078 17.9453 13.1055C18.0273 11.6602 18.0273 7.33203 17.9453 5.88672ZM16.0781 14.6562C15.7734 15.4219 15.1836 16.0117 14.4141 16.3203C13.2617 16.7773 10.5273 16.6719 9.25391 16.6719C7.98047 16.6719 5.24219 16.7734 4.09375 16.3203C3.32812 16.0156 2.73828 15.4258 2.42969 14.6562C1.97266 13.5039 2.07813 10.7695 2.07813 9.49609C2.07813 8.22266 1.97656 5.48438 2.42969 4.33594C2.73438 3.57031 3.32422 2.98047 4.09375 2.67187C5.24609 2.21484 7.98047 2.32031 9.25391 2.32031C10.5273 2.32031 13.2656 2.21875 14.4141 2.67187C15.1797 2.97656 15.7695 3.56641 16.0781 4.33594C16.5352 5.48828 16.4297 8.22266 16.4297 9.49609C16.4297 10.7695 16.5352 13.5078 16.0781 14.6562Z" fill="#9CA3AF" />
              </svg>

            </div>
          </div>

          {/* Resources */}
          <div className="flex-1 min-w-[180px]">
            <h4 className="font-semibold mb-2 text-white">Resources</h4>
            <ul className="space-y-1 text-gray-300">
              <li>Rankings</li>
              <li>Start/Sit</li>
              <li>Waiver Wire</li>
              <li>Draft Tools</li>
              <li>Trade Analyzer</li>
              <li>Fantasy Calculators</li>
            </ul>
          </div>

          {/* Company */}
          <div className="flex-1 min-w-[180px]">
            <h4 className="font-semibold mb-2 text-white">Company</h4>
            <ul className="space-y-1 text-gray-300">
              <li>About Us</li>
              <li>Careers</li>
              <li>Contact</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
          {/* Download Section */}
          <div className="flex-1 min-w-[160px]">
            <h4 className="font-semibold text-white mb-2">Download</h4>
            <p className="text-[var(--gray-muted)] mb-4">Get our mobile app for on-the-go fantasy management</p>

            {/* App Store */}
            <div className="flex items-center space-x-2 text-white mb-2">
              <svg width="15" height="19" viewBox="0 0 15 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.4492 9.99609C12.4414 8.5625 13.0898 7.48047 14.4023 6.68359C13.668 5.63281 12.5586 5.05469 11.0938 4.94141C9.70703 4.83203 8.19141 5.75 7.63672 5.75C7.05078 5.75 5.70703 4.98047 4.65234 4.98047C2.47266 5.01562 0.15625 6.71875 0.15625 10.1836C0.15625 11.207 0.34375 12.2643 0.71875 13.3555C1.21875 14.7891 3.02344 18.3047 4.90625 18.2461C5.89062 18.2227 6.58594 17.5469 7.86719 17.5469C9.10938 17.5469 9.75391 18.2461 10.8516 18.2461C12.75 18.2188 14.3828 15.0234 14.8594 13.5859C12.3125 12.3867 12.4492 10.0703 12.4492 9.99609ZM10.2383 3.58203C11.3047 2.31641 11.207 1.16406 11.1758 0.75C10.2344 0.804688 9.14453 1.39063 8.52344 2.11328C7.83984 2.88672 7.4375 3.84375 7.52344 4.92188C8.54297 5 9.47266 4.47656 10.2383 3.58203Z" fill="white" />
              </svg>
              <span>App Store</span>
            </div>

            {/* Google Play */}
            <div className="flex items-center space-x-2 text-white">
              <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.707 9.65234L4.08594 1.00781L15.0547 7.30469L12.707 9.65234ZM1.83594 0.5C1.32813 0.765625 0.988281 1.25 0.988281 1.87891V19.1172C0.988281 19.7461 1.32813 20.2305 1.83594 20.4961L11.8594 10.4961L1.83594 0.5ZM18.4453 9.3125L16.1445 7.98047L13.5781 10.5L16.1445 13.0195L18.4922 11.6875C19.1953 11.1289 19.1953 9.87109 18.4453 9.3125ZM4.08594 19.9922L15.0547 13.6953L12.707 11.3477L4.08594 19.9922Z" fill="white" />
              </svg>
              <span>Google Play</span>
            </div>
          </div>

        </div>
      </div>
    </div>

  );
};

export default Footer;
