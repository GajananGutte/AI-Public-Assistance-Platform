import { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Badge } from "../components/ui/badge";
import { Progress } from "../components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import {
  Search,
  FileText,
  Clock,
  CheckCircle2,
  XCircle,
  AlertCircle,
  MapPin,
  Calendar,
  Building2,
} from "lucide-react";
import { mockComplaints, supportedLanguages, statusTranslations } from "../utils/mockData";
import { Complaint, ComplaintStatus } from "../types/complaint";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Label } from "../components/ui/label";

export function TrackComplaints() {
  const [searchId, setSearchId] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [filteredComplaints, setFilteredComplaints] = useState<Complaint[]>(mockComplaints);

  const getStatusIcon = (status: ComplaintStatus) => {
    switch (status) {
      case "submitted":
        return <FileText className="w-5 h-5" />;
      case "under_review":
        return <AlertCircle className="w-5 h-5" />;
      case "in_progress":
        return <Clock className="w-5 h-5" />;
      case "resolved":
        return <CheckCircle2 className="w-5 h-5" />;
      case "rejected":
        return <XCircle className="w-5 h-5" />;
    }
  };

  const getStatusGradient = (status: ComplaintStatus) => {
    switch (status) {
      case "submitted":
        return "from-blue-500 to-cyan-500";
      case "under_review":
        return "from-yellow-500 to-orange-500";
      case "in_progress":
        return "from-purple-500 to-pink-500";
      case "resolved":
        return "from-green-500 to-emerald-500";
      case "rejected":
        return "from-red-500 to-rose-500";
    }
  };

  const getStatusProgress = (status: ComplaintStatus) => {
    switch (status) {
      case "submitted":
        return 25;
      case "under_review":
        return 50;
      case "in_progress":
        return 75;
      case "resolved":
        return 100;
      case "rejected":
        return 100;
      default:
        return 0;
    }
  };

  const getPriorityGradient = (priority: string) => {
    switch (priority) {
      case "high":
        return "from-red-500 to-orange-500";
      case "medium":
        return "from-orange-500 to-yellow-500";
      case "low":
        return "from-blue-500 to-cyan-500";
      default:
        return "from-gray-500 to-gray-600";
    }
  };

  const handleSearch = () => {
    if (searchId.trim()) {
      const filtered = mockComplaints.filter((c) =>
        c.id.toLowerCase().includes(searchId.toLowerCase())
      );
      setFilteredComplaints(filtered);
    } else {
      setFilteredComplaints(mockComplaints);
    }
  };

  const filterByStatus = (status?: ComplaintStatus) => {
    if (status) {
      setFilteredComplaints(mockComplaints.filter((c) => c.status === status));
    } else {
      setFilteredComplaints(mockComplaints);
    }
  };

  const getStatusLabel = (status: string) => {
    const translations = statusTranslations[selectedLanguage] || statusTranslations.en;
    return translations[status] || status;
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    }).format(date);
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-5xl md:text-6xl font-bold gradient-text">Track Complaints</h1>
        <p className="text-xl text-gray-400">
          Monitor the status of your complaints and get real-time updates
        </p>
      </div>

      {/* Language Selector */}
      <div className="glass-strong rounded-2xl p-6 border border-white/10">
        <div className="flex flex-wrap items-center gap-4">
          <Label className="text-white font-semibold text-lg">Select Language:</Label>
          <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
            <SelectTrigger className="w-64 glass border-white/20 text-white">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="glass-strong border-white/20">
              {supportedLanguages.map((lang) => (
                <SelectItem key={lang.code} value={lang.code} className="text-white">
                  {lang.nativeName}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Search */}
      <div className="glass-strong rounded-2xl p-8 border border-white/10">
        <div className="mb-4">
          <h2 className="text-2xl font-bold text-white flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
              <Search className="w-5 h-5 text-white" />
            </div>
            Search by Complaint ID
          </h2>
          <p className="text-gray-400 mt-2">
            Enter your complaint ID to track its current status
          </p>
        </div>
        <div className="flex gap-3">
          <Input
            placeholder="e.g., CMP001"
            value={searchId}
            onChange={(e) => setSearchId(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            className="flex-1 glass border-white/20 text-white placeholder:text-gray-500"
          />
          <Button 
            onClick={handleSearch} 
            className="gap-2 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 border-0"
          >
            <Search className="w-4 h-4" />
            Search
          </Button>
        </div>
      </div>

      {/* Complaints List with Tabs */}
      <Tabs defaultValue="all" className="space-y-6">
        <TabsList className="glass-strong border border-white/10 p-1 grid grid-cols-3 md:grid-cols-6 gap-1">
          <TabsTrigger value="all" onClick={() => filterByStatus()} className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-indigo-500 data-[state=active]:to-purple-500">
            All
          </TabsTrigger>
          <TabsTrigger value="submitted" onClick={() => filterByStatus("submitted")} className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-cyan-500">
            Submitted
          </TabsTrigger>
          <TabsTrigger value="under_review" onClick={() => filterByStatus("under_review")} className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-yellow-500 data-[state=active]:to-orange-500">
            Review
          </TabsTrigger>
          <TabsTrigger value="in_progress" onClick={() => filterByStatus("in_progress")} className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500">
            Progress
          </TabsTrigger>
          <TabsTrigger value="resolved" onClick={() => filterByStatus("resolved")} className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-500 data-[state=active]:to-emerald-500">
            Resolved
          </TabsTrigger>
          <TabsTrigger value="rejected" onClick={() => filterByStatus("rejected")} className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-red-500 data-[state=active]:to-rose-500">
            Rejected
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          {filteredComplaints.length === 0 ? (
            <div className="glass-strong rounded-2xl p-12 border border-white/10 text-center">
              <Search className="w-12 h-12 text-gray-400 mx-auto mb-3" />
              <p className="text-gray-400">No complaints found</p>
            </div>
          ) : (
            filteredComplaints.map((complaint) => (
              <div key={complaint.id} className="glass-strong rounded-2xl p-6 border border-white/10 hover:scale-[1.02] transition-all">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3 flex-wrap">
                    <Badge className="glass border-white/20 font-mono text-white">
                      {complaint.id}
                    </Badge>
                    <Badge className={`bg-gradient-to-r ${getPriorityGradient(complaint.priority)} text-white border-0`}>
                      {complaint.priority.toUpperCase()} Priority
                    </Badge>
                    <Badge className={`bg-gradient-to-r ${getStatusGradient(complaint.status)} text-white border-0 gap-2`}>
                      {getStatusIcon(complaint.status)}
                      <span>{getStatusLabel(complaint.status)}</span>
                    </Badge>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3">{complaint.title}</h3>
                <p className="text-gray-400 mb-4">{complaint.description}</p>

                {/* Progress Bar */}
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Progress</span>
                    <span className="font-semibold text-white">
                      {getStatusProgress(complaint.status)}%
                    </span>
                  </div>
                  <Progress value={getStatusProgress(complaint.status)} className="h-2" />
                </div>

                {/* Details Grid */}
                <div className="grid md:grid-cols-2 gap-4 pt-4 border-t border-white/10">
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="w-4 h-4 text-cyan-400" />
                    <span className="text-gray-400">Location:</span>
                    <span className="font-medium text-white">{complaint.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="w-4 h-4 text-cyan-400" />
                    <span className="text-gray-400">Submitted:</span>
                    <span className="font-medium text-white">
                      {formatDate(complaint.submittedDate)}
                    </span>
                  </div>
                  {complaint.assignedDepartment && (
                    <div className="flex items-center gap-2 text-sm">
                      <Building2 className="w-4 h-4 text-cyan-400" />
                      <span className="text-gray-400">Department:</span>
                      <span className="font-medium text-white">
                        {complaint.assignedDepartment}
                      </span>
                    </div>
                  )}
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4 text-cyan-400" />
                    <span className="text-gray-400">Last Updated:</span>
                    <span className="font-medium text-white">
                      {formatDate(complaint.updatedDate)}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </TabsContent>

        {/* Other tab content would be similar but filtered */}
        {["submitted", "under_review", "in_progress", "resolved", "rejected"].map((tabValue) => (
          <TabsContent key={tabValue} value={tabValue} className="space-y-4">
            {filteredComplaints.length === 0 && (
              <div className="glass-strong rounded-2xl p-12 border border-white/10 text-center">
                <Search className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                <p className="text-gray-400">No {tabValue.replace('_', ' ')} complaints</p>
              </div>
            )}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
