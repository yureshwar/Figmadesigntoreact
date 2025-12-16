import { useState } from "react";

interface StepEditFormProps {
  stepNumber: number;
  initialTitle: string;
  initialDelay?: number;
  onSave: (data: { title: string; delay?: number }) => void;
  onCancel: () => void;
}

export function StepEditForm({ stepNumber, initialTitle, initialDelay, onSave, onCancel }: StepEditFormProps) {
  const [title, setTitle] = useState(initialTitle);
  const [selectedType, setSelectedType] = useState("Link");
  const [delayValue, setDelayValue] = useState(initialDelay?.toString() || "");
  const [skipDuringPlay, setSkipDuringPlay] = useState(false);
  const [personalInformation, setPersonalInformation] = useState(false);
  const [isEditingTitle, setIsEditingTitle] = useState(false);

  const handleSave = () => {
    onSave({
      title,
      delay: delayValue ? parseInt(delayValue) : undefined,
    });
  };

  return (
    <div className="bg-[#d9d9d9] rounded-[8px] p-3 w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-['Raleway',sans-serif] font-semibold text-[20px] text-black">
          Step {stepNumber}
        </h3>
        <button
          onClick={onCancel}
          className="w-6 h-6 flex items-center justify-center hover:bg-black/10 rounded transition-colors"
          aria-label="Close"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" fill="#1c1c1e"/>
          </svg>
        </button>
      </div>

      {/* Title Section */}
      <div className="bg-[#969696] rounded-[4px] px-3 py-[10px] mb-3 flex items-center justify-between min-h-[48px]">
        {isEditingTitle ? (
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onBlur={() => setIsEditingTitle(false)}
            autoFocus
            className="bg-transparent font-['Raleway',sans-serif] font-semibold text-[20px] text-white flex-1 outline-none placeholder:text-white/70"
            placeholder="Step title"
          />
        ) : (
          <span className="font-['Raleway',sans-serif] font-semibold text-[20px] text-white flex-1">
            {title}
          </span>
        )}
        <button
          onClick={() => setIsEditingTitle(!isEditingTitle)}
          className="ml-2 w-6 h-6 flex items-center justify-center hover:bg-black/10 rounded transition-colors"
          aria-label="Edit title"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" fill="white"/>
          </svg>
        </button>
      </div>

      {/* Properties */}
      <h4 className="font-['Raleway',sans-serif] font-semibold text-[16px] text-black mb-2">
        Properties
      </h4>

      {/* Checkboxes */}
      <div className="flex flex-wrap gap-x-6 gap-y-2 mb-4">
        <label className="flex items-center gap-1.5 cursor-pointer">
          <input
            type="checkbox"
            checked={skipDuringPlay}
            onChange={(e) => setSkipDuringPlay(e.target.checked)}
            className="w-[18px] h-[18px] cursor-pointer accent-black border-2 border-black rounded"
          />
          <span className="font-['Raleway',sans-serif] text-[14px] text-black">
            Skip during play
          </span>
          <button 
            className="w-4 h-4 rounded-full bg-black text-white flex items-center justify-center ml-0.5"
            style={{ fontSize: '11px', fontWeight: 'bold' }}
          >
            ?
          </button>
        </label>

        <label className="flex items-center gap-1.5 cursor-pointer">
          <input
            type="checkbox"
            checked={personalInformation}
            onChange={(e) => setPersonalInformation(e.target.checked)}
            className="w-[18px] h-[18px] cursor-pointer accent-black border-2 border-black rounded"
          />
          <span className="font-['Raleway',sans-serif] text-[14px] text-black">
            Personal information
          </span>
          <button 
            className="w-4 h-4 rounded-full bg-black text-white flex items-center justify-center ml-0.5"
            style={{ fontSize: '11px', fontWeight: 'bold' }}
          >
            ?
          </button>
        </label>
      </div>

      {/* Type */}
      <h4 className="font-['Raleway',sans-serif] font-semibold text-[16px] text-black mb-2">
        Type
      </h4>
      <select
        value={selectedType}
        onChange={(e) => setSelectedType(e.target.value)}
        className="w-full bg-white rounded-[4px] px-3 py-3 mb-3 font-['Raleway',sans-serif] text-[16px] text-black outline-none border border-[#d9d9d9] appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724%27 height=%2724%27 viewBox=%270 0 24 24%27 fill=%27none%27%3e%3cpath d=%27M7 10l5 5 5-5%27 stroke=%27%23000%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27/%3e%3c/svg%3e')] bg-[length:24px] bg-[right_8px_center] bg-no-repeat pr-10"
      >
        <option value="Link">Link</option>
        <option value="Highlight">Highlight</option>
        <option value="Button">Button</option>
      </select>

      {/* Delay Input */}
      <input
        type="text"
        value={delayValue}
        onChange={(e) => setDelayValue(e.target.value)}
        placeholder="Delay in seconds (optional)"
        className="w-full bg-white rounded-[4px] px-3 py-3 mb-4 font-['Raleway',sans-serif] text-[16px] text-black outline-none border border-[#d9d9d9] placeholder:text-[#969696]"
      />

      {/* Action Buttons */}
      <div className="flex gap-2">
        <button
          onClick={onCancel}
          className="flex-1 bg-[#969696] rounded-[4px] px-4 py-3 font-['Raleway',sans-serif] font-semibold text-[18px] text-white hover:bg-[#808080] transition-colors"
        >
          Cancel
        </button>
        <button
          onClick={handleSave}
          className="flex-1 bg-black rounded-[4px] px-4 py-3 font-['Raleway',sans-serif] font-semibold text-[18px] text-white hover:bg-[#333333] transition-colors"
        >
          Save step
        </button>
      </div>
    </div>
  );
}