
---

# 💇‍♀️ Sistema de Agendamento de Serviços - Salão SENAC (React + TypeScript + Vite)

Este é um sistema de agendamento de serviços desenvolvido para o **Salão SENAC**, utilizando as tecnologias **React**, **TypeScript** e **Vite**. O sistema permite que os clientes agendem serviços como cortes de cabelo, manicure, pedicure e outros, diretamente pelo site, proporcionando uma experiência simples, eficiente e moderna.

O projeto foi desenvolvido como parte de um trabalho acadêmico da **Faculdade SENAC Pernambuco** e tem como objetivo otimizar o tempo e melhorar o atendimento aos clientes, oferecendo uma solução robusta e escalável para o salão.

## ✨ Funcionalidades

- **📅 Agendamento de Serviços**: Clientes podem escolher a data, horário e serviço desejado (como corte de cabelo, manicure, pedicure).
- **📱 Responsividade**: O site é totalmente responsivo, adaptando-se bem a diferentes tamanhos de tela, incluindo dispositivos móveis, tablets e desktops.
- **🎨 Interface Intuitiva**: A interface foi projetada com foco em usabilidade e design moderno, proporcionando uma navegação simples e agradável.
- **🔔 Notificações de Confirmação**: O sistema envia notificações de confirmação de agendamento (futuro).
- **🛠️ Validação de Formulários**: O formulário de agendamento realiza validações para garantir a entrada correta de dados.

## 🛠️ Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construir interfaces de usuário interativas.
- **TypeScript**: Superset do JavaScript, proporcionando tipagem estática e maior segurança no desenvolvimento.
- **Vite**: Ferramenta de build moderna e rápida, com suporte a Hot Module Replacement (HMR) para uma experiência de desenvolvimento fluida.
- **ESLint**: Ferramenta para garantir a qualidade do código e aderir a boas práticas de programação.
- **React Router**: Para navegação entre páginas do sistema de forma eficiente.
- **Axios**: Para realizar chamadas HTTP e integrar com uma API externa (caso o backend seja implementado).
  
## 🚀 Como Utilizar

1. **Clone este repositório**:
   Primeiro, clone o repositório para o seu ambiente local.
   ```bash
   git clone https://github.com/seu-usuario/salao-senac-react.git
   ```

2. **Instale as dependências**:
   Navegue até o diretório do projeto e instale as dependências:
   ```bash
   cd salao-senac-react
   npm install
   ```

3. **Execute o servidor de desenvolvimento**:
   Inicie o servidor de desenvolvimento para testar o projeto localmente:
   ```bash
   npm run dev
   ```

4. **Abra no navegador**:
   O servidor estará disponível em `http://localhost:3000`. Abra essa URL no seu navegador para começar a usar o sistema.

## 📂 Estrutura do Projeto

- **`src/`**: Diretório principal que contém o código-fonte da aplicação.
  - **`components/`**: Componentes reutilizáveis da interface, como botões e formulários.
  - **`pages/`**: Páginas do sistema, como a página de agendamento e de confirmação.
  - **`services/`**: Arquivos responsáveis pela lógica de integração com APIs externas (se necessário).
  - **`App.tsx`**: Componente principal da aplicação, onde o roteamento e a estrutura da aplicação são definidos.
- **`public/`**: Arquivos públicos, como o `index.html`.
- **`tsconfig.json`**: Arquivo de configuração do TypeScript.
- **`vite.config.ts`**: Configuração do Vite.
- **`package.json`**: Gerenciamento de dependências e scripts do projeto.

## 🔧 Configuração do ESLint

Se você estiver desenvolvendo um aplicativo de produção, recomendamos configurar o ESLint para suportar regras de tipagem, garantindo a qualidade do código.

1. **Configure a propriedade `parserOptions`** no ESLint para incluir o arquivo `tsconfig`:
   ```js
   export default tseslint.config({
     languageOptions: {
       parserOptions: {
         project: ['./tsconfig.node.json', './tsconfig.app.json'],
         tsconfigRootDir: import.meta.dirname,
       },
     },
   })
   ```

2. **Substitua a configuração padrão do ESLint** para usar regras mais rigorosas:
   ```js
   export default tseslint.config({
     extends: [
       tseslint.configs.recommendedTypeChecked,
       tseslint.configs.strictTypeChecked,
     ],
   })
   ```

3. **Instale e configure o plugin do React**:
   - Instale o [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react):
     ```bash
     npm install eslint-plugin-react --save-dev
     ```

   - Configure o plugin no ESLint:
     ```js
     import react from 'eslint-plugin-react'

     export default tseslint.config({
       settings: { react: { version: '18.3' } },
       plugins: {
         react,
       },
       rules: {
         ...react.configs.recommended.rules,
         ...react.configs['jsx-runtime'].rules,
       },
     })
     ```

## 👥 Projeto em Equipe

Este projeto foi desenvolvido por alunos da **Faculdade SENAC Pernambuco**, como parte de um trabalho acadêmico, aplicando conceitos de **Desenvolvimento Web** em uma aplicação real. A equipe trabalhou em conjunto para aplicar práticas modernas de desenvolvimento, usando **React**, **TypeScript**, **Vite** e outras ferramentas da stack de front-end.

## 🤝 Contribuições

Se você deseja colaborar com o projeto, fique à vontade para enviar um pull request ou abrir uma issue com sugestões de melhorias.

### Como contribuir:

1. **Fork o repositório**.
2. **Crie uma branch** para suas alterações.
3. **Faça suas alterações** e adicione testes (se necessário).
4. **Crie um pull request** explicando as mudanças feitas.

## 🚧 Funcionalidades Futuras

- **Integração com Backend**: Implementação de integração com um sistema de backend para persistência dos agendamentos.
- **Notificações por e-mail/SMS**: Implementação de um sistema de notificações para lembrar os clientes sobre os agendamentos.
- **Painel Admin**: Tela de administração para gerenciar agendamentos e dados de clientes.

## 💬 Contato

Caso tenha dúvidas ou sugestões, entre em contato via e-mail: **felipe1ricardo@gmail.com**.

---
