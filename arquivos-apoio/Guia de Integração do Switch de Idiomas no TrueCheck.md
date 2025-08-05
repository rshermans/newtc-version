# Guia de Integração do Switch de Idiomas no TrueCheck

Este documento fornece instruções detalhadas para integrar o sistema de internacionalização (i18n) no projeto TrueCheck, permitindo a alternância entre português e inglês na interface.

## Estrutura de Arquivos

A implementação do switch de idiomas requer a seguinte estrutura de arquivos:

```
truecheck/
├── src/
│   ├── i18n/
│   │   ├── index.ts                  # Configuração do i18next
│   │   └── locales/
│   │       ├── pt/
│   │       │   └── translation.json  # Traduções em português
│   │       └── en/
│   │           └── translation.json  # Traduções em inglês
│   ├── components/
│   │   ├── LanguageSwitcher.tsx      # Componente de alternância de idioma
│   │   ├── Header.tsx                # Cabeçalho com integração do switch
│   │   └── [outros componentes]      # Componentes com hooks de tradução
│   └── App.tsx                       # Componente principal com importação do i18n
```

## Passos para Integração

### 1. Instalar Dependências

Adicione as bibliotecas necessárias ao projeto:

```bash
npm install i18next react-i18next i18next-browser-languagedetector
# ou
pnpm add i18next react-i18next i18next-browser-languagedetector
```

### 2. Copiar Arquivos de Configuração

1. Copie a pasta `i18n` completa para o diretório `src/` do seu projeto
2. Copie o componente `LanguageSwitcher.tsx` para a pasta `components/`
3. Atualize o `Header.tsx` para incluir o componente de alternância de idioma

### 3. Importar Configuração no App.tsx

Adicione a seguinte linha ao seu `App.tsx`:

```typescript
import './i18n'; // Importar configuração de i18n
```

### 4. Integrar Hooks de Tradução nos Componentes

Para cada componente que exibe texto, adicione o hook de tradução:

```typescript
import { useTranslation } from 'react-i18next';

export const MeuComponente = () => {
  const { t } = useTranslation();
  
  return (
    <div>
      <h1>{t('chave.do.texto')}</h1>
      <p>{t('outra.chave')}</p>
    </div>
  );
};
```

## Estrutura das Chaves de Tradução

As chaves de tradução seguem uma estrutura hierárquica por componente:

- `app`: Textos gerais da aplicação
- `navigation`: Itens de navegação
- `steps`: Títulos das etapas do processo
- `contentSubmission`: Textos da etapa de submissão
- `preliminaryAnalysis`: Textos da análise preliminar
- E assim por diante...

## Testando a Implementação

Para testar se a implementação está funcionando corretamente:

1. Inicie a aplicação localmente
2. Verifique se o seletor de idioma aparece no cabeçalho
3. Alterne entre português e inglês
4. Confirme se todos os textos da interface mudam conforme esperado

## Adicionando Novos Textos

Para adicionar novos textos à aplicação:

1. Adicione a chave e o texto em português no arquivo `src/i18n/locales/pt/translation.json`
2. Adicione a mesma chave com o texto em inglês no arquivo `src/i18n/locales/en/translation.json`
3. Use a chave no componente com o hook `t('sua.nova.chave')`

## Solução de Problemas

- **Textos não traduzidos**: Verifique se a chave existe em ambos os arquivos de tradução
- **Erro no console**: Certifique-se de que a configuração do i18n foi importada antes de usar os hooks
- **Switch não funciona**: Verifique se o localStorage está disponível no navegador

## Considerações Futuras

- Para adicionar mais idiomas, crie novas pastas dentro de `locales/` (ex: `es/`, `fr/`)
- Para textos dinâmicos com variáveis, use a sintaxe: `t('chave', { variavel: valor })`
- Considere implementar carregamento assíncrono para arquivos de tradução muito grandes
