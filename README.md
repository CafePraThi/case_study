## Study Case / NODE.JS / REACT / PYTHON

### Description
Este projeto consiste em uma aplicação web completa que implementa um sistema de CRUD (Create, Read, Update, Delete) para gerenciar dados de motos. O sistema é dividido em duas partes principais: o front-end, desenvolvido com React, e o back-end, desenvolvido com Node.js e Express. Além disso, há scripts em Python para extrair dados de produto conectando na API da HUBSPOT

### Objective
O objetivo deste projeto é fornecer uma interface amigável para a gestão de informações sobre motos, permitindo que os usuários possam adicionar, visualizar, atualizar e deletar registros. O sistema também suporta filtros avançados para facilitar a busca por motos específicas, além de incluir validações e mensagens de erro para melhorar a experiência do usuário.

### Tecnologias usadas

Front-End: React, Styled-Components, Axios, toastify, TypeScript
Back-End: Node.js, Express, Sequelize (ORM)
Banco de Dados: Postgress
Scripts: Python, pandas, requests

### Estruturas de pastas:

/back_end: Contém o código-fonte do servidor Node.js, incluindo modelos, rotas e controladores.
/front_end: Contém o código-fonte do front-end em React, incluindo componentes e estilos.
/scripts: Contém scripts Python utilizados no projeto.

## Instruçoes

1. Get the app:
    ```bash
    bench get-app [<URL_OF_THIS_REPO>](https://github.com/CafePraThi/case_study) --init-bench
    ```

### Configuração back-end

1. Navegue até o diretório do back-end:

   ```bash
   cd back_end
    ```
2. Instale as dependências:

 ```bash
npm install
 ```
3. Crie um arquivo .env com as variáveis de ambiente necessárias, como a URL do banco de dados.

4. Execute o servidor:

 ```bash
npm start
 ```

 ### Configuração back-end

1. Navegue até o diretório do back-end:

   ```bash
   cd back_end
    ```
2. Instale as dependências:

 ```bash
npm install
 ```
3. Crie um arquivo .env com as variáveis de ambiente necessárias, como a URL do banco de dados.

4. Execute o servidor:

 ```bash
npm run dev
 ```
 O mesmo esta configurado para rodar na porta 3000 por padão.

 ### Configuração front-end

1. Navegue até o diretório do front_end:

   ```bash
   cd front_end
    ```
2. Instale as dependências:

 ```bash
npm install
 ```
3. Confirme o link da API do back-end

4. Execute o servidor:

 ```bash
npm run dev
 ```

 ### Configuração Script Python

1. Navegue até o diretório do front_end:

   ```bash
   cd script
    ```
2. Crie um novo ambiente e Instale as dependências:

 ```bash
python3 -m venv venv

source venv/bin/activate

pip install -r requirements.txt
 ```
3. Crie um arquivo .env com as variáveis de ambiente necessárias, como a chave de API da HUBSPOT.

4. Execute o Script:

### Postman API Link

Aqui está o [[API Documentation Link](https://documenter.getpostman.com/view/26683227/2sA3kVk1pw)]. Nesta documentação, você encontrará informações detalhadas sobre os endpoints disponíveis, incluindo como:

-Obter todas as motos
-Obter uma moto específica pelo ID
-Criar uma nova moto
-Atualizar os detalhes de uma moto existente
-Excluir uma moto pelo ID


