import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { Dashboard } from "@/components/Dashboard";

const Index = () => {
  const [activeMenuItem, setActiveMenuItem] = useState("dashboard");

  const renderMainContent = () => {
    switch (activeMenuItem) {
      case "dashboard":
        return <Dashboard />;
      default:
        return (
          <div className="flex-1 p-8 flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-2">Coming Soon</h2>
              <p className="text-muted-foreground">
                {activeMenuItem.charAt(0).toUpperCase() + activeMenuItem.slice(1)} section is under development.
              </p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen flex bg-background">
      <Sidebar 
        activeItem={activeMenuItem} 
        onItemClick={setActiveMenuItem} 
      />
      {renderMainContent()}
    </div>
  );
};

export default Index;
