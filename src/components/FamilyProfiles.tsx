import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Download, User, FileText, AlertTriangle } from "lucide-react";

export const FamilyProfiles = () => {
  const familyReports = [
    {
      id: 1,
      name: "Yash Gupta",
      report: "Complete Blood Count",
      status: "Normal",
      statusColor: "bg-health-green text-white",
      date: "Apr 15, 25",
      doctor: "Dr. Samantha Lee"
    },
    {
      id: 2,
      name: "Savita Gupta", 
      report: "Chest X-Ray",
      status: "Needs Review",
      statusColor: "bg-health-orange text-white",
      date: "Apr 10, 25",
      doctor: "Dr. James Wilson"
    },
    {
      id: 3,
      name: "Rajesh Gupta",
      report: "Blood Pressure", 
      status: "Abnormal",
      statusColor: "bg-red-500 text-white",
      date: "Apr 05, 25",
      doctor: "Dr. Maria Garcia"
    },
    {
      id: 4,
      name: "Shruti Gupta",
      report: "Allergy Panel",
      status: "Normal", 
      statusColor: "bg-health-green text-white",
      date: "Mar 28, 25",
      doctor: "Dr. Ken Thompson"
    }
  ];

  return (
    <div className="flex-1 p-8 overflow-y-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Family Health Dashboard</h1>
          <p className="text-muted-foreground">Track trends, risk flags, and recent reports for your entire family.</p>
        </div>
        <Button className="bg-health-light-blue text-white hover:bg-health-light-blue/90">
          Manage Family Members
        </Button>
      </div>

      {/* Recent Reports Section */}
      <Card className="mb-8">
        <CardHeader>
          <div className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-health-light-blue" />
            <CardTitle>Recent Reports Across Profiles</CardTitle>
          </div>
          <p className="text-sm text-muted-foreground">Latest reports from family members</p>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Report</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Doctor</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {familyReports.map((report) => (
                <TableRow key={report.id}>
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4 text-muted-foreground" />
                      {report.name}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-muted-foreground" />
                      {report.report}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge className={`${report.statusColor} text-xs px-2 py-1`}>
                      {report.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-muted-foreground">{report.date}</TableCell>
                  <TableCell className="text-muted-foreground">{report.doctor}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm" className="h-8 px-2">
                        <ExternalLink className="h-3 w-3 mr-1" />
                        View
                      </Button>
                      <Button variant="outline" size="sm" className="h-8 px-2">
                        <Download className="h-3 w-3 mr-1" />
                        Export
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Health Alerts Section */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-health-orange" />
            <CardTitle>Health Alerts</CardTitle>
          </div>
          <p className="text-sm text-muted-foreground">AI-detected patterns across family health concerns</p>
        </CardHeader>
        <CardContent>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-yellow-600" />
              <span className="text-yellow-800 font-medium">Two family members have high cholesterol levels</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};