import { useTrueCheck } from '../hooks/useTrueCheck';
import { Question } from '../lib/types';
import { Questionnaire } from './Questionnaire';

const finalEvaluationQuestions: Question[] = [
  {
    id: 'fe1',
    text: 'Após a análise, como você classifica a factualidade deste conteúdo?',
    type: 'scale',
    min: 0,
    max: 100,
    step: 10,
    category: 'finalJudgment'
  },
  {
    id: 'fe2',
    text: 'Sua opinião mudou durante o processo de verificação?',
    type: 'choice',
    options: ['Sim, significativamente', 'Sim, moderadamente', 'Sim, levemente', 'Não, mantive minha opinião inicial'],
    category: 'finalJudgment'
  },
  {
    id: 'fe3',
    text: 'Qual critério você considera mais importante para determinar a factualidade?',
    type: 'choice',
    options: ['Confiabilidade da fonte', 'Consistência entre fontes diferentes', 'Qualidade das evidências apresentadas', 'Contexto histórico e atual', 'Separação entre fato e opinião'],
    category: 'finalJudgment'
  }
];

export const FinalEvaluation = () => {
  const { calculateResults } = useTrueCheck();
  
  const handleComplete = () => {
    calculateResults();
  };
  
  return (
    <div className="max-w-2xl mx-auto">
      <div className="p-6 bg-white rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Avaliação Final</h2>
        
        <div className="mb-6">
          <h3 className="font-semibold text-gray-800 mb-3">Resumo da análise:</h3>
          
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-md border border-gray-200">
              <h4 className="font-medium text-gray-800 mb-2">Fonte e Metadados</h4>
              <p className="text-gray-600 text-sm">
                A fonte apresenta histórico de confiabilidade moderada a alta, com transparência editorial adequada.
              </p>
            </div>
            
            <div className="p-4 bg-gray-50 rounded-md border border-gray-200">
              <h4 className="font-medium text-gray-800 mb-2">Consistência Factual</h4>
              <p className="text-gray-600 text-sm">
                As afirmações principais são verificáveis e apresentam boa concordância com outras fontes confiáveis.
              </p>
            </div>
            
            <div className="p-4 bg-gray-50 rounded-md border border-gray-200">
              <h4 className="font-medium text-gray-800 mb-2">Contexto</h4>
              <p className="text-gray-600 text-sm">
                O contexto histórico e atual é apresentado de forma adequada, permitindo compreensão abrangente.
              </p>
            </div>
            
            <div className="p-4 bg-gray-50 rounded-md border border-gray-200">
              <h4 className="font-medium text-gray-800 mb-2">Elementos de Linguagem</h4>
              <p className="text-gray-600 text-sm">
                Presença de alguns elementos de linguagem tendenciosa, mas separação razoável entre fatos e opiniões.
              </p>
            </div>
          </div>
        </div>
        
        <div className="text-sm text-gray-500 mb-4">
          <p>A avaliação final integra todos os aspectos analisados nas etapas anteriores.</p>
          <p>Sua percepção será comparada com a análise automatizada para promover reflexão crítica.</p>
        </div>
      </div>
      
      <Questionnaire 
        questions={finalEvaluationQuestions} 
        onComplete={handleComplete} 
      />
    </div>
  );
};
