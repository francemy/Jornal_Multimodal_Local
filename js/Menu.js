import { Card, Text } from "./components.js";

const cardText = `<div class="w-full mx-auto p-6 overflow-auto  justify-center">
  <div class="bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl mx-auto">
   
    <p class="text-lg text-center text-gray-600 mb-6">Discurso inaugural da Magnífica Reitora Professora Doutora Irmã Maria da Assunção</p>
    
    <!-- Corpo do Texto -->
    <p class="text-base text-gray-700 leading-relaxed mb-4">
      O presente texto corresponde a partes do discurso inaugural da Magnífica Reitora Prof.ª Doutora Irmã Maria da Assunção, na sua tomada de posse no dia 31 de Março de 2022. DISCURSO Nº01/GR/2022
    </p>
    
    <p class="text-base text-gray-700 leading-relaxed mb-4">
      Não estaremos, certamente, equivocados ao afirmar que a sociedade angolana espera muito desta Universidade, sobretudo da sua responsabilidade social que inclui o impulso no desenvolvimento humano, sustentável e inclusivo, por via de uma formação multidisciplinar e integral que estimula atitudes éticas, humanas e cristãs que impregnem o ser e o agir das novas gerações comprometidas com o bem, o belo, o certo e o justo que não fragmenta nem vilipendia, mas une, engrandece e dignifica qualquer um (...).
    </p>
    
    <p class="text-base text-gray-700 leading-relaxed mb-4">
      (…) Parece-nos que esta palavra “desafio” no plural é a mais acertada para o que nos espera à frente desta instituição, com inúmeras exigências tanto no plano interno, quanto no externo, numa altura em que o crescimento numérico das universidades no País reforça o sentido da concorrência que constitui uma oportunidade para a nossa afirmação, como uma instituição que se distingue pelo rigor, pela qualidade, pelos seus valores e missão. Mas expõe-nos, simultaneamente, ao risco potencial de perdermos estudantes e professores que, por razões diversas, podem vir a preferir essas outras universidades, se não estivermos à altura das exigências que esta concorrência nos impõe.
    </p>

    <p class="text-base text-gray-700 leading-relaxed mb-4">
      De facto, se, em 1999, éramos a única Universidade privada de Angola, hoje a realidade é cada vez mais desafiante, facto que se agudiza por termos sido, durante alguns anos, a Universidade de Angola mais bem posicionada nos rankings das cem melhores universidades africanas e, no ano transacto, deixamos de constar entre as cem melhores.
    </p>

    <p class="text-base text-gray-700 leading-relaxed mb-4">
      Precisamos, pois, de nos reposicionar como Universidade Católica que sempre primou pela qualidade, excelência e distinção, por via de uma aposta clara na investigação científica e na formação multidisciplinar e multidimensional, tendo em vista uma formação integral que, nos termos do Papa Paulo VI, visa transformar o homem todo e todos os homens.
    </p>

    <p class="text-base text-gray-700 leading-relaxed mb-4">
      Para isso, impõe-se a adopção de novas estratégias, novas atitudes e novas acções para, juntos e unidos, enfrentarmos esta concorrência, trabalhando no sentido de a UCAN continuar a ser atraente para aqueles que estão dentro e para aqueles que estão fora dela.
    </p>

    <p class="text-base text-gray-700 leading-relaxed mb-4">
      E, para isso, pensamos ser fundamental que, no plano interno, assumamos, entre outros, os seguintes desafios:
    </p>

    <ul class="list-disc list-inside text-gray-700 mb-4">
      <li>Identificar parceiros e elaborar estratégias que nos permitam diversificar as nossas fontes de receitas;</li>
      <li>Definir e eleger, pelo menos, duas linhas de investigação que sejam, institucionalmente, assumidas como marca da UCAN;</li>
      <li>Criar novos espaços físicos para aumentar a oferta formativa tanto na graduação quanto na pós-graduação;</li>
      <li>Melhorar as condições de trabalho e criar um ambiente institucional mais acolhedor;</li>
      <li>Criar um sector de acompanhamento e controlo da gestão e da qualidade;</li>
      <li>Apostar num Instituto de línguas, em especial do inglês e do francês como vias para a internacionalização da UCAN;</li>
      <li>Traduzir toda a produção científica relevante da UCAN para a língua inglesa, criando um gabinete próprio.</li>
    </ul>

    <p class="text-base text-gray-700 leading-relaxed mb-4">
      O plano externo também faz parte das nossas prioridades e por esta razão, prevemos:
    </p>

    <ul class="list-disc list-inside text-gray-700 mb-4">
      <li>Avaliar e revitalizar os acordos de cooperação existentes com instituições internacionais;</li>
      <li>Selecionar e eleger para cooperação preferencial, algumas universidades e instituições estrangeiras.</li>
    </ul>

    <p class="text-base text-gray-700 leading-relaxed mb-4">
      Estamos, deveras convencidos, de que com a materialização desses pressupostos por intermédio do inestimável contributo de cada um e de todos, conseguiremos, certamente, elevar mais alto o nome da nossa UCAN.
    </p>

    <p class="text-base text-gray-700 leading-relaxed mb-4">
      Bem-haja, UCAN; <br>Bem-haja, Angola. <br>Luanda, aos 31 de Março de 2022.
    </p>
  </div>
</div>
`

const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    mobileMenu.classList.toggle('flex');
});

// Página de Notícia
class NewsPage {
    constructor() {
        this.element = null;
    }
    /**
     * 
     * dispPequeno
     * dispPequeno: { min: '320px', max: '639px' },  // Intervalo para telas pequenas (320px até 639px)
        dispMedio: { min: '640px', max: '1023px' },  // Intervalo para telas médias (640px até 1023px)
        dispGrande: { min: '1024px', max: '1535px' }, 
     */

    render() {
        this.element = document.createElement('div');
        const panel = document.createElement('section');
        panel.className = 'flex flex-col gap-4 bg-bgSecondary p-2  sm:min-w-70'
        this.element.className = 'mx-auto p-6 bg-gray-100 grid dispMedio:grid-cols-2 dispGrande:grid-cols-4 gap-2 w-full';

        // Título da Página
        const pageTitle = new Text('Notícias - Universidade Católica de Angola', 'title', 'text-center text-3xl font-bold text-primary mb-8');
        panel.appendChild(pageTitle.render());

        // Seção de Livros à Venda
        
        

        //reitoria 
        const cardReitoria = new Card(null,'', cardText,true)
        panel.appendChild(cardReitoria.render())
        const booksTitle = new Text('Livros à Venda', 'subtitle', 'text-center text-2xl font-semibold mb-6');
        panel.appendChild(booksTitle.render());
        // Livros
        const books = [
            { title: 'Plano de contabilidade explicado', description: 'Explicação detalhada sobre o plano de contabilidade.', price: '18.500 Kz' },
            { title: 'Legislação fiscal', description: 'Tudo sobre a legislação fiscal em Angola.', price: '14.500 Kz' },
            { title: 'Plano geral de contabilidade', description: 'Plano geral de contabilidade para estudantes e profissionais.', price: '9.000 Kz' },
            { title: 'Código civil', description: 'O código civil angolano para advogados e estudantes.', price: '20.000 Kz' },
            { title: 'Dicionário Oxford Míni', description: 'Dicionário compacto e essencial para o seu dia a dia.', price: '7.000 Kz' },
            { title: 'Constituição da República', description: 'A constituição de Angola explicada detalhadamente.', price: '7.000 Kz' },
            { title: 'Lei geral do trabalho', description: 'A lei que rege o trabalho em Angola.', price: '7.500 Kz' },
            { title: 'Práticas contabilísticas', description: 'Práticas contábeis essenciais para profissionais.', price: '16.500 Kz' },
            { title: 'Legislação comercial', description: 'Estudo sobre a legislação comercial em Angola.', price: '15.500 Kz' },
            { title: 'Localização Luanda - São Paulo', description: 'Informações geográficas e logísticas sobre a localização de Luanda.', price: 'Preço sob consulta' }
        ];

        books.forEach(book => {
            const bookCard = new Card(null,book.title, book.description+book.price);
            this.element.appendChild(bookCard.render());
        });


        panel.appendChild(this.element)

        // Seção de Eventos
        const eventsTitle = new Text('Eventos', 'subtitle', 'text-center text-2xl font-semibold mb-6');
        panel.appendChild(eventsTitle.render());

        // Evento: Semana do Empreendedorismo
        const eventCard = new Card(null,
            'Semana Global do Empreendedorismo',
            'Hoje, na Universidade Católica de Angola, a AEUCAN realizou um evento que visou congregar os empreendedores para debater e expor ideias.',
        );

        panel.appendChild(eventCard.render());

        return panel;
    }
}

// Renderizando a página
const newsPage = new NewsPage();
const mainElement = document.querySelector('main');
mainElement.appendChild(newsPage.render());