import { createContext, useContext, useState, ReactNode } from 'react';
import { 
  ContentType, 
  VerificationStep, 
  UserPerception, 
  AIAnalysis, 
  ComparisonResult,
  Answer
} from '../lib/types';

interface TrueCheckContextType {
  contentType: ContentType | null;
  setContentType: (type: ContentType) => void;
  content: string;
  setContent: (content: string) => void;
  currentStep: number;
  setCurrentStep: (step: number) => void;
  steps: VerificationStep[];
  userPerception: UserPerception;
  updateUserPerception: (category: keyof UserPerception, value: number) => void;
  aiAnalysis: AIAnalysis;
  comparisonResult: ComparisonResult | null;
  calculateResults: () => void;
  answers: Answer[];
  addAnswer: (answer: Answer) => void;
  resetVerification: () => void;
}

const defaultUserPerception: UserPerception = {
  sourceCredibility: 0,
  criticalAnalysis: 0,
  contextEvaluation: 0,
  finalJudgment: 0
};

const defaultAIAnalysis: AIAnalysis = {
  sourceReliability: 0,
  factualConsistency: 0,
  contentQuality: 0,
  technicalIntegrity: 0
};

const defaultSteps: VerificationStep[] = [
  {
    id: 1,
    title: 'Submissão de Conteúdo',
    description: 'Insira um texto, link ou imagem para verificação',
    completed: false,
    active: true
  },
  {
    id: 2,
    title: 'Análise Preliminar',
    description: 'Avaliação inicial da fonte e contexto',
    completed: false,
    active: false
  },
  {
    id: 3,
    title: 'Análise de Conteúdo',
    description: 'Verificação detalhada das afirmações',
    completed: false,
    active: false
  },
  {
    id: 4,
    title: 'Verificação Cruzada',
    description: 'Comparação com outras fontes',
    completed: false,
    active: false
  },
  {
    id: 5,
    title: 'Análise de Contexto',
    description: 'Avaliação do contexto histórico e atual',
    completed: false,
    active: false
  },
  {
    id: 6,
    title: 'Avaliação Final',
    description: 'Sua avaliação final de factualidade',
    completed: false,
    active: false
  },
  {
    id: 7,
    title: 'Resultados',
    description: 'Comparação entre sua análise e a verificação automatizada',
    completed: false,
    active: false
  }
];

const TrueCheckContext = createContext<TrueCheckContextType | undefined>(undefined);

export const TrueCheckProvider = ({ children }: { children: ReactNode }) => {
  const [contentType, setContentType] = useState<ContentType | null>(null);
  const [content, setContent] = useState<string>('');
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [steps, setSteps] = useState<VerificationStep[]>(defaultSteps);
  const [userPerception, setUserPerception] = useState<UserPerception>(defaultUserPerception);
  const [aiAnalysis, setAIAnalysis] = useState<AIAnalysis>(defaultAIAnalysis);
  const [comparisonResult, setComparisonResult] = useState<ComparisonResult | null>(null);
  const [answers, setAnswers] = useState<Answer[]>([]);

  const updateUserPerception = (category: keyof UserPerception, value: number) => {
    setUserPerception(prev => ({
      ...prev,
      [category]: value
    }));
  };

  const addAnswer = (answer: Answer) => {
    setAnswers(prev => [...prev, answer]);
  };

  const updateSteps = (stepId: number) => {
    setSteps(prevSteps => 
      prevSteps.map(step => {
        if (step.id === stepId) {
          return { ...step, completed: true, active: false };
        } else if (step.id === stepId + 1) {
          return { ...step, active: true };
        }
        return step;
      })
    );
  };

  const calculateResults = () => {
    // Calcular pontuação do usuário
    const userScore = Math.round(
      (userPerception.sourceCredibility + 
       userPerception.criticalAnalysis + 
       userPerception.contextEvaluation + 
       userPerception.finalJudgment) / 4
    );
    
    // Calcular pontuação da IA
    const aiScore = Math.round(
      (aiAnalysis.sourceReliability + 
       aiAnalysis.factualConsistency + 
       aiAnalysis.contentQuality + 
       aiAnalysis.technicalIntegrity) / 4
    );
    
    // Calcular discrepância
    const discrepancy = Math.abs(userScore - aiScore);
    
    // Determinar nível de discrepância
    let discrepancyLevel: 'pequena' | 'moderada' | 'grande';
    if (discrepancy <= 10) {
      discrepancyLevel = 'pequena';
    } else if (discrepancy <= 30) {
      discrepancyLevel = 'moderada';
    } else {
      discrepancyLevel = 'grande';
    }
    
    // Gerar feedback baseado na discrepância
    let feedback = '';
    if (discrepancyLevel === 'pequena') {
      feedback = 'Sua análise está bem alinhada com a verificação automatizada. Você demonstra boa capacidade de avaliação crítica!';
    } else if (discrepancyLevel === 'moderada') {
      feedback = 'Existem algumas diferenças entre sua análise e a verificação automatizada. Considere os elementos que podem ter influenciado sua percepção.';
    } else {
      feedback = 'Há diferenças significativas entre sua análise e a verificação automatizada. Recomendamos revisar os critérios de avaliação e considerar fatores que podem ter influenciado sua percepção.';
    }
    
    setComparisonResult({
      userScore,
      aiScore,
      discrepancy,
      discrepancyLevel,
      feedback
    });
    
    // Atualizar o estado dos passos
    updateSteps(currentStep);
    setCurrentStep(7); // Avançar para o passo de resultados
  };

  const resetVerification = () => {
    setContentType(null);
    setContent('');
    setCurrentStep(1);
    setSteps(defaultSteps);
    setUserPerception(defaultUserPerception);
    setAIAnalysis(defaultAIAnalysis);
    setComparisonResult(null);
    setAnswers([]);
  };

  return (
    <TrueCheckContext.Provider
      value={{
        contentType,
        setContentType,
        content,
        setContent,
        currentStep,
        setCurrentStep,
        steps,
        userPerception,
        updateUserPerception,
        aiAnalysis,
        comparisonResult,
        calculateResults,
        answers,
        addAnswer,
        resetVerification
      }}
    >
      {children}
    </TrueCheckContext.Provider>
  );
};

export const useTrueCheck = () => {
  const context = useContext(TrueCheckContext);
  if (context === undefined) {
    throw new Error('useTrueCheck must be used within a TrueCheckProvider');
  }
  return context;
};
