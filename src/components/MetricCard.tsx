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
  blue: "border-t-health-blue",
  green: "border-t-health-green", 
  orange: "border-t-health-orange",
  "light-blue": "border-t-health-light-blue",
};

const iconColorClasses = {
  blue: "text-health-blue",
  green: "text-health-green",
  orange: "text-health-orange", 
  "light-blue": "text-health-light-blue",
};

export const MetricCard = ({ title, value, subtitle, icon: Icon, color }: MetricCardProps) => {
  return (
    <div className={cn(
      "bg-card rounded-lg p-6 border border-border border-t-4 shadow-sm",
      colorClasses[color]
    )}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
        <Icon className={cn("h-5 w-5", iconColorClasses[color])} />
      </div>
      <div className="space-y-1">
        <p className="text-3xl font-bold text-foreground">{value}</p>
        <p className="text-sm text-muted-foreground">{subtitle}</p>
      </div>
    </div>
  );
};