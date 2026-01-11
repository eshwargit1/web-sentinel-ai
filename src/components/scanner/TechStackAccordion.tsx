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
import { cn } from "@/lib/utils";

interface TechItem {
  label: string;
  items: string[];
}

interface TechStackAccordionProps {
  data: {
    frontend: TechItem;
    backend: TechItem;
    server: TechItem;
    ipAddress: TechItem;
    ports: TechItem;
    softwareVersions: TechItem;
    domainInfo: TechItem;
  } | null;
}

const iconMap = {
  frontend: Code2,
  backend: Server,
  server: Globe,
  ipAddress: Network,
  ports: Settings,
  softwareVersions: FileCode,
  domainInfo: Info,
};

const TechStackAccordion = ({ data }: TechStackAccordionProps) => {
  if (!data) {
    return (
      <div className="card-cyber p-6 text-center text-muted-foreground">
        <p>Enter a URL and click Scan to analyze the technology stack</p>
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
  ] as const;

  return (
    <div className="card-cyber overflow-hidden">
      <div className="p-4 border-b border-border">
        <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
          Technology Stack & Attack Surface
        </h2>
      </div>
      <Accordion type="multiple" defaultValue={["frontend", "backend"]} className="divide-y divide-border">
        {sections.map(({ key, data: section }) => {
          const Icon = iconMap[key];
          return (
            <AccordionItem key={key} value={key} className="border-none">
              <AccordionTrigger className="px-4 py-3 hover:bg-secondary/50 transition-colors [&[data-state=open]]:bg-secondary/30">
                <div className="flex items-center gap-3">
                  <Icon size={18} className="text-primary" />
                  <span className="font-medium text-foreground">{section.label}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4">
                <ul className="space-y-2 pl-8">
                  {section.items.map((item, index) => (
                    <li
                      key={index}
                      className="text-sm text-muted-foreground flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground" />
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
