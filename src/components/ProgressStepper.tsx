import { useTrueCheck } from '../hooks/useTrueCheck';

export const ProgressStepper = () => {
  const { steps } = useTrueCheck();
  
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <div key={step.id} className="flex flex-col items-center relative">
            {/* Linha conectora */}
            {index < steps.length - 1 && (
              <div 
                className={`absolute top-4 h-0.5 w-full right-1/2 ${
                  step.completed ? 'bg-green-500' : 'bg-gray-300'
                }`}
                style={{ width: 'calc(100% - 2rem)' }}
              />
            )}
            
            {/* Círculo do passo */}
            <div 
              className={`w-8 h-8 rounded-full flex items-center justify-center z-10 ${
                step.completed 
                  ? 'bg-green-500 text-white' 
                  : step.active 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-gray-200 text-gray-500'
              }`}
            >
              {step.completed ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              ) : (
                step.id
              )}
            </div>
            
            {/* Título do passo */}
            <div className="text-xs mt-2 text-center max-w-[80px]">
              {step.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
