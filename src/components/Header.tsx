import svgPaths from "../imports/svg-s04gq19zek";
import { useState } from "react";
import { LanguageSelector } from "./LanguageSelector";

export function Header() {
  const [showLanguageSelector, setShowLanguageSelector] = useState(false);

  return (
    <>
      {/* Header */}
      <header className="w-full flex items-center justify-between mb-6">
        <button
          className="w-6 h-6 border-2 border-[#8e8e93] rounded flex items-end justify-center pb-0.5 hover:bg-gray-100 transition-colors"
          aria-label="Menu"
        >
          <div className="w-4 h-0.5 bg-[#8e8e93] rounded-full" />
        </button>

        <div className="flex items-center gap-2">
          <h1 className="font-['Raleway',sans-serif] text-[32px] text-black">
            UDAN
          </h1>
          <span className="bg-[#cccccc] text-[#1e1e1e] text-[10px] font-['Raleway',sans-serif] px-1 rounded h-[14px] flex items-center">
            Beta
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            className="hover:opacity-80 transition-opacity"
            aria-label="Settings"
          >
            <div className="size-6">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 24 24"
              >
                <g clipPath="url(#clip0_settings)">
                  <path
                    d={svgPaths.p3a43e300}
                    fill="#8E8E93"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_settings">
                    <rect
                      fill="white"
                      height="24"
                      width="24"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </button>
          <button
            className="w-6 h-6 border-2 border-[#8e8e93] rounded flex items-center justify-center hover:bg-gray-100 transition-colors"
            aria-label="Close"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 24 24"
            >
              <path
                d={svgPaths.p29ed3860}
                stroke="#8E8E93"
                strokeLinecap="round"
                strokeWidth="2"
              />
            </svg>
          </button>
        </div>
      </header>

      {/* Search Bar */}
      <div className="w-full mb-7 relative">
        <div className="relative bg-[#d9d9d9] rounded-[30px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] h-[42px] flex items-center px-5">
          <div className="size-6 shrink-0">
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 24 24"
            >
              <path d={svgPaths.pded2700} fill="black" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search"
            className="flex-1 bg-transparent border-none outline-none px-2 text-base font-['Roboto',sans-serif] placeholder:text-black"
          />
          <button
            className="shrink-0 hover:opacity-80 transition-opacity relative"
            aria-label="Voice search"
          >
            <div className="w-8 h-8 rounded-full bg-white hover:bg-black shadow-sm flex items-center justify-center transition-colors group">
              <svg
                className="w-7 h-7"
                fill="none"
                viewBox="0 0 48 49"
              >
                <g clipPath="url(#clip0_mic)">
                  <path
                    d={svgPaths.p37808b00}
                    fill="#1C1C1E"
                    className="group-hover:fill-white transition-colors"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_mic">
                    <rect
                      fill="white"
                      height="21.4737"
                      transform="translate(9.31023 5.36845)"
                      width="21.2408"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </button>
          <div className="relative">
            <button
              onClick={() => setShowLanguageSelector(!showLanguageSelector)}
              className="shrink-0 ml-2 hover:opacity-80 transition-opacity"
              aria-label="Translate"
            >
              <div className="w-8 h-8 rounded-full bg-white hover:bg-black shadow-sm flex items-center justify-center transition-colors group">
                <svg
                  className="w-7 h-7"
                  fill="none"
                  viewBox="0 0 48 49"
                >
                  <path
                    d={svgPaths.p32398380}
                    stroke="black"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="group-hover:stroke-white transition-colors"
                  />
                </svg>
              </div>
            </button>
            
            {/* Language Selector Dropdown */}
            {showLanguageSelector && (
              <LanguageSelector onClose={() => setShowLanguageSelector(false)} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}