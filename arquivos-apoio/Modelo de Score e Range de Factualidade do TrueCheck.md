# Modelo de Score e Range de Factualidade do TrueCheck

## Sistema de Pontuação da IA

### Critérios de Avaliação Automatizada

#### 1. Confiabilidade da Fonte (0-25 pontos)
- **Histórico de precisão** (0-10 pontos)
  - Fontes com histórico verificado de precisão recebem pontuação mais alta
  - Bases de dados consultadas: registros de verificadores de fatos, rankings de confiabilidade jornalística
  
- **Transparência editorial** (0-5 pontos)
  - Presença de expediente, política editorial clara, correções públicas
  - Verificação automatizada de elementos de transparência no site/publicação
  
- **Independência** (0-5 pontos)
  - Ausência de conflitos de interesse evidentes
  - Diversidade de financiamento e autonomia editorial
  
- **Especialização temática** (0-5 pontos)
  - Reconhecimento na área específica do conteúdo analisado
  - Histórico de publicações no tema específico

#### 2. Consistência Factual (0-25 pontos)
- **Verificação cruzada** (0-10 pontos)
  - Concordância com outras fontes confiáveis sobre os mesmos fatos
  - Número de fontes independentes que corroboram a informação
  
- **Precisão de dados** (0-5 pontos)
  - Exatidão de estatísticas, datas, nomes e citações
  - Comparação com bases de dados oficiais e verificáveis
  
- **Contextualização adequada** (0-5 pontos)
  - Apresentação do contexto completo e relevante
  - Ausência de omissões significativas que alterariam a interpretação
  
- **Atualidade** (0-5 pontos)
  - Informação atualizada e relevante para o momento
  - Clareza sobre quando os fatos ocorreram

#### 3. Qualidade do Conteúdo (0-25 pontos)
- **Separação entre fato e opinião** (0-10 pontos)
  - Distinção clara entre relato factual e interpretação
  - Análise linguística de marcadores de opinião vs. fato
  
- **Equilíbrio de perspectivas** (0-5 pontos)
  - Apresentação de diferentes pontos de vista quando relevante
  - Ausência de viés evidente na seleção de fontes
  
- **Linguagem precisa** (0-5 pontos)
  - Uso de termos específicos e tecnicamente corretos
  - Ausência de linguagem sensacionalista ou emotiva
  
- **Estrutura lógica** (0-5 pontos)
  - Argumentação coerente e baseada em evidências
  - Conclusões que decorrem logicamente dos fatos apresentados

#### 4. Integridade Visual e Técnica (0-25 pontos)
- **Autenticidade de imagens/vídeos** (0-10 pontos)
  - Ausência de manipulação ou descontextualização
  - Verificação de metadados e busca reversa de imagens
  
- **Atribuição correta** (0-5 pontos)
  - Créditos adequados para conteúdo de terceiros
  - Links ou referências para fontes originais
  
- **Consistência técnica** (0-5 pontos)
  - Ausência de contradições internas no conteúdo
  - Coerência entre diferentes elementos (texto, imagem, dados)
  
- **Transparência metodológica** (0-5 pontos)
  - Explicação clara sobre métodos de obtenção de dados
  - Informações sobre limitações da análise quando aplicável

### Cálculo do Score Final da IA
- **Pontuação total**: Soma dos pontos em todos os critérios (0-100)
- **Ponderação adaptativa**: Ajuste de pesos conforme o tipo de conteúdo
  - Para conteúdo predominantemente textual: maior peso para Consistência Factual
  - Para conteúdo visual: maior peso para Integridade Visual
  - Para conteúdo científico/técnico: maior peso para Qualidade do Conteúdo

## Sistema de Pontuação do Usuário

### Critérios de Avaliação Humana

#### 1. Percepção de Confiabilidade (0-25 pontos)
- **Avaliação da fonte** (0-10 pontos)
  - Resposta à pergunta "Quão confiável você considera esta fonte?"
  - Justificativa para a avaliação (pontos adicionais por justificativa fundamentada)
  
- **Familiaridade prévia** (0-5 pontos)
  - Conhecimento prévio sobre o tema e a fonte
  - Capacidade de contextualizar a informação
  
- **Identificação de sinais de credibilidade** (0-10 pontos)
  - Reconhecimento de elementos que aumentam ou diminuem a credibilidade
  - Capacidade de distinguir sinais relevantes de irrelevantes

#### 2. Análise Crítica (0-25 pontos)
- **Identificação de afirmações verificáveis** (0-10 pontos)
  - Capacidade de isolar declarações factuais no conteúdo
  - Distinção entre fatos e opiniões
  
- **Questionamento de evidências** (0-10 pontos)
  - Avaliação da qualidade e relevância das evidências apresentadas
  - Identificação de lacunas ou contradições
  
- **Reconhecimento de viés** (0-5 pontos)
  - Percepção de linguagem tendenciosa ou enquadramento seletivo
  - Identificação de perspectivas ausentes

#### 3. Avaliação Contextual (0-25 pontos)
- **Consideração do contexto histórico** (0-10 pontos)
  - Compreensão de como o contexto afeta a interpretação
  - Capacidade de situar a informação em um panorama mais amplo
  
- **Verificação cruzada mental** (0-10 pontos)
  - Comparação com conhecimentos prévios e outras fontes
  - Capacidade de identificar inconsistências com informações conhecidas
  
- **Avaliação de relevância** (0-5 pontos)
  - Compreensão da importância e atualidade da informação
  - Capacidade de distinguir entre fatos centrais e periféricos

#### 4. Julgamento Final (0-25 pontos)
- **Avaliação global de factualidade** (0-10 pontos)
  - Resposta à pergunta final sobre factualidade do conteúdo
  - Coerência com avaliações anteriores durante o processo
  
- **Justificativa da avaliação** (0-10 pontos)
  - Qualidade da argumentação para o julgamento final
  - Uso de critérios objetivos na justificativa
  
- **Reflexão sobre o processo** (0-5 pontos)
  - Capacidade de avaliar mudanças na própria percepção
  - Reconhecimento de fatores que influenciaram o julgamento

### Cálculo do Score Final do Usuário
- **Pontuação direta**: Soma dos pontos atribuídos nas respostas (0-100)
- **Pontuação de consistência**: Bônus por coerência entre respostas (0-10)
- **Pontuação total**: Soma da pontuação direta e de consistência (0-110, normalizada para 0-100)

## Range de Factualidade

### Escala de Classificação

#### 1. Não Factual (0-20 pontos)
- **Características**:
  - Informação comprovadamente falsa
  - Fabricação deliberada de conteúdo
  - Manipulação evidente de imagens ou dados
  - Atribuições falsas ou inexistentes
  
- **Indicadores visuais**:
  - Cor: Vermelho intenso
  - Ícone: X ou símbolo de alerta
  - Termômetro: Nível mínimo

#### 2. Pouco Factual (21-40 pontos)
- **Características**:
  - Distorções significativas de fatos reais
  - Descontextualização grave
  - Exageros que comprometem a essência da informação
  - Omissões críticas que alteram o significado
  
- **Indicadores visuais**:
  - Cor: Laranja avermelhado
  - Ícone: Triângulo de alerta
  - Termômetro: Nível baixo

#### 3. Parcialmente Factual (41-60 pontos)
- **Características**:
  - Mistura de fatos corretos e incorretos
  - Interpretações exageradas de dados reais
  - Contexto incompleto mas não totalmente ausente
  - Viés evidente na apresentação
  
- **Indicadores visuais**:
  - Cor: Amarelo
  - Ícone: Círculo com ponto de exclamação
  - Termômetro: Nível médio

#### 4. Majoritariamente Factual (61-80 pontos)
- **Características**:
  - Fatos predominantemente corretos
  - Pequenas imprecisões que não comprometem o todo
  - Contexto adequado na maior parte
  - Fontes geralmente confiáveis
  
- **Indicadores visuais**:
  - Cor: Verde claro
  - Ícone: Círculo com marca de verificação parcial
  - Termômetro: Nível alto

#### 5. Tendencialmente Factual (81-100 pontos)
- **Características**:
  - Informação precisa e verificável
  - Contexto completo e adequado
  - Fontes confiáveis e transparentes
  - Apresentação equilibrada e objetiva
  
- **Indicadores visuais**:
  - Cor: Verde intenso
  - Ícone: Marca de verificação completa
  - Termômetro: Nível máximo

## Sistema de Comparação IA vs. Humano

### Visualização Comparativa
- **Gráfico de radar**: Comparação por dimensão de análise
- **Barras paralelas**: Scores finais lado a lado
- **Mapa de calor**: Áreas de concordância e discordância
- **Linha temporal**: Evolução da percepção durante a análise

### Análise de Discrepâncias
- **Pequena discrepância** (diferença ≤ 10 pontos):
  - Feedback: "Sua análise está alinhada com a verificação automatizada"
  - Reforço positivo das habilidades de verificação
  
- **Discrepância moderada** (diferença 11-30 pontos):
  - Feedback: "Existem algumas diferenças entre sua análise e a verificação automatizada"
  - Explicação detalhada dos pontos de divergência
  - Sugestões educativas específicas
  
- **Grande discrepância** (diferença > 30 pontos):
  - Feedback: "Há diferenças significativas entre sua análise e a verificação automatizada"
  - Análise aprofundada dos fatores que podem ter influenciado a percepção
  - Recomendações de recursos educativos específicos
  - Convite para reanálise guiada

### Interpretação Educativa
- **Viés de confirmação**: Identificação de possível influência de crenças prévias
- **Efeito halo/chifre**: Análise de como a percepção da fonte afetou a avaliação do conteúdo
- **Lacunas de conhecimento**: Identificação de áreas onde conhecimento adicional seria benéfico
- **Pontos fortes**: Reconhecimento de aspectos onde o usuário demonstrou boa capacidade analítica

## Métricas de Aprendizado e Evolução

### Acompanhamento Individual
- **Histórico de verificações**: Registro de todas as análises realizadas pelo usuário
- **Curva de aprendizado**: Visualização da evolução da precisão ao longo do tempo
- **Áreas de desenvolvimento**: Identificação de padrões de discrepância recorrentes
- **Recomendações personalizadas**: Sugestão de conteúdos educativos específicos

### Métricas Coletivas Anônimas
- **Tendências de percepção**: Análise de padrões comuns entre usuários
- **Temas desafiadores**: Identificação de tipos de conteúdo com maior discrepância
- **Eficácia educativa**: Medição da redução de discrepâncias ao longo do tempo
- **Impacto social**: Avaliação da mudança de comportamento informacional
