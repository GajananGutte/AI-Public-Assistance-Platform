import { useState } from "react";
import { Button } from "../components/ui/button";
import { Textarea } from "../components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Label } from "../components/ui/label";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { toast } from "sonner";
import {
  Languages,
  ArrowRightLeft,
  Loader2,
  Volume2,
  Copy,
  FileText,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { supportedLanguages, mockTranslate } from "../utils/mockData";

export function Translator() {
  const [sourceLanguage, setSourceLanguage] = useState("en");
  const [targetLanguage, setTargetLanguage] = useState("hi");
  const [sourceText, setSourceText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [isTranslating, setIsTranslating] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const documentTemplates = [
    {
      title: "Ration Card Application",
      description: "Apply for a new ration card",
      gradient: "from-blue-500 to-cyan-500",
      content: `Application for Ration Card

To: The Food Supply Officer
Subject: Application for New Ration Card

Sir/Madam,

I would like to apply for a new ration card for my family. Please find the details below:

Family Head Name: [Your Name]
Address: [Complete Address]
Number of Family Members: [Count]
Category: [APL/BPL/AAY]

I have attached all required documents including address proof, identity proof, and family income certificate.

I request you to kindly process my application and issue the ration card at the earliest.

Thank you.

Yours faithfully,
[Your Signature]`,
    },
    {
      title: "Birth Certificate Application",
      description: "Register a new birth",
      gradient: "from-purple-500 to-pink-500",
      content: `Birth Certificate Registration

To: The Registrar of Births & Deaths
Subject: Application for Birth Certificate

Sir/Madam,

I hereby request the registration and issuance of a birth certificate with the following details:

Child's Name: [Full Name]
Date of Birth: [DD/MM/YYYY]
Place of Birth: [Hospital/Place Name]
Father's Name: [Full Name]
Mother's Name: [Full Name]
Residential Address: [Complete Address]

All necessary documents including hospital birth record and parents' identity proofs are enclosed.

Kindly process this application and issue the birth certificate.

Thank you.

Yours sincerely,
[Your Name]`,
    },
    {
      title: "Pension Scheme Information",
      description: "Details about senior citizen pension",
      gradient: "from-indigo-500 to-purple-500",
      content: `Senior Citizen Pension Scheme

Eligibility Criteria:
- Age: 60 years or above
- Income: Annual family income below Rs. 2 lakhs
- Residence: Must be a permanent resident of the state

Required Documents:
1. Age proof (Birth Certificate/School Certificate)
2. Identity proof (Aadhaar Card/Voter ID)
3. Address proof (Electricity Bill/Ration Card)
4. Bank account details with cancelled cheque
5. Income certificate from competent authority

Monthly Pension Amount:
- Rs. 1,000 per month for 60-79 years
- Rs. 1,500 per month for 80+ years

How to Apply:
1. Visit your nearest government office
2. Fill the application form
3. Submit required documents
4. Wait for verification (15-30 days)
5. Pension will be credited to your bank account

For more information, contact the Social Welfare Department helpline: 1800-XXX-XXXX`,
    },
  ];

  const handleTranslate = async () => {
    if (!sourceText.trim()) {
      toast.error("Please enter text to translate");
      return;
    }

    if (sourceLanguage === targetLanguage) {
      toast.error("Source and target languages must be different");
      return;
    }

    setIsTranslating(true);

    // Simulate AI translation
    setTimeout(() => {
      const translated = mockTranslate(sourceText, targetLanguage);
      setTranslatedText(translated);
      setIsTranslating(false);
      toast.success("Translation completed successfully!");
    }, 1500);
  };

  const handleSwapLanguages = () => {
    const tempLang = sourceLanguage;
    setSourceLanguage(targetLanguage);
    setTargetLanguage(tempLang);
    setSourceText(translatedText);
    setTranslatedText("");
  };

  const handleCopyTranslation = () => {
    if (translatedText) {
      navigator.clipboard.writeText(translatedText);
      toast.success("Translation copied to clipboard!");
    }
  };

  const handleSpeak = () => {
    if (translatedText) {
      setIsSpeaking(true);
      toast.info("Text-to-speech activated");
      setTimeout(() => {
        setIsSpeaking(false);
        toast.success("Speech completed");
      }, 2000);
    }
  };

  const loadTemplate = (template: typeof documentTemplates[0]) => {
    setSourceText(template.content);
    setTranslatedText("");
    toast.success(`Loaded: ${template.title}`);
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-5xl md:text-6xl font-bold gradient-text">
          Language Barrier Breaker
        </h1>
        <p className="text-xl text-gray-400">
          Translate government documents and forms into your regional language
        </p>
      </div>

      {/* Info Banner */}
      <div className="glass-strong rounded-2xl p-6 border border-white/10">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-white mb-2 text-lg">
              AI-Powered Translation
            </h3>
            <p className="text-sm text-gray-400">
              Our AI understands context and simplifies complex government
              language for better understanding. Supports 10+ regional languages.
            </p>
          </div>
        </div>
      </div>

      <Tabs defaultValue="translator" className="space-y-6">
        <TabsList className="glass-strong border border-white/10 p-1 grid w-full grid-cols-2">
          <TabsTrigger value="translator" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-indigo-500 data-[state=active]:to-purple-500">
            Translator
          </TabsTrigger>
          <TabsTrigger value="templates" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500">
            Document Templates
          </TabsTrigger>
        </TabsList>

        {/* Translator Tab */}
        <TabsContent value="translator" className="space-y-6">
          {/* Language Selection */}
          <div className="glass-strong rounded-2xl p-6 border border-white/10">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
                <Languages className="w-4 h-4 text-white" />
              </div>
              Language Settings
            </h3>
            <div className="grid md:grid-cols-3 gap-4 items-end">
              <div className="space-y-2">
                <Label className="text-white">From</Label>
                <Select value={sourceLanguage} onValueChange={setSourceLanguage}>
                  <SelectTrigger className="glass border-white/20 text-white">
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

              <Button
                variant="outline"
                size="icon"
                onClick={handleSwapLanguages}
                className="mx-auto glass border-white/20 text-white hover:bg-white/10"
              >
                <ArrowRightLeft className="w-4 h-4" />
              </Button>

              <div className="space-y-2">
                <Label className="text-white">To</Label>
                <Select value={targetLanguage} onValueChange={setTargetLanguage}>
                  <SelectTrigger className="glass border-white/20 text-white">
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
          </div>

          {/* Translation Area */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Source Text */}
            <div className="glass-strong rounded-2xl p-6 border border-white/10">
              <div className="mb-3">
                <h4 className="text-lg font-semibold text-white">Source Text</h4>
                <p className="text-sm text-gray-400">
                  Enter or paste your document text here
                </p>
              </div>
              <Textarea
                placeholder="Paste your government form, notice, or scheme details here..."
                value={sourceText}
                onChange={(e) => setSourceText(e.target.value)}
                rows={12}
                className="resize-none glass border-white/20 text-white placeholder:text-gray-500"
              />
              <div className="mt-3 flex justify-between items-center text-sm text-gray-400">
                <span>{sourceText.length} characters</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSourceText("")}
                  className="text-gray-400 hover:text-white"
                >
                  Clear
                </Button>
              </div>
            </div>

            {/* Translated Text */}
            <div className="glass-strong rounded-2xl p-6 border border-white/10">
              <div className="mb-3">
                <h4 className="text-lg font-semibold text-white">Translated Text</h4>
                <p className="text-sm text-gray-400">
                  AI-translated and simplified version
                </p>
              </div>
              <Textarea
                placeholder="Translation will appear here..."
                value={translatedText}
                readOnly
                rows={12}
                className="resize-none glass border-white/20 text-white placeholder:text-gray-500"
              />
              <div className="mt-3 flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleCopyTranslation}
                  disabled={!translatedText}
                  className="gap-2 glass border-white/20 text-white hover:bg-white/10"
                >
                  <Copy className="w-4 h-4" />
                  Copy
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleSpeak}
                  disabled={!translatedText || isSpeaking}
                  className="gap-2 glass border-white/20 text-white hover:bg-white/10"
                >
                  {isSpeaking ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <Volume2 className="w-4 h-4" />
                  )}
                  Speak
                </Button>
              </div>
            </div>
          </div>

          {/* Translate Button */}
          <Button
            onClick={handleTranslate}
            disabled={isTranslating}
            size="lg"
            className="w-full gap-2 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 border-0 py-6 text-lg rounded-xl shadow-lg"
          >
            {isTranslating ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Translating with AI...
              </>
            ) : (
              <>
                <Languages className="w-5 h-5" />
                Translate Document
              </>
            )}
          </Button>
        </TabsContent>

        {/* Templates Tab */}
        <TabsContent value="templates" className="space-y-6">
          <div className="glass-strong rounded-2xl p-6 border border-white/10">
            <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                <FileText className="w-4 h-4 text-white" />
              </div>
              Common Document Templates
            </h3>
            <p className="text-gray-400 text-sm">
              Pre-loaded templates for common government forms and applications
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {documentTemplates.map((template, index) => (
              <div
                key={index}
                className="glass-strong rounded-2xl p-6 border border-white/10 hover:scale-105 transition-all cursor-pointer group"
                onClick={() => loadTemplate(template)}
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${template.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-xl`}>
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">
                  {template.title}
                </h4>
                <p className="text-gray-400 mb-4">{template.description}</p>
                <Button 
                  variant="outline" 
                  className={`w-full gap-2 glass border-white/20 text-white hover:bg-gradient-to-r hover:${template.gradient} hover:border-0`}
                >
                  <CheckCircle2 className="w-4 h-4" />
                  Load Template
                </Button>
              </div>
            ))}
          </div>

          <div className="glass-strong rounded-2xl p-6 border border-white/10">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white mb-2 text-lg">
                  How to Use Templates
                </h3>
                <p className="text-sm text-gray-400">
                  Click on any template to load it into the translator. Customize
                  the details as needed, then translate to your preferred language.
                </p>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      {/* Features Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="glass-strong rounded-2xl p-6 border border-white/10 text-center">
          <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
            <Languages className="w-7 h-7 text-white" />
          </div>
          <h3 className="font-semibold text-white mb-2 text-lg">10+ Languages</h3>
          <p className="text-sm text-gray-400">
            Support for major regional languages
          </p>
        </div>

        <div className="glass-strong rounded-2xl p-6 border border-white/10 text-center">
          <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
            <Sparkles className="w-7 h-7 text-white" />
          </div>
          <h3 className="font-semibold text-white mb-2 text-lg">AI Simplification</h3>
          <p className="text-sm text-gray-400">
            Complex terms explained simply
          </p>
        </div>

        <div className="glass-strong rounded-2xl p-6 border border-white/10 text-center">
          <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
            <Volume2 className="w-7 h-7 text-white" />
          </div>
          <h3 className="font-semibold text-white mb-2 text-lg">Voice Output</h3>
          <p className="text-sm text-gray-400">
            Listen to translations aloud
          </p>
        </div>
      </div>
    </div>
  );
}
