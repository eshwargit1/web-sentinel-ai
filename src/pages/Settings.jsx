import DashboardLayout from "@/components/layout/DashboardLayout.jsx";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ShieldIcon from "@/components/icons/ShieldIcon.jsx";

const Settings = () => {
  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-xl sm:text-2xl font-bold text-foreground">Settings</h1>
        </div>

        <Tabs defaultValue="general" className="space-y-4 sm:space-y-6">
          <TabsList className="bg-secondary border border-border w-full sm:w-auto">
            <TabsTrigger 
              value="general" 
              className="flex-1 sm:flex-none text-xs sm:text-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              General
            </TabsTrigger>
            <TabsTrigger 
              value="integrations" 
              className="flex-1 sm:flex-none text-xs sm:text-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              AI Integration
            </TabsTrigger>
          </TabsList>

          {/* General Settings */}
          <TabsContent value="general" className="space-y-4 sm:space-y-6">
            <div className="card-cyber p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4 sm:mb-6">
                <div className="p-3 sm:p-4 bg-primary/10 rounded-xl border border-primary/20">
                  <ShieldIcon className="text-primary" size={36} />
                </div>
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-foreground">SITE SHIELD AI</h2>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Intelligent Website Reconnaissance Tool
                  </p>
                </div>
              </div>

              <div className="space-y-4 sm:space-y-6">
                <div>
                  <label className="text-xs sm:text-sm font-medium text-foreground mb-2 block">
                    Notifications
                  </label>
                  <Input
                    placeholder="notification@example.com"
                    className="bg-secondary border-border"
                  />
                </div>

                <div>
                  <label className="text-xs sm:text-sm font-medium text-foreground mb-2 block">
                    Default Scan Domains
                  </label>
                  <Input
                    placeholder="Enter default domain..."
                    className="bg-secondary border-border"
                  />
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Integrations */}
          <TabsContent value="integrations" className="space-y-4 sm:space-y-6">
            <div className="card-cyber p-4 sm:p-6">
              <h2 className="text-base sm:text-lg font-semibold text-foreground mb-4 sm:mb-6">Integrations</h2>

              <div className="space-y-3 sm:space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 sm:p-4 bg-secondary/50 rounded-lg gap-3">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                    <span className="font-medium text-foreground text-sm">API Engine</span>
                    <span className="text-xs sm:text-sm text-muted-foreground">Shodan</span>
                  </div>
                  <Switch />
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 sm:p-4 bg-secondary/50 rounded-lg gap-3">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                    <span className="font-medium text-foreground text-sm">Configurations</span>
                    <span className="text-xs sm:text-sm text-muted-foreground">Deepseek, OpenAI</span>
                  </div>
                  <Switch />
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 sm:p-4 bg-secondary/50 rounded-lg gap-3">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                    <span className="font-medium text-foreground text-sm">Additional Features</span>
                    <span className="text-xs sm:text-sm text-muted-foreground">API Access</span>
                  </div>
                  <Switch />
                </div>
              </div>
            </div>

            {/* API Configuration */}
            <div className="card-cyber p-4 sm:p-6">
              <h2 className="text-base sm:text-lg font-semibold text-foreground mb-4 sm:mb-6">API Configuration</h2>
              <div className="space-y-4">
                <div>
                  <label className="text-xs sm:text-sm font-medium text-foreground mb-2 block">
                    API Endpoint URL
                  </label>
                  <Input
                    placeholder="https://api.example.com/v1"
                    className="bg-secondary border-border font-mono text-xs sm:text-sm"
                  />
                </div>
                <div>
                  <label className="text-xs sm:text-sm font-medium text-foreground mb-2 block">
                    API Key
                  </label>
                  <Input
                    type="password"
                    placeholder="Enter your API key..."
                    className="bg-secondary border-border"
                  />
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-end gap-3 sm:gap-4">
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 sm:px-8 order-1 sm:order-none">
            Save
          </Button>
          <Button variant="outline" className="border-danger text-danger hover:bg-danger/10 px-6 sm:px-8">
            Cancel
          </Button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Settings;
