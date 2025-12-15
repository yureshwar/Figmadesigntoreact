interface StartRecordingProps {
  onStart: () => void;
}

export function StartRecording({ onStart }: StartRecordingProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-5 py-20">
      <p className="font-['Raleway',sans-serif] font-semibold text-[24px] text-[#1c1c1e] text-center">
        Click here to start recording
      </p>
      
      <button
        onClick={onStart}
        className="bg-[#fb2c36] rounded-full w-[182px] h-[182px] flex items-center justify-center hover:bg-[#e02830] transition-colors shadow-lg"
      >
        <span className="font-['Raleway',sans-serif] font-semibold text-[24px] text-white">
          Start
        </span>
      </button>
    </div>
  );
}
