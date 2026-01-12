import DashboardLayout from "@/components/layout/DashboardLayout.jsx";
import { Button } from "@/components/ui/button";
import { Download, FileText, TrendingUp, Shield, AlertTriangle } from "lucide-react";

// Mock report data
const mockReports = [
  {
    id: 1,
    title: "Monthly Security Analysis",
    date: "2024-01-01",
    type: "Monthly",
    status: "Completed",
  },
  {
    id: 2,
    title: "Q4 2023 Vulnerability Report",
    date: "2023-12-31",
    type: "Quarterly",
    status: "Completed",
  },
];

const Reports = () => {
  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto space-y-4 sm:space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <h1 className="text-xl sm:text-2xl font-bold text-foreground">Reports</h1>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto">
            <Download size={18} className="mr-2" />
            Export All
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          <div className="card-cyber p-4 sm:p-6">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="p-2 sm:p-3 bg-primary/10 rounded-lg">
                <Shield className="text-primary" size={20} />
              </div>
              <div>
                <p className="text-xs sm:text-sm text-muted-foreground">Total Scans</p>
                <p className="text-xl sm:text-2xl font-bold text-foreground">156</p>
              </div>
            </div>
          </div>
          <div className="card-cyber p-4 sm:p-6">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="p-2 sm:p-3 bg-danger/10 rounded-lg">
                <AlertTriangle className="text-danger" size={20} />
              </div>
              <div>
                <p className="text-xs sm:text-sm text-muted-foreground">Vulnerabilities Found</p>
                <p className="text-xl sm:text-2xl font-bold text-foreground">43</p>
              </div>
            </div>
          </div>
          <div className="card-cyber p-4 sm:p-6">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="p-2 sm:p-3 bg-safe/10 rounded-lg">
                <TrendingUp className="text-safe" size={20} />
              </div>
              <div>
                <p className="text-xs sm:text-sm text-muted-foreground">Issues Resolved</p>
                <p className="text-xl sm:text-2xl font-bold text-foreground">38</p>
              </div>
            </div>
          </div>
        </div>

        {/* Comprehensive Report Preview */}
        <div className="card-cyber p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4 sm:mb-6">
            <h2 className="text-base sm:text-lg font-semibold text-foreground">Comprehensive Report</h2>
            <Button variant="outline" size="sm" className="border-border w-full sm:w-auto">
              <Download size={16} className="mr-2" />
              Download PDF
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-4 sm:mb-6">
            <div className="p-3 sm:p-4 bg-secondary/50 rounded-lg">
              <h3 className="text-xs sm:text-sm font-medium text-muted-foreground mb-2">Executive Summary</h3>
              <p className="text-xs text-muted-foreground">
                Overview of security posture, key findings, and recommended actions.
              </p>
            </div>
            <div className="p-3 sm:p-4 bg-secondary/50 rounded-lg">
              <h3 className="text-xs sm:text-sm font-medium text-muted-foreground mb-2">Attack Surface</h3>
              <p className="text-xs text-muted-foreground">
                Analysis of exposed endpoints and potential entry points.
              </p>
            </div>
            <div className="p-3 sm:p-4 bg-secondary/50 rounded-lg">
              <h3 className="text-xs sm:text-sm font-medium text-muted-foreground mb-2">Attack History</h3>
              <p className="text-xs text-muted-foreground">
                Timeline of detected threats and vulnerability patterns.
              </p>
            </div>
          </div>

          {/* Chart placeholder */}
          <div className="card-cyber p-3 sm:p-4">
            <h3 className="text-xs sm:text-sm font-semibold text-muted-foreground uppercase mb-3 sm:mb-4">
              Identified Vulnerabilities
            </h3>
            <div className="h-32 sm:h-48 flex items-end justify-around gap-1 sm:gap-2 px-2 sm:px-4">
              {[40, 65, 45, 80, 55, 70, 50, 85, 60, 75].map((height, i) => (
                <div
                  key={i}
                  className="flex-1 max-w-8 bg-gradient-to-t from-primary to-primary/50 rounded-t transition-all hover:from-primary/80"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
            <div className="flex justify-around mt-2 text-[10px] sm:text-xs text-muted-foreground">
              {Array.from({ length: 10 }, (_, i) => (
                <span key={i} className="hidden sm:inline">{200 + i * 10}</span>
              ))}
              {Array.from({ length: 5 }, (_, i) => (
                <span key={i} className="sm:hidden">{200 + i * 20}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Reports */}
        <div className="card-cyber overflow-hidden">
          <div className="p-3 sm:p-4 border-b border-border">
            <h2 className="text-base sm:text-lg font-semibold text-foreground">Recent Reports</h2>
          </div>
          <div className="divide-y divide-border">
            {mockReports.map((report) => (
              <div
                key={report.id}
                className="flex flex-col sm:flex-row sm:items-center justify-between p-3 sm:p-4 hover:bg-secondary/30 transition-colors gap-3"
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="p-2 bg-secondary rounded-lg flex-shrink-0">
                    <FileText className="text-primary" size={18} />
                  </div>
                  <div className="min-w-0">
                    <p className="font-medium text-foreground text-sm sm:text-base truncate">{report.title}</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">{report.date}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between sm:justify-end gap-3 sm:gap-4">
                  <span className="px-2 sm:px-3 py-1 bg-safe/10 text-safe text-xs sm:text-sm rounded-full">
                    {report.status}
                  </span>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <Download size={16} />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Reports;
