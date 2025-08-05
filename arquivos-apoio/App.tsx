import './App.css';
import { TrueCheckProvider, useTrueCheck } from './context/TrueCheckContext';
import { ProgressStepper } from './components/ProgressStepper';
import { ContentSubmission } from './components/ContentSubmission';
import { PreliminaryAnalysis } from './components/PreliminaryAnalysis';
import { ContentAnalysis } from './components/ContentAnalysis';
import { CrossVerification } from './components/CrossVerification';
import { ContextAnalysis } from './components/ContextAnalysis';
import { FinalEvaluation } from './components/FinalEvaluation';
import { Results } from './components/Results';
import { InteractiveScoreComparison } from './components/InteractiveScoreComparison';

const TrueCheckApp = () => {
  const { currentStep } = useTrueCheck();

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <header className="max-w-4xl mx-auto px-4 mb-8">
        <div className="flex justify-center mb-6">
          <h1 className="text-3xl font-bold text-blue-600">TrueCheck</h1>
        </div>
        
        <ProgressStepper />
      </header>
      
      <main className="max-w-4xl mx-auto px-4 pb-12">
        {currentStep === 1 && <ContentSubmission />}
        {currentStep === 2 && <PreliminaryAnalysis />}
        {currentStep === 3 && <ContentAnalysis />}
        {currentStep === 4 && <CrossVerification />}
        {currentStep === 5 && <ContextAnalysis />}
        {currentStep === 6 && <FinalEvaluation />}
        {currentStep === 7 && (
          <>
            <Results />
            <InteractiveScoreComparison />
          </>
        )}
      </main>
      
      <footer className="max-w-4xl mx-auto px-4 py-6 border-t border-gray-200">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 mb-4 md:mb-0">
            TrueCheck © 2025 - Combatendo a desinformação e promovendo a educação midiática
          </p>
          
          <div className="flex space-x-4">
            <a href="#" className="text-sm text-blue-600 hover:underline">Sobre</a>
            <a href="#" className="text-sm text-blue-600 hover:underline">Recursos</a>
            <a href="#" className="text-sm text-blue-600 hover:underline">Contato</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

function App() {
  return (
    <TrueCheckProvider>
      <TrueCheckApp />
    </TrueCheckProvider>
  );
}

export default App;
