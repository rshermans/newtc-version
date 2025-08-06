
// src/lib/types.ts

// Tipos para o conteúdo da verificação
export type ContentType = 'text' | 'link' | 'image';

// Estrutura para cada etapa no stepper de progresso
export interface Step {
  id: number;
  title: string;
  active: boolean;
  completed: boolean;
}

// Estrutura para as perguntas do questionário
export interface Question {
  id: string;
  text: string;
  type: 'scale' | 'choice' | 'multiselect' | 'text';
  options?: string[];
  min?: number;
  max?: number;
  step?: number;
  category: keyof UserPerception;
}

// Estrutura para as respostas do usuário
export interface Answer {
  questionId: string;
  value: string | number | string[];
}

// Estrutura para os scores de percepção do usuário
export interface UserPerception {
  sourceCredibility: number;
  criticalAnalysis: number;
  contextEvaluation: number;
  finalJudgment: number;
}

// Estrutura para os scores da análise da IA
export interface AIAnalysis {
  sourceReliability: number;
  factualConsistency: number;
  contentQuality: number;
  technicalIntegrity: number;
}

// Estrutura para o resultado da comparação
export interface ComparisonResult {
  userScore: number;
  aiScore: number;
  discrepancy: number;
  discrepancyLevel: 'Pequena' | 'Moderada' | 'Grande';
  feedback: string;
}
