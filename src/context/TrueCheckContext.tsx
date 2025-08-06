
import React, { createContext, useState, ReactNode } from 'react';
import {
  Step,
  ContentType,
  Answer,
  UserPerception,
  AIAnalysis,
  ComparisonResult,
} from '../lib/types';

// Estrutura do estado do contexto
interface TrueCheckContextState {
  isVerificationStarted: boolean;
  currentStep: number;
  steps: Step[];
  contentType: ContentType | null;
  content: string;
  answers: Answer[];
  userPerception: UserPerception;
  aiAnalysis: AIAnalysis;
  comparisonResult: ComparisonResult | null;
  
  // Funções para atualizar o estado
  startVerification: () => void;
  setCurrentStep: (step: number) => void;
  setContentType: (type: ContentType) => void;
  setContent: (content: string) => void;
  addAnswer: (answer: Answer) => void;
  updateUserPerception: (category: keyof UserPerception, value: number) => void;
  calculateResults: () => void;
  resetVerification: () => void;
}

// Estado inicial
const initialState: Omit<TrueCheckContextState, 'startVerification' | 'setCurrentStep' | 'setContentType' | 'setContent' | 'addAnswer' | 'updateUserPerception' | 'calculateResults' | 'resetVerification'> = {
  isVerificationStarted: false,
  currentStep: 1,
  steps: [
    { id: 1, title: 'Submissão', active: true, completed: false },
    { id: 2, title: 'Análise Preliminar', active: false, completed: false },
    { id: 3, title: 'Análise de Conteúdo', active: false, completed: false },
    { id: 4, title: 'Verificação Cruzada', active: false, completed: false },
    { id: 5, title: 'Análise de Contexto', active: false, completed: false },
    { id: 6, title: 'Avaliação Final', active: false, completed: false },
    { id: 7, title: 'Resultados', active: false, completed: false },
  ],
  contentType: null,
  content: '',
  answers: [],
  userPerception: {
    sourceCredibility: 0,
    criticalAnalysis: 0,
    contextEvaluation: 0,
    finalJudgment: 0,
  },
  aiAnalysis: {
    sourceReliability: 0,
    factualConsistency: 0,
    contentQuality: 0,
    technicalIntegrity: 0,
  },
  comparisonResult: null,
};


// Criar o contexto
export const TrueCheckContext = createContext<TrueCheckContextState>({
    ...initialState,
    startVerification: () => {},
    setCurrentStep: () => {},
    setContentType: () => {},
    setContent: () => {},
    addAnswer: () => {},
    updateUserPerception: () => {},
    calculateResults: () => {},
    resetVerification: () => {},
});

// Provedor do contexto
export const TrueCheckProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState(initialState);

  // --- Funções de atualização do estado ---
  const startVerification = () => {
    setState(prevState => ({ ...prevState, isVerificationStarted: true }));
  };

  const setCurrentStep = (step: number) => {
    setState(prevState => ({
      ...prevState,
      currentStep: step,
      steps: prevState.steps.map(s => ({
        ...s,
        active: s.id === step,
        completed: s.id < step,
      })),
    }));
  };

  const setContentType = (type: ContentType) => {
    setState(prevState => ({ ...prevState, contentType: type }));
  };

  const setContent = (content: string) => {
    setState(prevState => ({ ...prevState, content }));
  };

  const addAnswer = (answer: Answer) => {
    setState(prevState => ({
      ...prevState,
      answers: [...prevState.answers, answer],
    }));
  };

  const updateUserPerception = (category: keyof UserPerception, value: number) => {
    setState(prevState => ({
      ...prevState,
      userPerception: {
        ...prevState.userPerception,
        [category]: value,
      },
    }));
  };

  const calculateResults = () => {
    // Simular análise da IA (em um app real, viria do backend)
    const aiAnalysis: AIAnalysis = {
      sourceReliability: Math.floor(Math.random() * 21) + 70, // 70-90
      factualConsistency: Math.floor(Math.random() * 21) + 75, // 75-95
      contentQuality: Math.floor(Math.random() * 21) + 65, // 65-85
      technicalIntegrity: Math.floor(Math.random() * 21) + 80, // 80-100
    };

    // Calcular score final da IA
    const aiScore = Math.round(
      (aiAnalysis.sourceReliability +
        aiAnalysis.factualConsistency +
        aiAnalysis.contentQuality +
        aiAnalysis.technicalIntegrity) / 4
    );

    // Calcular score final do usuário
    const userScore = Math.round(
      (state.userPerception.sourceCredibility +
        state.userPerception.criticalAnalysis +
        state.userPerception.contextEvaluation +
        state.userPerception.finalJudgment) / 4
    );

    // Calcular discrepância
    const discrepancy = Math.abs(userScore - aiScore);
    let discrepancyLevel: 'Pequena' | 'Moderada' | 'Grande' = 'Pequena';
    if (discrepancy > 30) {
      discrepancyLevel = 'Grande';
    } else if (discrepancy > 10) {
      discrepancyLevel = 'Moderada';
    }

    // Gerar feedback educativo
    let feedback = '';
    if (discrepancyLevel === 'Grande') {
      feedback = 'Sua avaliação foi significativamente diferente da análise automatizada. Isso pode indicar uma percepção de viés ou a necessidade de aprofundar a análise de fontes e evidências.';
    } else if (discrepancyLevel === 'Moderada') {
      feedback = 'Houve algumas diferenças entre sua avaliação e a análise automatizada. Vale a pena revisar os pontos de maior divergência para aprimorar sua análise crítica.';
    } else {
      feedback = 'Parabéns! Sua avaliação está bem alinhada com a análise automatizada, demonstrando excelente capacidade de análise crítica.';
    }

    const comparisonResult: ComparisonResult = {
      userScore,
      aiScore,
      discrepancy,
      discrepancyLevel,
      feedback,
    };

    setState(prevState => ({
      ...prevState,
      aiAnalysis,
      comparisonResult,
    }));
    
    // Avançar para a etapa de resultados
    setCurrentStep(7);
  };

  const resetVerification = () => {
    setState(initialState);
  };

  // --- Montar o valor do provedor ---

  const providerValue = {
    ...state,
    startVerification,
    setCurrentStep,
    setContentType,
    setContent,
    addAnswer,
    updateUserPerception,
    calculateResults,
    resetVerification,
  };

  return (
    <TrueCheckContext.Provider value={providerValue}>
      {children}
    </TrueCheckContext.Provider>
  );
};
