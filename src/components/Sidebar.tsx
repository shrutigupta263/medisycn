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
    <div className="w-64 bg-gradient-to-b from-health-sidebar to-health-sidebar/80 h-screen p-6 border-r border-border/50 flex flex-col backdrop-blur-sm">
      {/* Logo */}
      <div className="flex items-center gap-3 mb-8 group cursor-pointer">
        <div className="p-2 rounded-xl bg-gradient-to-br from-primary to-health-light-blue group-hover:scale-110 transition-all duration-300">
          <Stethoscope className="h-6 w-6 text-white" />
        </div>
        <h1 className="text-xl font-bold text-gradient group-hover:scale-105 transition-transform duration-300">
          Medisycn
        </h1>
      </div>

      {/* Main Menu */}
      <div className="space-y-2">
        <h2 className="text-xs font-bold text-muted-foreground mb-4 uppercase tracking-wider">Main Menu</h2>
        {menuItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = activeItem === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onItemClick(item.id)}
              className={cn(
                "w-full flex items-center gap-4 px-4 py-3 text-left rounded-xl transition-all duration-300 group relative overflow-hidden",
                isActive
                  ? "bg-gradient-to-r from-primary/20 to-health-light-blue/20 text-primary shadow-lg shadow-primary/10 border border-primary/30"
                  : "text-muted-foreground hover:bg-gradient-to-r hover:from-primary/5 hover:to-health-light-blue/5 hover:text-foreground hover:scale-105 hover:-translate-y-0.5"
              )}
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              {/* Hover shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className={cn(
                "p-2 rounded-lg transition-all duration-300 relative z-10",
                isActive ? "bg-primary/20 scale-110" : "group-hover:bg-primary/10 group-hover:scale-110"
              )}>
                <Icon className="h-4 w-4" />
              </div>
              <span className="text-sm font-medium relative z-10 group-hover:translate-x-1 transition-transform duration-300">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* User Profile */}
      <div className="mt-auto pt-6">
        <div className="group cursor-pointer">
          <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-card/50 to-muted/30 rounded-xl border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 backdrop-blur-sm">
            <div className="relative">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-health-light-blue flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300 shadow-lg">
                JD
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-health-green rounded-full border-2 border-white"></div>
            </div>
            <div className="flex-1">
              <p className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">John Doe</p>
              <p className="text-xs text-muted-foreground">john@example.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};