# Newbie webpack simple

> Template feito por iniciante..

## Instalação

  # instalar com vue-cli
  vue init leonardovilarinho/newbie-webpack-simple nome-do-projeto

  # entrar no diretório do projeto, instalar dependências e iniciar servidor
  cd nome-do-projeto
  npm install
  npm run dev

## Criando componentes

Basta criar seus componentes no diretório `/src/componentes/`

## Criando e ativando diretivas

Basta criar suas diretivas no diretório `/src/directives/` e no arquivo `/src/directives/actives.js`, registrar:

  require('./arquivo-da-diretiva')

## Criando e ativando plugins

Basta criar seus plugins no diretório `/src/plugins/` e no arquivo `/src/plugins/actives.js`, registrar:

  import ExampleP from './ExampleP'
  Vue.use( ExampleP )

## Criando rotas

No arquivo `/src/routes.js` apenas importe e registre suas rotas normalmente no VueRouter.

## Vuex

Basta seguir os nomes dos arquivos da pasta `/src/vuex/`, criando módulos, getters, actions e mutations em seus respectivos arquivos
