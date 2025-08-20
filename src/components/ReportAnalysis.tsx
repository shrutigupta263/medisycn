import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  User, 
  Building2, 
  UserCheck, 
  Calendar, 
  Clock, 
  MapPin, 
  AlertTriangle,
  Share,
  Download,
  Eye,
  Heart,
  Activity,
  TrendingUp
} from "lucide-react";

interface ReportAnalysisProps {
  isOpen: boolean;
  onClose: () => void;
}

const ReportAnalysis: React.FC<ReportAnalysisProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const healthScore = 76;
  const alertCount = 18;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-background rounded-xl w-full max-w-7xl max-h-[95vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-background border-b p-6 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gradient">Report Summary</h1>
            <p className="text-muted-foreground mt-1">
              Detailed analysis and AI-generated insights for your medical report
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm">
              <Share className="w-4 h-4 mr-2" />
              Share
            </Button>
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
            <Button onClick={onClose} variant="ghost" size="sm">
              ✕
            </Button>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {/* Patient Report Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-semibold text-primary">Patient Report</h2>
            </div>
            <Badge variant="outline" className="text-primary border-primary">
              14/1/2024
            </Badge>
          </div>

          {/* Patient Information Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Patient Information */}
            <Card className="modern-card">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-primary">
                  <User className="w-4 h-4" />
                  Patient Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <p className="text-sm text-muted-foreground">Full Name</p>
                  <p className="font-semibold">Mr. Yash Gupta</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Age</p>
                    <p className="font-semibold">24 Y 8 M 21 D</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Gender</p>
                    <p className="font-semibold">Male</p>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Patient ID</p>
                  <p className="font-semibold">ML04370386</p>
                </div>
              </CardContent>
            </Card>

            {/* Laboratory Information */}
            <Card className="modern-card">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-primary">
                  <Building2 className="w-4 h-4" />
                  Laboratory Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <p className="text-sm text-muted-foreground">Laboratory</p>
                  <p className="font-semibold">NANAVATI SUPERSPECIALITY HOSPITAL, MUMBAI</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Collection Date & Time</p>
                  <div className="flex items-center gap-2 mt-1">
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                    <span className="font-semibold">13/1/2024</span>
                    <Clock className="w-4 h-4 text-muted-foreground ml-2" />
                    <span className="font-semibold">10:11 AM</span>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <div className="flex items-center gap-2 mt-1">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                    <span className="font-semibold">3950 - Digital Home Collection Pune</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Referring Doctor */}
            <Card className="modern-card">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-primary">
                  <UserCheck className="w-4 h-4" />
                  Referring Doctor
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <p className="text-sm text-muted-foreground">Doctor Name</p>
                  <p className="font-semibold">Self</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Attention Alert */}
          <Alert className="border-orange-200 bg-orange-50">
            <AlertTriangle className="h-4 w-4 text-orange-600" />
            <AlertDescription className="text-orange-800">
              <strong>Attention Needed</strong>
              <br />
              Your report shows {alertCount} abnormal parameters that require attention.
              <Button variant="outline" size="sm" className="ml-4 text-orange-700 border-orange-300">
                <Eye className="w-4 h-4 mr-2" />
                View Issues
              </Button>
            </AlertDescription>
          </Alert>

          {/* Analysis Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Summary and Key Highlights */}
            <div className="lg:col-span-2">
              <Card className="modern-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="w-5 h-5 text-primary" />
                    Summary and Key Highlights
                    <Badge variant="secondary" className="ml-auto">47 Items</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-orange-600 mb-3 flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4" />
                        Areas Needing Attention
                      </h4>
                      <div className="space-y-2">
                        {[
                          "Packed Cell Volume slightly elevated",
                          "MPV value is high",
                          "No abnormal cells seen in DLC",
                          "Thyroid Stimulating Hormone (TSH) level slightly elevated",
                          "Sodium levels are slightly low"
                        ].map((item, index) => (
                          <div key={index} className="flex items-center gap-2 text-sm">
                            <AlertTriangle className="w-3 h-3 text-orange-500 flex-shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                        <p className="text-sm text-orange-600 font-medium mt-3">
                          +16 more areas needing attention
                        </p>
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <h4 className="font-semibold text-green-600 mb-3 flex items-center gap-2">
                        <TrendingUp className="w-4 h-4" />
                        Good Findings
                      </h4>
                      <div className="space-y-2">
                        {[
                          "Blood glucose levels within normal range",
                          "Kidney function parameters normal",
                          "Liver enzymes within acceptable limits"
                        ].map((item, index) => (
                          <div key={index} className="flex items-center gap-2 text-sm">
                            <div className="w-3 h-3 bg-green-500 rounded-full flex-shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Health Score Overview */}
            <Card className="modern-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-primary" />
                  Health Score Overview
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 120 120">
                    <circle
                      cx="60"
                      cy="60"
                      r="50"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="8"
                      className="text-muted/20"
                    />
                    <circle
                      cx="60"
                      cy="60"
                      r="50"
                      fill="none"
                      stroke="url(#healthGradient)"
                      strokeWidth="8"
                      strokeLinecap="round"
                      strokeDasharray={`${(healthScore / 100) * 314} 314`}
                      className="transition-all duration-1000"
                    />
                    <defs>
                      <linearGradient id="healthGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#10b981" />
                        <stop offset="100%" stopColor="#06d6a0" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-gradient">{healthScore}%</div>
                      <div className="text-sm text-green-600 font-medium">Overall Health</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 text-left">
                  <h4 className="font-semibold">Health Assessment</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    The overall health score of {healthScore} indicates good health but with areas requiring attention. 
                    Key findings include elevated Packed Cell Volume and RBC count, suggesting a potential for polycythemia. 
                    High MPV values may indicate platelet dysfunction or increased production. The elevated Thyroid 
                    Stimulating Hormone (TSH) level suggests a possible thyroid function issue, while the lipid profile 
                    shows increased LDL and low HDL cholesterol levels, indicating a risk for cardiovascular diseases.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportAnalysis;