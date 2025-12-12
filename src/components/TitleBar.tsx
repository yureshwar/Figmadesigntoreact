import svgPathsDetail from "../imports/svg-0ikchrah8d";
import svgPathsNew from "../imports/svg-hfh3cd2q4z";
import { useState } from "react";
import { ShareDialog } from "./ShareDialog";
import { DeleteDialog } from "./DeleteDialog";

interface TitleBarProps {
  title: string;
  onBack: () => void;
  onTitleChange?: (newTitle: string) => void;
  onShare?: () => void;
  onDelete?: () => void;
}

export function TitleBar({ title, onBack, onTitleChange, onShare, onDelete }: TitleBarProps) {
  const [showShareDialog, setShowShareDialog] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);

  const handleShareClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowShareDialog(true);
    onShare?.();
  };

  const handleDeleteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowDeleteDialog(true);
  };

  const handleConfirmDelete = () => {
    setShowDeleteDialog(false);
    onDelete?.();
  };

  const handleTitleSave = () => {
    setIsEditingTitle(false);
    onTitleChange?.(editedTitle);
  };

  return (
    <div className="content-stretch flex gap-[10px] h-[44px] items-center px-0 py-[8px] w-full">
      <button 
        onClick={onBack}
        className="relative shrink-0 size-[24px] hover:opacity-70 transition-opacity"
        aria-label="Go back"
      >
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <path d={svgPathsDetail.p3b54f780} fill="black" />
        </svg>
      </button>
      
      {isEditingTitle ? (
        <div className="basis-0 grow min-w-0 relative flex items-center gap-2">
          <div className="flex-1 bg-[#d9d9d9] border border-[#d2d2d2] border-solid rounded-[4px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] h-[39px] flex items-center px-3 min-w-0">
            <input
              type="text"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleTitleSave();
                if (e.key === 'Escape') {
                  setEditedTitle(title);
                  setIsEditingTitle(false);
                }
              }}
              autoFocus
              className="w-full font-['Raleway',sans-serif] font-semibold text-[#1c1c1e] text-[24px] bg-transparent outline-none"
            />
          </div>
          <button
            onClick={handleTitleSave}
            className="shrink-0 hover:opacity-80 transition-opacity"
            aria-label="Save title"
          >
            <div className="size-[22.4px]">
              <div className="w-full h-full shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25),0px_-2px_2px_0px_rgba(0,0,0,0.25)]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.4 24">
                  <rect fill="black" height="24" rx="4" width="22.4" />
                  <path d="M4.8 12L9 16.2L17.4 7.2" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" fill="none" />
                </svg>
              </div>
            </div>
          </button>
        </div>
      ) : (
        <h2 className="basis-0 font-['Raleway',sans-serif] font-semibold grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[#1c1c1e] text-[24px]">
          {editedTitle}
        </h2>
      )}
      
      {!isEditingTitle && (
        <button 
          onClick={() => setIsEditingTitle(true)}
          className="relative shrink-0 size-[24px] hover:opacity-70 transition-opacity"
          aria-label="Edit title"
        >
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <path d={svgPathsNew.p157c33f0} fill="black" />
          </svg>
        </button>
      )}
      
      <div className="relative">
        <button 
          onClick={handleDeleteClick}
          className="relative shrink-0 size-[24px] hover:opacity-70 transition-opacity"
          aria-label="Delete"
        >
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <g clipPath="url(#clip0_delete)">
              <path d={svgPathsNew.p2eacd800} fill="black" />
            </g>
            <defs>
              <clipPath id="clip0_delete">
                <rect fill="white" height="24" rx="4" width="24" />
              </clipPath>
            </defs>
          </svg>
        </button>
        
        {showDeleteDialog && (
          <DeleteDialog 
            onConfirm={handleConfirmDelete}
            onCancel={() => setShowDeleteDialog(false)}
          />
        )}
      </div>
      
      <div className="relative">
        <button 
          onClick={handleShareClick}
          className="relative shrink-0 size-[24px] hover:opacity-70 transition-opacity"
          aria-label="Share"
        >
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <path d={svgPathsDetail.p378ed900} fill="black" />
          </svg>
        </button>
        
        {showShareDialog && (
          <ShareDialog 
            url="https://recording.com"
            onClose={() => setShowShareDialog(false)}
          />
        )}
      </div>
    </div>
  );
}
