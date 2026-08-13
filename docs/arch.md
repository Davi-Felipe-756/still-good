- docs # pasta de documentos
    - arch.md # arquivo de arquitetura do sistema
- still-good # pasta do PWA
    - node modules # pasta de pacote de dados Node
    - public
    - src # projeto react
        
    - index.html
    - vite.config.js
- README.md # visão geral do app
- gitignore # arquivo responsavel por ignorar objetos que não devem ser comitados

# Estrutura do Projeto StillGood — Comentada

```text

stillgood/                         → Pasta principal de todo o projeto.

│
├── public/                        → Guarda arquivos públicos que não precisam ser processados pelo React.
│   └── imagens/                   → Pasta destinada às imagens utilizadas no aplicativo.
│
├── src/                           → Pasta principal onde fica o código-fonte do React.
│
│   ├── components/                → Guarda componentes reutilizáveis da interface.
│   │
│   ├── Header.jsx                 → Componente do cabeçalho e menu de navegação.
│   │
│   ├── FoodCard.jsx               → Componente que mostra as informações de um alimento.
│   │
│   ├── RecipeCard.jsx             → Componente que apresenta as informações de uma receita.
│   │
│   ├── ExpirationAlert.jsx        → Componente responsável pelos avisos de alimentos próximos do vencimento.
│   │
│   └── Button.jsx                 → Componente de botão reutilizável em diferentes partes do aplicativo.
│
│
│   ├── pages/                     → Guarda as páginas/telas principais do aplicativo.
│   │
│   ├── Login.jsx                  → Tela utilizada para o usuário entrar na sua conta.
│   │
│   ├── Cadastro.jsx               → Tela utilizada para criar uma nova conta.
│   │
│   ├── Home.jsx                   → Página inicial, mostrando um resumo dos alimentos e avisos.
│   │
│   ├── Alimentos.jsx              → Página que mostra todos os alimentos cadastrados.
│   │
│   ├── AdicionarAlimento.jsx      → Página/formulário para cadastrar um novo alimento.
│   │
│   └── Receitas.jsx               → Página que mostra receitas que podem utilizar os alimentos cadastrados.
│
│
│   ├── services/                  → Guarda arquivos responsáveis pela comunicação com APIs e backend.
│   │
│   ├── api.js                     → Configura a comunicação entre o aplicativo e o backend/API.
│   │
│   └── receitas.js                → Contém funções específicas para buscar receitas através da API.
│
│
│   ├── utils/                     → Guarda funções auxiliares utilizadas em diferentes partes do sistema.
│   │
│   ├── validade.js                → Contém funções para calcular e verificar a validade dos alimentos.
│   │
│   └── filtros.js                 → Contém funções para filtrar e organizar os alimentos.
│
│
│   ├── App.jsx                    → Componente principal que organiza as páginas e componentes do aplicativo.
│   │
│   ├── main.jsx                   → Ponto de entrada do React, responsável por iniciar a aplicação.
│   │
│   └── styles/                    → Pasta que guarda os arquivos de estilos do aplicativo.
│       └── global.css             → Arquivo com os estilos gerais utilizados em todo o aplicativo.
│
│
├── package.json                   → Arquivo que contém informações do projeto e suas dependências.
│
└── README.md                      → Documento com informações, instruções e explicações sobre o projeto.
```

### Resumindo a função de cada pasta

| Pasta          | Função                                  |
| -------------- | --------------------------------------- |
| `public/`      | Arquivos públicos, como imagens         |
| `src/`         | Código principal do aplicativo          |
| `components/`  | Componentes reutilizáveis               |
| `pages/`       | Telas do aplicativo                     |
| `services/`    | Comunicação com APIs/backend            |
| `utils/`       | Funções auxiliares                      |
| `styles/`      | Estilos CSS                             |
| `package.json` | Dependências e configurações do projeto |
| `README.md`    | Documentação do projeto                 |

