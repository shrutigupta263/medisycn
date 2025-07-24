import { useState } from "react";
import { Upload, FileText, Pill, Calendar, Activity, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MetricCard } from "./MetricCard";

export const Dashboard = () => {
  const [uploadingReport, setUploadingReport] = useState(false);

  const handleUploadReport = () => {
    setUploadingReport(true);
    // Simulate upload process
    setTimeout(() => {
      setUploadingReport(false);
    }, 2000);
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
    <div className="flex-1 p-8 overflow-y-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Dashboard</h1>
        <p className="text-muted-foreground">Welcome to your health dashboard. Here's your overview.</p>
      </div>

      {/* Get Started Section */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-xl text-primary">Get Started with Your Report</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <p className="text-muted-foreground max-w-2xl">
              Upload your medical report to receive AI-powered analysis, insights, and a 
              detailed summary of your health metrics.
            </p>
            <Button 
              onClick={handleUploadReport}
              disabled={uploadingReport}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Upload className="h-4 w-4 mr-2" />
              {uploadingReport ? "Uploading..." : "Upload Report"}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <MetricCard
          title="Recent Reports"
          value="3"
          subtitle="+1 since last month"
          icon={FileText}
          color="blue"
        />
        <MetricCard
          title="Active Medications"
          value="7"
          subtitle="2 need refill"
          icon={Pill}
          color="green"
        />
        <MetricCard
          title="Upcoming Appointments"
          value="2"
          subtitle="Next: May 15, 2025"
          icon={Calendar}
          color="orange"
        />
        <MetricCard
          title="Health Status"
          value="Good"
          subtitle="All vitals within range"
          icon={Activity}
          color="light-blue"
        />
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-health-light-blue" />
              <CardTitle>Recent Activity</CardTitle>
            </div>
            <p className="text-sm text-muted-foreground">Your health activity from the past 7 days</p>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center h-32 text-muted-foreground">
              <div className="text-center">
                <FileText className="h-8 w-8 mx-auto mb-2 opacity-50" />
                <p>Activity chart will appear here</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Reminders */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-muted-foreground" />
              <CardTitle>Reminders</CardTitle>
            </div>
            <p className="text-sm text-muted-foreground">Upcoming tasks</p>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {reminders.map((reminder) => (
                <div key={reminder.id} className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${reminder.dotColor}`} />
                  <span className={`text-sm ${reminder.color}`}>
                    {reminder.text}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* User Profile */}
      <div className="mt-8 flex items-center gap-3 p-4 bg-card rounded-lg border">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-health-light-blue flex items-center justify-center text-primary-foreground font-semibold">
          JD
        </div>
        <div>
          <p className="font-medium text-foreground">John Doe</p>
          <p className="text-sm text-muted-foreground">john@example.com</p>
        </div>
      </div>
    </div>
  );
};