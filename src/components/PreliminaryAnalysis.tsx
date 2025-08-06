import { useTrueCheck } from '../hooks/useTrueCheck';
import { useEffect } from 'react';

export const PreliminaryAnalysis = () => {
  const { 
    contentType, 
    content, 
    setCurrentStep
  } = useTrueCheck();

 useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentStep(3);
    }, 3000);

    return () => clearTimeout(timer);
  }, [contentType, content, setCurrentStep]);

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Análise Preliminar</h2>
      
      <div className="mb-6">
        <div className="flex items-center mb-4">
          <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Tipo de conteúdo</h3>
            <p className="text-gray-600">
              {contentType === 'text' && 'Texto'}
              {contentType === 'link' && 'Link'}
              {contentType === 'image' && 'Imagem'}
            </p>
          </div>
        </div>
        
        <div className="flex items-center mb-4">
          <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Conteúdo analisado</h3>
            <p className="text-gray-600 truncate max-w-md">
              {content.length > 100 ? `${content.substring(0, 100)}...` : content}
            </p>
          </div>
        </div>
      </div>
      
      <div className="mb-6">
        <h3 className="font-semibold text-gray-800 mb-3">Verificando...</h3>
        
        <div className="space-y-3">
          <div className="flex items-center">
            <div className="w-6 h-6 mr-3 flex-shrink-0">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-500"></div>
            </div>
            <p className="text-gray-600">Analisando fonte e metadados</p>
          </div>
          
          <div className="flex items-center">
            <div className="w-6 h-6 mr-3 flex-shrink-0">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-500"></div>
            </div>
            <p className="text-gray-600">Verificando consistência factual</p>
          </div>
          
          <div className="flex items-center">
            <div className="w-6 h-6 mr-3 flex-shrink-0">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-500"></div>
            </div>
            <div className="flex items-center">
              <p className="text-gray-600">Avaliando contexto e propagação</p>
              </div>
          </div>
        </div>
      </div>
      
      <div className="text-sm text-gray-500">
        <p>A análise preliminar verifica a fonte, metadados e contexto inicial do conteúdo.</p>
        <p>Este processo é automático e leva apenas alguns segundos.</p>
      </div>
    </div>
  );
};
