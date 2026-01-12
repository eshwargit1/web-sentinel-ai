import ShieldIcon from "@/components/icons/ShieldIcon.jsx";

const Header = () => {
  return (
    <header className="sticky top-0 z-30 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="flex items-center justify-between px-3 xs:px-4 sm:px-6 py-2.5 sm:py-3 md:py-4">
        <div className="flex items-center gap-2 sm:gap-3">
          <ShieldIcon className="text-primary" size={24} />
          <span className="font-semibold text-foreground text-sm sm:text-base md:text-lg">
            SITE SHIELD AI
          </span>
        </div>
        <div className="hidden sm:block text-xs md:text-sm text-muted-foreground">
          Intelligent Website Reconnaissance Tool
        </div>
      </div>
    </header>
  );
};

export default Header;
