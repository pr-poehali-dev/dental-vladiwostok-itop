import { useState, useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/8a142de5-d45b-42be-a800-ba491ded5f3e/files/0cbc81ea-9d53-42b3-a573-68ba3a3a6f08.jpg";
const DOCTOR_IMG = "https://cdn.poehali.dev/projects/8a142de5-d45b-42be-a800-ba491ded5f3e/files/8f4f8c7e-0e94-4c45-bc99-cc8fbe56f0c4.jpg";
const ROOM_IMG = "https://cdn.poehali.dev/projects/8a142de5-d45b-42be-a800-ba491ded5f3e/files/c8966fbb-1e35-4586-aaf6-9ef98a891d87.jpg";

const navLinks = [
  { label: "Главная", href: "#home" },
  { label: "Услуги", href: "#services" },
  { label: "О клинике", href: "#about" },
  { label: "Цены", href: "#prices" },
  { label: "Отзывы", href: "#reviews" },
  { label: "Лицензии", href: "#licenses" },
  { label: "Контакты", href: "#contacts" },
];

const services = [
  { icon: "Smile", title: "Эстетическая стоматология", desc: "Виниры, отбеливание, реставрация улыбки мечты", price: "от 8 000 ₽" },
  { icon: "Shield", title: "Имплантация зубов", desc: "Немецкие и швейцарские импланты с гарантией 20 лет", price: "от 45 000 ₽" },
  { icon: "Star", title: "Ортодонтия", desc: "Брекеты, элайнеры Invisalign, исправление прикуса", price: "от 35 000 ₽" },
  { icon: "Heart", title: "Лечение зубов", desc: "Безболезненное лечение кариеса под микроскопом", price: "от 4 500 ₽" },
  { icon: "Zap", title: "Детская стоматология", desc: "Мягкий подход и игровая терапия для малышей", price: "от 2 500 ₽" },
  { icon: "Award", title: "Хирургия", desc: "Удаление зубов мудрости, костная пластика", price: "от 5 000 ₽" },
];

const prices = [
  {
    category: "Лечение",
    items: [
      { name: "Первичный осмотр + консультация", price: "Бесплатно" },
      { name: "Лечение кариеса (1 поверхность)", price: "4 500 ₽" },
      { name: "Лечение кариеса (2+ поверхности)", price: "6 500 ₽" },
      { name: "Лечение пульпита", price: "12 000 ₽" },
      { name: "Профессиональная чистка (Air Flow)", price: "5 500 ₽" },
    ],
  },
  {
    category: "Эстетика",
    items: [
      { name: "Отбеливание Zoom 4", price: "18 000 ₽" },
      { name: "Виниры (1 зуб)", price: "28 000 ₽" },
      { name: "Люминиры (1 зуб)", price: "35 000 ₽" },
      { name: "Реставрация зуба", price: "8 000 ₽" },
      { name: "Коронка E.max", price: "22 000 ₽" },
    ],
  },
  {
    category: "Имплантация",
    items: [
      { name: "Имплант Straumann (Швейцария)", price: "65 000 ₽" },
      { name: "Имплант Nobel Biocare", price: "55 000 ₽" },
      { name: "Имплант AnyRidge (Корея)", price: "45 000 ₽" },
      { name: "Костная пластика", price: "от 18 000 ₽" },
      { name: "Синус-лифтинг", price: "от 25 000 ₽" },
    ],
  },
];

const reviews = [
  {
    name: "Ирина Соколова",
    date: "Март 2024",
    rating: 5,
    text: "Делала виниры у доктора Александрова. Результат превзошёл все ожидания! Идеальная улыбка, о которой мечтала годами. Персонал внимательный, атмосфера располагает.",
    service: "Виниры",
  },
  {
    name: "Михаил Дроздов",
    date: "Февраль 2024",
    rating: 5,
    text: "Поставили имплант на место удалённого зуба. Операция прошла совершенно безболезненно. Через полгода не могу найти разницу с родным зубом. Очень доволен!",
    service: "Имплантация",
  },
  {
    name: "Анна Климова",
    date: "Январь 2024",
    rating: 5,
    text: "Привела дочку на лечение — она боялась стоматологов с 5 лет. Врачи нашли подход, всё прошло без слёз. Теперь дочка сама просится на профилактику!",
    service: "Детская стоматология",
  },
  {
    name: "Дмитрий Волков",
    date: "Декабрь 2023",
    rating: 5,
    text: "Прошёл курс отбеливания Zoom. Зубы стали на 8 тонов светлее буквально за 2 часа. Эффект сохраняется уже 4 месяца. Рекомендую всем!",
    service: "Отбеливание",
  },
];

const licenses = [
  {
    title: "Лицензия на медицинскую деятельность",
    number: "ЛО-77-01-023456",
    issuer: "Департамент здравоохранения Москвы",
    date: "15.03.2021",
    valid: "Бессрочно",
    icon: "FileCheck",
  },
  {
    title: "Сертификат ISO 9001:2015",
    number: "ISO-RU-24891",
    issuer: "TÜV SÜD Management Service GmbH",
    date: "20.07.2023",
    valid: "до 20.07.2026",
    icon: "Award",
  },
  {
    title: "Аккредитация стоматологической клиники",
    number: "АК-СТ-2022-0847",
    issuer: "Росздравнадзор",
    date: "10.09.2022",
    valid: "до 10.09.2027",
    icon: "BadgeCheck",
  },
  {
    title: "Сертификат соответствия оборудования",
    number: "РУ-МЕД-2023-114",
    issuer: "Федеральная служба по надзору в сфере здравоохранения",
    date: "01.04.2023",
    valid: "до 01.04.2026",
    icon: "Clipboard",
  },
  {
    title: "Диплом «Лучшая клиника года»",
    number: "ДН-2023-0192",
    issuer: "Ассоциация стоматологов России",
    date: "25.11.2023",
    valid: "2023",
    icon: "Trophy",
  },
  {
    title: "Сертификат повышения квалификации персонала",
    number: "СПК-2024-0315",
    issuer: "Первый МГМУ им. Сеченова",
    date: "15.01.2024",
    valid: "до 15.01.2027",
    icon: "GraduationCap",
  },
];

const doctors = [
  {
    name: "Александр Игоревич Новиков",
    role: "Главный врач, имплантолог",
    exp: "18 лет опыта",
    img: DOCTOR_IMG,
  },
  {
    name: "Екатерина Павловна Смирнова",
    role: "Стоматолог-ортодонт",
    exp: "12 лет опыта",
    img: ROOM_IMG,
  },
];

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

function SectionTitle({ label, title, subtitle }: { label?: string; title: string; subtitle?: string }) {
  return (
    <div className="text-center mb-16">
      {label && (
        <div className="inline-flex items-center gap-2 mb-4">
          <div className="h-px w-8 bg-gold opacity-60" />
          <span className="text-gold text-sm font-medium tracking-[0.2em] uppercase">{label}</span>
          <div className="h-px w-8 bg-gold opacity-60" />
        </div>
      )}
      <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-4">
        {title}
      </h2>
      {subtitle && <p className="text-muted-foreground text-lg max-w-xl mx-auto">{subtitle}</p>}
      <div className="section-divider w-40 mt-6 mx-auto" />
    </div>
  );
}

export default function Index() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const servicesSection = useInView();
  const aboutSection = useInView();
  const pricesSection = useInView();
  const reviewsSection = useInView();
  const licensesSection = useInView();
  const contactsSection = useInView();

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-background/95 backdrop-blur-xl border-b border-border shadow-lg shadow-black/20" : "bg-transparent"}`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="#home" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-lilac to-gold flex items-center justify-center animate-pulse-gold">
                <span className="text-deep font-display font-bold text-lg">Э</span>
              </div>
              <div>
                <div className="font-display text-xl font-semibold text-foreground leading-none">ЭстетикаДент</div>
                <div className="text-xs text-muted-foreground tracking-wider">PREMIUM DENTAL CARE</div>
              </div>
            </a>

            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover-gold transition-all duration-300 hover:tracking-wide"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="hidden lg:block">
              <a href="tel:+78001234567" className="btn-gold px-6 py-2.5 rounded-full text-sm font-semibold">
                +7 800 123-45-67
              </a>
            </div>

            <button
              className="lg:hidden text-foreground p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <Icon name={mobileOpen ? "X" : "Menu"} size={24} />
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="lg:hidden bg-background/98 backdrop-blur-xl border-t border-border px-6 pb-6 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block py-3 text-muted-foreground hover-gold border-b border-border/50 last:border-0"
              >
                {link.label}
              </a>
            ))}
            <a href="tel:+78001234567" className="btn-gold w-full mt-4 py-3 rounded-full text-center block font-semibold">
              +7 800 123-45-67
            </a>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section id="home" className="relative min-h-screen flex items-center mesh-bg overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Клиника" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        </div>

        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-lilac/10 blur-[100px] animate-float" />
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 rounded-full bg-gold/8 blur-[80px] animate-float delay-300" />

        <div className="container relative z-10 mx-auto px-6 pt-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-6 opacity-0 animate-fade-in-up">
              <div className="h-px w-10 bg-gold" />
              <span className="text-gold text-sm tracking-[0.25em] uppercase font-medium">Стоматология премиум-класса</span>
            </div>

            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light leading-[1.05] mb-8 opacity-0 animate-fade-in-up delay-100">
              Красивая улыбка —<br />
              <span className="gold-gradient font-normal italic">ваша уверенность</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl leading-relaxed opacity-0 animate-fade-in-up delay-200">
              Клиника ЭстетикаДент — европейские технологии, бережный подход и результат, которым вы будете гордиться
            </p>

            <div className="flex flex-wrap gap-4 mb-16 opacity-0 animate-fade-in-up delay-300">
              <a href="#contacts" className="btn-gold px-8 py-4 rounded-full text-base font-semibold inline-flex items-center gap-2">
                Записаться на приём
                <Icon name="ArrowRight" size={18} />
              </a>
              <a href="#services" className="btn-outline-gold px-8 py-4 rounded-full text-base font-semibold inline-flex items-center gap-2">
                Наши услуги
              </a>
            </div>

            <div className="grid grid-cols-3 gap-8 opacity-0 animate-fade-in-up delay-400">
              {[
                { num: "15+", label: "лет опыта" },
                { num: "8 500+", label: "счастливых пациентов" },
                { num: "98%", label: "рекомендуют нас" },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="font-display text-3xl md:text-4xl gold-gradient font-semibold">{stat.num}</div>
                  <div className="text-muted-foreground text-sm mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <a href="#services" className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover-gold transition-all">
          <span className="text-xs tracking-widest uppercase">Листайте</span>
          <Icon name="ChevronDown" size={20} className="animate-bounce" />
        </a>
      </section>

      {/* Services */}
      <section id="services" className="py-24 relative" ref={servicesSection.ref}>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-transparent pointer-events-none" />
        <div className="container mx-auto px-6">
          <div className={`transition-all duration-700 ${servicesSection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <SectionTitle label="Что мы делаем" title="Наши услуги" subtitle="Полный спектр стоматологических услуг для всей семьи" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div
                key={s.title}
                className={`card-glass rounded-2xl p-8 group cursor-pointer transition-all duration-500 hover:border-gold/50 hover:-translate-y-1 hover:gold-glow ${servicesSection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-lilac/20 to-gold/20 flex items-center justify-center mb-6 group-hover:from-lilac/30 group-hover:to-gold/30 transition-all duration-300">
                  <Icon name={s.icon} size={26} className="text-gold" fallback="Star" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-gold transition-colors">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">{s.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-gold font-semibold">{s.price}</span>
                  <Icon name="ArrowRight" size={16} className="text-muted-foreground group-hover:text-gold group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider w-3/4 mx-auto" />

      {/* About */}
      <section id="about" className="py-24" ref={aboutSection.ref}>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className={`transition-all duration-700 ${aboutSection.inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
              <div className="inline-flex items-center gap-2 mb-6">
                <div className="h-px w-8 bg-gold opacity-60" />
                <span className="text-gold text-sm tracking-[0.2em] uppercase">О нас</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-light mb-8 leading-tight">
                Клиника, которой<br />
                <span className="gold-gradient italic">доверяют семьи</span>
              </h2>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>Клиника ЭстетикаДент основана в 2009 году командой врачей с европейским образованием. За 15 лет работы мы создали более 8 500 счастливых улыбок.</p>
                <p>Мы используем только сертифицированное оборудование мировых брендов: Sirona, Planmeca, KaVo. Каждый врач ежегодно проходит обучение в лучших клиниках Европы.</p>
                <p>Наш принцип — безболезненное лечение с максимальным вниманием к вашему комфорту. Мы работаем под микроскопом, гарантируя точность каждой процедуры.</p>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-10">
                {[
                  { icon: "Microscope", text: "Лечение под микроскопом" },
                  { icon: "ShieldCheck", text: "Гарантия на работы до 5 лет" },
                  { icon: "Clock", text: "Приём 7 дней в неделю" },
                  { icon: "CreditCard", text: "Рассрочка 0% на 12 месяцев" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3 card-glass rounded-xl p-4">
                    <Icon name={item.icon} size={20} className="text-gold shrink-0" fallback="Check" />
                    <span className="text-sm text-foreground">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={`relative transition-all duration-700 delay-200 ${aboutSection.inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
              <div className="relative rounded-3xl overflow-hidden lilac-glow">
                <img src={HERO_IMG} alt="Клиника" className="w-full h-[500px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
              </div>

              <div className="absolute -bottom-6 -left-6 card-glass rounded-2xl p-6 gold-glow">
                <div className="text-3xl font-display gold-gradient font-semibold">15 лет</div>
                <div className="text-sm text-muted-foreground">на страже вашей улыбки</div>
              </div>

              <div className="absolute -top-6 -right-6 card-glass rounded-2xl p-6 lilac-glow">
                <div className="text-3xl font-display gold-gradient font-semibold">№1</div>
                <div className="text-sm text-muted-foreground">в рейтинге города</div>
              </div>
            </div>
          </div>

          {/* Doctors */}
          <div className="mt-24">
            <SectionTitle label="Команда" title="Наши врачи" subtitle="Профессионалы с международным опытом" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {doctors.map((doc, i) => (
                <div
                  key={doc.name}
                  className={`card-glass rounded-2xl overflow-hidden group hover:-translate-y-1 transition-all duration-500 hover:gold-glow ${aboutSection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                  style={{ transitionDelay: `${i * 150}ms` }}
                >
                  <div className="h-56 overflow-hidden">
                    <img src={doc.img} alt={doc.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl font-semibold text-foreground mb-1">{doc.name}</h3>
                    <p className="text-gold text-sm mb-2">{doc.role}</p>
                    <p className="text-muted-foreground text-sm">{doc.exp}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider w-3/4 mx-auto" />

      {/* Prices */}
      <section id="prices" className="py-24 relative" ref={pricesSection.ref}>
        <div className="absolute inset-0 mesh-bg opacity-40 pointer-events-none" />
        <div className="container mx-auto px-6">
          <div className={`transition-all duration-700 ${pricesSection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <SectionTitle label="Стоимость" title="Прозрачные цены" subtitle="Никаких скрытых платежей — вы знаете стоимость до начала лечения" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {prices.map((cat, ci) => (
              <div
                key={cat.category}
                className={`card-glass rounded-2xl overflow-hidden transition-all duration-700 ${pricesSection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ transitionDelay: `${ci * 150}ms` }}
              >
                <div className="bg-gradient-to-r from-lilac/20 to-gold/10 px-6 py-4 border-b border-border">
                  <h3 className="font-display text-xl font-semibold text-foreground">{cat.category}</h3>
                </div>
                <div className="p-4">
                  {cat.items.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center justify-between py-3 border-b border-border/50 last:border-0 group"
                    >
                      <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors pr-4">{item.name}</span>
                      <span className={`text-sm font-semibold shrink-0 ${item.price === "Бесплатно" ? "text-green-400" : "text-gold"}`}>{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className={`mt-10 card-glass rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4 transition-all duration-700 delay-500 ${pricesSection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center shrink-0">
                <Icon name="Percent" size={22} className="text-gold" />
              </div>
              <div>
                <div className="font-semibold text-foreground">Рассрочка без переплаты</div>
                <div className="text-sm text-muted-foreground">Разбейте платёж на 6 или 12 месяцев — 0% переплаты</div>
              </div>
            </div>
            <a href="#contacts" className="btn-gold px-6 py-3 rounded-full text-sm font-semibold whitespace-nowrap">
              Узнать подробности
            </a>
          </div>
        </div>
      </section>

      <div className="section-divider w-3/4 mx-auto" />

      {/* Reviews */}
      <section id="reviews" className="py-24" ref={reviewsSection.ref}>
        <div className="container mx-auto px-6">
          <div className={`transition-all duration-700 ${reviewsSection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <SectionTitle label="Отзывы" title="Наши пациенты говорят" subtitle="Реальные истории — без фильтров и редактуры" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((r, i) => (
              <div
                key={r.name}
                className={`card-glass rounded-2xl p-8 relative overflow-hidden group hover:-translate-y-1 transition-all duration-500 hover:gold-glow ${reviewsSection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-gold/5 to-transparent rounded-bl-full" />
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-lilac to-gold flex items-center justify-center text-deep font-display font-bold text-lg">
                      {r.name[0]}
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">{r.name}</div>
                      <div className="text-xs text-muted-foreground">{r.date}</div>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {Array(r.rating).fill(0).map((_, si) => (
                      <Icon key={si} name="Star" size={14} className="text-gold fill-gold" fallback="Star" />
                    ))}
                  </div>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-4 italic">"{r.text}"</p>

                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/20">
                  <span className="text-gold text-xs font-medium">{r.service}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider w-3/4 mx-auto" />

      {/* Licenses */}
      <section id="licenses" className="py-24 relative" ref={licensesSection.ref}>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/20 to-transparent pointer-events-none" />
        <div className="container mx-auto px-6">
          <div className={`transition-all duration-700 ${licensesSection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <SectionTitle
              label="Документы"
              title="Лицензии и сертификаты"
              subtitle="Полная прозрачность — все разрешения и аккредитации в открытом доступе"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {licenses.map((lic, i) => (
              <div
                key={lic.number}
                className={`card-glass rounded-2xl p-7 group hover:-translate-y-1 transition-all duration-500 hover:border-gold/40 cursor-pointer ${licensesSection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-lilac/20 to-gold/20 flex items-center justify-center shrink-0 group-hover:from-gold/20 group-hover:to-lilac/20 transition-all">
                    <Icon name={lic.icon} size={26} className="text-gold" fallback="FileCheck" />
                  </div>
                  <h3 className="font-semibold text-foreground text-sm leading-snug group-hover:text-gold transition-colors">{lic.title}</h3>
                </div>

                <div className="space-y-2 pt-4 border-t border-border/50">
                  <div className="flex justify-between text-xs">
                    <span className="text-muted-foreground">Номер</span>
                    <span className="text-foreground font-mono">{lic.number}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-muted-foreground">Выдан</span>
                    <span className="text-foreground">{lic.date}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-muted-foreground">Действует</span>
                    <span className="text-gold font-medium">{lic.valid}</span>
                  </div>
                  <div className="text-xs text-muted-foreground mt-2 leading-relaxed">{lic.issuer}</div>
                </div>
              </div>
            ))}
          </div>

          <div className={`mt-12 text-center transition-all duration-700 delay-500 ${licensesSection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <p className="text-muted-foreground text-sm mb-4">Оригиналы всех документов доступны для ознакомления в регистратуре</p>
            <a href="#contacts" className="btn-outline-gold px-6 py-3 rounded-full text-sm font-semibold inline-flex items-center gap-2">
              <Icon name="Eye" size={16} />
              Запросить документы
            </a>
          </div>
        </div>
      </section>

      <div className="section-divider w-3/4 mx-auto" />

      {/* Contacts */}
      <section id="contacts" className="py-24" ref={contactsSection.ref}>
        <div className="container mx-auto px-6">
          <div className={`transition-all duration-700 ${contactsSection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <SectionTitle label="Связаться" title="Запись на приём" subtitle="Свяжитесь с нами удобным способом или оставьте заявку" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className={`space-y-6 transition-all duration-700 ${contactsSection.inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
              {[
                { icon: "Phone", label: "Телефон", value: "+7 800 123-45-67", note: "Звонок бесплатный" },
                { icon: "MessageCircle", label: "WhatsApp / Telegram", value: "+7 916 234-56-78", note: "Ответим за 5 минут" },
                { icon: "MapPin", label: "Адрес", value: "Москва, ул. Тверская, д. 15", note: "Вход с торца здания" },
                { icon: "Clock", label: "График работы", value: "Пн–Вс: 9:00 – 21:00", note: "Без выходных и праздников" },
              ].map((item) => (
                <div key={item.label} className="card-glass rounded-2xl p-6 flex items-center gap-5 hover:border-gold/40 transition-all duration-300 group cursor-pointer">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-lilac/20 to-gold/20 flex items-center justify-center shrink-0 group-hover:from-gold/20 group-hover:to-lilac/30 transition-all">
                    <Icon name={item.icon} size={22} className="text-gold" fallback="Info" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">{item.label}</div>
                    <div className="font-semibold text-foreground text-lg">{item.value}</div>
                    <div className="text-xs text-gold mt-0.5">{item.note}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className={`card-glass rounded-3xl p-8 transition-all duration-700 delay-200 ${contactsSection.inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
              <h3 className="font-display text-2xl font-semibold text-foreground mb-2">Оставить заявку</h3>
              <p className="text-muted-foreground text-sm mb-8">Перезвоним в течение 15 минут в рабочее время</p>

              <div className="space-y-4">
                <div>
                  <label className="text-xs text-muted-foreground mb-2 block uppercase tracking-wider">Ваше имя</label>
                  <input
                    type="text"
                    placeholder="Иван Иванов"
                    className="w-full bg-muted/50 border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-all"
                  />
                </div>
                <div>
                  <label className="text-xs text-muted-foreground mb-2 block uppercase tracking-wider">Телефон</label>
                  <input
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    className="w-full bg-muted/50 border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-all"
                  />
                </div>
                <div>
                  <label className="text-xs text-muted-foreground mb-2 block uppercase tracking-wider">Услуга</label>
                  <select className="w-full bg-muted/50 border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-gold/50 transition-all">
                    <option value="">Выберите услугу...</option>
                    {services.map((s) => (
                      <option key={s.title} value={s.title}>{s.title}</option>
                    ))}
                    <option value="other">Другое / не знаю</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs text-muted-foreground mb-2 block uppercase tracking-wider">Комментарий</label>
                  <textarea
                    rows={3}
                    placeholder="Опишите вашу ситуацию..."
                    className="w-full bg-muted/50 border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-all resize-none"
                  />
                </div>

                <button className="btn-gold w-full py-4 rounded-xl text-base font-semibold flex items-center justify-center gap-2">
                  Записаться на приём
                  <Icon name="ArrowRight" size={18} />
                </button>

                <p className="text-xs text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-deep py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-lilac to-gold flex items-center justify-center">
                  <span className="text-deep font-display font-bold text-lg">Э</span>
                </div>
                <div>
                  <div className="font-display text-lg font-semibold text-foreground">ЭстетикаДент</div>
                  <div className="text-xs text-muted-foreground">PREMIUM DENTAL CARE</div>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Стоматологическая клиника премиум-класса. 15 лет создаём красивые улыбки и заботимся о здоровье зубов.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4 uppercase text-xs tracking-wider">Навигация</h4>
              <div className="grid grid-cols-2 gap-2">
                {navLinks.map((link) => (
                  <a key={link.href} href={link.href} className="text-sm text-muted-foreground hover-gold transition-colors">
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4 uppercase text-xs tracking-wider">Контакты</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Icon name="Phone" size={14} className="text-gold" />
                  +7 800 123-45-67
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Icon name="MapPin" size={14} className="text-gold" />
                  Москва, ул. Тверская, д. 15
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Icon name="Clock" size={14} className="text-gold" />
                  Пн–Вс: 9:00 – 21:00
                </div>
              </div>
            </div>
          </div>

          <div className="gold-line w-full mb-6" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
            <span>© 2024 ЭстетикаДент. Все права защищены.</span>
            <span>Лицензия ЛО-77-01-023456 | Информация на сайте не является публичной офертой</span>
          </div>
        </div>
      </footer>
    </div>
  );
}