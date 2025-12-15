import svgPathsDetail from "../imports/svg-0ikchrah8d";
import { IconButton } from "./IconButton";

interface PlayerControlsProps {
  onSkipPrevious?: () => void;
  onPlay?: () => void;
  onSkipNext?: () => void;
}

export function PlayerControls({ onSkipPrevious, onPlay, onSkipNext }: PlayerControlsProps) {
  return (
    <div className="content-stretch flex gap-[10px] items-center px-0 py-4 rounded-[var(--widget-radius-sm)] w-full">
      {/* Skip Previous */}
      <IconButton 
        onClick={onSkipPrevious}
        size="lg"
        aria-label="Skip previous"
      >
        <div className="size-9">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
            <g clipPath="url(#clip0_skip_prev)">
              <path d={svgPathsDetail.p1e9080} fill="hsl(var(--widget-icon-disabled))" />
            </g>
            <defs>
              <clipPath id="clip0_skip_prev">
                <rect fill="white" height="36" width="36" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </IconButton>

      {/* Play Button */}
      <IconButton 
        onClick={onPlay}
        size="lg"
        aria-label="Play"
      >
        <div className="size-[38px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 38">
            <g clipPath="url(#clip0_play_filled)">
              <path d={svgPathsDetail.pb92c900} fill="hsl(var(--widget-icon-primary))" />
            </g>
            <defs>
              <clipPath id="clip0_play_filled">
                <rect fill="white" height="38" width="38" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </IconButton>

      {/* Skip Next */}
      <IconButton 
        onClick={onSkipNext}
        size="lg"
        aria-label="Skip next"
      >
        <div className="size-9">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
            <g clipPath="url(#clip0_skip_next)">
              <path d={svgPathsDetail.p2d9db4e0} fill="hsl(var(--widget-icon-disabled))" />
            </g>
            <defs>
              <clipPath id="clip0_skip_next">
                <rect fill="white" height="36" width="36" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </IconButton>
    </div>
  );
}