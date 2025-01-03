 #Autor/AnaliceLeite #Versão/1 #Data/2024-10-30

## Descrição do Projeto 

O projeto Twitter Clone foi desenvolvido como uma forma de aprimorar meus conhecimentos em Django e React. Utilizei o Django Rest Framework para construir a API no backend e React com TypeScript para desenvolver a interface gráfica no frontend, com a estilização sendo feita com Tailwind CSS. A integração entre o frontend e o backend foi realizada através de Axios.

Para o deploy, utilizei o SQLite, que é nativo do Django, para o banco de dados em produção. Para o ambiente de desenvolvimento local, configurei um container Docker com PostgreSQL, garantindo maior flexibilidade no gerenciamento do banco de dados.

O deploy do backend foi realizado com sucesso na plataforma PythonAnywhere, enquanto o frontend foi hospedado no Vercel, proporcionando uma experiência de desenvolvimento e implantação simplificada.

## Descrição da API

Este projeto é uma API desenvolvida com Django Rest Framework que replica funcionalidades de uma rede social similar ao Twitter. A aplicação fornece endpoints para gerenciar usuários, seguidores, notificações e tweets, com autenticação de usuário e uma interface administrativa para gerenciamento. A API foi projetada para ser escalável e fácil de usar, permitindo integrações futuras.

## Estrutura dos Endpoints

Os endpoints estão divididos em duas categorias principais:

1. **Administração**: Rota `/admin/` para acessar o Django Admin, gerenciar grupos e permissões.
2. **API Pública**: Rota `/api/` para as principais operações CRUD (Criar, Ler, Atualizar, Excluir) nos módulos `follows`, `notifications`, `tweets`, e `users`.

## 1. Administração

### Objetivo

A área administrativa é acessível apenas para usuários autorizados e fornece uma interface para gerenciar os dados e permissões da aplicação.

### Endpoints Detalhados

- `/admin/`: Página principal da administração.
- `/admin/auth/group/`: Visualizar e gerenciar grupos de usuários.
    - **Métodos**: `GET` (lista) e `POST` (adicionar grupo).
- `/admin/auth/user/`: Visualizar e gerenciar usuários.
    - **Métodos**: `GET` (lista), `POST` (adicionar), `DELETE` (excluir), e `PUT/PATCH` (atualizar usuário).
- `/admin/logout/`: Logout do usuário administrativo autenticado.
- `/admin/password_change/`: Troca de senha do usuário autenticado no painel administrativo.

Esses endpoints incluem ainda detalhes para alterações, históricos de usuários e visualizações específicas para gerenciamento avançado.

## 2. API Pública (`/api/v1/`)

Cada endpoint é gerenciado por ViewSets que realizam o CRUD dos dados. Os endpoints suportam o uso de formatos adicionais (`<format>`) como `.json` ou `.xml`.

### Endpoints e Modelos

1. **Users (`/api/v1/users/`)**
    
    - **Objetivo**: Gerencia os perfis de usuários, incluindo a visualização de detalhes do usuário e operações de edição.
    - **Endpoints**:
        - `/api/v1/users/`: Lista todos os usuários e permite a criação de novos perfis.
            - **Métodos**: `GET` para listar e `POST` para registrar um novo usuário.
        - `/api/v1/users/<pk>/`: Detalhes de um usuário específico.
            - **Métodos**: `GET`, `PUT/PATCH`, `DELETE`.

1. **Follows (`/api/v1/follows/`)**
    
    - **Objetivo**: Gerencia as relações de seguidores entre usuários.
    - **Endpoints**:
        - `/api/v1/follows/`: Lista e criação de relações de seguimento.
            - **Métodos**: `GET` para listar e `POST` para criar um novo seguimento.
        - `/api/v1/follows/<pk>/`: Detalhes de um follow específico.
            - **Métodos**: `GET`, `PUT/PATCH` (atualizar), `DELETE` (remover).

1. **Tweets (`/api/v1/tweets/`)**
    
    - **Objetivo**: Gerencia tweets, fornecendo opções para criação, visualização, atualização e exclusão.
    - **Endpoints**:
        - `/api/v1/tweets/`: Lista de tweets e criação de novos tweets.
            - **Métodos**: `GET` (listar todos os tweets), `POST` (criar um novo tweet).
        - `/api/v1/tweets/<pk>/`: Detalhes de um tweet específico.
            - **Métodos**: `GET` (detalhes do tweet), `PUT/PATCH` (atualizar tweet), `DELETE` (excluir tweet).
                                  
1. **Notifications (`/api/v1/notifications/`)**
    
    - **Objetivo**: Gerencia notificações, permitindo que usuários vejam atualizações de interesse, como novos seguidores e principalmente, menções e comentários.
    - **Endpoints**:
        - `/api/v1/notifications/`: Lista e criação de notificações.
            - **Métodos**: `GET` (listar notificações), `POST` (criar notificação).
        - `/api/v1/notifications/<pk>/`: Acessa uma notificação específica.
            - **Métodos**: `GET`, `PUT/PATCH`, `DELETE`.
            

## 3. Fluxo de Autenticação e Autorização

A aplicação utiliza autenticação baseada em tokens ou sessão para assegurar que apenas usuários autenticados possam acessar determinadas informações e funcionalidades.

1. **Usuários**: Podem realizar operações de login e gerenciar seus perfis, tweets, e seguidores.
2. **Permissões de Acesso**: Determinados endpoints, especialmente no painel administrativo, são restritos a usuários com permissões de superusuário.
## 4. Testes Automatizados

A aplicação inclui testes unitários e de integração para assegurar o funcionamento adequado das funcionalidades principais:

- **Testes de Modelos**: Verificação das relações e integridade dos modelos `User`, `Tweet`, `Follow`, e `Notification`.
- **Testes de Serializers**: Garantir que os dados de entrada e saída estejam corretos e formatados.
- **Testes de Views e Endpoints**: Validar o comportamento dos endpoints para ações CRUD e o retorno de respostas HTTP apropriadas.

Para rodar os testes utilize o comando:

```cmd
poetry run python manage.py test
```

Para detalhes de configuração do ambiente consulte o passo 6.
## 5. Tecnologias Utilizadas

A aplicação foi construída com um conjunto de ferramentas e bibliotecas modernas que garantem sua robustez, escalabilidade e facilidade de manutenção:

### Backend

- **Poetry**: Gerenciador de dependências e ferramenta de empacotamento para projetos Python, simplificando a instalação e gerenciamento de bibliotecas.
- **Django 5.1.2**: Framework web em Python usado para desenvolver a API.
- **Django Rest Framework 3.15.2**: Framework poderoso para construção de APIs em Django, facilitando a criação dos endpoints.
- **django-cors-headers 4.6.0**: Middleware para lidar com o compartilhamento de recursos entre origens diferentes (CORS), permitindo que a API seja acessada de outras origens.
- **django-debug-toolbar 4.4.6**: Ferramenta de depuração que ajuda no desenvolvimento, exibindo informações detalhadas sobre as requisições.
- **django-extensions 3.2.3**: Coleção de ferramentas e extensões para Django, facilitando tarefas de desenvolvimento.
- **Pillow 11.0.0**: Biblioteca de manipulação de imagens usada para processamento de mídia.
- **psycopg2-binary 2.9.10**: Adaptador de banco de dados PostgreSQL para Python, essencial para conectar a API ao banco de dados PostgreSQL.
- **pytest 8.3.3**: Ferramenta de testes em Python, usada aqui para testar a aplicação, garantindo que cada funcionalidade opere conforme esperado.

### Frontend

- **React 18.3.1**: Biblioteca JavaScript para construção de interfaces de usuário.
- **React Router Dom 6.27.0**: Biblioteca de roteamento para React, permitindo navegação entre diferentes páginas.
- **Axios 1.7.7**: Biblioteca para fazer requisições HTTP, usada para comunicação com a API do backend.
- **UUID 11.0.2**: Biblioteca para geração de IDs únicos.
- **Crypto-js 4.2.0**: Biblioteca de criptografia usada para manipulação segura de dados.
- **Tailwind CSS 3.4.14**: Framework CSS para estilização rápida e responsiva.
- **Font Awesome**:
    - **@fortawesome/free-brands-svg-icons 6.4.0**: Conjunto de ícones de marcas.
    - **@fortawesome/free-solid-svg-icons 6.4.0**: Ícones sólidos.
    - **@fortawesome/react-fontawesome 0.2.2**: Integração dos ícones Font Awesome com React.
- **Testing Library**:
    - **@testing-library/react 13.4.0** e **@testing-library/jest-dom 5.17.0**: Ferramentas para testes de componentes e DOM em React.
- **TypeScript 4.9.5**: Superconjunto do JavaScript que adiciona tipagem estática opcional ao código, ajudando na manutenção e escalabilidade.
- **Prop-types 15.8.1**: Biblioteca para validação de tipos de props em componentes React.

## 6. Configuração do Ambiente Backend Localhost

### 1. Clonar o Repositório

Abra seu terminal e execute o seguinte comando para clonar o repositório:

```cmd
git clone https://github.com/analiceleite/twitter_clone.git
```
### 2. Navegar para o Diretório do Projeto

Entre no diretório do projeto:

```cmd
cd twitter_clone
```
### 3. Iniciar o Docker

Por padrão o Django utiliza o SQLite que também é excelente, mas caso queira subir um container Postgres e desenvolver dessa forma, também é uma boa prática afim de modularizar mais a aplicação.

Verifique detalhes da conexão no **settings.py** do projeto e no arquivo **.env**.

Certifique-se de ter o **Docker** e o **Docker Compose** instalados em seu sistema. Se ainda não tiver, você pode encontrar as instruções de instalação na documentação oficial do Docker.

Agora, inicie o banco de dados usando o `docker-compose`:

```cmd
docker-compose up -d
```

Este comando levantará os serviços definidos no arquivo `docker-compose.yml`, incluindo o banco de dados PostgreSQL.
### 4. Instalar Dependências

Certifique-se de ter o **Poetry** instalado em seu sistema. Se ainda não tiver, você pode instalá-lo com:

```cmd
curl -sSL https://install.python-poetry.org | python3 -
```

Agora, instale as dependências do projeto com o Poetry:

```cmd
poetry install
```
### 5. Configurar o Banco de Dados

Antes de rodar o projeto, você pode precisar configurar o banco de dados. Crie as migrações e aplique-as:

```cmd
poetry run python manage.py makemigrations 

poetry run python manage.py migrate
```

- **`makemigrations`**: Cria as migrações com base nas alterações feitas nos modelos.
- **`migrate`**: Aplica as migrações ao banco de dados.
### 6. Criar um Superusuário (Opcional)

Se você precisar acessar a área administrativa, crie um superusuário:

```cmd
poetry run python manage.py createsuperuser
```
### 7. Rodar o Servidor

Agora você pode rodar o servidor de desenvolvimento:

```cmd
poetry run python manage.py runserver
```

### 8. Acessar a API

Abra seu navegador e acesse a API em:

```cmd
http://localhost:8000/api/v1/
```
### 9. Acesso ao Painel Administrativo

Para acessar o painel administrativo, use o URL:

```cmd
http://localhost:8000/admin/
```

### 10. Parar os Serviços do Docker

Para parar os serviços em execução no Docker, execute:

```cmd
docker-compose down
```

E para parar o servidor Django, pressione `Ctrl + C` no terminal.

## 7. Configuração do Ambiente Frontend Localhost

### 1. Navegar até o Diretório do Projeto

```cmd
cd frontend/twitter_clone
```

### 2. Instale as Dependências

```cmd
npm install
```

### 3. Configure as Variáveis de Ambiente

No arquivo base_api, localizado no caminho: `src/api/base_api` altere o endereço atual:

```py
export const API_BASE_URL = 'https://analice.pythonanywhere.com/';
```

Para localhost rodando em Django (segundo o seu backend):

```py
export const API_BASE_URL = 'http://localhost:8000';
```

Se estiver rodando em outro endereço, realize a alteração.
### 4. Inicie o Servidor de Desenvolvimento 

```cmd
npm start
```

### 5. Testar a Aplicação

Agora, com o frontend e backend rodando localmente, você deve ser capaz de testar todas as funcionalidades.

## 7. Implementações Adicionais

- **Paginação**: Implementar paginação nos endpoints caso os dados ganhem volume significativo.
- Implementar resposta a um tweet no frontend.

## 8. Contribuições

Sugestões são bem-vindas! Para contribuir:

- Faça um fork do projeto.
- Crie uma branch para suas alterações.
- Envie um Pull Request quando estiver pronto.
- Para sugestões ou problemas, fique à vontade para abrir uma issue.

Obrigado por ajudar a melhorar este projeto! 😊

Atualizando