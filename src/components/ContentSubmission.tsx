import { useState } from 'react';
import { useTrueCheck } from '../hooks/useTrueCheck';
import { ContentType } from '../lib/types';

export const ContentSubmission = () => {
  const { setContentType, setContent, setCurrentStep } = useTrueCheck();
  const [inputValue, setInputValue] = useState('');
  const [selectedType, setSelectedType] = useState<ContentType | null>(null);
  const [error, setError] = useState('');

  const handleTypeSelection = (type: ContentType) => {
    setSelectedType(type);
    setError('');
  };

  const handleSubmit = () => {
    if (!selectedType) {
      setError('Por favor, selecione um tipo de conteúdo');
      return;
    }

    if (!inputValue.trim()) {
      setError('Por favor, insira o conteúdo para verificação');
      return;
    }

    if (selectedType === 'link' && !inputValue.startsWith('http')) {
      setError('Por favor, insira um link válido começando com http:// ou https://');
      return;
    }

    setContentType(selectedType);
    setContent(inputValue);
    
    setCurrentStep(2); // Avançar para a análise preliminar
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Verificação de Factualidade</h2>
      
      <div className="mb-6">
        <p className="text-gray-600 mb-4">
          Selecione o tipo de conteúdo que você deseja verificar:
        </p>
        
        <div className="flex flex-wrap gap-4 mb-6">
          <button
            onClick={() => handleTypeSelection('text')}
            className={`px-4 py-2 rounded-md transition-colors ${
              selectedType === 'text' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
            }`}
          >
            Texto
          </button>
          
          <button
            onClick={() => handleTypeSelection('link')}
            className={`px-4 py-2 rounded-md transition-colors ${
              selectedType === 'link' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
            }`}
          >
            Link
          </button>
          
          <button
            onClick={() => handleTypeSelection('image')}
            className={`px-4 py-2 rounded-md transition-colors ${
              selectedType === 'image' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
            }`}
          >
            Imagem
          </button>
        </div>
        
        {selectedType && (
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">
              {selectedType === 'text' && 'Insira o texto para verificação:'}
              {selectedType === 'link' && 'Insira o link para verificação:'}
              {selectedType === 'image' && 'Insira o URL da imagem para verificação:'}
            </label>
            
            {selectedType === 'text' ? (
              <textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={5}
                placeholder="Cole ou digite o texto aqui..."
              />
            ) : (
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder={
                  selectedType === 'link' 
                    ? 'https://exemplo.com/noticia' 
                    : 'https://exemplo.com/imagem.jpg'
                }
              />
            )}
            
            {error && (
              <p className="mt-2 text-red-600 text-sm">{error}</p>
            )}
          </div>
        )}
      </div>
      
      <div className="flex justify-between items-center">
        <p className="text-sm text-gray-500">
          O TrueCheck ajuda a verificar a factualidade de conteúdos e desenvolve seu pensamento crítico.
        </p>
        
        <button
          onClick={handleSubmit}
          disabled={!selectedType || !inputValue.trim()}
          className={`px-6 py-2 rounded-md font-medium ${
            !selectedType || !inputValue.trim()
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}
        >
          Verificar agora
        </button>
      </div>
    </div>
  );
};
