import { Menu } from "lucide-react";
import ShieldIcon from "@/components/icons/ShieldIcon.jsx";

const Header = ({ onMenuClick }) => {
  return (
    <header className="sticky top-0 z-30 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center gap-3">
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 rounded-md hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
          >
            <Menu size={20} />
          </button>
          <div className="flex items-center gap-2 lg:hidden">
            <ShieldIcon className="text-primary" size={24} />
            <span className="font-semibold text-foreground text-sm sm:text-base">SITE SHIELD AI</span>
          </div>
        </div>
        <div className="hidden lg:block text-sm text-muted-foreground">
          Intelligent Website Reconnaissance Tool
        </div>
      </div>
    </header>
  );
};

export default Header;
