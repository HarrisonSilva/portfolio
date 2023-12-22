import imgMock from '../mock/thumbMock.png'
import shoppingCartImg from './thumbnails/shoppingcart.png'
import triviaImg from './thumbnails/trivia.png'
import trybetunesImg from './thumbnails/trybetunes.png'
import talkermanageImg from './thumbnails/talkermanage.png'

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
      name: 'To Do List',
      deploy: 'https://github.com/HarrisonSilva',
      image: imgMock,
      type: 'Frontend',
      tech: ['JavaScript', 'React', 'Context API', 'Vite', 'React Router', 'Tailwind'],
      details: `molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum`,
      repositorio: 'https://github.com/HarrisonSilva',
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
      deploy: 'https://github.com/HarrisonSilva',
      image: imgMock,
      type: 'Backend',
      tech: ['Docker', 'mySQL', 'NodeJS', 'Express', 'Sequelize'],
      details: `molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum`,
      repositorio: 'https://github.com/HarrisonSilva',
    },
    {
      id: '7',
      name: 'Store Manager',
      deploy: 'https://github.com/HarrisonSilva',
      image: imgMock,
      type: 'Backend',
      tech: ['Docker', 'mySQL', 'NodeJS', 'Express', 'Chai/Sinon'],
      details: `molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum`,
      repositorio: 'https://github.com/HarrisonSilva',
    },
  ];