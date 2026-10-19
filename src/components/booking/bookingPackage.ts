export type BookingPackage = {
  id: string;
  name: string;
  price: number;
};

export const bookingPackages: BookingPackage[] = [
  {
    id: "personal-statement",
    name: "Full Personal Statement Package",
    price: 620,
  },
  {
    id: "statement-review",
    name: "Personal Statement Evaluation & Critique",
    price: 300,
  },
  {
    id: "full-application",
    name: "Full Application Package",
    price: 12000,
  },
  {
    id: "application-review",
    name: "Final Law School Application Review",
    price: 500,
  },
];

export const bookingPackage = bookingPackages[0];

export const packageFeatures = [
  "A compelling personal statement that is differentiated, personalized, and thoughtful",
  "A deeper understanding of your motivations, experiences, and aspirations, and how they align with your career goals",
  "An outline and several drafts of your personal statement, refined through multiple rounds of feedback and edits",
  "Confidence that your personal statement will stand out to law school admissions committees",
  "Guidance on choosing meaningful experiences that highlight your strengths and personal growth",
  "Detailed feedback on structure, clarity, and tone while preserving your authentic voice",
  "Support with adapting your statement to school-specific prompts and word limits",
  "A final review for grammar, consistency, and readability before submission",
];
