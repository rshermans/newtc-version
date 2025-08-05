# Documentação Técnica do TrueCheck

## Visão Geral

O TrueCheck é uma solução inovadora para verificação de fatos que combina análise automatizada com participação ativa do usuário, criando uma experiência educativa que não apenas verifica a factualidade de conteúdos, mas também desenvolve habilidades de pensamento crítico e alfabetização midiática.

Esta documentação técnica detalha a arquitetura, fluxos, critérios de avaliação e recomendações de implementação para o TrueCheck, consolidando todos os componentes necessários para sua execução.

## Arquitetura do Sistema

### Componentes Principais

1. **Módulo de Entrada e Processamento**
   - Recebe texto, links ou imagens
   - Identifica o tipo de conteúdo
   - Extrai metadados e prepara para análise

2. **Motor de Verificação Automatizada**
   - Analisa fonte, conteúdo, contexto e elementos visuais
   - Consulta bases de dados de verificadores de fatos
   - Calcula score de factualidade baseado em critérios objetivos

3. **Interface de Interação Educativa**
   - Apresenta resultados parciais e finais
   - Coleta percepções e avaliações do usuário
   - Fornece feedback educativo personalizado

4. **Sistema de Comparação e Aprendizado**
   - Compara avaliações da IA e do usuário
   - Identifica discrepâncias e padrões
   - Gera recomendações educativas personalizadas

5. **Banco de Dados**
   - Armazena verificações, fontes e análises
   - Mantém histórico de usuários e evolução
   - Permite análises agregadas anônimas

### Diagrama de Fluxo de Dados

```
[Entrada do Usuário] → [Processamento Inicial] → [Verificação Automatizada]
                                               ↓
[Resultado Final] ← [Comparação de Scores] ← [Interação Educativa]
                                               ↑
                                     [Avaliação do Usuário]
```

## Fluxo Detalhado do Processo

### 1. Recebimento e Identificação do Conteúdo
- O sistema recebe um texto, link ou imagem do usuário
- Identifica automaticamente o tipo de conteúdo
- Extrai metadados básicos (fonte, data, autor quando disponível)
- Prepara o conteúdo para processamento

### 2. Análise Preliminar Automatizada
- Verifica a fonte contra banco de dados de fontes conhecidas
- Analisa metadados em busca de inconsistências
- Para imagens, verifica sinais de manipulação
- Para links, analisa domínio, estrutura e segurança

### 3. Análise de Conteúdo Aprofundada
- Realiza análise semântica para identificar afirmações factuais
- Cruza afirmações com bases de dados de fatos verificados
- Identifica contexto da informação e possíveis distorções
- Detecta linguagem tendenciosa ou emotiva

### 4. Verificação de Propagação e Histórico
- Analisa como o conteúdo se propagou online
- Rastreia origem e evolução da informação
- Compara com outras fontes que reportaram o mesmo fato
- Verifica consistência temporal dos eventos relatados

### 5. Interação Educativa com o Usuário
- Apresenta resultados parciais ao usuário
- Propõe perguntas específicas sobre elementos do conteúdo
- Explica métodos de verificação utilizados
- Coleta percepções do usuário sobre factualidade

### 6. Compilação e Pontuação
- Consolida todas as evidências coletadas
- Calcula score da IA baseado em critérios objetivos
- Calcula score do usuário baseado em suas respostas
- Compara os scores e identifica discrepâncias

### 7. Apresentação de Resultados e Aprendizado
- Apresenta veredito final sobre factualidade
- Justifica classificação com evidências
- Mostra comparativo entre avaliação da IA e do usuário
- Oferece recomendações educativas personalizadas

### 8. Feedback e Melhoria Contínua
- Coleta feedback sobre a satisfação com a análise
- Armazena verificação para referência futura
- Incorpora novos dados para melhorar verificações futuras
- Recomenda materiais educativos sobre verificação de fatos

## Estrutura de Interação com o Usuário

### Pontos de Interação e Call-to-Actions

1. **Submissão de Conteúdo**
   - Campo de entrada minimalista com opções claras
   - CTA: "Verificar agora"
   - Dicas sobre tipos de conteúdo aceitos
   - Animação de processamento com etapas visíveis

2. **Análise Preliminar e Engajamento Inicial**
   - Exibição dos primeiros resultados da análise automatizada
   - CTA: "O que você acha desta fonte?"
   - Explicação sobre critérios de confiabilidade
   - Termômetro inicial de confiabilidade

3. **Análise de Conteúdo e Participação Ativa**
   - Destaque de afirmações verificáveis
   - CTA: "Identifique afirmações duvidosas"
   - Dicas sobre identificação de afirmações verificáveis
   - Marcação colorida de afirmações

4. **Verificação Cruzada e Aprendizado**
   - Apresentação de fontes alternativas
   - CTA: "Compare estas fontes e avalie a consistência"
   - Explicação sobre verificação cruzada
   - Gráfico de concordância entre fontes

5. **Análise de Contexto e Reflexão Crítica**
   - Apresentação do contexto histórico e atual
   - CTA: "Este contexto altera sua percepção inicial?"
   - Explicação sobre importância do contexto
   - Linha do tempo com eventos relacionados

6. **Avaliação Final do Usuário**
   - Formulário de avaliação final
   - CTA: "Qual sua avaliação final sobre a factualidade?"
   - Resumo dos critérios de avaliação
   - Slider interativo com categorias de factualidade

7. **Apresentação de Resultados Comparativos**
   - Dashboard com resultados lado a lado
   - CTA: "Entenda as diferenças"
   - Análise das diferenças de percepção
   - Gráfico comparativo

8. **Aprendizado Contínuo e Compartilhamento**
   - Tela de conclusão com recursos adicionais
   - CTAs: "Aprenda mais" e "Compartilhe esta verificação"
   - Recomendações personalizadas
   - Certificado de participação

### Perguntas para Avaliação da Percepção

#### Etapa 1: Avaliação Inicial
1. "Qual é sua primeira impressão sobre a credibilidade desta informação?"
2. "Você já conhecia a fonte desta informação?"
3. "O que mais chamou sua atenção neste conteúdo?"

#### Etapa 2: Análise de Elementos
1. "Quais elementos deste conteúdo parecem mais confiáveis?"
2. "Identifique afirmações que você considera verificáveis:"
3. "Qual o tom predominante do conteúdo?"

#### Etapa 3: Verificação Contextual
1. "Com base no contexto apresentado, como você avalia a precisão da informação?"
2. "As fontes citadas são relevantes para o tema?"
3. "Você percebe algum viés no modo como a informação é apresentada?"

#### Etapa 4: Avaliação Final
1. "Após a análise, como você classifica a factualidade deste conteúdo?"
2. "Sua opinião mudou durante o processo de verificação?"
3. "Qual critério você considera mais importante para determinar a factualidade?"

## Modelo de Score e Range de Factualidade

### Sistema de Pontuação da IA (0-100 pontos)

#### Critérios de Avaliação Automatizada
1. **Confiabilidade da Fonte** (0-25 pontos)
   - Histórico de precisão
   - Transparência editorial
   - Independência
   - Especialização temática

2. **Consistência Factual** (0-25 pontos)
   - Verificação cruzada
   - Precisão de dados
   - Contextualização adequada
   - Atualidade

3. **Qualidade do Conteúdo** (0-25 pontos)
   - Separação entre fato e opinião
   - Equilíbrio de perspectivas
   - Linguagem precisa
   - Estrutura lógica

4. **Integridade Visual e Técnica** (0-25 pontos)
   - Autenticidade de imagens/vídeos
   - Atribuição correta
   - Consistência técnica
   - Transparência metodológica

### Sistema de Pontuação do Usuário (0-100 pontos)

#### Critérios de Avaliação Humana
1. **Percepção de Confiabilidade** (0-25 pontos)
   - Avaliação da fonte
   - Familiaridade prévia
   - Identificação de sinais de credibilidade

2. **Análise Crítica** (0-25 pontos)
   - Identificação de afirmações verificáveis
   - Questionamento de evidências
   - Reconhecimento de viés

3. **Avaliação Contextual** (0-25 pontos)
   - Consideração do contexto histórico
   - Verificação cruzada mental
   - Avaliação de relevância

4. **Julgamento Final** (0-25 pontos)
   - Avaliação global de factualidade
   - Justificativa da avaliação
   - Reflexão sobre o processo

### Range de Factualidade

1. **Não Factual** (0-20 pontos)
   - Informação comprovadamente falsa
   - Cor: Vermelho intenso

2. **Pouco Factual** (21-40 pontos)
   - Distorções significativas de fatos reais
   - Cor: Laranja avermelhado

3. **Parcialmente Factual** (41-60 pontos)
   - Mistura de fatos corretos e incorretos
   - Cor: Amarelo

4. **Majoritariamente Factual** (61-80 pontos)
   - Fatos predominantemente corretos
   - Cor: Verde claro

5. **Tendencialmente Factual** (81-100 pontos)
   - Informação precisa e verificável
   - Cor: Verde intenso

### Sistema de Comparação IA vs. Humano

- **Visualização**: Gráficos de radar, barras paralelas, mapas de calor
- **Análise de discrepâncias**: Pequena (≤10 pontos), Moderada (11-30 pontos), Grande (>30 pontos)
- **Interpretação educativa**: Viés de confirmação, efeito halo/chifre, lacunas de conhecimento
- **Métricas de aprendizado**: Histórico, curva de aprendizado, áreas de desenvolvimento

## Guia de Implementação

### Requisitos Técnicos

#### Frontend
- **Tecnologias**: React, JavaScript, Tailwind CSS
- **Componentes principais**:
  - Formulário de entrada de conteúdo
  - Visualizadores de análise (texto, imagem, URL)
  - Componentes interativos de avaliação
  - Dashboards de resultados
  - Visualizações comparativas

#### Backend
- **Tecnologias**: Python, Flask
- **Bibliotecas recomendadas**:
  - `requests`: Para integração com APIs externas
  - `spaCy`: Para análise semântica
  - `scikit-learn`: Para algoritmos de classificação
  - `Pillow/OpenCV`: Para análise de imagens
  - `BeautifulSoup`: Para extração de conteúdo web

#### Banco de Dados
- **Tecnologias**: PostgreSQL, Redis (cache)
- **Estruturas principais**:
  - Tabela de Usuários
  - Tabela de Verificações
  - Tabela de Fontes
  - Tabela de Análises

### Integrações Recomendadas

1. **APIs de Verificadores de Fatos**
   - Full Fact API
   - Google Fact Check Tools
   - ClaimReview Schema

2. **Bases de Dados de Confiabilidade**
   - Media Bias/Fact Check
   - NewsGuard
   - Credibility Coalition

3. **Ferramentas de Análise de Imagem**
   - TinEye (busca reversa)
   - Google Vision API
   - ExifTool (metadados)

4. **Serviços de NLP**
   - Google Natural Language API
   - IBM Watson NLU
   - Amazon Comprehend

### Considerações de Segurança e Privacidade

1. **Autenticação e Autorização**
   - Implementar OAuth 2.0 para autenticação
   - Utilizar JWT para sessões
   - Definir níveis de acesso apropriados

2. **Proteção de Dados**
   - Criptografar dados sensíveis
   - Implementar HTTPS em todas as comunicações
   - Seguir princípios de minimização de dados

3. **Considerações Éticas**
   - Transparência sobre métodos de análise
   - Explicabilidade das decisões algorítmicas
   - Mitigação de vieses nos algoritmos

## Exemplos de Uso

### Caso 1: Verificação de Notícia Textual

1. **Entrada**: URL de notícia sobre tema político
2. **Análise Automatizada**:
   - Fonte: Veículo de imprensa estabelecido (22/25 pontos)
   - Consistência: Fatos verificáveis com pequenas imprecisões (20/25 pontos)
   - Qualidade: Separação clara entre fato e opinião (23/25 pontos)
   - Integridade: Atribuições corretas, sem manipulações (24/25 pontos)
   - **Score IA**: 89/100 (Tendencialmente Factual)

3. **Interação com Usuário**:
   - Percepção inicial: Usuário desconfia da fonte (15/25 pontos)
   - Análise crítica: Identifica corretamente afirmações verificáveis (22/25 pontos)
   - Avaliação contextual: Reconhece contexto adequado (20/25 pontos)
   - Julgamento final: Classifica como parcialmente factual (18/25 pontos)
   - **Score Usuário**: 75/100 (Majoritariamente Factual)

4. **Comparação e Aprendizado**:
   - Discrepância: 14 pontos (Moderada)
   - Feedback: "Você demonstrou boa capacidade de análise crítica, mas sua percepção da fonte pode ter influenciado seu julgamento final."
   - Recomendação: Material educativo sobre separação entre reputação da fonte e avaliação de conteúdo específico.

### Caso 2: Verificação de Imagem

1. **Entrada**: Imagem de evento climático extremo
2. **Análise Automatizada**:
   - Fonte: Origem não verificável (10/25 pontos)
   - Consistência: Evento real, mas imagem de outro contexto (12/25 pontos)
   - Qualidade: Apresentação sensacionalista (15/25 pontos)
   - Integridade: Imagem real mas descontextualizada (15/25 pontos)
   - **Score IA**: 52/100 (Parcialmente Factual)

3. **Interação com Usuário**:
   - Percepção inicial: Usuário acredita na autenticidade (22/25 pontos)
   - Análise crítica: Não questiona elementos visuais (12/25 pontos)
   - Avaliação contextual: Não considera possível descontextualização (10/25 pontos)
   - Julgamento final: Classifica como majoritariamente factual (20/25 pontos)
   - **Score Usuário**: 64/100 (Majoritariamente Factual)

4. **Comparação e Aprendizado**:
   - Discrepância: 12 pontos (Moderada)
   - Feedback: "A imagem mostra um evento real, mas foi tirada em outro contexto. Considere sempre verificar a origem e o contexto de imagens impactantes."
   - Recomendação: Tutorial sobre como realizar busca reversa de imagens e verificar metadados.

## Limitações e Considerações Futuras

### Limitações Atuais

1. **Dependência de Bases Externas**
   - A precisão depende da qualidade e abrangência das bases de dados consultadas
   - Pode haver lacunas em temas muito recentes ou específicos

2. **Desafios Linguísticos**
   - Análise semântica mais precisa em português do que em outros idiomas
   - Dificuldade com nuances culturais e regionais

3. **Viés Algorítmico**
   - Possibilidade de viés nos algoritmos de classificação
   - Necessidade de revisão e calibração constantes

4. **Conteúdo Multimodal Complexo**
   - Desafios na análise integrada de texto, imagem e áudio
   - Limitações na detecção de deepfakes avançados

### Roadmap de Desenvolvimento

1. **Curto Prazo (3-6 meses)**
   - Implementação do MVP com funcionalidades core
   - Integração com principais APIs de verificação
   - Testes de usabilidade e ajustes na interface

2. **Médio Prazo (6-12 meses)**
   - Expansão das capacidades de análise multimodal
   - Implementação de aprendizado de máquina para melhorar precisão
   - Desenvolvimento de comunidade de verificadores

3. **Longo Prazo (12+ meses)**
   - Implementação de verificação em tempo real
   - Expansão para múltiplos idiomas e contextos culturais
   - Desenvolvimento de API para integração com outras plataformas

## Conclusão

O TrueCheck representa uma abordagem inovadora para verificação de fatos, combinando análise automatizada com participação ativa do usuário em um processo educativo. Ao implementar esta solução, organizações podem não apenas combater a desinformação, mas também contribuir para o desenvolvimento de habilidades críticas de alfabetização midiática em seus usuários.

A arquitetura modular, o fluxo detalhado e os critérios objetivos de avaliação fornecem uma base sólida para implementação, enquanto o foco na experiência educativa e na transparência metodológica diferencia o TrueCheck de soluções puramente automatizadas.

## Anexos

1. Fluxo detalhado do TrueCheck
2. Estrutura de interação com o usuário
3. Modelo de score e range de factualidade
4. Diagramas de arquitetura
5. Exemplos de implementação
