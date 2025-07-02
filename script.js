// Dados das notícias para o modal
const noticiasData = {
    1: {
        titulo: "AAPE discute direitos das pessoas com epilepsia em encontro regional",
        data: "15 de Novembro, 2024",
        categoria: "Direitos",
        imagem: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800",
        conteudo: `
            <p>O encontro regional sobre direitos das pessoas com epilepsia reuniu mais de 100 participantes, incluindo profissionais de saúde, advogados, representantes do poder público e pessoas com epilepsia. Durante o evento, foram discutidos temas como direitos trabalhistas, acesso a medicamentos, inclusão escolar e combate ao preconceito.</p>
            
            <p>A AAPE apresentou dados sobre a situação das pessoas com epilepsia na região e propôs ações concretas para melhorar a qualidade de vida desta população. Entre os principais pontos abordados estavam:</p>
            
            <ul style="margin: 1rem 0; padding-left: 2rem;">
                <li>Direitos no ambiente de trabalho e proteção contra discriminação</li>
                <li>Acesso facilitado a medicamentos através do SUS</li>
                <li>Políticas de inclusão nas escolas públicas e privadas</li>
                <li>Campanhas de conscientização para reduzir o estigma social</li>
            </ul>
            
            <p>O evento resultou na criação de um grupo de trabalho permanente que irá monitorar a implementação das propostas discutidas e promover novos encontros regionais. A próxima reunião está prevista para março de 2025.</p>
        `
    },
    2: {
        titulo: "Nova campanha de conscientização chega às escolas de Ipatinga",
        data: "08 de Novembro, 2024",
        categoria: "Educação",
        imagem: "https://images.pexels.com/photos/8363028/pexels-photo-8363028.jpeg?auto=compress&cs=tinysrgb&w=800",
        conteudo: `
            <p>A campanha "Epilepsia na escola" já visitou 15 instituições de ensino em Ipatinga, alcançando mais de 2.000 estudantes e 200 professores. A iniciativa inclui palestras educativas, distribuição de material informativo e treinamento para professores sobre como agir durante uma crise epiléptica.</p>
            
            <p>O feedback tem sido extremamente positivo, com relatos de maior compreensão e redução significativa do bullying relacionado à epilepsia. Os principais objetivos da campanha incluem:</p>
            
            <ul style="margin: 1rem 0; padding-left: 2rem;">
                <li>Desmistificar conceitos errôneos sobre a epilepsia</li>
                <li>Ensinar primeiros socorros durante crises epilépticas</li>
                <li>Promover a inclusão de estudantes com epilepsia</li>
                <li>Capacitar educadores para lidar com situações de emergência</li>
            </ul>
            
            <p>A diretora da Escola Municipal Santos Dumont, Maria José Silva, comentou: "A palestra transformou completamente a visão dos nossos alunos sobre a epilepsia. Agora eles sabem como ajudar e não têm mais medo."</p>
            
            <p>A campanha continuará durante todo o ano letivo de 2025, com previsão de alcançar todas as escolas da rede municipal e estadual de Ipatinga.</p>
        `
    },
    3: {
        titulo: "Grupo de apoio para familiares amplia atendimento",
        data: "02 de Novembro, 2024",
        categoria: "Apoio",
        imagem: "https://images.pexels.com/photos/7551667/pexels-photo-7551667.jpeg?auto=compress&cs=tinysrgb&w=800",
        conteudo: `
            <p>O grupo de apoio para familiares da AAPE agora oferece sessões presenciais e online, atendendo às necessidades de famílias de toda a região. Com a coordenação de psicólogos especializados, os encontros abordam temas como manejo emocional, comunicação familiar, estratégias de cuidado e autocuidado.</p>
            
            <p>A modalidade online permitiu a participação de famílias de cidades vizinhas, fortalecendo a rede de apoio regional. Os novos horários incluem:</p>
            
            <ul style="margin: 1rem 0; padding-left: 2rem;">
                <li>Segundas-feiras: 19h às 20h30 (online)</li>
                <li>Quartas-feiras: 14h às 15h30 (presencial)</li>
                <li>Sábados: 9h às 10h30 (presencial - quinzenal)</li>
            </ul>
            
            <p>A psicóloga responsável, Dra. Ana Carolina Mendes, explica: "O apoio familiar é fundamental no tratamento da epilepsia. Quando a família está bem informada e emocionalmente preparada, toda a dinâmica de cuidado melhora significativamente."</p>
            
            <p>Para participar dos grupos, basta entrar em contato com a AAPE pelo telefone (31) 98472-9803 ou pelo e-mail contato@aape-ipatinga.org.br. A participação é gratuita e não há necessidade de agendamento prévio.</p>
        `
    },
    4: {
        titulo: "Novos avanços no tratamento da epilepsia são apresentados em congresso",
        data: "25 de Outubro, 2024",
        categoria: "Pesquisa",
        imagem: "https://images.pexels.com/photos/3825581/pexels-photo-3825581.jpeg?auto=compress&cs=tinysrgb&w=800",
        conteudo: `
            <p>O 15º Congresso Brasileiro de Epilepsia apresentou importantes avanços no tratamento da condição, incluindo novas terapias medicamentosas, técnicas cirúrgicas minimamente invasivas e dispositivos de neuroestimulação. Representantes da AAPE participaram do evento para se manterem atualizados sobre as últimas descobertas científicas.</p>
            
            <p>Entre os principais destaques do congresso estavam:</p>
            
            <ul style="margin: 1rem 0; padding-left: 2rem;">
                <li>Novos medicamentos antiepilépticos com menos efeitos colaterais</li>
                <li>Técnicas de cirurgia a laser para epilepsia focal</li>
                <li>Dispositivos de estimulação cerebral profunda</li>
                <li>Terapias genéticas experimentais para epilepsias raras</li>
            </ul>
            
            <p>Dr. Roberto Silva, neurologista e parceiro da AAPE, destacou: "Estamos vivendo uma era de grandes avanços no tratamento da epilepsia. Muitas pessoas que antes não tinham opções terapêuticas agora podem ter esperança de uma vida livre de crises."</p>
            
            <p>A AAPE está organizando uma palestra gratuita para compartilhar essas informações com a comunidade. O evento será realizado em dezembro de 2024, na sede da associação.</p>
        `
    },
    5: {
        titulo: "AAPE lança programa de capacitação para novos voluntários",
        data: "18 de Outubro, 2024",
        categoria: "Voluntariado",
        imagem: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=800",
        conteudo: `
            <p>A AAPE lançou um programa abrangente de capacitação para voluntários, visando formar uma rede ainda maior de apoio à comunidade de pessoas com epilepsia. O programa inclui módulos sobre conhecimentos básicos sobre epilepsia, primeiros socorros, comunicação empática e atividades de apoio.</p>
            
            <p>O curso tem duração de 40 horas, distribuídas em 8 semanas, e aborda os seguintes temas:</p>
            
            <ul style="margin: 1rem 0; padding-left: 2rem;">
                <li>Fundamentos médicos da epilepsia</li>
                <li>Aspectos psicossociais da condição</li>
                <li>Técnicas de primeiros socorros durante crises</li>
                <li>Comunicação e escuta ativa</li>
                <li>Organização de eventos e atividades</li>
                <li>Direitos das pessoas com epilepsia</li>
            </ul>
            
            <p>Maria Santos, coordenadora de voluntários da AAPE, explica: "Nosso objetivo é formar voluntários bem preparados, que possam oferecer apoio qualificado e seguro. Cada pessoa que se junta à nossa equipe multiplica nossa capacidade de ajudar."</p>
            
            <p>As inscrições para a próxima turma estão abertas até 30 de novembro. Os interessados podem se inscrever através do site da AAPE ou presencialmente na sede da associação.</p>
        `
    },
    6: {
        titulo: "Aplicativo móvel ajuda no monitoramento de crises epilépticas",
        data: "10 de Outubro, 2024",
        categoria: "Tecnologia",
        imagem: "https://images.pexels.com/photos/3938023/pexels-photo-3938023.jpeg?auto=compress&cs=tinysrgb&w=800",
        conteudo: `
            <p>Um novo aplicativo móvel desenvolvido em parceria com universidades brasileiras está revolucionando o monitoramento de crises epilépticas. O app permite que pacientes e familiares registrem episódios, sintomas, medicações e fatores desencadeantes, criando um diário digital completo.</p>
            
            <p>As principais funcionalidades do aplicativo incluem:</p>
            
            <ul style="margin: 1rem 0; padding-left: 2rem;">
                <li>Registro rápido de crises com data, hora e características</li>
                <li>Lembretes para medicação</li>
                <li>Gráficos e relatórios para consultas médicas</li>
                <li>Identificação de padrões e fatores desencadeantes</li>
                <li>Contatos de emergência integrados</li>
                <li>Informações educativas sobre epilepsia</li>
            </ul>
            
            <p>Dr. Carlos Mendes, neurologista e consultor do projeto, comenta: "Este tipo de ferramenta é fundamental para melhorar o controle da epilepsia. Com dados precisos, podemos ajustar tratamentos de forma mais eficaz."</p>
            
            <p>A AAPE está promovendo workshops para ensinar o uso do aplicativo. O app está disponível gratuitamente nas lojas de aplicativos para Android e iOS.</p>
        `
    },
    7: {
        titulo: "Dia Mundial da Epilepsia é celebrado com atividades especiais",
        data: "28 de Setembro, 2024",
        categoria: "Evento",
        imagem: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=600",
        conteudo: `
            <p>O Dia Mundial da Epilepsia foi celebrado com uma série de atividades especiais organizadas pela AAPE em parceria com a Prefeitura de Ipatinga. O evento principal aconteceu na Praça dos Pioneiros, com palestras, stands informativos, apresentações culturais e atividades para toda a família.</p>
            
            <p>A programação incluiu:</p>
            
            <ul style="margin: 1rem 0; padding-left: 2rem;">
                <li>Palestras sobre epilepsia e qualidade de vida</li>
                <li>Demonstrações de primeiros socorros</li>
                <li>Apresentações musicais e teatrais</li>
                <li>Distribuição de material educativo</li>
                <li>Consultas gratuitas com neurologistas</li>
                <li>Atividades recreativas para crianças</li>
            </ul>
            
            <p>O evento contou com a participação de mais de 500 pessoas e foi transmitido ao vivo pelas redes sociais da AAPE, alcançando milhares de visualizações. O prefeito de Ipatinga, João Silva, esteve presente e reafirmou o compromisso da cidade com a inclusão e o apoio às pessoas com epilepsia.</p>
            
            <p>Ana Paula, pessoa com epilepsia e voluntária da AAPE, emocionou o público ao compartilhar sua história: "Eventos como este mostram que não estamos sozinhos. A epilepsia faz parte da minha vida, mas não me define."</p>
        `
    }
};

// Scroll Animation Observer
class ScrollAnimationObserver {
    constructor() {
        this.observer = null;
        this.init();
    }

    init() {
        this.observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Pequeno delay para evitar o "piscar"
                        setTimeout(() => {
                            entry.target.classList.add('is-visible');
                        }, 50);
                    }
                });
            },
            {
                threshold: 0.15, // Aumentei o threshold para melhor controle
                rootMargin: '0px 0px -10% 0px' // Reduzido para ativar mais cedo
            }
        );

        // Aguarda um pouco antes de observar os elementos
        setTimeout(() => {
            this.observeElements();
        }, 100);
    }

    observeElements() {
        const animatedElements = document.querySelectorAll('.animate-on-scroll');
        animatedElements.forEach((el) => {
            this.observer.observe(el);
        });
    }
}

// Mobile Menu Handler
class MobileMenuHandler {
    constructor() {
        this.menuBtn = document.getElementById('mobileMenuBtn');
        this.mobileMenu = document.getElementById('mobileMenu');
        this.init();
    }

    init() {
        if (this.menuBtn && this.mobileMenu) {
            this.menuBtn.addEventListener('click', () => this.toggleMenu());
            
            // Close menu when clicking on nav links
            const navLinks = this.mobileMenu.querySelectorAll('.mobile-nav-link');
            navLinks.forEach(link => {
                link.addEventListener('click', () => this.closeMenu());
            });

            // Close menu when clicking outside
            document.addEventListener('click', (e) => {
                if (!this.menuBtn.contains(e.target) && !this.mobileMenu.contains(e.target)) {
                    this.closeMenu();
                }
            });
        }
    }

    toggleMenu() {
        this.menuBtn.classList.toggle('active');
        this.mobileMenu.classList.toggle('active');
        
        // Update icon
        const icon = this.menuBtn.querySelector('svg');
        if (this.mobileMenu.classList.contains('active')) {
            icon.innerHTML = `
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
            `;
        } else {
            icon.innerHTML = `
                <line x1="3" x2="21" y1="6" y2="6"/>
                <line x1="3" x2="21" y1="12" y2="12"/>
                <line x1="3" x2="21" y1="18" y2="18"/>
            `;
        }
    }

    closeMenu() {
        this.menuBtn.classList.remove('active');
        this.mobileMenu.classList.remove('active');
        
        // Reset icon
        const icon = this.menuBtn.querySelector('svg');
        icon.innerHTML = `
            <line x1="3" x2="21" y1="6" y2="6"/>
            <line x1="3" x2="21" y1="12" y2="12"/>
            <line x1="3" x2="21" y1="18" y2="18"/>
        `;
    }
}

// Smooth Scroll Handler
class SmoothScrollHandler {
    constructor() {
        this.init();
    }

    init() {
        // Handle all anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = anchor.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    const headerHeight = 100;
                    const elementPosition = targetElement.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: elementPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
}

// Active Section Tracker & Header Scroll Effect
class HeaderHandler {
    constructor() {
        this.header = document.querySelector('.header');
        this.sections = document.querySelectorAll('section[id]');
        this.navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
        this.init();
    }

    init() {
        window.addEventListener('scroll', () => {
            this.handleScroll();
            this.updateActiveSection();
        });
    }

    handleScroll() {
        const scrollY = window.scrollY;
        
        // Header scroll effect
        if (scrollY > 50) {
            this.header.classList.add('scrolled');
        } else {
            this.header.classList.remove('scrolled');
        }
    }

    updateActiveSection() {
        const scrollPosition = window.scrollY + 150;

        this.sections.forEach((section) => {
            const top = section.offsetTop;
            const height = section.offsetHeight;

            if (scrollPosition >= top && scrollPosition < top + height) {
                this.setActiveLink(section.id);
            }
        });
    }

    setActiveLink(activeId) {
        this.navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${activeId}`) {
                link.classList.add('active');
            }
        });
    }
}

// Carousel Handler
class CarouselHandler {
    constructor() {
        this.carousel = document.getElementById('parceirosCarousel');
        this.prevBtn = document.getElementById('prevBtn');
        this.nextBtn = document.getElementById('nextBtn');
        this.isPlaying = true;
        this.init();
    }

    init() {
        if (this.prevBtn && this.nextBtn && this.carousel) {
            this.prevBtn.addEventListener('click', () => this.prevSlide());
            this.nextBtn.addEventListener('click', () => this.nextSlide());
            
            // Pause on hover
            this.carousel.addEventListener('mouseenter', () => this.pauseAnimation());
            this.carousel.addEventListener('mouseleave', () => this.playAnimation());
        }
    }

    prevSlide() {
        this.carousel.style.animationDirection = 'reverse';
        this.carousel.style.animationDuration = '1s';
        setTimeout(() => {
            this.carousel.style.animationDirection = 'normal';
            this.carousel.style.animationDuration = '30s';
        }, 1000);
    }

    nextSlide() {
        this.carousel.style.animationDuration = '1s';
        setTimeout(() => {
            this.carousel.style.animationDuration = '30s';
        }, 1000);
    }

    pauseAnimation() {
        this.carousel.style.animationPlayState = 'paused';
    }

    playAnimation() {
        this.carousel.style.animationPlayState = 'running';
    }
}

// Theme Handler
class ThemeHandler {
    constructor() {
        this.themeToggle = document.getElementById('themeToggle');
        this.currentTheme = localStorage.getItem('theme') || 'light';
        this.init();
    }

    init() {
        this.applyTheme(this.currentTheme);
        
        if (this.themeToggle) {
            this.themeToggle.addEventListener('click', () => this.toggleTheme());
        }
    }

    toggleTheme() {
        this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        this.applyTheme(this.currentTheme);
        localStorage.setItem('theme', this.currentTheme);
    }

    applyTheme(theme) {
        if (theme === 'dark') {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
        
        // Update theme toggle icon
        if (this.themeToggle) {
            const icon = this.themeToggle.querySelector('svg');
            if (theme === 'dark') {
                icon.innerHTML = `
                    <circle cx="12" cy="12" r="5"/>
                    <path d="M12 1v2"/>
                    <path d="M12 21v2"/>
                    <path d="M4.22 4.22l1.42 1.42"/>
                    <path d="M18.36 18.36l1.42 1.42"/>
                    <path d="M1 12h2"/>
                    <path d="M21 12h2"/>
                    <path d="M4.22 19.78l1.42-1.42"/>
                    <path d="M18.36 5.64l1.42-1.42"/>
                `;
            } else {
                icon.innerHTML = `<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>`;
            }
        }
    }
}

// Font Size Handler
class FontSizeHandler {
    constructor() {
        this.increaseFontBtn = document.getElementById('increaseFontSize');
        this.decreaseFontBtn = document.getElementById('decreaseFontSize');
        this.resetFontBtn = document.getElementById('resetFontSize');
        this.currentSize = parseInt(localStorage.getItem('fontSize')) || 16;
        this.minSize = 12;
        this.maxSize = 24;
        this.init();
    }

    init() {
        this.applyFontSize(this.currentSize);
        
        if (this.increaseFontBtn) {
            this.increaseFontBtn.addEventListener('click', () => this.increaseFontSize());
        }
        
        if (this.decreaseFontBtn) {
            this.decreaseFontBtn.addEventListener('click', () => this.decreaseFontSize());
        }
        
        if (this.resetFontBtn) {
            this.resetFontBtn.addEventListener('click', () => this.resetFontSize());
        }
    }

    increaseFontSize() {
        if (this.currentSize < this.maxSize) {
            this.currentSize += 2;
            this.applyFontSize(this.currentSize);
            localStorage.setItem('fontSize', this.currentSize.toString());
        }
    }

    decreaseFontSize() {
        if (this.currentSize > this.minSize) {
            this.currentSize -= 2;
            this.applyFontSize(this.currentSize);
            localStorage.setItem('fontSize', this.currentSize.toString());
        }
    }

    resetFontSize() {
        this.currentSize = 16;
        this.applyFontSize(this.currentSize);
        localStorage.setItem('fontSize', this.currentSize.toString());
    }

    applyFontSize(size) {
        document.documentElement.style.fontSize = `${size}px`;
        
        if (this.resetFontBtn) {
            this.resetFontBtn.textContent = `${size}px`;
        }
        
        // Update button states
        if (this.increaseFontBtn) {
            this.increaseFontBtn.disabled = size >= this.maxSize;
        }
        
        if (this.decreaseFontBtn) {
            this.decreaseFontBtn.disabled = size <= this.minSize;
        }
    }
}

// Accessibility Controls Handler
class AccessibilityControlsHandler {
    constructor() {
        this.controls = document.getElementById('accessibilityControls');
        this.closeBtn = document.getElementById('accessibilityClose');
        this.init();
    }

    init() {
        // Load saved state
        const isHidden = localStorage.getItem('accessibilityControlsHidden') === 'true';
        if (isHidden) {
            this.hideControls();
        }

        if (this.closeBtn) {
            this.closeBtn.addEventListener('click', () => this.hideControls());
        }

        // Create show button
        this.createShowButton();
    }

    hideControls() {
        if (this.controls) {
            this.controls.classList.remove('visible');
            this.controls.classList.add('hidden');
            localStorage.setItem('accessibilityControlsHidden', 'true');
        }
    }

    showControls() {
        if (this.controls) {
            this.controls.classList.remove('hidden');
            this.controls.classList.add('visible');
            localStorage.setItem('accessibilityControlsHidden', 'false');
        }
    }

    createShowButton() {
        const showBtn = document.createElement('button');
        showBtn.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="4,7 4,4 20,4 20,7"/>
                <line x1="9" x2="15" y1="20" y2="20"/>
                <line x1="12" x2="12" y1="4" y2="20"/>
            </svg>
        `;
        showBtn.className = 'accessibility-show-btn';
        showBtn.style.cssText = `
            position: fixed;
            right: 1rem;
            top: 50%;
            transform: translateY(-50%);
            z-index: 999;
            background: var(--purple-600);
            color: white;
            border: none;
            border-radius: 50%;
            width: 48px;
            height: 48px;
            cursor: pointer;
            box-shadow: 0 4px 12px rgba(0,0,0,0.2);
            transition: all 0.3s ease;
            display: none;
            align-items: center;
            justify-content: center;
        `;
        
        showBtn.addEventListener('click', () => this.showControls());
        document.body.appendChild(showBtn);

        // Show/hide the button based on controls visibility
        const updateShowButton = () => {
            if (this.controls.classList.contains('hidden')) {
                showBtn.style.display = 'flex';
            } else {
                showBtn.style.display = 'none';
            }
        };

        // Initial update
        updateShowButton();

        // Watch for changes
        const observer = new MutationObserver(updateShowButton);
        observer.observe(this.controls, { attributes: true, attributeFilter: ['class'] });
    }
}

// News Modal Handler
class NewsModalHandler {
    constructor(noticias) {
        this.noticias = noticias; // Garantir que as notícias sejam passadas corretamente
        this.modal = document.getElementById('noticiaModal');
        this.modalTitle = document.getElementById('modalTitle');
        this.modalImage = document.getElementById('modalImage');
        this.modalDate = document.getElementById('modalDate');
        this.modalCategory = document.getElementById('modalCategory');
        this.modalContent = document.getElementById('modalContent');
        this.modalClose = document.getElementById('modalClose');
        this.init();
    }

    init() {
        // Adicionar listeners para os cards de notícias
        document.querySelectorAll('.noticia-card').forEach(card => {
            card.addEventListener('click', (e) => {
                e.preventDefault();
                const noticiaId = parseInt(card.dataset.noticiaId, 10); // Garantir que o ID seja numérico
                this.openModal(noticiaId);
            });
        });

        // Listener para fechar o modal
        if (this.modalClose) {
            this.modalClose.addEventListener('click', () => this.closeModal());
        }

        if (this.modal) {
            this.modal.addEventListener('click', (e) => {
                if (e.target === this.modal) {
                    this.closeModal();
                }
            });
        }

        // Fechar modal com a tecla Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.modal.classList.contains('active')) {
                this.closeModal();
            }
        });
    }

    openModal(noticiaId) {
        const noticia = this.noticias.find(n => parseInt(n.ID, 10) === noticiaId); // Buscar a notícia correta pelo ID
        if (!noticia) {
            console.error(`Notícia com ID ${noticiaId} não encontrada.`);
            return;
        }

        // Formatar a data para dd/mm/aaaa
        const formattedDate = new Date(noticia.data).toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });

        this.modalTitle.textContent = noticia.titulo;
        this.modalImage.src = noticia.imagem_url;
        this.modalImage.alt = noticia.titulo;
        this.modalDate.textContent = formattedDate;
        this.modalCategory.textContent = noticia.subtitulo;
        this.modalContent.innerHTML = noticia.conteudo;

        this.modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    closeModal() {
        this.modal.classList.remove('active');
        document.body.style.overflow = 'unset';
    }
}

// Função para buscar notícias da API
async function fetchNoticias() {
    const apiUrl = "https://script.google.com/macros/s/AKfycby8U7VqPva3ymAQBLGJCWo0cp6thk9znVs5H2PEtaDFcv-Hedcswfrq7LcejRAQv7SS/exec";

    try {
        const response = await fetch(apiUrl);
        const noticias = await response.json();

        const noticiasContainer = document.querySelector('.noticias-carousel');
        noticiasContainer.innerHTML = ''; // Limpa o conteúdo existente

        noticias.forEach(noticia => {
            if (noticia.Publicado) {
                const noticiaCard = document.createElement('article');
                noticiaCard.className = 'noticia-card';
                noticiaCard.dataset.noticiaId = noticia.ID; // Usar o ID numérico diretamente

                // Formatar a data para dd/mm/aaaa
                const formattedDate = new Date(noticia.data).toLocaleDateString('pt-BR', {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric'
                });

                noticiaCard.innerHTML = `
                    <div class="noticia-image">
                        <img src="${noticia.imagem_url}" alt="${noticia.titulo}" />
                        <span class="noticia-categoria">${noticia.subtitulo}</span>
                    </div>
                    <div class="noticia-content">
                        <div class="noticia-date">
                            <svg fill="none" height="16" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" width="16">
                                <rect height="18" rx="2" ry="2" width="18" x="3" y="4"></rect>
                                <line x1="16" x2="16" y1="2" y2="6"></line>
                                <line x1="8" x2="8" y1="2" y2="6"></line>
                                <line x1="3" x2="21" y1="10" y2="10"></line>
                            </svg>
                            ${formattedDate}
                        </div>
                        <h3>${noticia.titulo}</h3>
                        <p>${noticia.conteudo.substring(0, 100)}...</p>
                        <button class="btn-link">
                            <svg fill="none" height="16" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" width="16">
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                <circle cx="12" cy="12" r="3"></circle>
                            </svg>
                            Ler mais
                        </button>
                    </div>
                `;

                noticiasContainer.appendChild(noticiaCard);
            }
        });

        // Atualiza o modal de notícias com os dados corretos
        new NewsModalHandler(noticias);
    } catch (error) {
        console.error("Erro ao buscar notícias:", error);
    }
}

// Chama a função ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    fetchNoticias();
});

// Initialize all handlers when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.newsletter-form');

  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const formData = new FormData(form);
      const action = form.getAttribute('action');

      try {
        await fetch(action, {
          method: 'POST',
          body: formData,
          headers: { 'Accept': 'application/json' }
        });

        showPopup();
        form.reset();
      } catch (error) {
        alert('Erro ao enviar. Tente novamente mais tarde.');
      }
    });
  }

  function showPopup() {
    const popupWrapper = document.createElement('div');
    popupWrapper.innerHTML = `
      <div id="newsletter-popup" style="
        position: fixed;
        top: 50%; left: 50%;
        transform: translate(-50%, -50%) scale(0.9);
        opacity: 0;
        transition: all 0.4s ease;
        background: white;
        padding: 2rem;
        border-radius: 1rem;
        box-shadow: 0 4px 16px rgba(0,0,0,0.2);
        z-index: 9999;
        max-width: 400px;
        text-align: center;
      ">
        <h3>Obrigado por se inscrever!</h3>
        <p>Você receberá todas as novidades da AAPE por e-mail.</p>
        <button id="close-popup" style="margin-top: 1rem; padding: 0.5rem 1rem; background: #6b21a8; color: white; border: none; border-radius: 4px; cursor: pointer;">
          Fechar
        </button>
      </div>
    `;
    document.body.appendChild(popupWrapper);

    const popup = document.getElementById('newsletter-popup');
    setTimeout(() => {
      popup.style.opacity = '1';
      popup.style.transform = 'translate(-50%, -50%) scale(1)';
    }, 50);

    const closeBtn = document.getElementById('close-popup');
    closeBtn.addEventListener('click', () => {
      popup.style.opacity = '0';
      popup.style.transform = 'translate(-50%, -50%) scale(0.9)';
      setTimeout(() => popup.parentElement.remove(), 400);
    });
  }
});

document.addEventListener('DOMContentLoaded', () => {
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    new ScrollAnimationObserver();
  }
  new MobileMenuHandler();
  new SmoothScrollHandler();
  new HeaderHandler();
  new ThemeHandler();
  new FontSizeHandler();
  new AccessibilityControlsHandler();
  new NewsModalHandler();
  new EventsModalHandler();
});