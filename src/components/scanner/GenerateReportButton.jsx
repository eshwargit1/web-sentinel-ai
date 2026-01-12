import { FileDown, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const GenerateReportButton = ({
  onGenerate,
  isLoading = false,
  disabled = false,
}) => {
  return (
    <Button
      onClick={onGenerate}
      disabled={disabled || isLoading}
      className="w-full h-12 sm:h-14 bg-secondary hover:bg-secondary/80 text-foreground font-semibold text-sm sm:text-base border border-border transition-all duration-200 hover:border-primary/50"
    >
      {isLoading ? (
        <>
          <Loader2 className="mr-2 animate-spin" size={18} />
          <span className="hidden sm:inline">Generating Report...</span>
          <span className="sm:hidden">Generating...</span>
        </>
      ) : (
        <>
          <FileDown className="mr-2" size={18} />
          <span className="hidden sm:inline">GENERATE COMPREHENSIVE REPORT</span>
          <span className="sm:hidden">GENERATE REPORT</span>
        </>
      )}
    </Button>
  );
};

export default GenerateReportButton;
