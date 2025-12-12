import svgPathsDetail from "../imports/svg-0ikchrah8d";

interface PlayerControlsProps {
  onSkipPrevious?: () => void;
  onPlay?: () => void;
  onSkipNext?: () => void;
}

export function PlayerControls({ onSkipPrevious, onPlay, onSkipNext }: PlayerControlsProps) {
  return (
    <div className="content-stretch flex gap-[10px] items-center px-0 py-[16px] rounded-[4px] w-full">
      {/* Skip Previous */}
      <button 
        onClick={onSkipPrevious}
        className="shrink-0 hover:opacity-70 transition-opacity"
        aria-label="Skip previous"
      >
        <div className="size-[36px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
            <g clipPath="url(#clip0_skip_prev)">
              <path d={svgPathsDetail.p1e9080} fill="#CCCCCC" />
            </g>
            <defs>
              <clipPath id="clip0_skip_prev">
                <rect fill="white" height="36" width="36" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </button>

      {/* Play Button */}
      <button 
        onClick={onPlay}
        className="shrink-0 hover:opacity-70 transition-opacity"
        aria-label="Play"
      >
        <div className="size-[38px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 38">
            <g clipPath="url(#clip0_play_filled)">
              <path d={svgPathsDetail.pb92c900} fill="black" />
            </g>
            <defs>
              <clipPath id="clip0_play_filled">
                <rect fill="white" height="38" width="38" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </button>

      {/* Skip Next */}
      <button 
        onClick={onSkipNext}
        className="shrink-0 hover:opacity-70 transition-opacity"
        aria-label="Skip next"
      >
        <div className="size-[36px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
            <g clipPath="url(#clip0_skip_next)">
              <path d={svgPathsDetail.p2d9db4e0} fill="#CCCCCC" />
            </g>
            <defs>
              <clipPath id="clip0_skip_next">
                <rect fill="white" height="36" width="36" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </button>
    </div>
  );
}
