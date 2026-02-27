import { Complaint, Language } from "../types/complaint";

export const supportedLanguages: Language[] = [
  { code: "en", name: "English", nativeName: "English" },
  { code: "hi", name: "Hindi", nativeName: "हिंदी" },
  { code: "bn", name: "Bengali", nativeName: "বাংলা" },
  { code: "te", name: "Telugu", nativeName: "తెలుగు" },
  { code: "mr", name: "Marathi", nativeName: "मराठी" },
  { code: "ta", name: "Tamil", nativeName: "தமிழ்" },
  { code: "gu", name: "Gujarati", nativeName: "ગુજરાતી" },
  { code: "kn", name: "Kannada", nativeName: "ಕನ್ನಡ" },
  { code: "ml", name: "Malayalam", nativeName: "മലയാളം" },
  { code: "pa", name: "Punjabi", nativeName: "ਪੰਜਾਬੀ" },
];

export const mockComplaints: Complaint[] = [
  {
    id: "CMP001",
    category: "road_damage",
    title: "Pothole on Main Street",
    description: "Large pothole causing traffic issues and accidents",
    location: "Main Street, Sector 15",
    status: "in_progress",
    priority: "high",
    submittedDate: new Date(2026, 1, 20),
    updatedDate: new Date(2026, 1, 25),
    assignedDepartment: "Public Works Department",
  },
  {
    id: "CMP002",
    category: "water_supply",
    title: "Water Supply Disruption",
    description: "No water supply for the past 3 days in our locality",
    location: "Gandhi Nagar, Block A",
    status: "under_review",
    priority: "high",
    submittedDate: new Date(2026, 1, 22),
    updatedDate: new Date(2026, 1, 23),
    assignedDepartment: "Water Supply Board",
  },
  {
    id: "CMP003",
    category: "garbage",
    title: "Garbage Not Collected",
    description: "Garbage has not been collected for over a week",
    location: "Park View Colony",
    status: "resolved",
    priority: "medium",
    submittedDate: new Date(2026, 1, 15),
    updatedDate: new Date(2026, 1, 24),
    assignedDepartment: "Sanitation Department",
  },
  {
    id: "CMP004",
    category: "electricity",
    title: "Frequent Power Cuts",
    description: "Power cuts occurring 4-5 times daily",
    location: "Riverside Area, Ward 12",
    status: "submitted",
    priority: "high",
    submittedDate: new Date(2026, 1, 26),
    updatedDate: new Date(2026, 1, 26),
  },
  {
    id: "CMP005",
    category: "streetlight",
    title: "Street Lights Not Working",
    description: "All street lights in the area are non-functional",
    location: "Station Road",
    status: "in_progress",
    priority: "medium",
    submittedDate: new Date(2026, 1, 18),
    updatedDate: new Date(2026, 1, 24),
    assignedDepartment: "Electrical Department",
  },
];

export const categoryTranslations: Record<string, Record<string, string>> = {
  en: {
    road_damage: "Road Damage",
    water_supply: "Water Supply",
    garbage: "Garbage Collection",
    electricity: "Electricity",
    streetlight: "Street Lights",
    drainage: "Drainage",
    other: "Other",
  },
  hi: {
    road_damage: "सड़क क्षति",
    water_supply: "जल आपूर्ति",
    garbage: "कचरा संग्रह",
    electricity: "बिजली",
    streetlight: "स्ट्रीट लाइट",
    drainage: "जल निकासी",
    other: "अन्य",
  },
  ta: {
    road_damage: "சாலை சேதம்",
    water_supply: "நீர் விநியோகம்",
    garbage: "குப்பை சேகரிப்பு",
    electricity: "மின்சாரம்",
    streetlight: "தெரு விளக்குகள்",
    drainage: "வடிகால்",
    other: "மற்றவை",
  },
};

export const statusTranslations: Record<string, Record<string, string>> = {
  en: {
    submitted: "Submitted",
    under_review: "Under Review",
    in_progress: "In Progress",
    resolved: "Resolved",
    rejected: "Rejected",
  },
  hi: {
    submitted: "प्रस्तुत",
    under_review: "समीक्षाधीन",
    in_progress: "प्रगति में",
    resolved: "हल हो गया",
    rejected: "अस्वीकृत",
  },
  ta: {
    submitted: "சமர்ப்பிக்கப்பட்டது",
    under_review: "ஆய்வில்",
    in_progress: "நடைபெறுகிறது",
    resolved: "தீர்க்கப்பட்டது",
    rejected: "நிராகரிக்கப்பட்டது",
  },
};

// Mock translation function (simulates AI translation)
export const mockTranslate = (text: string, targetLang: string): string => {
  // In a real implementation, this would call an AI translation API
  const sampleTranslations: Record<string, Record<string, string>> = {
    "Ration Card Application": {
      hi: "राशन कार्ड आवेदन",
      ta: "ரேஷன் கார்டு விண்ணப்பம்",
    },
    "Birth Certificate Application": {
      hi: "जन्म प्रमाण पत्र आवेदन",
      ta: "பிறப்பு சான்றிதழ் விண்ணப்பம்",
    },
    "Pension Scheme": {
      hi: "पेंशन योजना",
      ta: "ஓய்வூதிய திட்டம்",
    },
  };

  if (targetLang === "en") {
    return text;
  }

  // Check for exact matches
  if (sampleTranslations[text] && sampleTranslations[text][targetLang]) {
    return sampleTranslations[text][targetLang];
  }

  // Simulate translation with placeholder
  return `[${targetLang.toUpperCase()}] ${text}`;
};
