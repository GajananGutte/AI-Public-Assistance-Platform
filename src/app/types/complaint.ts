export type ComplaintCategory = 
  | "road_damage"
  | "water_supply"
  | "garbage"
  | "electricity"
  | "streetlight"
  | "drainage"
  | "other";

export type ComplaintStatus = 
  | "submitted"
  | "under_review"
  | "in_progress"
  | "resolved"
  | "rejected";

export interface Complaint {
  id: string;
  category: ComplaintCategory;
  title: string;
  description: string;
  location: string;
  status: ComplaintStatus;
  priority: "low" | "medium" | "high";
  submittedDate: Date;
  updatedDate: Date;
  assignedDepartment?: string;
  imageUrl?: string;
}

export interface Language {
  code: string;
  name: string;
  nativeName: string;
}
