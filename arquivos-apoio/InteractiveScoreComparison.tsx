import { useTrueCheck } from '../context/TrueCheckContext';
import { useEffect, useRef } from 'react';

// Componente para visualização interativa de radar chart
export const RadarChart = ({ userScores, aiScores }: { userScores: number[], aiScores: number[] }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Configurações do gráfico
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = Math.min(centerX, centerY) - 30;
    
    // Limpar canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Desenhar linhas de fundo
    const categories = ['Fonte', 'Conteúdo', 'Contexto', 'Integridade'];
    const angleStep = (Math.PI * 2) / categories.length;
    
    // Desenhar círculos de referência
    const levels = 5;
    for (let i = 1; i <= levels; i++) {
      const levelRadius = (radius / levels) * i;
      ctx.beginPath();
      ctx.arc(centerX, centerY, levelRadius, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(200, 200, 200, 0.5)';
      ctx.stroke();
    }
    
    // Desenhar linhas de categoria
    for (let i = 0; i < categories.length; i++) {
      const angle = i * angleStep - Math.PI / 2; // Começar do topo
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);
      
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(x, y);
      ctx.strokeStyle = 'rgba(150, 150, 150, 0.5)';
      ctx.stroke();
      
      // Adicionar rótulos
      const labelX = centerX + (radius + 20) * Math.cos(angle);
      const labelY = centerY + (radius + 20) * Math.sin(angle);
      ctx.fillStyle = '#333';
      ctx.font = '12px Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(categories[i], labelX, labelY);
    }
    
    // Desenhar dados do usuário
    drawDataset(ctx, centerX, centerY, radius, angleStep, userScores, 'rgba(59, 130, 246, 0.7)', 'rgba(59, 130, 246, 0.3)');
    
    // Desenhar dados da IA
    drawDataset(ctx, centerX, centerY, radius, angleStep, aiScores, 'rgba(16, 185, 129, 0.7)', 'rgba(16, 185, 129, 0.3)');
    
    // Adicionar legenda
    drawLegend(ctx, canvas.width - 100, 30);
    
  }, [userScores, aiScores]);
  
  const drawDataset = (
    ctx: CanvasRenderingContext2D, 
    centerX: number, 
    centerY: number, 
    radius: number, 
    angleStep: number, 
    data: number[], 
    strokeColor: string, 
    fillColor: string
  ) => {
    ctx.beginPath();
    
    for (let i = 0; i < data.length; i++) {
      const value = data[i] / 100; // Normalizar para 0-1
      const angle = i * angleStep - Math.PI / 2; // Começar do topo
      const x = centerX + radius * value * Math.cos(angle);
      const y = centerY + radius * value * Math.sin(angle);
      
      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    }
    
    // Fechar o caminho
    const firstValue = data[0] / 100;
    const firstAngle = -Math.PI / 2; // Começar do topo
    const firstX = centerX + radius * firstValue * Math.cos(firstAngle);
    const firstY = centerY + radius * firstValue * Math.sin(firstAngle);
    ctx.lineTo(firstX, firstY);
    
    // Estilo e preenchimento
    ctx.strokeStyle = strokeColor;
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.fillStyle = fillColor;
    ctx.fill();
  };
  
  const drawLegend = (ctx: CanvasRenderingContext2D, x: number, y: number) => {
    // Usuário
    ctx.fillStyle = 'rgba(59, 130, 246, 0.7)';
    ctx.fillRect(x, y, 15, 15);
    ctx.fillStyle = '#333';
    ctx.font = '12px Arial';
    ctx.textAlign = 'left';
    ctx.fillText('Sua avaliação', x + 20, y + 8);
    
    // IA
    ctx.fillStyle = 'rgba(16, 185, 129, 0.7)';
    ctx.fillRect(x, y + 20, 15, 15);
    ctx.fillStyle = '#333';
    ctx.fillText('Verificação IA', x + 20, y + 28);
  };
  
  return (
    <div className="flex justify-center my-6">
      <canvas 
        ref={canvasRef} 
        width={400} 
        height={400} 
        className="max-w-full"
      />
    </div>
  );
};

// Componente para visualização interativa de barras comparativas
export const ComparisonBars = ({ userScore, aiScore }: { userScore: number, aiScore: number }) => {
  // Determinar a categoria de factualidade com base no score
  const getFactualityCategory = (score: number) => {
    if (score <= 20) return { label: 'Não factual', color: 'bg-red-500' };
    if (score <= 40) return { label: 'Pouco factual', color: 'bg-orange-500' };
    if (score <= 60) return { label: 'Parcialmente factual', color: 'bg-yellow-500' };
    if (score <= 80) return { label: 'Majoritariamente factual', color: 'bg-green-300' };
    return { label: 'Tendencialmente factual', color: 'bg-green-600' };
  };
  
  const userCategory = getFactualityCategory(userScore);
  const aiCategory = getFactualityCategory(aiScore);
  
  return (
    <div className="my-6">
      <h3 className="font-semibold text-gray-800 mb-4">Comparação de Scores:</h3>
      
      <div className="space-y-6">
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium text-gray-700">Sua avaliação</span>
            <span className="text-sm font-medium text-gray-700">{userScore}/100</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
            <div 
              className={`h-full ${userCategory.color}`} 
              style={{ width: `${userScore}%` }}
            ></div>
          </div>
          <div className="text-xs text-gray-500 mt-1">{userCategory.label}</div>
        </div>
        
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium text-gray-700">Verificação IA</span>
            <span className="text-sm font-medium text-gray-700">{aiScore}/100</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
            <div 
              className={`h-full ${aiCategory.color}`} 
              style={{ width: `${aiScore}%` }}
            ></div>
          </div>
          <div className="text-xs text-gray-500 mt-1">{aiCategory.label}</div>
        </div>
      </div>
    </div>
  );
};

// Componente para visualização interativa de termômetro de factualidade
export const FactualityThermometer = ({ score }: { score: number }) => {
  // Determinar a categoria de factualidade com base no score
  const getFactualityCategory = (score: number) => {
    if (score <= 20) return { label: 'Não factual', color: 'from-red-500 to-red-600' };
    if (score <= 40) return { label: 'Pouco factual', color: 'from-orange-400 to-orange-500' };
    if (score <= 60) return { label: 'Parcialmente factual', color: 'from-yellow-400 to-yellow-500' };
    if (score <= 80) return { label: 'Majoritariamente factual', color: 'from-green-300 to-green-400' };
    return { label: 'Tendencialmente factual', color: 'from-green-500 to-green-600' };
  };
  
  const category = getFactualityCategory(score);
  
  return (
    <div className="my-6">
      <h3 className="font-semibold text-gray-800 mb-4">Termômetro de Factualidade:</h3>
      
      <div className="relative h-64 w-20 mx-auto bg-gray-200 rounded-t-full overflow-hidden">
        <div 
          className={`absolute bottom-0 w-full bg-gradient-to-t ${category.color}`} 
          style={{ height: `${score}%` }}
        ></div>
        
        <div className="absolute inset-0 flex flex-col justify-between py-2">
          <div className="w-full h-0.5 bg-gray-400"></div>
          <div className="w-full h-0.5 bg-gray-400"></div>
          <div className="w-full h-0.5 bg-gray-400"></div>
          <div className="w-full h-0.5 bg-gray-400"></div>
          <div className="w-full h-0.5 bg-gray-400"></div>
        </div>
        
        <div className="absolute -right-24 inset-y-0 flex flex-col justify-between py-2 text-xs text-gray-600">
          <div>100 - Tendencialmente factual</div>
          <div>80 - Majoritariamente factual</div>
          <div>60 - Parcialmente factual</div>
          <div>40 - Pouco factual</div>
          <div>20 - Não factual</div>
        </div>
        
        <div className="absolute -left-6 top-1/2 transform -translate-y-1/2">
          <div className="w-3 h-3 rounded-full bg-black"></div>
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full mt-1 bg-white px-2 py-1 rounded shadow text-sm font-bold">
            {score}
          </div>
        </div>
      </div>
      
      <div className="text-center mt-4 font-medium text-gray-800">
        {category.label}
      </div>
    </div>
  );
};

// Componente principal que integra as visualizações interativas
export const InteractiveScoreComparison = () => {
  const { userPerception, aiAnalysis, comparisonResult } = useTrueCheck();
  
  if (!comparisonResult) {
    return null;
  }
  
  // Preparar dados para o gráfico de radar
  const userScores = [
    userPerception.sourceCredibility,
    userPerception.criticalAnalysis,
    userPerception.contextEvaluation,
    userPerception.finalJudgment
  ];
  
  const aiScores = [
    aiAnalysis.sourceReliability,
    aiAnalysis.factualConsistency,
    aiAnalysis.contentQuality,
    aiAnalysis.technicalIntegrity
  ];
  
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md mb-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Visualização Interativa de Scores</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="font-semibold text-gray-800 mb-4">Análise Comparativa:</h3>
          <RadarChart userScores={userScores} aiScores={aiScores} />
        </div>
        
        <div>
          <ComparisonBars 
            userScore={comparisonResult.userScore} 
            aiScore={comparisonResult.aiScore} 
          />
          
          <FactualityThermometer score={comparisonResult.aiScore} />
        </div>
      </div>
      
      <div className="mt-6 p-4 bg-blue-50 rounded-md border border-blue-200">
        <h4 className="font-medium text-blue-800 mb-2">Interpretação Educativa</h4>
        <p className="text-blue-700 mb-3">{comparisonResult.feedback}</p>
        
        <div className="text-sm text-blue-600">
          <p className="mb-2">
            <span className="font-medium">Dica:</span> Observe as áreas onde sua avaliação difere mais da verificação automatizada. 
            Estas são oportunidades para desenvolver seu pensamento crítico.
          </p>
          <p>
            <span className="font-medium">Reflexão:</span> Considere quais fatores podem ter influenciado sua percepção, 
            como experiências pessoais, conhecimento prévio ou viés de confirmação.
          </p>
        </div>
      </div>
    </div>
  );
};
