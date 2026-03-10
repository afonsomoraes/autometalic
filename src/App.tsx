import React, { useState } from 'react';
import {
    Wrench,
    ShieldCheck,
    Sparkles,
    MessageCircle,
    Phone,
    MapPin,
    Clock,
    ChevronDown,
    ChevronUp,
    Instagram,
    Facebook,
    Star
} from 'lucide-react';

const App: React.FC = () => {
    const [activeFaq, setActiveFaq] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setActiveFaq(activeFaq === index ? null : index);
    };

    const services = [
        {
            title: "Polimento Técnico",
            description: "Restauração profunda do brilho e remoção de micro-riscos com técnicas avançadas.",
            icon: <Sparkles className="w-8 h-8 text-primary" />,
        },
        {
            title: "Vitrificação 9H",
            description: "Proteção cerâmica de alta resistência contra raios UV, seiva de árvore e detritos.",
            icon: <ShieldCheck className="w-8 h-8 text-primary" />,
        },
        {
            title: "Estética Interna",
            description: "Higienização detalhada e hidratação de couros com produtos premium.",
            icon: <Wrench className="w-8 h-8 text-primary" />,
        }
    ];

    const faqs = [
        {
            question: "O que é a vitrificação de pintura?",
            answer: "A vitrificação é a aplicação de uma camada de sílica vítrea sobre a pintura, criando uma barreira protetora extremamente resistente (9H) que protege contra raios UV, fezes de pássaros e riscos leves, além de dar um brilho profundo."
        },
        {
            question: "Quanto tempo dura o polimento técnico?",
            answer: "A durabilidade depende dos cuidados posteriores. Com lavagens corretas e manutenção, o brilho pode durar de 6 meses a 1 ano. Recomendamos a vitrificação para selar esse resultado por até 3 anos."
        },
        {
            question: "Vocês trabalham com funilaria expressa?",
            answer: "Sim! Somos especialistas em funilaria e pintura de alta qualidade, atendendo desde pequenos reparos (martelinho de ouro) até restaurações completas."
        },
        {
            question: "Preciso agendar horário?",
            answer: "Sim, para garantirmos a atenção aos detalhes que seu carro merece, trabalhamos exclusivamente com agendamento prévio via WhatsApp."
        }
    ];

    return (
        <div className="min-h-screen bg-[#0c0d0e] text-white font-display">
            {/* Navigation */}
            <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-md">
                <div className="container mx-auto px-4 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <img
                            src="/logo_autometalic.png"
                            alt="Auto Metalic"
                            className="h-10 md:h-12 w-auto"
                        />
                    </div>
                    <div className="hidden md:flex items-center gap-8 text-sm font-medium">
                        <a href="#inicio" className="hover:text-primary transition-colors">Início</a>
                        <a href="#servicos" className="hover:text-primary transition-colors">Serviços</a>
                        <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
                        <a href="#contato" className="px-6 py-2 bg-primary text-black rounded-full font-bold hover:scale-105 transition-transform">
                            Orçamento
                        </a>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <header id="inicio" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6 group">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                            <span className="text-xs font-semibold tracking-wider uppercase">Estética Premium em Campinas</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
                            A Perfeição em cada <span className="text-primary italic">Detalhe.</span>
                        </h1>
                        <p className="text-lg md:text-xl text-neutral-light mb-10 max-w-2xl">
                            Especialistas em vitrificação, polimento técnico e funilaria de alto nível.
                            Protegemos e valorizamos seu patrimônio com tecnologia de ponta.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="https://wa.me/5519999999999"
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center justify-center gap-2 px-8 py-4 bg-whatsapp text-white rounded-xl font-bold text-lg hover:shadow-[0_0_20px_rgba(30,215,96,0.3)] transition-all"
                            >
                                <MessageCircle className="w-6 h-6" />
                                Agendar Avaliação
                            </a>
                            <a
                                href="#servicos"
                                className="flex items-center justify-center gap-2 px-8 py-4 bg-white/5 border border-white/10 rounded-xl font-bold text-lg hover:bg-white/10 transition-all"
                            >
                                Ver Serviços
                            </a>
                        </div>
                    </div>
                </div>
            </header>

            {/* Stats Section */}
            <section className="py-12 border-y border-white/10 bg-black/40">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="text-3xl font-bold text-primary mb-1">+500</div>
                            <div className="text-xs text-neutral-dark uppercase tracking-widest">Carros Entregues</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-primary mb-1">100%</div>
                            <div className="text-xs text-neutral-dark uppercase tracking-widest">Satisfação</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-primary mb-1">+10 Anos</div>
                            <div className="text-xs text-neutral-dark uppercase tracking-widest">Experiência</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-primary mb-1">9H</div>
                            <div className="text-xs text-neutral-dark uppercase tracking-widest">Proteção Cerâmica</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="servicos" className="py-24">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Serviços Especializados</h2>
                        <p className="text-neutral-dark max-w-2xl mx-auto">
                            Utilizamos apenas produtos de marcas líderes mundiais para garantir o melhor resultado para seu veículo.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div key={index} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-primary/30 transition-all group">
                                <div className="mb-6 transform group-hover:scale-110 transition-transform">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                                <p className="text-neutral-light leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section - Final Optimized Version from Stitch */}
            <section id="faq" className="py-24 bg-black/20">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4 italic">Dúvidas Frequentes</h2>
                        <div className="h-1 w-20 bg-primary mx-auto"></div>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="rounded-2xl border border-white/10 overflow-hidden bg-white/5"
                            >
                                <button
                                    onClick={() => toggleFaq(index)}
                                    className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                                >
                                    <span className="font-bold text-lg">{faq.question}</span>
                                    {activeFaq === index ? <ChevronUp className="text-primary" /> : <ChevronDown className="text-neutral-dark" />}
                                </button>
                                {activeFaq === index && (
                                    <div className="px-6 pb-6 text-neutral-light leading-relaxed animate-in fade-in slide-in-from-top-2">
                                        {faq.answer}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final Optimized Footer from Stitch */}
            <footer className="pt-20 pb-10 bg-black border-t border-white/10">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-4 gap-12 mb-16">
                        <div className="col-span-2">
                            <img src="/logo_autometalic.png" alt="Auto Metalic" className="h-12 mb-6" />
                            <p className="text-neutral-dark max-w-sm mb-6">
                                Referência em estética automotiva premium e funilaria de alta qualidade em Campinas e região.
                                Paixão por carros, compromisso com a perfeição.
                            </p>
                            <div className="flex gap-4">
                                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-black transition-all">
                                    <Instagram className="w-5 h-5" />
                                </a>
                                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-black transition-all">
                                    <Facebook className="w-5 h-5" />
                                </a>
                            </div>
                        </div>

                        <div>
                            <h4 className="font-bold mb-6 text-primary uppercase text-sm tracking-widest">Contato</h4>
                            <ul className="space-y-4 text-neutral-light">
                                <li className="flex gap-3">
                                    <MapPin className="w-5 h-5 text-primary shrink-0" />
                                    <span>Rua das Oficinas, 123 - Campinas, SP</span>
                                </li>
                                <li className="flex gap-3">
                                    <Phone className="w-5 h-5 text-primary shrink-0" />
                                    <span>(19) 99999-9999</span>
                                </li>
                                <li className="flex gap-3">
                                    <Clock className="w-5 h-5 text-primary shrink-0" />
                                    <span>Seg - Sex: 08:00 - 18:00</span>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold mb-6 text-primary uppercase text-sm tracking-widest">Legal</h4>
                            <ul className="space-y-4 text-neutral-light">
                                <li><a href="#" className="hover:text-primary transition-colors">Termos de Uso</a></li>
                                <li><a href="#" className="hover:text-primary transition-colors">Privacidade</a></li>
                                <li><a href="#" className="hover:text-primary transition-colors">Políticas</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="pt-10 border-t border-white/5 flex flex-col md:row items-center justify-between gap-4 text-neutral-dark text-xs">
                        <p>&copy; 2024 Auto Metalic. Todos os direitos reservados.</p>
                        <p>Desenvolvido com Paixão pela Estética.</p>
                    </div>
                </div>
            </footer>

            {/* Floating CTA */}
            <a
                href="https://wa.me/5519999999999"
                className="fixed bottom-6 right-6 z-50 p-4 bg-whatsapp text-white rounded-full shadow-2xl hover:scale-110 transition-transform md:hidden"
            >
                <MessageCircle className="w-8 h-8" />
            </a>
        </div>
    );
};

export default App;
