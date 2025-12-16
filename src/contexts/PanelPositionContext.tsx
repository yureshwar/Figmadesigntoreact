import { createContext, useContext, useState, ReactNode } from 'react';

type PanelPosition = 'left' | 'right';

interface PanelPositionContextType {
  position: PanelPosition;
  setPosition: (position: PanelPosition) => void;
  togglePosition: () => void;
  coordinates: { x: number; y: number };
  setCoordinates: (coords: { x: number; y: number }) => void;
  isDragging: boolean;
  setIsDragging: (dragging: boolean) => void;
  isPanelVisible: boolean;
  setIsPanelVisible: (visible: boolean) => void;
  floatingIconPosition: { x: number; y: number };
  setFloatingIconPosition: (coords: { x: number; y: number }) => void;
}

const PanelPositionContext = createContext<PanelPositionContextType | undefined>(undefined);

export function PanelPositionProvider({ children }: { children: ReactNode }) {
  const [position, setPosition] = useState<PanelPosition>('right');
  const [coordinates, setCoordinates] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [isPanelVisible, setIsPanelVisible] = useState(true);
  const [floatingIconPosition, setFloatingIconPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const togglePosition = () => {
    const newPosition = position === 'left' ? 'right' : 'left';
    setPosition(newPosition);
    // Reset coordinates when toggling to snap to sides
    setCoordinates({ x: 0, y: 0 });
  };

  return (
    <PanelPositionContext.Provider value={{ 
      position, 
      setPosition, 
      togglePosition,
      coordinates,
      setCoordinates,
      isDragging,
      setIsDragging,
      isPanelVisible,
      setIsPanelVisible,
      floatingIconPosition,
      setFloatingIconPosition
    }}>
      {children}
    </PanelPositionContext.Provider>
  );
}

export function usePanelPosition() {
  const context = useContext(PanelPositionContext);
  if (!context) {
    throw new Error('usePanelPosition must be used within a PanelPositionProvider');
  }
  return context;
}