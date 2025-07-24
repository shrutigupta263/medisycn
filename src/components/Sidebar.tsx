import { BarChart3, FileText, Pill, TrendingUp, Users, Brain, Stethoscope } from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  activeItem: string;
  onItemClick: (item: string) => void;
}

const menuItems = [
  { id: "dashboard", label: "Dashboard", icon: BarChart3 },
  { id: "reports", label: "Reports", icon: FileText },
  { id: "medications", label: "Medications", icon: Pill },
  { id: "vitals", label: "Vitals & Trends", icon: TrendingUp },
  { id: "family", label: "Family Profiles", icon: Users },
  { id: "insights", label: "Smart Insights", icon: Brain },
];

export const Sidebar = ({ activeItem, onItemClick }: SidebarProps) => {
  return (
    <div className="w-64 bg-health-sidebar h-screen p-6 border-r border-border flex flex-col">
      {/* Logo */}
      <div className="flex items-center gap-2 mb-8">
        <Stethoscope className="h-8 w-8 text-primary" />
        <h1 className="text-xl font-semibold text-primary">Medisycn</h1>
      </div>

      {/* Main Menu */}
      <div className="space-y-1">
        <h2 className="text-sm font-medium text-muted-foreground mb-3">Main Menu</h2>
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeItem === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onItemClick(item.id)}
              className={cn(
                "w-full flex items-center gap-3 px-3 py-2 text-left rounded-lg transition-colors",
                isActive
                  ? "bg-health-sidebar-active text-primary border border-primary/20"
                  : "text-muted-foreground hover:bg-health-sidebar-active hover:text-foreground"
              )}
            >
              <Icon className="h-4 w-4" />
              <span className="text-sm">{item.label}</span>
            </button>
          );
        })}
      </div>

      {/* User Profile */}
      <div className="mt-auto pt-6">
        <div className="flex items-center gap-3 p-3 bg-health-sidebar-active rounded-lg border border-primary/10">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-health-light-blue flex items-center justify-center text-primary-foreground font-semibold">
            JD
          </div>
          <div>
            <p className="font-medium text-foreground">John Doe</p>
            <p className="text-sm text-muted-foreground">john@example.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};