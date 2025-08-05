import { useTrueCheck } from '../context/TrueCheckContext';
import { Question, Answer } from '../lib/types';
import { useState } from 'react';

type QuestionnaireProps = {
  questions: Question[];
  onComplete: () => void;
};

export const Questionnaire = ({ questions, onComplete }: QuestionnaireProps) => {
  const { addAnswer, updateUserPerception } = useTrueCheck();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  
  const currentQuestion = questions[currentQuestionIndex];
  
  const handleAnswer = (value: any) => {
    // Salvar resposta
    setAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: value
    }));
    
    // Adicionar ao contexto global
    const answer: Answer = {
      questionId: currentQuestion.id,
      value
    };
    addAnswer(answer);
    
    // Atualizar percepção do usuário se for uma pergunta de escala
    if (currentQuestion.type === 'scale') {
      updateUserPerception(currentQuestion.category, value);
    }
    
    // Avançar para próxima pergunta ou finalizar
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      onComplete();
    }
  };
  
  const renderQuestionInput = () => {
    switch (currentQuestion.type) {
      case 'scale':
        return (
          <div className="mt-4">
            <div className="flex justify-between mb-2">
              <span className="text-sm text-gray-500">
                {currentQuestion.min === 0 ? 'Discordo totalmente' : 'Baixo'}
              </span>
              <span className="text-sm text-gray-500">
                {currentQuestion.max === 100 ? 'Concordo totalmente' : 'Alto'}
              </span>
            </div>
            <input
              type="range"
              min={currentQuestion.min || 0}
              max={currentQuestion.max || 100}
              step={currentQuestion.step || 1}
              value={answers[currentQuestion.id] || (currentQuestion.min || 0)}
              onChange={(e) => handleAnswer(parseInt(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="text-center mt-2 font-bold">
              {answers[currentQuestion.id] || (currentQuestion.min || 0)}
            </div>
          </div>
        );
        
      case 'choice':
        return (
          <div className="mt-4 space-y-2">
            {currentQuestion.options?.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                className={`w-full p-3 text-left rounded-md border ${
                  answers[currentQuestion.id] === option
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-300 hover:bg-gray-50'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        );
        
      case 'multiselect':
        return (
          <div className="mt-4 space-y-2">
            {currentQuestion.options?.map((option, index) => {
              const selected = (answers[currentQuestion.id] || []).includes(option);
              return (
                <button
                  key={index}
                  onClick={() => {
                    const currentSelections = answers[currentQuestion.id] || [];
                    const newSelections = selected
                      ? currentSelections.filter((item: string) => item !== option)
                      : [...currentSelections, option];
                    handleAnswer(newSelections);
                  }}
                  className={`w-full p-3 text-left rounded-md border ${
                    selected
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center">
                    <div className={`w-5 h-5 mr-3 rounded border flex items-center justify-center ${
                      selected ? 'border-blue-500 bg-blue-500' : 'border-gray-400'
                    }`}>
                      {selected && (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                    {option}
                  </div>
                </button>
              );
            })}
          </div>
        );
        
      case 'text':
        return (
          <div className="mt-4">
            <textarea
              value={answers[currentQuestion.id] || ''}
              onChange={(e) => setAnswers(prev => ({
                ...prev,
                [currentQuestion.id]: e.target.value
              }))}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={4}
              placeholder="Digite sua resposta aqui..."
            />
            <button
              onClick={() => handleAnswer(answers[currentQuestion.id] || '')}
              disabled={!answers[currentQuestion.id]}
              className={`mt-4 px-6 py-2 rounded-md font-medium ${
                !answers[currentQuestion.id]
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              Próxima pergunta
            </button>
          </div>
        );
        
      default:
        return null;
    }
  };
  
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="mb-4 text-sm text-gray-500">
        Pergunta {currentQuestionIndex + 1} de {questions.length}
      </div>
      
      <h3 className="text-xl font-semibold text-gray-800 mb-4">
        {currentQuestion.text}
      </h3>
      
      {renderQuestionInput()}
    </div>
  );
};
