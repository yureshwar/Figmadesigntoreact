import svgPaths from "../imports/svg-hfh3cd2q4z";
import { useState } from "react";
import { cn } from "../lib/cn";

interface ReportIssueDialogProps {
  onSubmit: (issueType: string, description: string) => void;
  onCancel: () => void;
}

export function ReportIssueDialog({ onSubmit, onCancel }: ReportIssueDialogProps) {
  const [issueType, setIssueType] = useState("");
  const [description, setDescription] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const issueTypes = [
    "Audio Issue",
    "Video Issue",
    "Sync Issue",
    "Missing Content",
    "Other"
  ];

  const handleSubmit = () => {
    if (issueType && description) {
      onSubmit(issueType, description);
    }
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-transparent z-40"
        onClick={onCancel}
        aria-label="Close dialog"
      />
      
      {/* Dialog */}
      <div className={cn(
        "absolute right-0 top-full mt-2 shadow-lg z-50 p-2 w-[208px]",
        "bg-widget-dialog",
        "rounded-widget-sm"
      )}>
        <p className={cn(
          "font-['Raleway',sans-serif] font-semibold text-[10px] mb-2",
          "text-widget-text-primary"
        )}>
          Report Recording Issue
        </p>
        
        {/* Issue Type Dropdown */}
        <div className="relative mb-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowDropdown(!showDropdown);
            }}
            className={cn(
              "w-full px-2 py-1 text-left relative",
              "bg-widget-input",
              "border border-widget-input-border",
              "rounded-widget-sm"
            )}
          >
            <p className={cn(
              "font-['Raleway',sans-serif] font-semibold text-[8px]",
              "text-widget-text-secondary"
            )}>
              {issueType || "Select Issue Type"}
            </p>
            <div className="absolute right-2 top-1/2 -translate-y-1/2 w-2.5 h-[5px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 5">
                <path d="M0 0L5 5L10 0H0Z" fill="hsl(var(--widget-icon-secondary))" />
              </svg>
            </div>
          </button>
          
          {/* Dropdown Options */}
          {showDropdown && (
            <div className={cn(
              "absolute top-full left-0 right-0 mt-1 shadow-lg z-50 max-h-32 overflow-y-auto",
              "bg-widget-dialog",
              "border border-widget-input-border",
              "rounded-widget-sm"
            )}>
              {issueTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => {
                    setIssueType(type);
                    setShowDropdown(false);
                  }}
                  className={cn(
                    "w-full px-2 py-1 text-left transition-colors",
                    "hover:bg-widget-input"
                  )}
                >
                  <p className={cn(
                    "font-['Raleway',sans-serif] font-semibold text-[8px]",
                    "text-widget-text-primary"
                  )}>
                    {type}
                  </p>
                </button>
              ))}
            </div>
          )}
        </div>
        
        {/* Description Textarea */}
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          className={cn(
            "w-full px-2 py-1 font-['Raleway',sans-serif] font-semibold text-[8px] placeholder:text-widget-text-secondary resize-none h-[36px] mb-2",
            "bg-widget-input",
            "border border-widget-input-border",
            "rounded-widget-sm"
          )}
        />
        
        {/* Action Buttons */}
        <div className="flex gap-2 justify-end">
          <button
            onClick={onCancel}
            className={cn(
              "px-4 py-1 transition-opacity",
              "bg-widget-icon-secondary",
              "rounded-widget-sm",
              "hover:opacity-widget-hover"
            )}
          >
            <p className="font-['Raleway',sans-serif] font-semibold text-[10px] text-widget-text-on-dark">Cancel</p>
          </button>
          <button
            onClick={handleSubmit}
            className={cn(
              "px-4 py-1 transition-opacity",
              "bg-widget-button-primary",
              "rounded-widget-sm",
              "hover:opacity-widget-hover"
            )}
          >
            <p className="font-['Raleway',sans-serif] font-semibold text-[10px] text-widget-button-primary-text">submit</p>
          </button>
        </div>
        
        {/* Arrow pointing up to report button */}
        <div className="absolute -top-2 right-0 w-2.5 h-3">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
            <path d={svgPaths.p310a4f00} fill="white" />
          </svg>
        </div>
      </div>
    </>
  );
}