import { Header } from "./Header";
import { Footer } from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
  onRecClick?: () => void;
}

export function Layout({ children, onRecClick }: LayoutProps) {
  return (
    <div className="bg-[#f6f6f6] min-h-screen flex items-center justify-center p-4">
      {/* Widget Container with Border */}
      <div className="bg-[#f6f6f6] border-2 border-[#d9d9d9] rounded-2xl shadow-2xl max-w-[480px] w-full max-h-[95vh] overflow-y-auto overflow-x-visible flex flex-col">
        <div className="flex flex-col px-3 py-4 overflow-visible">
          {/* Header with Search Bar */}
          <Header onRecClick={onRecClick} />

          {/* Main Content */}
          <main className="w-full flex flex-col overflow-visible">
            {children}
          </main>

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </div>
  );
}