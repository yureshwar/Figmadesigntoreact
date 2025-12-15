import { useState, useEffect } from "react";
import { Layout } from "./Layout";
import { SearchResults } from "./SearchResults";
import { StartRecording } from "./StartRecording";
import { Countdown } from "./Countdown";
import { RecordingScreen } from "./RecordingScreen";

type RecordingState = 'idle' | 'start' | 'countdown' | 'recording';

export default function HomePageUser() {
  const [recordingState, setRecordingState] = useState<RecordingState>('idle');
  const [countdown, setCountdown] = useState(3);

  const handleRecClick = () => {
    setRecordingState('start');
  };

  const handleStart = () => {
    setRecordingState('countdown');
    setCountdown(3);
  };

  // Countdown timer effect
  useEffect(() => {
    if (recordingState === 'countdown') {
      if (countdown > 1) {
        const timer = setTimeout(() => {
          setCountdown(countdown - 1);
        }, 1000);
        return () => clearTimeout(timer);
      } else {
        // When countdown reaches 1, wait 1 second then show recording screen
        const timer = setTimeout(() => {
          setRecordingState('recording');
        }, 1000);
        return () => clearTimeout(timer);
      }
    }
  }, [recordingState, countdown]);

  return (
    <Layout onRecClick={handleRecClick}>
      {recordingState === 'idle' && <SearchResults />}
      {recordingState === 'start' && <StartRecording onStart={handleStart} />}
      {recordingState === 'countdown' && <Countdown count={countdown} />}
      {recordingState === 'recording' && <RecordingScreen />}
    </Layout>
  );
}