import { useTrueCheck } from '../hooks/useTrueCheck';

export const Results = () => {
  const { 
    comparisonResult, 
    userPerception, 
    aiAnalysis,
    resetVerification
  } = useTrueCheck();
  
  if (!comparisonResult) {
    return (
      <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Resultados</h2>
        <div className="flex justify-center items-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
        </div>
        <p className="text-center text-gray-600">Calculando resultados finais...</p>
      </div>
    );
  }
  
  const getFactualityCategory = (score: number) => {
    if (score <= 20) return { label: 'Não factual', color: 'bg-red-500' };
    if (score <= 40) return { label: 'Pouco factual', color: 'bg-orange-500' };
    if (score <= 60) return { label: 'Parcialmente factual', color: 'bg-yellow-500' };
    if (score <= 80) return { label: 'Majoritariamente factual', color: 'bg-green-300' };
    return { label: 'Tendencialmente factual', color: 'bg-green-600' };
  };
  
  const userCategory = getFactualityCategory(comparisonResult.userScore);
  const aiCategory = getFactualityCategory(comparisonResult.aiScore);
  
  return (
    <div className="max-w-3xl mx-auto">
      <div className="p-6 bg-white rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Resultados da Verificação</h2>
        
        <div className="mb-8">
          <h3 className="font-semibold text-gray-800 mb-4">Comparação de Avaliações:</h3>
          
          <div className="flex flex-col md:flex-row gap-6 mb-6">
            <div className="flex-1 p-4 bg-gray-50 rounded-md border border-gray-200">
              <h4 className="font-medium text-gray-800 mb-3 text-center">Sua Avaliação</h4>
              
              <div className="flex justify-center mb-4">
                <div className={`w-24 h-24 rounded-full ${userCategory.color} flex items-center justify-center text-white text-2xl font-bold`}>
                  {comparisonResult.userScore}
                </div>
              </div>
              
              <p className="text-center font-medium mb-4">{userCategory.label}</p>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Credibilidade da fonte:</span>
                  <span className="font-medium">{userPerception.sourceCredibility}/100</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Análise crítica:</span>
                  <span className="font-medium">{userPerception.criticalAnalysis}/100</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Avaliação contextual:</span>
                  <span className="font-medium">{userPerception.contextEvaluation}/100</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Julgamento final:</span>
                  <span className="font-medium">{userPerception.finalJudgment}/100</span>
                </div>
              </div>
            </div>
            
            <div className="flex-1 p-4 bg-gray-50 rounded-md border border-gray-200">
              <h4 className="font-medium text-gray-800 mb-3 text-center">Verificação Automatizada</h4>
              
              <div className="flex justify-center mb-4">
                <div className={`w-24 h-24 rounded-full ${aiCategory.color} flex items-center justify-center text-white text-2xl font-bold`}>
                  {comparisonResult.aiScore}
                </div>
              </div>
              
              <p className="text-center font-medium mb-4">{aiCategory.label}</p>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Confiabilidade da fonte:</span>
                  <span className="font-medium">{aiAnalysis.sourceReliability}/100</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Consistência factual:</span>
                  <span className="font-medium">{aiAnalysis.factualConsistency}/100</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Qualidade do conteúdo:</span>
                  <span className="font-medium">{aiAnalysis.contentQuality}/100</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Integridade técnica:</span>
                  <span className="font-medium">{aiAnalysis.technicalIntegrity}/100</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-4 bg-blue-50 rounded-md border border-blue-200 mb-6">
            <h4 className="font-medium text-blue-800 mb-2">Análise de Discrepância</h4>
            <p className="text-blue-700 mb-2">
              <span className="font-medium">Diferença: </span> 
              {comparisonResult.discrepancy} pontos ({comparisonResult.discrepancyLevel})
            </p>
            <p className="text-blue-700">{comparisonResult.feedback}</p>
          </div>
        </div>
        
        <div className="mb-8">
          <h3 className="font-semibold text-gray-800 mb-4">Aprendizados Principais:</h3>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white mr-3 mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="text-gray-700 font-medium">Verificação de fontes</p>
                <p className="text-gray-600 text-sm">
                  Sempre verifique a credibilidade da fonte antes de aceitar suas afirmações.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white mr-3 mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="text-gray-700 font-medium">Verificação cruzada</p>
                <p className="text-gray-600 text-sm">
                  Compare a informação com outras fontes confiáveis para confirmar sua precisão.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white mr-3 mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="text-gray-700 font-medium">Contexto completo</p>
                <p className="text-gray-600 text-sm">
                  Considere o contexto histórico e atual para compreender adequadamente a informação.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white mr-3 mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="text-gray-700 font-medium">Separação entre fato e opinião</p>
                <p className="text-gray-600 text-sm">
                  Identifique claramente o que é informação factual e o que é interpretação ou opinião.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center">
          <button
            onClick={resetVerification}
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Iniciar Nova Verificação
          </button>
        </div>
      </div>
      
      <div className="p-6 bg-white rounded-lg shadow-md mb-6">
        <h3 className="font-semibold text-gray-800 mb-4">Recursos Adicionais:</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-gray-50 rounded-md border border-gray-200">
            <h4 className="font-medium text-gray-800 mb-2">Guia de Verificação de Fatos</h4>
            <p className="text-gray-600 text-sm mb-3">
              Aprenda técnicas avançadas para verificar a factualidade de conteúdos online.
            </p>
            <button className="text-blue-600 text-sm font-medium hover:underline">
              Acessar guia
            </button>
          </div>
          
          <div className="p-4 bg-gray-50 rounded-md border border-gray-200">
            <h4 className="font-medium text-gray-800 mb-2">Ferramentas de Verificação</h4>
            <p className="text-gray-600 text-sm mb-3">
              Conheça ferramentas gratuitas que podem ajudar na verificação de informações.
            </p>
            <button className="text-blue-600 text-sm font-medium hover:underline">
              Ver ferramentas
            </button>
          </div>
          
          <div className="p-4 bg-gray-50 rounded-md border border-gray-200">
            <h4 className="font-medium text-gray-800 mb-2">Curso de Alfabetização Midiática</h4>
            <p className="text-gray-600 text-sm mb-3">
              Desenvolva habilidades críticas para consumir informação de forma consciente.
            </p>
            <button className="text-blue-600 text-sm font-medium hover:underline">
              Conhecer curso
            </button>
          </div>
          
          <div className="p-4 bg-gray-50 rounded-md border border-gray-200">
            <h4 className="font-medium text-gray-800 mb-2">Comunidade de Verificadores</h4>
            <p className="text-gray-600 text-sm mb-3">
              Conecte-se com outras pessoas interessadas em combater a desinformação.
            </p>
            <button className="text-blue-600 text-sm font-medium hover:underline">
              Participar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
