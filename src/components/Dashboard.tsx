import { useState } from "react";
import { Upload, FileText, Pill, Calendar, Activity, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MetricCard } from "./MetricCard";
import { FileUploadDialog } from "./FileUploadDialog";
import ReportAnalysis from "./ReportAnalysis";

export const Dashboard = () => {
  const [isUploadDialogOpen, setIsUploadDialogOpen] = useState(false);
  const [isReportAnalysisOpen, setIsReportAnalysisOpen] = useState(false);

  const handleUploadComplete = () => {
    setIsUploadDialogOpen(false);
    setIsReportAnalysisOpen(true);
  };

  const reminders = [
    {
      id: 1,
      text: "Take blood pressure medication - 8:00 AM",
      color: "text-health-blue",
      dotColor: "bg-health-blue"
    },
    {
      id: 2,
      text: "Record blood glucose level - 7:30 PM", 
      color: "text-health-green",
      dotColor: "bg-health-green"
    },
    {
      id: 3,
      text: "Dr. Smith appointment - May 15",
      color: "text-health-orange",
      dotColor: "bg-health-orange"
    }
  ];

  return (
    <div className="flex-1 p-8 overflow-y-auto bg-gradient-to-br from-background via-muted/30 to-background">
      {/* Header */}
      <div className="mb-8 slide-in">
        <h1 className="text-4xl font-bold text-gradient mb-2 float-animation">Dashboard</h1>
        <p className="text-muted-foreground text-lg">Welcome to your health dashboard. Here's your overview.</p>
      </div>

      {/* Get Started Section */}
      <Card className="mb-8 modern-card card-hover border-0 gradient-border slide-in">
        <CardHeader className="pb-4">
          <CardTitle className="text-2xl font-bold text-gradient flex items-center gap-2">
            <Upload className="h-6 w-6" />
            Get Started with Your Report
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed">
              Upload your medical report to receive AI-powered analysis, insights, and a 
              detailed summary of your health metrics.
            </p>
            <Button 
              onClick={() => setIsUploadDialogOpen(true)}
              className="bg-gradient-to-r from-primary to-health-light-blue text-white hover:shadow-lg hover:scale-105 transition-all duration-300 px-6 py-3 text-lg font-semibold"
            >
              <Upload className="h-5 w-5 mr-2" />
              Upload Report
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 slide-in">
        <div className="animate-[slideIn_0.5s_ease-out_0.1s_both]">
          <MetricCard
            title="Recent Reports"
            value="3"
            subtitle="+1 since last month"
            icon={FileText}
            color="blue"
          />
        </div>
        <div className="animate-[slideIn_0.5s_ease-out_0.2s_both]">
          <MetricCard
            title="Active Medications"
            value="7"
            subtitle="2 need refill"
            icon={Pill}
            color="green"
          />
        </div>
        <div className="animate-[slideIn_0.5s_ease-out_0.3s_both]">
          <MetricCard
            title="Upcoming Appointments"
            value="2"
            subtitle="Next: May 15, 2025"
            icon={Calendar}
            color="orange"
          />
        </div>
        <div className="animate-[slideIn_0.5s_ease-out_0.4s_both]">
          <MetricCard
            title="Health Status"
            value="Good"
            subtitle="All vitals within range"
            icon={Activity}
            color="light-blue"
          />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 animate-[slideIn_0.5s_ease-out_0.5s_both]">
        {/* Recent Activity */}
        <Card className="modern-card card-hover border-0">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-gradient-to-r from-health-light-blue/20 to-primary/20">
                <Activity className="h-6 w-6 text-health-light-blue" />
              </div>
              <div>
                <CardTitle className="text-xl">Recent Activity</CardTitle>
                <p className="text-sm text-muted-foreground">Your health activity from the past 7 days</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center h-32 text-muted-foreground">
              <div className="text-center">
                <div className="p-4 rounded-full bg-gradient-to-r from-primary/10 to-health-light-blue/10 mb-4 inline-block">
                  <FileText className="h-8 w-8 mx-auto opacity-50 float-animation" />
                </div>
                <p className="text-lg font-medium">Activity chart will appear here</p>
                <p className="text-sm">Upload a report to see your activity</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Reminders */}
        <Card className="modern-card card-hover border-0">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-gradient-to-r from-health-orange/20 to-health-blue/20">
                <Clock className="h-6 w-6 text-health-orange" />
              </div>
              <div>
                <CardTitle className="text-xl">Reminders</CardTitle>
                <p className="text-sm text-muted-foreground">Upcoming tasks</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {reminders.map((reminder, index) => (
                <div 
                  key={reminder.id} 
                  className={`flex items-center gap-4 p-3 rounded-lg bg-gradient-to-r from-card to-muted/30 hover:shadow-md transition-all duration-300 animate-[slideIn_0.3s_ease-out_${0.6 + index * 0.1}s_both]`}
                >
                  <div className={`w-3 h-3 rounded-full ${reminder.dotColor} pulse-ring`} />
                  <span className={`${reminder.color} font-medium flex-1`}>
                    {reminder.text}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* File Upload Dialog */}
      <FileUploadDialog 
        open={isUploadDialogOpen} 
        onOpenChange={setIsUploadDialogOpen}
        onUploadComplete={handleUploadComplete}
      />

      {/* Report Analysis */}
      <ReportAnalysis 
        isOpen={isReportAnalysisOpen}
        onClose={() => setIsReportAnalysisOpen(false)}
      />
    </div>
  );
};