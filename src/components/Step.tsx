import svgPathsNew from "../imports/svg-hfh3cd2q4z";

interface StepProps {
  title: string;
  delay?: number;
  completed: boolean;
  failed?: boolean;
  onEdit?: () => void;
}

export function Step({ title, delay, completed, failed, onEdit }: StepProps) {
  return (
    <div>
      <div className="content-stretch flex gap-[10px] h-[44px] items-center px-[10px] py-[10px]">
        {/* Check/Cancel Icon */}
        <div className="relative shrink-0 size-[24px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            {failed ? (
              <>
                <g clipPath="url(#clip0_cancel)">
                  <path 
                    d={svgPathsNew.p2511d980} 
                    fill="#FF6467" 
                  />
                </g>
                <defs>
                  <clipPath id="clip0_cancel">
                    <rect fill="white" height="24" width="24" />
                  </clipPath>
                </defs>
              </>
            ) : (
              <>
                <g clipPath="url(#clip0_check)">
                  <path 
                    d={svgPathsNew.p2de1ad00} 
                    fill={completed ? "#22BB33" : "#969696"} 
                  />
                </g>
                <defs>
                  <clipPath id="clip0_check">
                    <rect fill="white" height="24" width="24" />
                  </clipPath>
                </defs>
              </>
            )}
          </svg>
        </div>

        {/* Step Title */}
        <div className="flex flex-col font-['Raleway',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1c1c1e] text-[20px] text-center text-nowrap">
          <p className="leading-[normal] whitespace-pre">{title}</p>
        </div>
        
        <div className="flex-1" />
        
        {/* Edit Icon */}
        <button
          onClick={onEdit}
          className="relative shrink-0 size-[20px] hover:opacity-70 transition-opacity"
          aria-label={`Edit ${title}`}
        >
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <path d={svgPathsNew.p157c33f0} fill="black" />
          </svg>
        </button>
      </div>
      
      {/* Delay indicator if present */}
      {delay && (
        <div className="flex gap-[10px] items-center ml-9 h-[28px]">
          <div className="size-[28px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
              <g clipPath="url(#clip0_alarm)">
                <path d={svgPathsNew.p1655fa80} fill="#969696" />
              </g>
              <defs>
                <clipPath id="clip0_alarm">
                  <rect fill="white" height="28" width="28" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="flex flex-col font-['Raleway',sans-serif] font-semibold justify-center leading-[0] text-[#969696] text-[20px] text-center text-nowrap">
            <p className="leading-[normal] whitespace-pre">{delay} seconds delay</p>
          </div>
        </div>
      )}
    </div>
  );
}
