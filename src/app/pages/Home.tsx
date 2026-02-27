import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import {
  FileText,
  Search,
  Languages,
  Shield,
  Clock,
  Users,
  Zap,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  TrendingUp,
  Globe,
  Award,
} from "lucide-react";

export function Home() {
  const features = [
    {
      icon: FileText,
      title: "AI Complaint Resolver",
      description:
        "Report civic issues like road damage, water supply, garbage collection, and electricity failures with ease.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Languages,
      title: "Language Barrier Breaker",
      description:
        "Translate government forms, notices, and schemes into your regional language instantly.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Shield,
      title: "Transparent Tracking",
      description:
        "Monitor your complaint status in real-time and receive updates at every step of the process.",
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description:
        "Access public services anytime, anywhere without dependency on middlemen or office hours.",
      gradient: "from-cyan-500 to-teal-500",
    },
  ];

  const stats = [
    { label: "Complaints Resolved", value: "12,450+", icon: CheckCircle2, gradient: "from-green-400 to-emerald-500" },
    { label: "Active Users", value: "25,000+", icon: Users, gradient: "from-blue-400 to-indigo-500" },
    { label: "Avg Response Time", value: "< 48 hrs", icon: Clock, gradient: "from-purple-400 to-pink-500" },
    { label: "Languages Supported", value: "10+", icon: Globe, gradient: "from-cyan-400 to-blue-500" },
  ];

  const quickActions = [
    {
      title: "File a Complaint",
      description: "Report a civic issue in your area",
      icon: FileText,
      link: "/file-complaint",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Track Complaints",
      description: "Check status of your submissions",
      icon: Search,
      link: "/track-complaints",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Translate Document",
      description: "Convert government docs to your language",
      icon: Languages,
      link: "/translator",
      gradient: "from-indigo-500 to-purple-500",
    },
  ];

  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <section className="relative pt-12 pb-20">
        {/* Floating elements */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-float opacity-50"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-float opacity-50" style={{ animationDelay: '3s' }}></div>
        
        <div className="relative max-w-5xl mx-auto text-center space-y-8">
          <Badge className="glass border-white/20 text-white px-4 py-2 text-sm font-medium">
            <Sparkles className="w-4 h-4 mr-2 inline" />
            Powered by Advanced AI Technology
          </Badge>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
            <span className="block mb-4">Empowering Citizens</span>
            <span className="block gradient-text animate-gradient">
              With Smart Governance
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Report civic issues, translate government documents, and track
            complaint status - all in your local language. No middlemen, full
            transparency.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link to="/file-complaint">
              <Button 
                size="lg" 
                className="relative group overflow-hidden bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white border-0 px-8 py-6 text-lg rounded-2xl shadow-2xl animate-glow"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get Started
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </Link>
            <Link to="/translator">
              <Button
                size="lg"
                variant="outline"
                className="glass-strong border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-2xl"
              >
                Try Translator
                <Languages className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="glass-strong rounded-3xl p-6 text-center group hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <div className={`w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                <Icon className="w-7 h-7 text-white" />
              </div>
              <div className="text-4xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
            </div>
          );
        })}
      </section>

      {/* Quick Actions */}
      <section>
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Quick Actions
          </h2>
          <p className="text-xl text-gray-400">
            Choose what you need to do
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {quickActions.map((action, index) => {
            const Icon = action.icon;
            return (
              <Link key={index} to={action.link}>
                <div className="glass-strong rounded-3xl p-8 h-full group hover:scale-105 transition-all duration-300 cursor-pointer relative overflow-hidden">
                  {/* Gradient border effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${action.gradient} opacity-0 group-hover:opacity-20 transition-opacity rounded-3xl`}></div>
                  
                  <div className="relative z-10 flex flex-col items-center text-center space-y-6">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${action.gradient} flex items-center justify-center shadow-2xl group-hover:shadow-3xl transition-all group-hover:scale-110`}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-3">
                        {action.title}
                      </h3>
                      <p className="text-gray-400">{action.description}</p>
                    </div>
                    <div className={`flex items-center gap-2 text-sm font-semibold bg-gradient-to-r ${action.gradient} bg-clip-text text-transparent`}>
                      Get Started
                      <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Features Section */}
      <section>
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Platform Features
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Our AI-powered platform brings government services closer to you
            with cutting-edge technology and inclusive design.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="glass-strong rounded-3xl p-8 group hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className={`p-4 rounded-2xl bg-gradient-to-br ${feature.gradient} flex-shrink-0 group-hover:scale-110 transition-transform shadow-xl`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="glass-strong rounded-3xl p-12">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="space-y-3">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white">Trusted Platform</h3>
            <p className="text-gray-400">Verified by government authorities</p>
          </div>
          <div className="space-y-3">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white">Secure & Private</h3>
            <p className="text-gray-400">Your data is encrypted and protected</p>
          </div>
          <div className="space-y-3">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white">High Success Rate</h3>
            <p className="text-gray-400">95% complaint resolution rate</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative rounded-3xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 animate-gradient"></div>
        <div className="relative z-10 p-12 md:p-16 text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Join thousands of citizens using CivicEase to improve their
            communities. Your voice matters, and we make sure it's heard.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link to="/file-complaint">
              <Button
                size="lg"
                className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-6 text-lg rounded-2xl shadow-2xl font-semibold"
              >
                File Your First Complaint
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
