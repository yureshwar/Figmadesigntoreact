import svgPaths from "../imports/svg-hfh3cd2q4z";
import { useState } from "react";

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
      />
      
      {/* Dialog */}
      <div className="absolute right-0 top-full mt-2 bg-white rounded-[4px] shadow-lg z-50 p-2 w-[208px]">
        <p className="font-['Raleway',sans-serif] font-semibold text-[10px] text-black mb-2">
          Report Recording Issue
        </p>
        
        {/* Issue Type Dropdown */}
        <div className="relative mb-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowDropdown(!showDropdown);
            }}
            className="w-full bg-neutral-50 border border-[#dbdbdb] rounded-[2px] px-2 py-1 text-left relative"
          >
            <p className="font-['Raleway',sans-serif] font-semibold text-[8px] text-[#8b8b8b]">
              {issueType || "Select Issue Type"}
            </p>
            <div className="absolute right-2 top-1/2 -translate-y-1/2 w-2.5 h-[5px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 5">
                <path d="M0 0L5 5L10 0H0Z" fill="#B4B4B4" />
              </svg>
            </div>
          </button>
          
          {/* Dropdown Options */}
          {showDropdown && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-[#dbdbdb] rounded-[2px] shadow-lg z-50 max-h-32 overflow-y-auto">
              {issueTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => {
                    setIssueType(type);
                    setShowDropdown(false);
                  }}
                  className="w-full px-2 py-1 text-left hover:bg-gray-100"
                >
                  <p className="font-['Raleway',sans-serif] font-semibold text-[8px] text-black">
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
          className="w-full bg-neutral-50 border border-[#dbdbdb] rounded-[2px] px-2 py-1 font-['Raleway',sans-serif] font-semibold text-[8px] text-[#8b8b8b] placeholder:text-[#8b8b8b] resize-none h-[36px] mb-2"
        />
        
        {/* Action Buttons */}
        <div className="flex gap-2 justify-end">
          <button
            onClick={onCancel}
            className="bg-[#969696] rounded-[2px] px-4 py-1 hover:opacity-80 transition-opacity"
          >
            <p className="font-['Raleway',sans-serif] font-semibold text-[10px] text-white">Cancel</p>
          </button>
          <button
            onClick={handleSubmit}
            className="bg-black rounded-[2px] px-4 py-1 hover:opacity-80 transition-opacity"
          >
            <p className="font-['Raleway',sans-serif] font-semibold text-[10px] text-white">submit</p>
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
