import { TitleBar } from "./TitleBar";
import { PlayerControls } from "./PlayerControls";
import { FeedbackButtons } from "./FeedbackButtons";
import { StepsList, StepData } from "./StepsList";

interface RecordingDetailProps {
  title: string;
  onBack: () => void;
  onShare?: () => void;
  onDelete?: () => void;
}

export function RecordingDetail({ title, onBack, onShare, onDelete }: RecordingDetailProps) {
  const steps: StepData[] = [
    { title: "Home", completed: true },
    { title: "Projects", delay: 3, completed: true },
    { title: "Reports", completed: true },
    { title: "Log Time", completed: false }, // Grey tick - incomplete but not failed
    { title: "Submit Log", completed: false, failed: true },
    { title: "Dashboard", delay: 2, completed: true },
    { title: "Settings", completed: true },
    { title: "User Profile", completed: false },
    { title: "Notifications", delay: 5, completed: true },
    { title: "Messages", completed: true },
    { title: "Calendar", completed: false },
    { title: "Tasks", completed: true },
    { title: "Documents", delay: 4, completed: false },
    { title: "Team", completed: true },
    { title: "Analytics", completed: false, failed: true },
  ];

  const handleTitleChange = (newTitle: string) => {
    console.log("Title changed to:", newTitle);
    // Add your title change logic here
  };

  const handleEditStep = (stepTitle: string) => {
    console.log("Edit step:", stepTitle);
    // Add your step edit logic here
  };

  const handleReport = (issueType: string, description: string) => {
    console.log("Report submitted:", { issueType, description });
    // Add your report submission logic here
  };

  return (
    <div className="w-full flex flex-col">
      {/* Title Bar */}
      <TitleBar
        title={title}
        onBack={onBack}
        onTitleChange={handleTitleChange}
        onShare={onShare}
        onDelete={onDelete}
      />

      {/* Player Controls with Feedback Buttons */}
      <div className="content-stretch flex gap-[10px] items-center px-0 py-[16px] rounded-[4px] w-full">
        <PlayerControls />
        
        <div className="flex-1" />
        
        <FeedbackButtons onReport={handleReport} />
      </div>

      {/* Steps Section */}
      <StepsList steps={steps} onEditStep={handleEditStep} />
    </div>
  );
}