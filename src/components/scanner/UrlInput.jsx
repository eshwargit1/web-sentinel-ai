import { useState } from "react";
import { Search, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const UrlInput = ({ onScan, isLoading = false }) => {
  const [url, setUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (url.trim()) {
      onScan(url.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
      <div className="relative flex-1">
        <Search className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
        <Input
          type="text"
          placeholder="Enter Website URL..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="pl-10 sm:pl-11 h-10 sm:h-12 bg-secondary border-border text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/50 focus:border-primary text-sm sm:text-base"
        />
      </div>
      <Button
        type="submit"
        disabled={isLoading || !url.trim()}
        className="h-10 sm:h-12 px-6 sm:px-8 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold glow-primary w-full sm:w-auto"
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
