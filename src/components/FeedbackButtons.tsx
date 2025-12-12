import svgPathsDetail from "../imports/svg-0ikchrah8d";
import { useState } from "react";
import { ReportIssueDialog } from "./ReportIssueDialog";

interface FeedbackButtonsProps {
  onLike?: () => void;
  onDislike?: () => void;
  onReport?: (issueType: string, description: string) => void;
}

export function FeedbackButtons({ onLike, onDislike, onReport }: FeedbackButtonsProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);
  const [showReportDialog, setShowReportDialog] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
    onLike?.();
  };

  const handleDislike = () => {
    setIsDisliked(!isDisliked);
    onDislike?.();
  };

  const handleReportClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowReportDialog(true);
  };

  const handleReportSubmit = (issueType: string, description: string) => {
    setShowReportDialog(false);
    onReport?.(issueType, description);
  };

  return (
    <div className="flex gap-[10px] items-center">
      {/* Like */}
      <button 
        onClick={handleLike}
        className="shrink-0 hover:opacity-70 transition-opacity"
        aria-label="Like"
      >
        <div className="size-[24px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <g clipPath="url(#clip0_thumb_up)">
              <path d={svgPathsDetail.p11b5d400} stroke="#1C1C1E" strokeWidth="2" fill={isLiked ? "black" : "none"} />
            </g>
            <defs>
              <clipPath id="clip0_thumb_up">
                <rect fill="white" height="24" width="24" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </button>

      {/* Dislike */}
      <button 
        onClick={handleDislike}
        className="shrink-0 hover:opacity-70 transition-opacity"
        aria-label="Dislike"
      >
        <div className="size-[24px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <g clipPath="url(#clip0_thumb_down)">
              <path d={svgPathsDetail.pe9ecb00} stroke="#1C1C1E" strokeWidth="2" fill={isDisliked ? "black" : "none"} />
            </g>
            <defs>
              <clipPath id="clip0_thumb_down">
                <rect fill="white" height="24" width="24" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </button>

      {/* Report */}
      <div className="relative">
        <button 
          onClick={handleReportClick}
          className="shrink-0 hover:opacity-70 transition-opacity"
          aria-label="Report"
        >
          <div className="size-[24px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <g clipPath="url(#clip0_report)">
                <path d={svgPathsDetail.p3889b800} fill="black" />
              </g>
              <defs>
                <clipPath id="clip0_report">
                  <rect fill="white" height="24" width="24" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </button>
        
        {showReportDialog && (
          <ReportIssueDialog 
            onSubmit={handleReportSubmit}
            onCancel={() => setShowReportDialog(false)}
          />
        )}
      </div>
    </div>
  );
}
