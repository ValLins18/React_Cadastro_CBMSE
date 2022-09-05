# Prova CBMSE 2022

Para concorrer a vaga o candidato terá que desenvolver uma aplicação web utilizando as tecnologias abaixo listadas.


# Tecnologias
- React
- Bootstrap, Material Design ou qualquer framework de estilização


## Instruções da prova

- O candidato deve fazer um **fork** desse repositório e criar sua estrutura de pastas sendo que no mesmo repositório tem que esta o **front-end**.
- Existe uma pasta **server** onde existe um mock de uma api com os end-point nescessarios. Para executar basta acessar a pasta pelo terminal e colocar os comandos `npm install` e `npm start` apos isso basta acessar a url: `http://localhost:6666`
- Após o projeto pronto o candidato deve fazer o *commit e push* para o seu repositório **não sendo necessário** solicitar um **pull-request** basta apenas responder o email _[lima.silva@sergipetec.org.br]()_ com assunto prova finalizada e o link do git


## Projeto

- Existe um Figma com o prototipo [(Link)](https://www.figma.com/file/5TVAkg1MawaEpuMpUDEK3J/Prova-CBM-Front-end?node-id=0%3A1), que deve ser seguido.
- Regras de input:
  - **CPF** deve conter válidição e mascara, mas quando for enviar para o end-point a máscara deve ser retirada
  - **Data de Nascimento** não pode permitir pessoas menores de 18 anos
  - **Signo** deve ser um select com as opções (Com os valores da API)
  - **Tipo Sanguíneo** deve ser um select com a opções (Com os valores da API)
  - **E-mail** deve ter validação de tipo
  - **Telefone** deve ter mascara e validação, mas quando for enviar para o endpoint a máscara deve ser retirada
  - **Formação** pode ser mais de uma
  - **Experiência** pode ser mais de uma
  - **Competencia** é um select option multiplo (Com os valores da API)
  - **Sobre** é campo texto livre
  - **Todos os campos são obrigatórios !!!!!**



## Oque será avaliado?
O desafio será avaliado através dos seguintes critérios.

- O quão próximo chegou ao protótipo
- Habilidade com framework
- Habilidade em estilização de página HTML
- Arquitetura do projeto
- Utilização de componentes
- Responsividade
- Testes unitários

## Oque seria um plus
- Teste de integração (cypress)
- Docker

## Boas Práticas

- O código está bem estruturado?
- O código está fluente na linguagem?
- O código faz o uso correto de Design Patterns?

## Documentação

- O código foi entregue com um arquivo de README claro de como se guiar?
- O código possui comentários pertinentes?
- Os commits são pequenos e consistentes?
- As mensagens de commit são claras?

## Código Limpo

- O código possibilita expansão para novas funcionalidades?
- O código é Don't Repeat Yourself?
- O código é fácil de compreender?

## Links úteis

- [Figma da Prova](https://www.figma.com/file/5TVAkg1MawaEpuMpUDEK3J/Prova-CBM-Front-end?node-id=0%3A1)
- [Design Patterns](https://www.uxpin.com/studio/blog/react-design-patterns/)
- [Material designer](https://mui.com/pt/)
- [Bootstrap](https://getbootstrap.com/)
- [Testes unitarios](https://testing-library.com/docs/react-testing-library/example-intro)
- [React+Docker](https://sharklabs.com.br/reactjs-docker-desenvolvendo-web-apps/)
- [Git-flow](https://medium.com/trainingcenter/utilizando-o-fluxo-git-flow-e63d5e0d5e04)
- [Semantic Commits](https://www.conventionalcommits.org/en/v1.0.0/)
