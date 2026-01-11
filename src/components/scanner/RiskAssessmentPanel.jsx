import RiskGauge from "./RiskGauge.jsx";
import AiAnalysis from "./AiAnalysis.jsx";

const RiskAssessmentPanel = ({
  riskScore,
  riskLabel,
  analysis,
  recommendations,
}) => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="card-cyber p-4">
        <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
          AI Risk Assessment & Vulnerabilities
        </h2>
        <RiskGauge score={riskScore} label={riskLabel} />
      </div>

      {/* AI Analysis & Recommendations */}
      <AiAnalysis analysis={analysis} recommendations={recommendations} />
    </div>
  );
};

export default RiskAssessmentPanel;
