import DashboardLayout from "@/components/layout/DashboardLayout.jsx";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ShieldIcon from "@/components/icons/ShieldIcon.jsx";

const Settings = () => {
  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-foreground">Settings</h1>
        </div>

        <Tabs defaultValue="general" className="space-y-6">
          <TabsList className="bg-secondary border border-border">
            <TabsTrigger value="general" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              General
            </TabsTrigger>
            <TabsTrigger value="integrations" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              AI Integration
            </TabsTrigger>
          </TabsList>

          {/* General Settings */}
          <TabsContent value="general" className="space-y-6">
            <div className="card-cyber p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-primary/10 rounded-xl border border-primary/20">
                  <ShieldIcon className="text-primary" size={48} />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-foreground">SITE SHIELD AI</h2>
                  <p className="text-sm text-muted-foreground">
                    Intelligent Website Reconnaissance Tool
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Notifications
                  </label>
                  <Input
                    placeholder="notification@example.com"
                    className="bg-secondary border-border"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
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
          <TabsContent value="integrations" className="space-y-6">
            <div className="card-cyber p-6">
              <h2 className="text-lg font-semibold text-foreground mb-6">Integrations</h2>

              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-secondary/50 rounded-lg">
                  <div className="flex items-center gap-4">
                    <span className="font-medium text-foreground">API Engine</span>
                    <span className="text-sm text-muted-foreground">Shodan</span>
                  </div>
                  <Switch />
                </div>

                <div className="flex items-center justify-between p-4 bg-secondary/50 rounded-lg">
                  <div className="flex items-center gap-4">
                    <span className="font-medium text-foreground">Configurations</span>
                    <span className="text-sm text-muted-foreground">Deepseek, OpenAI</span>
                  </div>
                  <Switch />
                </div>

                <div className="flex items-center justify-between p-4 bg-secondary/50 rounded-lg">
                  <div className="flex items-center gap-4">
                    <span className="font-medium text-foreground">Additional Features</span>
                    <span className="text-sm text-muted-foreground">API Access</span>
                  </div>
                  <Switch />
                </div>
              </div>
            </div>

            {/* API Configuration */}
            <div className="card-cyber p-6">
              <h2 className="text-lg font-semibold text-foreground mb-6">API Configuration</h2>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    API Endpoint URL
                  </label>
                  <Input
                    placeholder="https://api.example.com/v1"
                    className="bg-secondary border-border font-mono text-sm"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
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
        <div className="flex justify-end gap-4">
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
            Save
          </Button>
          <Button variant="outline" className="border-danger text-danger hover:bg-danger/10 px-8">
            Cancel
          </Button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Settings;
