import { useState } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Badge } from "../components/ui/badge";
import { toast } from "sonner";
import {
  Mic,
  MapPin,
  FileText,
  AlertCircle,
  CheckCircle2,
  Loader2,
} from "lucide-react";
import { ComplaintCategory } from "../types/complaint";
import { categoryTranslations, supportedLanguages } from "../utils/mockData";

export function FileComplaint() {
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [isListening, setIsListening] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    category: "",
    title: "",
    description: "",
    location: "",
  });

  const categories: { value: ComplaintCategory; label: string; emoji: string }[] = [
    { value: "road_damage", label: "Road Damage", emoji: "🛣️" },
    { value: "water_supply", label: "Water Supply", emoji: "💧" },
    { value: "garbage", label: "Garbage Collection", emoji: "🗑️" },
    { value: "electricity", label: "Electricity", emoji: "⚡" },
    { value: "streetlight", label: "Street Lights", emoji: "💡" },
    { value: "drainage", label: "Drainage", emoji: "🚰" },
    { value: "other", label: "Other", emoji: "📋" },
  ];

  const handleVoiceInput = () => {
    setIsListening(true);
    // Simulate voice input
    toast.info("Voice input activated. Speak now...");
    setTimeout(() => {
      setIsListening(false);
      setFormData({
        ...formData,
        description: "There is a large pothole on Main Street causing traffic problems.",
      });
      toast.success("Voice input captured successfully!");
    }, 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.category || !formData.title || !formData.description || !formData.location) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);

    // Simulate AI processing and submission
    setTimeout(() => {
      const complaintId = `CMP${Math.floor(Math.random() * 9000) + 1000}`;
      setIsSubmitting(false);
      toast.success(
        `Complaint submitted successfully! Your complaint ID is ${complaintId}`,
        {
          duration: 5000,
        }
      );

      // Reset form
      setFormData({
        category: "",
        title: "",
        description: "",
        location: "",
      });
    }, 2000);
  };

  const getCategoryLabel = (value: string) => {
    const translations = categoryTranslations[selectedLanguage] || categoryTranslations.en;
    return translations[value] || value;
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-5xl md:text-6xl font-bold gradient-text">File a Complaint</h1>
        <p className="text-xl text-gray-400">
          Report civic issues in your area. Our AI will route it to the right
          department automatically.
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
          <Badge variant="secondary" className="ml-auto glass border-white/20 text-cyan-400">
            <AlertCircle className="w-3 h-3 mr-1" />
            Language support powered by AI
          </Badge>
        </div>
      </div>

      {/* Complaint Form */}
      <div className="glass-strong rounded-2xl p-8 border border-white/10">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-white flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
              <FileText className="w-5 h-5 text-white" />
            </div>
            Complaint Details
          </h2>
          <p className="text-gray-400 mt-2">
            Fill in the details below. You can also use voice input for description.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Category Selection */}
          <div className="space-y-2">
            <Label htmlFor="category" className="text-white text-base">
              Complaint Category *
            </Label>
            <Select
              value={formData.category}
              onValueChange={(value) =>
                setFormData({ ...formData, category: value })
              }
            >
              <SelectTrigger id="category" className="glass border-white/20 text-white">
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent className="glass-strong border-white/20">
                {categories.map((cat) => (
                  <SelectItem key={cat.value} value={cat.value} className="text-white">
                    <span className="flex items-center gap-2">
                      <span>{cat.emoji}</span>
                      <span>{getCategoryLabel(cat.value)}</span>
                    </span>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Title */}
          <div className="space-y-2">
            <Label htmlFor="title" className="text-white text-base">Issue Title *</Label>
            <Input
              id="title"
              placeholder="Brief title of the issue"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              className="glass border-white/20 text-white placeholder:text-gray-500"
              required
            />
          </div>

          {/* Location */}
          <div className="space-y-2">
            <Label htmlFor="location" className="flex items-center gap-2 text-white text-base">
              <MapPin className="w-4 h-4" />
              Location *
            </Label>
            <Input
              id="location"
              placeholder="Street name, locality, ward number"
              value={formData.location}
              onChange={(e) =>
                setFormData({ ...formData, location: e.target.value })
              }
              className="glass border-white/20 text-white placeholder:text-gray-500"
              required
            />
            <p className="text-sm text-gray-400">
              Be as specific as possible to help authorities locate the issue
            </p>
          </div>

          {/* Description with Voice Input */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="description" className="text-white text-base">Description *</Label>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={handleVoiceInput}
                disabled={isListening}
                className="gap-2 glass border-white/20 text-white hover:bg-white/10"
              >
                {isListening ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Listening...
                  </>
                ) : (
                  <>
                    <Mic className="w-4 h-4" />
                    Voice Input
                  </>
                )}
              </Button>
            </div>
            <Textarea
              id="description"
              placeholder="Describe the issue in detail..."
              rows={6}
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              className="glass border-white/20 text-white placeholder:text-gray-500"
              required
            />
            <p className="text-sm text-gray-400">
              AI will analyze your description and route to appropriate department
            </p>
          </div>

          {/* Submit Button */}
          <div className="flex gap-4 pt-4">
            <Button
              type="submit"
              className="flex-1 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white border-0 py-6 text-lg rounded-xl shadow-lg"
              size="lg"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Processing with AI...
                </>
              ) : (
                <>
                  <CheckCircle2 className="w-5 h-5 mr-2" />
                  Submit Complaint
                </>
              )}
            </Button>
            <Button
              type="button"
              variant="outline"
              size="lg"
              onClick={() =>
                setFormData({
                  category: "",
                  title: "",
                  description: "",
                  location: "",
                })
              }
              className="glass border-white/20 text-white hover:bg-white/10 py-6 rounded-xl"
            >
              Clear Form
            </Button>
          </div>
        </form>
      </div>

      {/* Info Cards */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="glass-strong rounded-2xl p-6 border border-white/10">
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0">
              <CheckCircle2 className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2 text-lg">
                Automatic Routing
              </h3>
              <p className="text-sm text-gray-400">
                Our AI automatically identifies and routes your complaint to the
                correct department for faster resolution.
              </p>
            </div>
          </div>
        </div>

        <div className="glass-strong rounded-2xl p-6 border border-white/10">
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
              <AlertCircle className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2 text-lg">
                Track Status
              </h3>
              <p className="text-sm text-gray-400">
                You'll receive a complaint ID. Use it to track status updates in
                real-time from the Track Complaints page.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}