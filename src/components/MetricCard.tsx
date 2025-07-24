import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string | number;
  subtitle: string;
  icon: LucideIcon;
  color: "blue" | "green" | "orange" | "light-blue";
}

const colorClasses = {
  blue: {
    gradient: "from-health-blue/5 via-health-blue/10 to-health-blue/5",
    iconBg: "bg-health-blue/10",
    icon: "text-health-blue",
    glow: "group-hover:shadow-lg group-hover:shadow-health-blue/20"
  },
  green: {
    gradient: "from-health-green/5 via-health-green/10 to-health-green/5",
    iconBg: "bg-health-green/10",
    icon: "text-health-green",
    glow: "group-hover:shadow-lg group-hover:shadow-health-green/20"
  },
  orange: {
    gradient: "from-health-orange/5 via-health-orange/10 to-health-orange/5",
    iconBg: "bg-health-orange/10",
    icon: "text-health-orange",
    glow: "group-hover:shadow-lg group-hover:shadow-health-orange/20"
  },
  "light-blue": {
    gradient: "from-health-light-blue/5 via-health-light-blue/10 to-health-light-blue/5",
    iconBg: "bg-health-light-blue/10",
    icon: "text-health-light-blue",
    glow: "group-hover:shadow-lg group-hover:shadow-health-light-blue/20"
  }
};

export const MetricCard = ({ title, value, subtitle, icon: Icon, color }: MetricCardProps) => {
  const colorStyle = colorClasses[color];
  
  return (
    <div className={cn(
      "group relative overflow-hidden rounded-xl p-6 border-0 transition-all duration-300 cursor-pointer",
      "bg-gradient-to-br", colorStyle.gradient,
      "hover:scale-[1.02] hover:-translate-y-1",
      colorStyle.glow,
      "before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent",
      "before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100"
    )}>
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-semibold text-muted-foreground tracking-wider uppercase">
            {title}
          </h3>
          <div className={cn(
            "p-3 rounded-xl transition-all duration-300",
            colorStyle.iconBg,
            "group-hover:scale-110 group-hover:rotate-3"
          )}>
            <Icon className={cn("h-5 w-5", colorStyle.icon)} />
          </div>
        </div>
        <div className="space-y-2">
          <p className="text-4xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
            {value}
          </p>
          <p className="text-sm text-muted-foreground font-medium">
            {subtitle}
          </p>
        </div>
      </div>
      
      {/* Subtle animated border */}
      <div className="absolute inset-0 rounded-xl border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
};