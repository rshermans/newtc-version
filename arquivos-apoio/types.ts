// Tipos para o TrueCheck

export type FactualityRange = 
  | 'não factual' 
  | 'pouco factual' 
  | 'parcialmente factual' 
  | 'majoritariamente factual' 
  | 'tendencialmente factual';

export type ContentType = 'text' | 'link' | 'image';

export type VerificationStep = {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  active: boolean;
};

export type UserPerception = {
  sourceCredibility: number;
  criticalAnalysis: number;
  contextEvaluation: number;
  finalJudgment: number;
};

export type AIAnalysis = {
  sourceReliability: number;
  factualConsistency: number;
  contentQuality: number;
  technicalIntegrity: number;
};

export type ComparisonResult = {
  userScore: number;
  aiScore: number;
  discrepancy: number;
  discrepancyLevel: 'pequena' | 'moderada' | 'grande';
  feedback: string;
};

export type Question = {
  id: string;
  text: string;
  type: 'scale' | 'choice' | 'text' | 'multiselect';
  options?: string[];
  min?: number;
  max?: number;
  step?: number;
  category: 'sourceCredibility' | 'criticalAnalysis' | 'contextEvaluation' | 'finalJudgment';
};

export type Answer = {
  questionId: string;
  value: number | string | string[];
};
