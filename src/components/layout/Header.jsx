import { Menu } from "lucide-react";
import ShieldIcon from "@/components/icons/ShieldIcon.jsx";

const Header = ({ onMenuClick }) => {
  return (
    <header className="sticky top-0 z-30 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="flex items-center justify-between px-3 xs:px-4 sm:px-6 py-2.5 sm:py-3 md:py-4">
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          <button
            onClick={onMenuClick}
            className="lg:hidden p-1.5 sm:p-2 rounded-md hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground flex-shrink-0"
          >
            <Menu size={20} className="sm:w-5 sm:h-5" />
          </button>
          <div className="flex items-center gap-1.5 sm:gap-2 lg:hidden min-w-0">
            <ShieldIcon className="text-primary flex-shrink-0" size={20} />
            <span className="font-semibold text-foreground text-xs xs:text-sm sm:text-base truncate">
              SITE SHIELD AI
            </span>
          </div>
        </div>
        <div className="hidden md:block text-xs lg:text-sm text-muted-foreground">
          Intelligent Website Reconnaissance Tool
        </div>
      </div>
    </header>
  );
};

export default Header;
