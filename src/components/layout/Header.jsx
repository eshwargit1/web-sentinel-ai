import { Menu } from "lucide-react";
import ShieldIcon from "@/components/icons/ShieldIcon.jsx";

const Header = ({ onMenuClick }) => {
  return (
    <header className="sticky top-0 z-30 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-4">
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 rounded-md hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
          >
            <Menu size={20} />
          </button>
          <div className="flex items-center gap-3 lg:hidden">
            <ShieldIcon className="text-primary" size={28} />
            <span className="font-semibold text-foreground">SITE SHIELD AI</span>
          </div>
        </div>
        <button className="p-2 rounded-md hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground">
          <Menu size={20} />
        </button>
      </div>
    </header>
  );
};

export default Header;
