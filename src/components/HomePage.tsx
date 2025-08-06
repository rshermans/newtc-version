import { useTrueCheck } from '../hooks/useTrueCheck';

export const HomePage = () => {
  const { startVerification } = useTrueCheck();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="w-full p-4 bg-white shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">TrueCheck</h1>
          <nav>
            <a href="#features" className="text-gray-600 hover:text-blue-600 mx-2">Funcionalidades</a>
            <a href="#about" className="text-gray-600 hover:text-blue-600 mx-2">Sobre</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 mx-2">Contato</a>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <section className="bg-white text-center py-20">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Combata a Desinformação com Análise Crítica</h2>
            <p className="text-lg text-gray-600 mb-8">
              O TrueCheck é uma ferramenta educativa que ajuda você a verificar a factualidade de notícias, artigos e imagens, enquanto desenvolve suas habilidades de alfabetização midiática.
            </p>
            <button
              onClick={startVerification}
              className="bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition duration-300"
            >
              Começar Verificação
            </button>
          </div>
        </section>

        <section id="features" className="py-20">
          <div className="max-w-6xl mx-auto px-4">
            <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">Como Funciona</h3>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="p-6">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mx-auto mb-4">
                  <p className='text-2xl'>🔎</p>
                </div>
                <h4 className="text-xl font-semibold mb-2">1. Submeta o Conteúdo</h4>
                <p className="text-gray-600">Cole um texto, link de notícia ou URL de imagem para iniciar a análise.</p>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mx-auto mb-4">
                <p className='text-2xl'>🤔</p>
                </div>
                <h4 className="text-xl font-semibold mb-2">2. Participe da Análise</h4>
                <p className="text-gray-600">Responda a perguntas guiadas para avaliar a fonte, o conteúdo e o contexto da informação.</p>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mx-auto mb-4">
                <p className='text-2xl'>📊</p>
                </div>
                <h4 className="text-xl font-semibold mb-2">3. Receba o Resultado</h4>
                <p className="text-gray-600">Compare sua avaliação com a da nossa IA e receba insights para aprimorar seu pensamento crítico.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="bg-white py-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Nossa Missão</h3>
            <p className="text-lg text-gray-600">
              Nossa missão é fortalecer a capacidade das pessoas de discernir informações factuais em um mundo digital complexo. Acreditamos que a educação e a prática são as melhores ferramentas contra a desinformação. O TrueCheck não apenas verifica fatos, mas capacita você a se tornar um consumidor de mídia mais consciente e crítico.
            </p>
          </div>
        </section>
      </main>

      <footer id="contact" className="w-full p-4 bg-gray-800 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <p>&copy; 2024 TrueCheck. Todos os direitos reservados.</p>
          <p>Feito com ❤️ para um mundo mais bem informado.</p>
        </div>
      </footer>
    </div>
  );
};
