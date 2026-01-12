import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const AiAnalysis = ({ analysis, recommendations }) => {
  const [isAnalysisOpen, setIsAnalysisOpen] = useState(true);
  const [isRecommendationsOpen, setIsRecommendationsOpen] = useState(true);

  const getSeverityColor = (severity) => {
    switch (severity) {
      case "critical":
        return "bg-danger";
      case "warning":
        return "bg-warning";
      default:
        return "bg-safe";
    }
  };

  return (
    <div className="space-y-3 sm:space-y-4">
      {/* AI Analysis Section */}
      <div className="card-cyber overflow-hidden">
        <button
          onClick={() => setIsAnalysisOpen(!isAnalysisOpen)}
          className="w-full flex items-center justify-between p-3 sm:p-4 hover:bg-secondary/30 transition-colors"
        >
          <h3 className="text-xs sm:text-sm font-semibold text-muted-foreground uppercase tracking-wider">
            AI Analysis
          </h3>
          {isAnalysisOpen ? (
            <ChevronUp size={16} className="text-muted-foreground sm:w-[18px] sm:h-[18px]" />
          ) : (
            <ChevronDown size={16} className="text-muted-foreground sm:w-[18px] sm:h-[18px]" />
          )}
        </button>
        <div
          className={cn(
            "overflow-hidden transition-all duration-300",
            isAnalysisOpen ? "max-h-96" : "max-h-0"
          )}
        >
          <div className="px-3 sm:px-4 pb-3 sm:pb-4">
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              {analysis}
            </p>
          </div>
        </div>
      </div>

      {/* Recommendations Section */}
      <div className="card-cyber overflow-hidden">
        <button
          onClick={() => setIsRecommendationsOpen(!isRecommendationsOpen)}
          className="w-full flex items-center justify-between p-3 sm:p-4 hover:bg-secondary/30 transition-colors"
        >
          <h3 className="text-xs sm:text-sm font-semibold text-muted-foreground uppercase tracking-wider">
            Recommendations
          </h3>
          {isRecommendationsOpen ? (
            <ChevronUp size={16} className="text-muted-foreground sm:w-[18px] sm:h-[18px]" />
          ) : (
            <ChevronDown size={16} className="text-muted-foreground sm:w-[18px] sm:h-[18px]" />
          )}
        </button>
        <div
          className={cn(
            "overflow-hidden transition-all duration-300",
            isRecommendationsOpen ? "max-h-96" : "max-h-0"
          )}
        >
          <ul className="px-3 sm:px-4 pb-3 sm:pb-4 space-y-2 sm:space-y-3">
            {recommendations.map((rec, index) => (
              <li key={index} className="flex items-start gap-2 sm:gap-3">
                <span
                  className={cn(
                    "w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full mt-1.5 flex-shrink-0",
                    getSeverityColor(rec.severity)
                  )}
                />
                <span className="text-xs sm:text-sm text-muted-foreground">{rec.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AiAnalysis;
