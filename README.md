# Projeto de Automação de Testes com Cypress

Este projeto utiliza o Cypress para automatizar testes de autenticação de login e funcionalidades de usuário em uma aplicação web. O objetivo é garantir que o fluxo de autenticação e as features do usuário estejam funcionando corretamente.

## 📋 Descrição do Projeto

O projeto consiste em uma suíte de testes automatizados que cobre:
- **Autenticação de Login**: Testes para verificar o fluxo de login, incluindo cenários de sucesso e falha.
- **Funcionalidades do Usuário**: Testes para validar as funcionalidades disponíveis para um usuário autenticado, como edição de perfil, logout, etc.

## 🛠️ Pré-requisitos

Antes de começar, você precisará ter instalado em sua máquina:

- [Node.js](https://nodejs.org/) (versão 12 ou superior)
- [npm](https://www.npmjs.com/) (geralmente vem com o Node.js)
- [Git](https://git-scm.com/) (opcional, para clonar o repositório)

## 🚀 Como Instalar e Executar o Projeto

Siga os passos abaixo para configurar e executar o projeto localmente.

### 1. Clonar o Repositório

Se você ainda não clonou o repositório, pode fazer isso com o seguinte comando:

```bash
git clone https://github.com/LeonardoAlves04/Cypress
cd Cypress
```

### 2. Instalar as Dependências
O projeto utiliza várias dependências que podem ser instaladas com o npm. Execute o seguinte comando na raiz do projeto:
Isso instalará todas as dependências listadas no arquivo package.json, incluindo o Cypress e outras bibliotecas necessárias.

### 3. Executar os Testes
Para executar os testes, você pode usar os seguintes comandos:

Abrir o Cypress no modo interativo:

```bash
npx cypress open
Isso abrirá a interface gráfica do Cypress, onde você pode selecionar os testes que deseja executar.
```
Executar os testes no terminal:

```bash
npx cypress run
Isso executará todos os testes no terminal sem abrir a interface gráfica.
```

### 4. Configurações Adicionais
Se o projeto necessitar de variáveis de ambiente (como URLs de ambientes diferentes ou credenciais), você pode configurá-las no arquivo cypress.config.js ou em um arquivo .env. Certifique-se de seguir as boas práticas de segurança e não commitar informações sensíveis no repositório.

📝 Dependências do Projeto
Aqui estão as principais dependências utilizadas no projeto:

Cypress: Framework de teste end-to-end.

Outras bibliotecas: ChanceJs (Para gerar dados randomicos para autenticação de usuarios/senhas/datas/valores)

Você pode ver todas as dependências no arquivo package.json.

🤝 Como Contribuir
Se você deseja contribuir para este projeto, siga os passos abaixo:

Faça um fork do repositório.

Crie uma branch para sua feature (git checkout -b feature/nova-feature).

Commit suas mudanças (git commit -m 'Adicionando nova feature').

Push para a branch (git push origin feature/nova-feature).

Abra um Pull Request.
