import { useTrueCheck } from '../context/TrueCheckContext';
import { Question } from '../lib/types';
import { Questionnaire } from './Questionnaire';
import { useEffect, useState } from 'react';

// Perguntas para a etapa de verificação cruzada
const crossVerificationQuestions: Question[] = [
  {
    id: 'cv1',
    text: 'Com base nas fontes alternativas apresentadas, como você avalia a consistência da informação?',
    type: 'scale',
    min: 0,
    max: 100,
    step: 10,
    category: 'contextEvaluation'
  },
  {
    id: 'cv2',
    text: 'As fontes citadas são relevantes para o tema?',
    type: 'choice',
    options: ['Muito relevantes', 'Relevantes', 'Pouco relevantes', 'Irrelevantes'],
    category: 'contextEvaluation'
  }
];

export const CrossVerification = () => {
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
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Verificação Cruzada</h2>
        <div className="flex justify-center items-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
        </div>
        <p className="text-center text-gray-600">Buscando fontes alternativas...</p>
      </div>
    );
  }
  
  return (
    <div className="max-w-2xl mx-auto">
      <div className="p-6 bg-white rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Verificação Cruzada</h2>
        
        <div className="mb-6">
          <h3 className="font-semibold text-gray-800 mb-3">Fontes alternativas encontradas:</h3>
          
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-md border border-gray-200">
              <div className="flex items-center mb-2">
                <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="font-medium text-gray-800">Portal de Notícias ABC</h4>
              </div>
              <p className="text-gray-600 text-sm mb-2">
                "De acordo com os dados mais recentes, houve um aumento significativo nos últimos dois anos, embora as estimativas variem entre 25% e 35%."
              </p>
              <div className="flex items-center text-xs text-gray-500">
                <span className="mr-3">Publicado: 15/05/2025</span>
                <span>Confiabilidade: Alta</span>
              </div>
            </div>
            
            <div className="p-4 bg-gray-50 rounded-md border border-gray-200">
              <div className="flex items-center mb-2">
                <div className="w-6 h-6 rounded-full bg-yellow-500 flex items-center justify-center text-white mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="font-medium text-gray-800">Blog Especializado XYZ</h4>
              </div>
              <p className="text-gray-600 text-sm mb-2">
                "Os números indicam um crescimento de aproximadamente 30% no período analisado, o que representa uma tendência preocupante segundo especialistas."
              </p>
              <div className="flex items-center text-xs text-gray-500">
                <span className="mr-3">Publicado: 10/05/2025</span>
                <span>Confiabilidade: Média</span>
              </div>
            </div>
            
            <div className="p-4 bg-gray-50 rounded-md border border-gray-200">
              <div className="flex items-center mb-2">
                <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="font-medium text-gray-800">Instituto de Pesquisas Oficial</h4>
              </div>
              <p className="text-gray-600 text-sm mb-2">
                "Nossa análise confirma um aumento de 28,7% entre 2023 e 2025, com margem de erro de 1,5 pontos percentuais."
              </p>
              <div className="flex items-center text-xs text-gray-500">
                <span className="mr-3">Publicado: 18/05/2025</span>
                <span>Confiabilidade: Alta</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="font-semibold text-gray-800 mb-3">Análise de concordância:</h3>
          
          <div className="h-8 w-full bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-green-500" style={{ width: '85%' }}></div>
          </div>
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>Baixa concordância</span>
            <span>Alta concordância</span>
          </div>
        </div>
        
        <div className="text-sm text-gray-500 mb-4">
          <p>A verificação cruzada compara o conteúdo com outras fontes confiáveis sobre o mesmo tema.</p>
          <p>Um alto nível de concordância entre fontes independentes aumenta a confiabilidade da informação.</p>
        </div>
      </div>
      
      <Questionnaire 
        questions={crossVerificationQuestions} 
        onComplete={handleComplete} 
      />
    </div>
  );
};
