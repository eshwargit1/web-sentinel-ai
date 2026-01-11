import { useState } from "react";
import { Search, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface UrlInputProps {
  onScan: (url: string) => void;
  isLoading?: boolean;
}

const UrlInput = ({ onScan, isLoading = false }: UrlInputProps) => {
  const [url, setUrl] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (url.trim()) {
      onScan(url.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-3">
      <div className="relative flex-1">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
        <Input
          type="text"
          placeholder="Enter Website URL..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="pl-11 h-12 bg-secondary border-border text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/50 focus:border-primary"
        />
      </div>
      <Button
        type="submit"
        disabled={isLoading || !url.trim()}
        className="h-12 px-8 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold glow-primary"
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 animate-spin" size={18} />
            Scanning...
          </>
        ) : (
          "SCAN"
        )}
      </Button>
    </form>
  );
};

export default UrlInput;
