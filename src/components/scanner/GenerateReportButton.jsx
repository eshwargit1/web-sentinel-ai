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
      className="w-full h-14 bg-secondary hover:bg-secondary/80 text-foreground font-semibold text-base border border-border transition-all duration-200 hover:border-primary/50"
    >
      {isLoading ? (
        <>
          <Loader2 className="mr-2 animate-spin" size={20} />
          Generating Report...
        </>
      ) : (
        <>
          <FileDown className="mr-2" size={20} />
          GENERATE COMPREHENSIVE REPORT
        </>
      )}
    </Button>
  );
};

export default GenerateReportButton;
