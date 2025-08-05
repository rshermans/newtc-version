# Fluxo Detalhado do TrueCheck

## 1. Recebimento e Identificação do Conteúdo
- **Entrada de dados**: O sistema recebe um texto, link ou imagem do usuário
- **Identificação do tipo**: O sistema identifica automaticamente o tipo de conteúdo (texto, URL, imagem)
- **Extração inicial**: Extração de metadados básicos (fonte, data, autor quando disponível)
- **Preparação para análise**: Normalização do conteúdo para processamento

## 2. Análise Preliminar Automatizada
- **Verificação de fonte**: Consulta ao banco de dados de fontes conhecidas
- **Análise de metadados**: Verificação de inconsistências em datas, autoria, etc.
- **Detecção de manipulação**: Para imagens, verificação de edições ou alterações
- **Análise de URL**: Para links, verificação de domínio, estrutura e segurança

## 3. Análise de Conteúdo Aprofundada
- **Análise semântica**: Processamento do texto para identificar afirmações factuais
- **Cruzamento com bases de dados**: Verificação das afirmações contra bases de fatos verificados
- **Análise de contexto**: Identificação do contexto da informação e possíveis distorções
- **Detecção de viés**: Análise de linguagem tendenciosa ou emotiva

## 4. Verificação de Propagação e Histórico
- **Análise de disseminação**: Verificação de como o conteúdo se propagou online
- **Histórico da informação**: Rastreamento da origem e evolução da informação
- **Verificação cruzada**: Comparação com outras fontes que reportaram o mesmo fato
- **Análise temporal**: Verificação da consistência temporal dos eventos relatados

## 5. Interação Educativa com o Usuário
- **Apresentação de resultados parciais**: Mostrar ao usuário os primeiros achados
- **Questionamento guiado**: Perguntas específicas sobre elementos do conteúdo
- **Explicação de métodos**: Detalhamento de como cada verificação foi realizada
- **Coleta de percepções**: Registro da avaliação do usuário sobre a factualidade

## 6. Compilação e Pontuação
- **Consolidação de evidências**: Reunião de todas as verificações realizadas
- **Cálculo de score da IA**: Pontuação baseada em critérios objetivos de verificação
- **Cálculo de score do usuário**: Pontuação baseada nas respostas do usuário
- **Comparação de scores**: Análise das diferenças entre percepção humana e verificação automatizada

## 7. Apresentação de Resultados e Aprendizado
- **Resultado final**: Apresentação do veredito sobre a factualidade do conteúdo
- **Explicação detalhada**: Justificativa para a classificação atribuída
- **Comparativo de percepções**: Visualização da diferença entre avaliação da IA e do usuário
- **Recomendações educativas**: Dicas para melhorar a capacidade de verificação do usuário

## 8. Feedback e Melhoria Contínua
- **Coleta de feedback**: Registro da satisfação do usuário com a análise
- **Armazenamento de dados**: Salvamento da verificação para referência futura
- **Aprendizado do sistema**: Incorporação dos novos dados para melhorar verificações futuras
- **Sugestão de conteúdos**: Recomendação de materiais educativos sobre verificação de fatos
