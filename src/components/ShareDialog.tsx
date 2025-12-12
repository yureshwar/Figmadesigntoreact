import { useState } from "react";

interface ShareDialogProps {
  url?: string;
  onClose: () => void;
}

export function ShareDialog({ url = "https://recording.com", onClose }: ShareDialogProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      {/* Backdrop - transparent click area */}
      <div 
        className="fixed inset-0 bg-transparent z-40"
        onClick={onClose}
      />
      
      {/* Dialog - compact inline design */}
      <div className="absolute right-full top-1/2 -translate-y-1/2 mr-2 bg-white rounded-[3px] shadow-[0px_2px_8px_rgba(0,0,0,0.15)] z-50 px-2 py-1.5 flex items-center gap-2 whitespace-nowrap">
        <p className="font-['Raleway',sans-serif] font-semibold text-[12px] text-black">
          Copy the link
        </p>
        <div className="bg-[#d9d9d9] rounded-[4px] px-2 py-1 flex items-center gap-2 min-w-[120px]">
          <p className="font-['Raleway',sans-serif] font-semibold text-[10px] text-black truncate flex-1">
            {url}
          </p>
          <button
            onClick={handleCopy}
            className="shrink-0 hover:opacity-80 transition-opacity"
            aria-label="Copy link"
          >
            <div className="size-[18px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
                <rect fill={copied ? "#4ade80" : "#F3F3F3"} height="25" rx="4" width="25" />
                <path 
                  clipRule="evenodd" 
                  d="M8.33301 6.25C7.41254 6.25 6.66634 6.99619 6.66634 7.91667V14.5833C6.66634 15.5038 7.41254 16.25 8.33301 16.25H11.6663V14.5833H8.33301V7.91667H14.9997V11.25H16.6663V7.91667C16.6663 6.99619 15.9201 6.25 14.9997 6.25H8.33301ZM10.833 10.4167C9.9126 10.4167 9.16634 11.1629 9.16634 12.0833V18.75C9.16634 19.6705 9.9126 20.4167 10.833 20.4167H17.4997C18.4201 20.4167 19.1663 19.6705 19.1663 18.75V12.0833C19.1663 11.1629 18.4201 10.4167 17.4997 10.4167H10.833Z" 
                  fill="black" 
                  fillRule="evenodd" 
                />
              </svg>
            </div>
          </button>
        </div>
        
        {/* Arrow pointing right to the button */}
        <div className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-2 h-3">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 12">
            <path d="M8 6L0 0V12L8 6Z" fill="white" />
          </svg>
        </div>
      </div>
    </>
  );
}