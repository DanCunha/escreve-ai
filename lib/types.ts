export type TextType = "email" | "linkedin" | "product" | "bio";

export interface FieldConfig {
  name: string;
  label: string;
  type: "text" | "textarea" | "select";
  placeholder?: string;
  options?: { label: string; value: string }[];
  maxLength?: number;
}

export interface TextTypeConfig {
  id: TextType;
  label: string;
  description: string;
  icon: string;
  systemPrompt: string;
  userPromptTemplate: string;
  fields: FieldConfig[];
}

export interface GenerateRequest {
  type: TextType;
  fields: Record<string, string>;
}

export interface GenerateResponse {
  result: string;
}

export interface HistoryItem {
  id: string;
  type: TextType;
  fields: Record<string, string>;
  result: string;
  timestamp: number;
}
