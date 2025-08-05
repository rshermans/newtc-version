import { useTrueCheck } from '../context/TrueCheckContext';
import { Question } from '../lib/types';
import { Questionnaire } from './Questionnaire';
import { useEffect, useState } from 'react';

// Perguntas para a etapa de análise de conteúdo
const contentAnalysisQuestions: Question[] = [
  {
    id: 'ca1',
    text: 'Quais elementos deste conteúdo parecem mais confiáveis?',
    type: 'multiselect',
    options: ['Dados estatísticos', 'Citações de especialistas', 'Imagens/vídeos', 'Referências a fontes', 'Relatos de testemunhas'],
    category: 'criticalAnalysis'
  },
  {
    id: 'ca2',
    text: 'Qual o tom predominante do conteúdo?',
    type: 'scale',
    min: 0,
    max: 100,
    step: 10,
    category: 'criticalAnalysis'
  },
  {
    id: 'ca3',
    text: 'Você consegue identificar afirmações que podem ser verificadas factualmente?',
    type: 'choice',
    options: ['Sim, várias afirmações verificáveis', 'Algumas afirmações verificáveis', 'Poucas afirmações verificáveis', 'Não há afirmações verificáveis'],
    category: 'criticalAnalysis'
  }
];

export const ContentAnalysis = () => {
  const { currentStep, setCurrentStep, content } = useTrueCheck();
  const [isLoading, setIsLoading] = useState(true);
  
  // Simular carregamento inicial
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);
  
  const handleComplete = () => {
    // Avançar para o próximo passo
    setCurrentStep(currentStep + 1);
  };
  
  if (isLoading) {
    return (
      <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Análise de Conteúdo</h2>
        <div className="flex justify-center items-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
        </div>
        <p className="text-center text-gray-600">Analisando o conteúdo em detalhes...</p>
      </div>
    );
  }
  
  return (
    <div className="max-w-2xl mx-auto">
      <div className="p-6 bg-white rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Análise de Conteúdo</h2>
        
        <div className="mb-6">
          <h3 className="font-semibold text-gray-800 mb-3">Conteúdo analisado:</h3>
          <div className="p-4 bg-gray-50 rounded-md border border-gray-200">
            <p className="text-gray-700">
              {content.length > 300 ? `${content.substring(0, 300)}...` : content}
            </p>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="font-semibold text-gray-800 mb-3">Elementos identificados:</h3>
          
          <div className="space-y-3">
            <div className="flex items-start">
              <div className="w-6 h-6 rounded-full bg-yellow-500 flex items-center justify-center text-white mr-3 mt-0.5">
                <span className="text-xs font-bold">!</span>
              </div>
              <div>
                <p className="text-gray-700 font-medium">Afirmação verificável</p>
                <p className="text-gray-600 text-sm">
                  "Os dados mostram um aumento de 30% nos últimos dois anos."
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white mr-3 mt-0.5">
                <span className="text-xs font-bold">S</span>
              </div>
              <div>
                <p className="text-gray-700 font-medium">Fonte citada</p>
                <p className="text-gray-600 text-sm">
                  "Segundo o Instituto de Pesquisas XYZ..."
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center text-white mr-3 mt-0.5">
                <span className="text-xs font-bold">O</span>
              </div>
              <div>
                <p className="text-gray-700 font-medium">Opinião</p>
                <p className="text-gray-600 text-sm">
                  "Esta é provavelmente a melhor abordagem para o problema."
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-sm text-gray-500 mb-4">
          <p>A análise de conteúdo identifica afirmações verificáveis, fontes citadas e elementos de opinião.</p>
          <p>Esta etapa ajuda a separar fatos de interpretações e opiniões.</p>
        </div>
      </div>
      
      <Questionnaire 
        questions={contentAnalysisQuestions} 
        onComplete={handleComplete} 
      />
    </div>
  );
};
