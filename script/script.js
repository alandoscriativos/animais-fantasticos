//TabNav 
function initTab(){
    const tabMenu = document.querySelectorAll('.js-tabmenu li');
    const content = document.querySelectorAll('.js-tabcontent section');

        content[0].classList.add('ativo');
        function activeTab(index){
            content.forEach((section)=>{
                section.classList.remove('ativo');
            });
            content[index].classList.add('ativo');
        }

        tabMenu.forEach((itemMenu, index)=>{
            itemMenu.addEventListener('click', function(){
                activeTab(index);
            })
        });
    }
initTab();

//Script para as Faqs
function initAccordion(){
    const selectorFaq = document.querySelectorAll('.js-accordion dt');

    function accordionClick(event){
    this.classList.toggle('ativo');
    this.nextElementSibling.classList.toggle('ativo');
    };

    selectorFaq.forEach((item)=>{
        item.addEventListener('click', accordionClick);
    });
}

initAccordion();

//Suavizar Links
function initScroll(){
    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

    function activeScroll(event){
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);

        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    }

    linksInternos.forEach((link)=>{
        link.addEventListener('click', activeScroll);
    });
}

initScroll();

//Animação Scroll
const sections = document.querySelectorAll('.js-scroll');

function animaScroll(){
    sections.forEach((section)=>{
        const sectionTop = section.getBoundingClientRect();
        console.log(sectionTop)
    })

}

window.addEventListener('scroll', animaScroll);