import DashboardLayout from "@/components/layout/DashboardLayout.jsx";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, FileText, Calendar, Shield } from "lucide-react";
import { cn } from "@/lib/utils";

// Mock scan history data
const mockHistory = [
  {
    id: 1,
    url: "www.example.com",
    riskLevel: "B",
    riskScore: 65,
    status: "Moderate risk - Outdated version",
    date: "2024-01-15",
  },
  {
    id: 2,
    url: "www.testsite.org",
    riskLevel: "A",
    riskScore: 25,
    status: "Low risk - Minor vulnerabilities",
    date: "2024-01-14",
  },
  {
    id: 3,
    url: "www.secureapp.com",
    riskLevel: "D",
    riskScore: 85,
    status: "High risk - Multiple issues",
    date: "2024-01-13",
  },
];

const getRiskColor = (score) => {
  if (score <= 30) return "text-safe bg-safe/10 border-safe/20";
  if (score <= 60) return "text-warning bg-warning/10 border-warning/20";
  return "text-danger bg-danger/10 border-danger/20";
};

const ScanHistory = () => {
  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto space-y-4 sm:space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-xl sm:text-2xl font-bold text-foreground">Scan History</h1>
        </div>

        {/* Search and Filters */}
        <div className="card-cyber p-3 sm:p-4">
          <div className="flex flex-col gap-3 sm:gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
              <Input
                placeholder="Search scan history..."
                className="pl-10 bg-secondary border-border"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" size="sm" className="border-border text-muted-foreground hover:text-foreground text-xs sm:text-sm">
                All
              </Button>
              <Button variant="outline" size="sm" className="border-border text-muted-foreground hover:text-foreground text-xs sm:text-sm">
                Safe
              </Button>
              <Button variant="outline" size="sm" className="border-border text-muted-foreground hover:text-foreground text-xs sm:text-sm">
                Risky
              </Button>
            </div>
          </div>
        </div>

        {/* History Cards (Mobile) / Table (Desktop) */}
        <div className="card-cyber overflow-hidden">
          {/* Mobile Cards */}
          <div className="block sm:hidden divide-y divide-border">
            {mockHistory.map((item) => (
              <div key={item.id} className="p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Shield size={16} className="text-primary" />
                    <span className="text-foreground font-medium text-sm">{item.url}</span>
                  </div>
                  <span
                    className={cn(
                      "px-2 py-0.5 rounded-full text-xs font-semibold border",
                      getRiskColor(item.riskScore)
                    )}
                  >
                    {item.riskLevel}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground">{item.status}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar size={12} />
                    {item.date}
                  </div>
                  <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground h-8 text-xs">
                    <FileText size={12} className="mr-1" />
                    View
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Table */}
          <div className="hidden sm:block overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-4 text-sm font-semibold text-muted-foreground uppercase">URL</th>
                  <th className="text-left p-4 text-sm font-semibold text-muted-foreground uppercase">Risk Level</th>
                  <th className="text-left p-4 text-sm font-semibold text-muted-foreground uppercase hidden md:table-cell">Status</th>
                  <th className="text-left p-4 text-sm font-semibold text-muted-foreground uppercase">Date</th>
                  <th className="text-left p-4 text-sm font-semibold text-muted-foreground uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {mockHistory.map((item) => (
                  <tr key={item.id} className="hover:bg-secondary/30 transition-colors">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <Shield size={18} className="text-primary flex-shrink-0" />
                        <span className="text-foreground font-medium truncate max-w-[150px] lg:max-w-none">{item.url}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <span
                        className={cn(
                          "px-3 py-1 rounded-full text-sm font-semibold border",
                          getRiskColor(item.riskScore)
                        )}
                      >
                        {item.riskLevel}
                      </span>
                    </td>
                    <td className="p-4 text-sm text-muted-foreground hidden md:table-cell">{item.status}</td>
                    <td className="p-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar size={14} />
                        {item.date}
                      </div>
                    </td>
                    <td className="p-4">
                      <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                        <FileText size={14} className="mr-1" />
                        View Report
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Domain Info Summary */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <div className="card-cyber p-4 sm:p-6">
            <h3 className="text-xs sm:text-sm font-semibold text-muted-foreground uppercase mb-3 sm:mb-4">Domain Info</h3>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Domains</span>
                <span className="text-foreground font-medium">3</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Total Scans</span>
                <span className="text-foreground font-medium">24</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Last Scan</span>
                <span className="text-foreground font-medium">2 hours ago</span>
              </div>
            </div>
          </div>
          <div className="card-cyber p-4 sm:p-6">
            <h3 className="text-xs sm:text-sm font-semibold text-muted-foreground uppercase mb-3 sm:mb-4">Software Versions</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-muted-foreground text-sm">Popular frameworks:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-secondary rounded text-xs text-muted-foreground">React 18.2</span>
                <span className="px-2 py-1 bg-secondary rounded text-xs text-muted-foreground">Node.js 20.x</span>
                <span className="px-2 py-1 bg-secondary rounded text-xs text-muted-foreground">Nginx 1.24</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ScanHistory;
