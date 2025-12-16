import HomePageUser from './components/HomePageUser';
import { PanelPositionProvider } from './contexts/PanelPositionContext';

export default function App() {
  return (
    <PanelPositionProvider>
      <HomePageUser />
    </PanelPositionProvider>
  );
}