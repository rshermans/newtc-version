import { useTrueCheck } from '../context/TrueCheckContext';
import { Question } from '../lib/types';
import { Questionnaire } from './Questionnaire';
import { useEffect, useState } from 'react';

// Perguntas para a etapa de análise de contexto
const contextAnalysisQuestions: Question[] = [
  {
    id: 'ctx1',
    text: 'Com base no contexto apresentado, como você avalia a precisão da informação?',
    type: 'scale',
    min: 0,
    max: 100,
    step: 10,
    category: 'contextEvaluation'
  },
  {
    id: 'ctx2',
    text: 'Você percebe algum viés no modo como a informação é apresentada?',
    type: 'choice',
    options: ['Não percebo viés', 'Percebo leve viés', 'Percebo viés moderado', 'Percebo forte viés'],
    category: 'contextEvaluation'
  },
  {
    id: 'ctx3',
    text: 'Este contexto altera sua percepção inicial sobre o conteúdo?',
    type: 'choice',
    options: ['Sim, significativamente', 'Sim, moderadamente', 'Sim, levemente', 'Não, mantive minha percepção inicial'],
    category: 'contextEvaluation'
  }
];

export const ContextAnalysis = () => {
  const { currentStep, setCurrentStep } = useTrueCheck();
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
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Análise de Contexto</h2>
        <div className="flex justify-center items-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
        </div>
        <p className="text-center text-gray-600">Analisando o contexto histórico e atual...</p>
      </div>
    );
  }
  
  return (
    <div className="max-w-2xl mx-auto">
      <div className="p-6 bg-white rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Análise de Contexto</h2>
        
        <div className="mb-6">
          <h3 className="font-semibold text-gray-800 mb-3">Contexto histórico:</h3>
          
          <div className="relative pb-8">
            {/* Linha do tempo vertical */}
            <div className="absolute h-full w-0.5 bg-gray-200 left-3 top-0"></div>
            
            <div className="relative flex items-start mb-6">
              <div className="absolute w-7 h-7 rounded-full bg-blue-500 flex items-center justify-center text-white left-0 -ml-0.5">
                <span className="text-xs font-bold">1</span>
              </div>
              <div className="ml-12">
                <h4 className="font-medium text-gray-800">Janeiro 2023</h4>
                <p className="text-gray-600 text-sm">
                  Primeiros relatórios indicavam tendência de crescimento moderado, com projeções entre 10-15% para o biênio.
                </p>
              </div>
            </div>
            
            <div className="relative flex items-start mb-6">
              <div className="absolute w-7 h-7 rounded-full bg-blue-500 flex items-center justify-center text-white left-0 -ml-0.5">
                <span className="text-xs font-bold">2</span>
              </div>
              <div className="ml-12">
                <h4 className="font-medium text-gray-800">Setembro 2023</h4>
                <p className="text-gray-600 text-sm">
                  Revisão das projeções após eventos significativos no setor, elevando estimativas para 20-25%.
                </p>
              </div>
            </div>
            
            <div className="relative flex items-start mb-6">
              <div className="absolute w-7 h-7 rounded-full bg-blue-500 flex items-center justify-center text-white left-0 -ml-0.5">
                <span className="text-xs font-bold">3</span>
              </div>
              <div className="ml-12">
                <h4 className="font-medium text-gray-800">Março 2024</h4>
                <p className="text-gray-600 text-sm">
                  Dados preliminares confirmam aceleração do crescimento, com indicadores apontando para cerca de 25-30%.
                </p>
              </div>
            </div>
            
            <div className="relative flex items-start">
              <div className="absolute w-7 h-7 rounded-full bg-green-500 flex items-center justify-center text-white left-0 -ml-0.5">
                <span className="text-xs font-bold">4</span>
              </div>
              <div className="ml-12">
                <h4 className="font-medium text-gray-800">Maio 2025 (Atual)</h4>
                <p className="text-gray-600 text-sm">
                  Relatórios oficiais confirmam crescimento de aproximadamente 30% no período 2023-2025.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="font-semibold text-gray-800 mb-3">Fatores contextuais relevantes:</h3>
          
          <div className="space-y-3">
            <div className="flex items-start">
              <div className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center text-white mr-3 mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
                </svg>
              </div>
              <div>
                <p className="text-gray-700 font-medium">Mudanças regulatórias</p>
                <p className="text-gray-600 text-sm">
                  Novas regulamentações implementadas em 2023 impactaram significativamente o setor.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center text-white mr-3 mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
                </svg>
              </div>
              <div>
                <p className="text-gray-700 font-medium">Eventos econômicos</p>
                <p className="text-gray-600 text-sm">
                  Flutuações econômicas no período influenciaram as tendências observadas.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center text-white mr-3 mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
                </svg>
              </div>
              <div>
                <p className="text-gray-700 font-medium">Metodologia de medição</p>
                <p className="text-gray-600 text-sm">
                  Aprimoramentos nos métodos de coleta de dados podem explicar parte da variação observada.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-sm text-gray-500 mb-4">
          <p>A análise de contexto examina o histórico e os fatores que influenciam a interpretação da informação.</p>
          <p>Compreender o contexto é essencial para avaliar adequadamente a factualidade do conteúdo.</p>
        </div>
      </div>
      
      <Questionnaire 
        questions={contextAnalysisQuestions} 
        onComplete={handleComplete} 
      />
    </div>
  );
};
