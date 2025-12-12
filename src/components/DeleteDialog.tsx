import svgPaths from "../imports/svg-s6jl5efkce";

interface DeleteDialogProps {
  onConfirm: () => void;
  onCancel: () => void;
}

export function DeleteDialog({ onConfirm, onCancel }: DeleteDialogProps) {
  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-transparent z-40"
        onClick={onCancel}
      />
      
      {/* Dialog */}
      <div className="absolute right-0 top-full mt-2 bg-white rounded-[4px] shadow-lg z-50 p-2.5 w-[179px]">
        <p className="font-['Raleway',sans-serif] font-semibold text-[10px] text-black mb-1">
          Delete Recording
        </p>
        <p className="font-['Raleway',sans-serif] font-semibold text-[10px] text-black mb-3">
          Are you Sure You Want to Delete?
        </p>
        <div className="flex gap-2 justify-end">
          <button
            onClick={onCancel}
            className="bg-[#969696] rounded-[2px] px-2.5 py-1 hover:opacity-80 transition-opacity"
          >
            <p className="font-['Raleway',sans-serif] font-semibold text-[10px] text-white">No</p>
          </button>
          <button
            onClick={onConfirm}
            className="bg-[#1c1c1e] rounded-[2px] px-2.5 py-1 hover:opacity-80 transition-opacity"
          >
            <p className="font-['Raleway',sans-serif] font-semibold text-[10px] text-white">Yes</p>
          </button>
        </div>
        
        {/* Arrow pointing up to delete button */}
        <div className="absolute -top-1.5 right-4 w-2 h-1.5">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 7">
            <path d={svgPaths.p18c08980} fill="white" />
          </svg>
        </div>
      </div>
    </>
  );
}
