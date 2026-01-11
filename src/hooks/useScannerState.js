import { useState, useCallback } from "react";

// Mock data generator - this will be replaced with actual API calls
const generateMockScanResult = (url) => {
  return {
    url,
    timestamp: new Date(),
    techStack: {
      frontend: {
        label: "Frontend",
        items: ["React", "Next.js", "Tailwind CSS", "JavaScript"],
      },
      backend: {
        label: "Backend",
        items: ["Node.js", "Express", "PostgreSQL", "(Port 80/TCP)"],
      },
      server: {
        label: "Server",
        items: ["Nginx 1.20.1", "Ubuntu 22.04 LTS"],
      },
      ipAddress: {
        label: "IP Address",
        items: ["IP Address: 20.168.1.201", "IPv6: 2001:0db8:85a3::8a2e:0370:7334"],
      },
      ports: {
        label: "Ports/Services",
        items: ["80/TCP - HTTP", "443/TCP - HTTPS", "22/TCP - SSH", "3306/TCP - MySQL"],
      },
      softwareVersions: {
        label: "Software Versions",
        items: ["Nginx 1.20.1 (Outdated)", "OpenSSL 1.1.1k", "PHP 8.1.2"],
      },
      domainInfo: {
        label: "Domain Info",
        items: ["Registrar: Namecheap", "Created: 2020-05-15", "Expires: 2025-05-15", "DNSSEC: Enabled"],
      },
    },
    riskScore: 72,
    riskLabel: "POTENTIALLY UNSAFE",
    analysis:
      "Based on outdated software (Nginx 1.20.1) and exposed services, AI module flags potential risks. Possible XSS and SQL Injection vectors detected due to unvalidated inputs. The exposed MySQL port increases attack surface significantly.",
    recommendations: [
      { text: "Update Nginx to latest version", severity: "critical" },
      { text: "Implement input validation/sanitization", severity: "critical" },
      { text: "Configure Web Application Firewall (WAF)", severity: "warning" },
      { text: "Disable unnecessary services", severity: "warning" },
      { text: "Enable rate limiting on API endpoints", severity: "info" },
    ],
  };
};

export const useScannerState = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [scanResult, setScanResult] = useState(null);
  const [isGeneratingReport, setIsGeneratingReport] = useState(false);
  const [scanHistory, setScanHistory] = useState([]);

  const performScan = useCallback(async (url) => {
    setIsScanning(true);
    
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 2500));
    
    const result = generateMockScanResult(url);
    setScanResult(result);
    setScanHistory((prev) => [result, ...prev]);
    setIsScanning(false);
  }, []);

  const generateReport = useCallback(async () => {
    if (!scanResult) return;
    
    setIsGeneratingReport(true);
    
    // Simulate report generation
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    // In real implementation, this would call an API to generate PDF/HTML report
    console.log("Report generated for:", scanResult.url);
    setIsGeneratingReport(false);
  }, [scanResult]);

  return {
    isScanning,
    scanResult,
    isGeneratingReport,
    scanHistory,
    performScan,
    generateReport,
  };
};
