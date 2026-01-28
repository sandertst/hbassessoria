// Services Data
const servicesData = [
    {
        id: 'pgr',
        title: 'PGR',
        subtitle: 'Programa de Gerenciamento de Riscos',
        description: 'Documento obrigatório que identifica e controla riscos ocupacionais, substituindo o PPRA desde 2022.',
        importance: 'O PGR é essencial para identificar perigos e implementar medidas preventivas, protegendo a saúde dos trabalhadores e garantindo conformidade legal.',
        penalty: 'Multas variam de R$ 1.500 a R$ 6.700 por trabalhador exposto, podendo ultrapassar R$ 100.000 em empresas de médio/grande porte.'
    },
    {
        id: 'pcmso',
        title: 'PCMSO',
        subtitle: 'Programa de Controle Médico de Saúde Ocupacional',
        description: 'Programa que monitora a saúde dos trabalhadores através de exames médicos periódicos e ocupacionais.',
        importance: 'Previne doenças ocupacionais, identifica problemas de saúde precocemente e assegura que os colaboradores estão aptos para suas funções.',
        penalty: 'Multas de R$ 1.900 a R$ 6.700 por trabalhador, com agravantes em caso de acidentes ou doenças ocupacionais não monitoradas.'
    },
    {
        id: 'ltcat',
        title: 'LTCAT',
        subtitle: 'Laudo Técnico das Condições Ambientais do Trabalho',
        description: 'Laudo técnico que comprova exposição a agentes nocivos para fins de aposentadoria especial.',
        importance: 'Garante direitos previdenciários aos trabalhadores expostos a agentes nocivos e protege a empresa de passivos trabalhistas e previdenciários.',
        penalty: 'Multas de R$ 2.000 a R$ 7.000 por trabalhador, além de responsabilização em ações trabalhistas e previdenciárias.'
    },
    {
        id: 'ppp',
        title: 'PPP',
        subtitle: 'Perfil Profissiográfico Previdenciário',
        description: 'Documento que registra histórico laboral do trabalhador, incluindo exposições a riscos ocupacionais.',
        importance: 'Essencial para aposentadoria especial e auxílio-doença. Deve ser entregue ao trabalhador em caso de demissão.',
        penalty: 'Multas de R$ 1.000 a R$ 5.000 por PPP não entregue ou incorreto, além de indenizações trabalhistas.'
    },
    {
        id: 'laudos',
        title: 'Laudos Técnicos',
        subtitle: 'Diversos Laudos Técnicos Especializados',
        description: 'Laudos de insalubridade, periculosidade, ergonomia e outros conforme necessidade da empresa.',
        importance: 'Fundamentam pagamentos de adicionais, garantem conformidade legal e previnem ações trabalhistas relacionadas a condições de trabalho.',
        penalty: 'Multas variam de R$ 1.500 a R$ 10.000 dependendo do tipo de laudo ausente, com risco de passivos trabalhistas significativos.'
    },
    {
        id: 'treinamentos',
        title: 'Treinamentos NR',
        subtitle: 'Capacitações Presenciais e Online',
        description: 'Treinamentos obrigatórios em diversas Normas Regulamentadoras (NR-05, NR-06, NR-10, NR-35, etc.).',
        importance: 'Capacita trabalhadores para executar atividades com segurança, reduz acidentes e garante cumprimento das NRs aplicáveis.',
        penalty: 'Multas de R$ 2.000 a R$ 8.000 por trabalhador não treinado, com agravantes graves em caso de acidentes.'
    },
    {
        id: 'esocial',
        title: 'Gestão de SST no eSocial',
        subtitle: 'Eventos S-2210, S-2220, S-2240',
        description: 'Gerenciamento completo dos eventos de SST no eSocial, garantindo conformidade digital.',
        importance: 'Evita multas e penalidades por inconsistências no eSocial, mantém dados atualizados e garante conformidade com o Governo Federal.',
        penalty: 'Multas variam de R$ 500 a R$ 10.000 por evento incorreto ou não enviado, com fiscalização automatizada e rigorosa.'
    },
    {
        id: 'consultoria',
        title: 'Consultoria e Assessoria',
        subtitle: 'Consultoria Completa em SST',
        description: 'Assessoria técnica especializada para implementação e manutenção de sistemas de gestão de SST.',
        importance: 'Orienta decisões estratégicas, otimiza processos de SST, reduz custos com não conformidades e fortalece a cultura de segurança.',
        penalty: 'A ausência de gestão adequada pode resultar em múltiplas multas simultâneas, interdições e passivos que superam R$ 500.000.'
    }
];

// Differentials Data
const differentialsData = [
    {
        icon: 'users',
        title: 'Equipe Qualificada',
        description: 'Profissionais especializados e certificados em Segurança do Trabalho e Saúde Ocupacional'
    },
    {
        icon: 'target',
        title: 'Atendimento Personalizado',
        description: 'Soluções customizadas para cada segmento e porte de empresa, respeitando suas particularidades'
    },
    {
        icon: 'shield',
        title: 'Conformidade Legal Garantida',
        description: 'Total adequação às Normas Regulamentadoras e legislação vigente, evitando multas e passivos'
    },
    {
        icon: 'award',
        title: 'Experiência em eSocial SST',
        description: 'Domínio completo dos eventos S-2210, S-2220 e S-2240 para gestão digital de SST'
    },
    {
        icon: 'trending-up',
        title: 'Atuação Preventiva',
        description: 'Foco em prevenção de acidentes e doenças ocupacionais, não apenas em correção'
    },
    {
        icon: 'check-circle',
        title: 'Agilidade e Compromisso',
        description: 'Prazos respeitados, documentação organizada e suporte contínuo para sua empresa'
    }
];

// Contact Info Data
const contactData = [
    {
        icon: 'phone',
        title: 'Telefone / WhatsApp',
        content: '(62) 99227-2484',
        link: 'https://wa.me/5562992272484',
        color: 'green'
    },
    {
        icon: 'mail',
        title: 'E-mail',
        content: 'sandertst@gmail.com',
        link: 'mailto:sandertst@gmail.com',
        color: 'blue'
    },
    {
        icon: 'map-pin',
        title: 'Localização',
        content: 'Anápolis - GO',
        color: 'red'
    },
    {
        icon: 'clock',
        title: 'Horário de Atendimento',
        content: 'Segunda a Sexta: 07:00 - 17:00',
        color: 'gray'
    }
];

// SVG Icons
const icons = {
    'shield': '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>',
    'users': '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>',
    'target': '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle>',
    'award': '<circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>',
    'trending-up': '<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline>',
    'check-circle': '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline>',
    'phone': '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
    'mail': '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline>',
    'map-pin': '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle>',
    'clock': '<circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>',
    'alert-triangle': '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line>'
};

function getIcon(name) {
    return icons[name] || icons['shield'];
}

// Generate Services
function generateServices() {
    const servicesGrid = document.querySelector('.services-grid');
    servicesGrid.innerHTML = servicesData.map(service => `
        <div class="service-card" data-service="${service.id}">
            <div class="service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    ${getIcon('shield')}
                </svg>
            </div>
            <h3 class="service-title">${service.title}</h3>
            <p class="service-subtitle">${service.subtitle}</p>
            <p class="service-description">${service.description}</p>
            <button class="service-btn">
                Saiba mais
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
            </button>
        </div>
    `).join('');
}

// Generate Differentials
function generateDifferentials() {
    const differentialsGrid = document.querySelector('.differentials-grid');
    differentialsGrid.innerHTML = differentialsData.map(diff => `
        <div class="differential-card">
            <div class="differential-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    ${getIcon(diff.icon)}
                </svg>
            </div>
            <h3 class="differential-title">${diff.title}</h3>
            <p class="differential-description">${diff.description}</p>
        </div>
    `).join('');
}

// Generate Contact Info
function generateContactInfo() {
    const contactInfo = document.querySelector('.contact-info');
    const colorClasses = {
        green: { bg: 'background: #d1fae5;', text: 'color: #059669;' },
        blue: { bg: 'background: #dbeafe;', text: 'color: #1d4ed8;' },
        red: { bg: 'background: #fee2e2;', text: 'color: #dc2626;' },
        gray: { bg: 'background: #f3f4f6;', text: 'color: #4b5563;' }
    };

    contactInfo.innerHTML = contactData.map(contact => {
        const colors = colorClasses[contact.color];
        return `
            <div class="contact-card">
                <div class="contact-card-content">
                    <div class="contact-card-icon" style="${colors.bg}">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="${colors.text}">
                            ${getIcon(contact.icon)}
                        </svg>
                    </div>
                    <div>
                        <h4 class="contact-card-title">${contact.title}</h4>
                        ${contact.link ? 
                            `<a href="${contact.link}" target="_blank" class="contact-card-link">${contact.content}</a>` :
                            `<p class="contact-card-text">${contact.content}</p>`
                        }
                    </div>
                </div>
            </div>
        `;
    }).join('');

    // Add social media card
    contactInfo.innerHTML += `
        <div class="contact-card social-card">
            <h4 class="contact-card-title">Redes Sociais</h4>
            <div class="social-buttons">
                <a href="https://www.instagram.com/hb_assessoriasst/" target="_blank" class="social-btn social-instagram">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                </a>
                <a href="https://www.facebook.com/hbassessoriadesegurancanotrabalho/" target="_blank" class="social-btn social-facebook">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                </a>
            </div>
        </div>
    `;
}

// Service Modal
function openServiceModal(serviceId) {
    const service = servicesData.find(s => s.id === serviceId);
    if (!service) return;

    const modal = document.getElementById('serviceModal');
    const modalBody = document.getElementById('modalBody');

    modalBody.innerHTML = `
        <div class="modal-header">
            <div class="modal-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    ${getIcon('shield')}
                </svg>
            </div>
            <div>
                <h3 class="modal-title">${service.title}</h3>
                <p class="modal-subtitle">${service.subtitle}</p>
            </div>
        </div>

        <div class="modal-section">
            <h4 class="modal-section-title">O que é?</h4>
            <p class="modal-section-text">${service.description}</p>
        </div>

        <div class="info-box info-box-blue">
            <div class="info-box-title">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    ${getIcon('shield')}
                </svg>
                Por que é importante?
            </div>
            <p class="modal-section-text">${service.importance}</p>
        </div>

        <div class="info-box info-box-red">
            <div class="info-box-title">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    ${getIcon('alert-triangle')}
                </svg>
                Multas por não conformidade
            </div>
            <p class="modal-section-text">${service.penalty}</p>
        </div>

        <button onclick="window.open('https://wa.me/5562992272484', '_blank')" class="btn btn-primary btn-lg btn-block">
            Solicitar Orçamento via WhatsApp
        </button>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('serviceModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Toast Notification
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = `toast ${type}`;
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Form Submission
document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();

    // Generate content
    generateServices();
    generateDifferentials();
    generateContactInfo();

    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    mobileMenuBtn.addEventListener('click', function() {
        this.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-mobile .nav-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuBtn.classList.remove('active');
            mobileMenu.classList.remove('active');
        });
    });

    // Smooth scrolling and active nav
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offset = 80;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Update active nav on scroll
    window.addEventListener('scroll', function() {
        const header = document.getElementById('header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Update active section
        const sections = ['home', 'sobre', 'servicos', 'diferenciais', 'contato'];
        const navLinks = document.querySelectorAll('.nav-link');

        sections.forEach(sectionId => {
            const section = document.getElementById(sectionId);
            if (section) {
                const rect = section.getBoundingClientRect();
                if (rect.top <= 100 && rect.bottom >= 100) {
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${sectionId}`) {
                            link.classList.add('active');
                        }
                    });
                }
            }
        });
    });

    // Service card click
    document.addEventListener('click', function(e) {
        const serviceCard = e.target.closest('.service-card');
        if (serviceCard) {
            const serviceId = serviceCard.dataset.service;
            openServiceModal(serviceId);
        }
    });

    // Modal close
    document.getElementById('modalClose').addEventListener('click', closeModal);
    document.querySelector('.modal-overlay').addEventListener('click', closeModal);

    // Form submission
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const formData = new FormData(this);
        const data = Object.fromEntries(formData);

        // Validate
        if (!data.name || !data.phone) {
            showToast('Por favor, preencha nome e telefone', 'error');
            return;
        }

        // Mock submission (replace with actual backend call)
        console.log('Form submitted:', data);
        
        // Show success message
        showToast('Mensagem enviada com sucesso! Entraremos em contato em breve.', 'success');

        // Reset form
        this.reset();

        // Optional: Open WhatsApp directly
        // window.open(`https://wa.me/5562992272484?text=${encodeURIComponent(`Nome: ${data.name}\nEmpresa: ${data.company}\nTelefone: ${data.phone}\nMensagem: ${data.message}`)}`, '_blank');
    });

    // Keyboard accessibility for modal
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
});
