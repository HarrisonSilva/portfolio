import imgMock from '../mock/thumbMock.png'
import shoppingCartImg from './thumbnails/shoppingcart.png'
import triviaImg from './thumbnails/trivia.png'
import trybetunesImg from './thumbnails/trybetunes.png'
import talkermanageImg from './thumbnails/talkermanage.png'
import pokenextImg from './thumbnails/pokenext.png'
import blogsapiImg from './thumbnails/blogsapi.png'
import storemanagerImg from './thumbnails/storemanager.png'
import creditNextImg from './thumbnails/creditNext.png'
import portfoliopamela from './thumbnails/portfoliopamela.png'

export const projectsData = [
    {   
      id: '1',
      name: 'Shopping Cart',
      deploy: 'https://shoppingcart-nu-three.vercel.app/',
      image: shoppingCartImg,
      type: 'DOM',
      tech: ['JavaScript', 'CSS', 'HTML'],
      details: `Desenvolvi um carrinho de compras dinâmico
       utilizando a API do Mercado Livre para buscar produtos em tempo real
       e implementei o desenvolvimento orientado a testes (TDD) para garantir
       a qualidade do código.`,
      repositorio: 'https://github.com/HarrisonSilva/shoppingcart',
    },
    {
      id: '2',
      name: 'Trivia',
      deploy: 'https://trivia-eosin-tau.vercel.app/',
      image: triviaImg,
      type: 'Frontend',
      tech: ['JavaScript', 'React', 'Redux', 'RTL', 'React Router', 'CSS'],
      details: `O projeto consiste no desenvolvimento de um jogo de perguntas e respostas
                semelhante ao Trivia, inspirado no formato de um show de perguntas e respostas
                A aplicação será construída utilizando as tecnologias React e Redux, e o desenvolvimento
                será realizado em grupo, com a organização das tarefas sendo gerenciada por um quadro Kanban.`,
      repositorio: 'https://github.com/HarrisonSilva/trivia',
    },
    {
      id: '3',
      name: 'TrybeTunes',
      deploy: 'https://trybetunes-red.vercel.app/',
      image: trybetunesImg,
      type: 'Frontend',
      tech: ['JavaScript', 'React', 'Props', 'React Router', 'Tailwind'],
      details: `TrybeTunes e uma aplicação para reprodução de músicas gerenciamento de listas de reprodução
                e edição de perfil, As principais funcionalidades incluem login, pesquisa por banda ou artista
                listagem de álbuns disponíveis, visualização de músicas por álbum, reprodução de prévias favoritação
                e desfavoritação de músicas, visualização da lista de músicas favoritas, exibição do perfil do usuário logado e a capacidade de editar esse perfil.`,
      repositorio: 'https://github.com/HarrisonSilva/trybetunes'
    },
    {
      id: '4',
      name: 'PokeNext',
      deploy: 'https://pokenext-one-tau.vercel.app/',
      image: pokenextImg,
      type: 'Frontend',
      tech: ['NextJs', 'CSS Modules'],
      details: `Utilizando nextjs criei um site aonde sao listado diversos pokemons
                aonde voce poe clicar em cada card e ter mais informaçoes sobre aquele pokemon especifico
                usei css module para a estilizaçao.`,
      repositorio: 'https://github.com/HarrisonSilva/pokenext',
    },
    {
      id: '5',
      name: 'Talk Manager',
      deploy: 'https://github.com/HarrisonSilva/talkermanager',
      image: talkermanageImg,
      type: 'Backend',
      tech: ['Docker', 'Express', 'NodeJS'],
      details: `O projeto consiste na criação de uma aplicação para cadastro de palestrantes
                com uma API que oferece operações básicas de cadastro, leitura, atualização e exclusão (CRUD)
                Além disso, a aplicação incluirá endpoints que utilizam o módulo fs para interagir com um arquivo
                permitindo a persistência de dados dos palestrantes. Em resumo, a solução visa possibilitar 
                o gerenciamento eficiente de informações sobre palestrantes, com funcionalidades completas de manipulação de dados.`,
      repositorio: 'https://github.com/HarrisonSilva/talkermanager',
    },
    {
      id: '6',
      name: 'Blogs API',
      deploy: 'https://github.com/HarrisonSilva/blogsapi',
      image: blogsapiImg,
      type: 'Backend',
      tech: ['Docker', 'MySQL', 'NodeJS', 'Express', 'Sequelize'],
      details: `Este projeto envolve o desenvolvimento de uma aplicação em Node.js para a criação de um blog
                incluindo uma API e um banco de dados. O objetivo principal é implementar as operações CRUD
                (Create, Read, Update, Delete) para posts, utilizando o pacote Sequelize para interação com o banco de dados.`,
      repositorio: 'https://github.com/HarrisonSilva/blogsapi',
    },
    {
      id: '7',
      name: 'Store Manager',
      deploy: 'https://github.com/HarrisonSilva/storemanager',
      image: storemanagerImg,
      type: 'Backend',
      tech: ['Docker', 'mySQL', 'NodeJS', 'Express', 'Chai/Sinon'],
      details: `Foi desenvolvido uma API utilizando a arquitetura MSC (model-service-controller) 
                para um sistema de gerenciamento de vendas no formato dropshipping. A API permitirá operações como criação
                visualização, exclusão e atualização de produtos e vendas. O banco de dados MySQL será utilizado para a gestão dos dados
                e a API será implementada seguindo os princípios RESTful.`,
      repositorio: 'https://github.com/HarrisonSilva/storemanager',
    },
    {
      id: '8',
      name: 'Credit Next',
      deploy: 'https://creditnext.vercel.app/',
      image: creditNextImg,
      type: 'Frontend',
      tech: ['NextJs', 'CSS Modules'],
      details: `O "Credit Next" simplifica o cadastro de cartões de crédito virtual com simulações visuais, oferecendo uma página para gerenciar e excluir cartões
                Fornece também informações úteis sobre diferentes bancos para facilitar a escolha dos usuários. 
                Resumindo, é uma solução intuitiva para gestão de cartões de crédito virtuais.`,
      repositorio: 'https://github.com/HarrisonSilva/creditnext',
    },
    {
      id: '9',
      name: 'Portfolio Pamela Martins',
      deploy: 'https://portfolio-pamela-martins.vercel.app/',
      image: portfoliopamela,
      type: 'Frontend',
      tech: ['NextJs', 'CSS Modules'],
      details: ``,
      repositorio: 'https://github.com/HarrisonSilva/portfolio-pamela-martins',
    },
   /*  {
      id: '8',
      name: 'To Do List',
      deploy: 'https://github.com/HarrisonSilva',
      image: imgMock,
      type: 'Frontend',
      tech: ['JavaScript', 'React', 'Context API', 'Vite', 'React Router', 'Tailwind'],
      details: `molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum`,
      repositorio: 'https://github.com/HarrisonSilva',
    }, */
  ];