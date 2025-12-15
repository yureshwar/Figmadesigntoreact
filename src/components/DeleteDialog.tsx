import svgPaths from "../imports/svg-s6jl5efkce";
import { cn } from "../lib/cn";

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
        aria-label="Close dialog"
      />
      
      {/* Dialog */}
      <div className={cn(
        "absolute right-0 top-full mt-2 shadow-lg z-50 p-2.5 w-[179px]",
        "bg-widget-dialog",
        "rounded-widget-sm"
      )}>
        <p className={cn(
          "font-['Raleway',sans-serif] font-semibold text-[10px] mb-1",
          "text-widget-text-primary"
        )}>
          Delete Recording
        </p>
        <p className={cn(
          "font-['Raleway',sans-serif] font-semibold text-[10px] mb-3",
          "text-widget-text-primary"
        )}>
          Are you Sure You Want to Delete?
        </p>
        <div className="flex gap-2 justify-end">
          <button
            onClick={onCancel}
            className={cn(
              "px-2.5 py-1 transition-opacity",
              "bg-widget-icon-secondary",
              "rounded-widget-sm",
              "hover:opacity-widget-hover"
            )}
          >
            <p className="font-['Raleway',sans-serif] font-semibold text-[10px] text-widget-text-on-dark">No</p>
          </button>
          <button
            onClick={onConfirm}
            className={cn(
              "px-2.5 py-1 transition-opacity",
              "bg-widget-button-primary",
              "rounded-widget-sm",
              "hover:opacity-widget-hover"
            )}
          >
            <p className="font-['Raleway',sans-serif] font-semibold text-[10px] text-widget-button-primary-text">Yes</p>
          </button>
        </div>
        
        {/* Arrow pointing up to delete button */}
        <div className="absolute -top-1.5 right-4 w-2 h-1.5">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 7">
            <path d={svgPaths.p18c08980} fill="hsl(var(--widget-dialog-bg))" />
          </svg>
        </div>
      </div>
    </>
  );
}