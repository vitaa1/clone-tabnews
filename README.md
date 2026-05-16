# Clone TabNews

Implementação progressiva de um clone do [TabNews](https://www.tabnews.com.br/) como parte do curso [curso.dev](https://curso.dev), ministrado por Filipe Deschamps. O projeto é desenvolvido de forma incremental, módulo a módulo, simulando o ciclo completo de construção de uma aplicação web Fullstack moderna — desde a configuração da infraestrutura local até o deploy em produção, passando por testes automatizados e integração contínua.

🔗 **Acesse o projeto:** [v1tec.com.br](https://v1tec.com.br) _(em desenvolvimento — funcionalidades sendo adicionadas progressivamente)_

---

## 📋 Sobre o projeto

A proposta do curso.dev é ensinar desenvolvimento web partindo da base: em vez de pular direto para o código da aplicação, o curso começa pela **infraestrutura local com Docker**, depois evolui para **banco de dados**, **migrations**, **testes automatizados**, **CI/CD** e só então avança para as funcionalidades de negócio.

Este repositório acompanha cada etapa desse processo, e o histórico de commits reflete a evolução natural do projeto.

---

## 🛠️ Tecnologias utilizadas

### Frontend e Backend

- **[Next.js](https://nextjs.org/)** — framework React com renderização híbrida (SSR/SSG) e rotas de API integradas
- **[Node.js](https://nodejs.org/)** — runtime JavaScript no servidor (versão LTS Hydrogen / Node 18)
- **[React](https://react.dev/)** — biblioteca para construção de interfaces

### Banco de dados

- **[PostgreSQL](https://www.postgresql.org/)** — banco relacional executado em container Docker durante o desenvolvimento
- **Migrations** — versionamento do schema do banco para garantir consistência entre ambientes

### Infraestrutura e DevOps

- **[Docker](https://www.docker.com/)** e **Docker Compose** — para subir o ambiente local de forma reproduzível
- **[GitHub Actions](https://github.com/features/actions)** — pipeline de CI/CD com execução automática de testes a cada Pull Request
- **[Vercel](https://vercel.com/)** — plataforma de deploy em produção, com domínio próprio configurado (v1tec.com.br)

### Qualidade de código

- **[Jest](https://jestjs.io/)** — framework de testes automatizados
- **[ESLint](https://eslint.org/)** + **[Prettier](https://prettier.io/)** — análise estática e formatação consistente
- **EditorConfig** — padronização de formatação entre editores

---

## 📂 Estrutura do projeto

```
clone-tabnews/
├── .github/workflows/     # Workflows do GitHub Actions (CI/CD)
├── infra/                 # Infraestrutura local (Docker Compose, migrations, scripts)
├── pages/                 # Páginas e rotas de API do Next.js
│   └── api/v1/status      # Endpoint de health check
├── tests/                 # Testes automatizados com Jest
├── .editorconfig          # Padronização entre editores
├── .env.development       # Variáveis de ambiente para desenvolvimento
├── .eslintrc.json         # Configuração do ESLint
├── .nvmrc                 # Versão do Node.js utilizada no projeto
├── jest.config.js         # Configuração do Jest
└── package.json           # Dependências e scripts do projeto
```

---

## ✅ Funcionalidades já implementadas

- [x] **Setup do projeto** com Next.js e Node.js
- [x] **Ambiente local conteinerizado** com Docker Compose (aplicação + PostgreSQL)
- [x] **Sistema de migrations** para versionamento do schema do banco
- [x] **Endpoint de health check** (`/api/v1/status`) que verifica:
  - Disponibilidade da aplicação
  - Conexão ativa com o banco de dados
  - Versão do PostgreSQL em uso
  - Número de conexões abertas e máximas
- [x] **Testes automatizados** com Jest cobrindo endpoints e integrações
- [x] **Pipeline de CI/CD** com GitHub Actions, executando testes a cada Pull Request
- [x] **Deploy contínuo** em produção via Vercel
- [x] **Domínio próprio configurado** ([v1tec.com.br](https://v1tec.com.br)) com DNS apontado para a Vercel

---

## 🚀 Como rodar localmente

### Pré-requisitos

Antes de começar, você precisa ter instalado na sua máquina:

- [Node.js](https://nodejs.org/) (versão LTS Hydrogen / 18.x — recomendado usar [NVM](https://github.com/nvm-sh/nvm))
- [Docker](https://www.docker.com/) e Docker Compose
- [Git](https://git-scm.com/)

### Passo a passo

**1. Clone o repositório:**

```bash
git clone https://github.com/vitaa1/clone-tabnews.git
cd clone-tabnews
```

**2. Use a versão correta do Node.js (se estiver com NVM):**

```bash
nvm install
nvm use
```

**3. Instale as dependências:**

```bash
npm install
```

**4. Suba os serviços de infraestrutura (PostgreSQL):**

```bash
npm run services:up
```

Esse comando vai iniciar um container Docker com o PostgreSQL configurado para o ambiente de desenvolvimento.

**5. Execute as migrations:**

```bash
npm run migrations:up
```

**6. Inicie a aplicação em modo de desenvolvimento:**

```bash
npm run dev
```

A aplicação estará disponível em [http://localhost:3000](http://localhost:3000).

Para verificar se tudo está funcionando, acesse o endpoint de status:
[http://localhost:3000/api/v1/status](http://localhost:3000/api/v1/status)

---

## 🧪 Rodando os testes

Para executar a suíte de testes automatizados:

```bash
npm test
```

Os testes são executados automaticamente a cada Pull Request por meio do GitHub Actions, garantindo que código quebrado não seja integrado à branch principal.

---

## 🗺️ Roadmap (próximos passos)

Os próximos módulos do curso.dev que serão implementados neste projeto:

- [ ] Sistema de **cadastro de usuários** com validações
- [ ] **Autenticação** e gerenciamento de sessões
- [ ] Sistema de **publicação de conteúdo** (posts e comentários)
- [ ] Mecânica de **TabCoins e TabCash** (economia interna do TabNews)
- [ ] **Sistema de moderação** colaborativa
- [ ] Refinamento de **observabilidade** (logs, métricas, alertas)

---

## 📚 Sobre o curso.dev

O [curso.dev](https://curso.dev) é um curso de desenvolvimento web ministrado por Filipe Deschamps, com abordagem prática e progressiva. O foco está em **construir uma aplicação real do zero**, entendendo cada camada — infraestrutura, banco de dados, backend, frontend, testes e deploy — em vez de apenas copiar tutoriais isolados.

---

## 👨‍💻 Autor

**José Vitor** — Estudante de Análise e Desenvolvimento de Sistemas em transição para desenvolvimento Fullstack.

- 🐙 GitHub: [@vitaa1](https://github.com/vitaa1)
- 💼 LinkedIn: [jose-vitor](https://linkedin.com/in/jose-vitor)
- 🌐 Site: [v1tec.com.br](https://v1tec.com.br)
- 📧 E-mail: vitorjose1231@gmail.com

---

## 📄 Licença

Este projeto é de uso educacional, desenvolvido como parte do curso.dev.
