# 📱 Sorteio Proz - Simulação Educativa de Phishing

Este projeto é uma Landing Page interativa que simula um sorteio de **iPhone 16 Pro** voltado para estudantes da Proz Educação. O objetivo real da aplicação é servir como uma ferramenta educativa de **Conscientização sobre Segurança da Informação** (Phishing e Engenharia Social).

Ao preencher o formulário (nome, CPF, telefone), o usuário é redirecionado para uma página de alerta explicando os riscos de fornecer dados sensíveis em sites desconhecidos.

## 🚀 Como executar este projeto localmente

Como este projeto utiliza **React** e **TypeScript**, ele precisa de um ambiente de construção (build) para funcionar corretamente fora do ambiente de testes. Recomendamos o uso do **Vite**.

### 1. Pré-requisitos
Certifique-se de ter o [Node.js](https://nodejs.org/) instalado em seu computador.

### 2. Criar a estrutura do projeto
Abra seu terminal e execute os seguintes comandos para criar um projeto Vite limpo:

```bash
# Crie o projeto (escolha React e depois TypeScript quando perguntado)
npm create vite@latest sorteio-proz -- --template react-ts

# Entre na pasta
cd sorteio-proz

# Instale as dependências básicas
npm install
```

### 3. Instalar bibliotecas adicionais
Este projeto utiliza ícones da biblioteca `lucide-react`. Instale-a:

```bash
npm install lucide-react
```

### 4. Configurar Tailwind CSS
O código fornecido usa Tailwind. Para configurar no Vite:

```bash
# Instala o Tailwind e suas dependências
npm install -D tailwindcss postcss autoprefixer

# Cria o arquivo de configuração
npx tailwindcss init -p
```

Abra o arquivo `tailwind.config.js` criado e substitua o conteúdo `content` por:

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        proz: {
          dark: '#2e1065',
          primary: '#6b21a8',
          light: '#d8b4fe',
          orange: '#f97316',
          orangeHover: '#ea580c',
        }
      }
    },
  },
  plugins: [],
}
```

Adicione as diretivas do Tailwind no arquivo `src/index.css` (apague o conteúdo antigo):
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 5. Importar os Arquivos
Agora, copie os arquivos do código fornecido para dentro da pasta `src/` do seu projeto Vite:

1.  Copie `App.tsx` para `src/App.tsx`.
2.  Crie a pasta `src/components` e adicione `LandingPage.tsx`, `EducationPage.tsx`, `Flyer.tsx`.
3.  Crie a pasta `src/utils` e adicione `formatters.ts`, `validators.ts`.
4.  Crie o arquivo `src/types.ts`.
5.  No arquivo `index.html` (na raiz do projeto), adicione a fonte Inter no `<head>`:
    ```html
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;900&display=swap" rel="stylesheet">
    ```

### 6. Rodar o projeto
```bash
npm run dev
```
O site estará rodando em `http://localhost:5173`.

---

## 🌐 Como hospedar no GitHub Pages

Para colocar este site no ar gratuitamente usando o GitHub Pages, siga estes passos:

### 1. Preparar o `vite.config.ts`
Abra o arquivo `vite.config.ts` na raiz do projeto e adicione a propriedade `base` com o nome do seu repositório:

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Substitua 'NOME-DO-SEU-REPOSITORIO' pelo nome exato do repo no GitHub
export default defineConfig({
  plugins: [react()],
  base: '/NOME-DO-SEU-REPOSITORIO/',
})
```

### 2. Instalar o `gh-pages`
```bash
npm install gh-pages --save-dev
```

### 3. Configurar o `package.json`
Abra o `package.json` e adicione estas duas linhas:

1.  No topo do arquivo (antes de `name` ou depois):
    ```json
    "homepage": "https://SEU-USUARIO.github.io/NOME-DO-SEU-REPOSITORIO",
    ```
2.  Dentro de `scripts`, adicione:
    ```json
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
    ```

### 4. Enviar para o GitHub
Crie um repositório no GitHub. No terminal do seu projeto:

```bash
git init
git add .
git commit -m "Primeiro commit - Sorteio Proz"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/NOME-DO-SEU-REPOSITORIO.git
git push -u origin main
```

### 5. Fazer o Deploy
Por fim, execute:

```bash
npm run deploy
```

O comando irá criar uma versão otimizada do site e enviá-la para uma branch especial chamada `gh-pages`. Após alguns minutos, seu site estará acessível no link configurado.

## ⚠️ Nota Legal
Este projeto é puramente educacional e não representa um sorteio real. Nenhum dado inserido é enviado para servidores externos; tudo é processado apenas no navegador do usuário para fins de demonstração.
