import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Code2,
  Server,
  Globe,
  Network,
  Settings,
  FileCode,
  Info,
} from "lucide-react";

const iconMap = {
  frontend: Code2,
  backend: Server,
  server: Globe,
  ipAddress: Network,
  ports: Settings,
  softwareVersions: FileCode,
  domainInfo: Info,
};

const TechStackAccordion = ({ data }) => {
  if (!data) {
    return (
      <div className="card-cyber p-4 sm:p-6 text-center text-muted-foreground">
        <p className="text-sm sm:text-base">Enter a URL and click Scan to analyze the technology stack</p>
      </div>
    );
  }

  const sections = [
    { key: "frontend", data: data.frontend },
    { key: "backend", data: data.backend },
    { key: "server", data: data.server },
    { key: "ipAddress", data: data.ipAddress },
    { key: "ports", data: data.ports },
    { key: "softwareVersions", data: data.softwareVersions },
    { key: "domainInfo", data: data.domainInfo },
  ];

  return (
    <div className="card-cyber overflow-hidden">
      <div className="p-3 sm:p-4 border-b border-border">
        <h2 className="text-xs sm:text-sm font-semibold text-muted-foreground uppercase tracking-wider">
          Technology Stack & Attack Surface
        </h2>
      </div>
      <Accordion type="multiple" defaultValue={["frontend", "backend"]} className="divide-y divide-border">
        {sections.map(({ key, data: section }) => {
          const Icon = iconMap[key];
          return (
            <AccordionItem key={key} value={key} className="border-none">
              <AccordionTrigger className="px-3 sm:px-4 py-2.5 sm:py-3 hover:bg-secondary/50 transition-colors [&[data-state=open]]:bg-secondary/30">
                <div className="flex items-center gap-2 sm:gap-3">
                  <Icon size={16} className="text-primary sm:w-[18px] sm:h-[18px]" />
                  <span className="font-medium text-foreground text-sm sm:text-base">{section.label}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-3 sm:px-4 pb-3 sm:pb-4">
                <ul className="space-y-1.5 sm:space-y-2 pl-6 sm:pl-8">
                  {section.items.map((item, index) => (
                    <li
                      key={index}
                      className="text-xs sm:text-sm text-muted-foreground flex items-center gap-2"
                    >
                      <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-muted-foreground flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
};

export default TechStackAccordion;
