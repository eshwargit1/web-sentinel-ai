import DashboardLayout from "@/components/layout/DashboardLayout.jsx";
import UrlInput from "@/components/scanner/UrlInput.jsx";
import TechStackAccordion from "@/components/scanner/TechStackAccordion.jsx";
import RiskAssessmentPanel from "@/components/scanner/RiskAssessmentPanel.jsx";
import GenerateReportButton from "@/components/scanner/GenerateReportButton.jsx";
import { useScannerState } from "@/hooks/useScannerState.js";

const Dashboard = () => {
  const {
    isScanning,
    scanResult,
    isGeneratingReport,
    performScan,
    generateReport,
  } = useScannerState();

  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto space-y-4 sm:space-y-6">
        {/* URL Input */}
        <div className="card-cyber p-3 sm:p-4">
          <UrlInput onScan={performScan} isLoading={isScanning} />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {/* Left Column - Tech Stack */}
          <TechStackAccordion data={scanResult?.techStack || null} />

          {/* Right Column - Risk Assessment */}
          {scanResult ? (
            <RiskAssessmentPanel
              riskScore={scanResult.riskScore}
              riskLabel={scanResult.riskLabel}
              analysis={scanResult.analysis}
              recommendations={scanResult.recommendations}
            />
          ) : (
            <div className="card-cyber p-4 sm:p-6 text-center text-muted-foreground h-fit">
              <p className="text-sm sm:text-base">Risk assessment will appear here after scanning</p>
            </div>
          )}
        </div>

        {/* Generate Report Button */}
        <GenerateReportButton
          onGenerate={generateReport}
          isLoading={isGeneratingReport}
          disabled={!scanResult}
        />
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
