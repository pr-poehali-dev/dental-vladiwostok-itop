import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/8a142de5-d45b-42be-a800-ba491ded5f3e/files/0cbc81ea-9d53-42b3-a573-68ba3a3a6f08.jpg";
const DOCTOR_IMG = "https://cdn.poehali.dev/projects/8a142de5-d45b-42be-a800-ba491ded5f3e/files/8f4f8c7e-0e94-4c45-bc99-cc8fbe56f0c4.jpg";

function record() {
  window.open("https://wa.me/7423xxxxxxx?text=Запись%20на%20акцию%20iTOP", "_blank");
}

function ContactForm() {
  const [form, setForm] = useState({ name: "", phone: "", service: "", comment: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 1200);
  }

  if (sent) {
    return (
      <div className="card-glass rounded-3xl p-10 flex flex-col items-center justify-center text-center gap-5 min-h-[400px]">
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-lilac to-gold flex items-center justify-center animate-scale-in">
          <Icon name="CheckCheck" size={36} className="text-deep" />
        </div>
        <h3 className="font-display text-3xl font-semibold text-foreground">Заявка принята!</h3>
        <p className="text-muted-foreground">Перезвоним вам в течение <span className="text-gold font-semibold">15 минут</span></p>
        <button
          onClick={() => setSent(false)}
          className="btn-outline-gold px-6 py-2.5 rounded-full text-sm font-semibold mt-2"
        >
          Отправить ещё одну
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card-glass rounded-3xl p-8 space-y-5">
      <div>
        <h3 className="font-display text-2xl font-semibold text-foreground mb-1">Оставить заявку</h3>
        <p className="text-muted-foreground text-sm">Перезвоним за 15 минут в рабочее время</p>
      </div>

      <div>
        <label className="text-xs text-muted-foreground uppercase tracking-wider mb-2 block">Ваше имя *</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Иван Иванов"
          required
          className="w-full bg-muted/50 border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-all"
        />
      </div>

      <div>
        <label className="text-xs text-muted-foreground uppercase tracking-wider mb-2 block">Телефон *</label>
        <input
          type="tel"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="+7 (___) ___-__-__"
          required
          className="w-full bg-muted/50 border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-all"
        />
      </div>

      <div>
        <label className="text-xs text-muted-foreground uppercase tracking-wider mb-2 block">Услуга</label>
        <select
          name="service"
          value={form.service}
          onChange={handleChange}
          className="w-full bg-muted/50 border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-gold/50 transition-all"
        >
          <option value="">Выберите услугу...</option>
          <option>iTOP Гигиена — 1 250 ₽ (акция)</option>
          <option>Имплант Nobel — от 85 000 ₽</option>
          <option>Hollywood Smile — 15 000 ₽</option>
          <option>Лечение кариеса</option>
          <option>Первичная консультация (бесплатно)</option>
          <option>Другое</option>
        </select>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="btn-gold w-full py-4 rounded-xl text-base font-bold flex items-center justify-center gap-3 disabled:opacity-70"
      >
        {loading ? (
          <>
            <Icon name="Loader2" size={20} className="animate-spin" />
            Отправляем...
          </>
        ) : (
          <>
            <Icon name="CalendarCheck" size={20} />
            Записаться на приём
          </>
        )}
      </button>

      <p className="text-xs text-muted-foreground text-center">
        Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
      </p>
    </form>
  );
}

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans">

      {/* ── HERO ── Attention */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center text-center overflow-hidden mesh-bg"
      >
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Клиника" className="w-full h-full object-cover opacity-15" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/70 to-background" />
        </div>

        {/* ambient blobs */}
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-lilac/10 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-gold/8 blur-[100px] pointer-events-none" />

        <div className="relative z-10 container mx-auto px-6 py-32">
          {/* badge */}
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-gold/30 bg-gold/10">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="text-gold text-sm font-medium tracking-wider uppercase">Владивосток · Центр</span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl font-light leading-[1.05] mb-6">
            Зубы болят?<br />
            <span className="gold-gradient italic font-normal">Улыбка стесняет?</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-4 leading-relaxed">
            Голливуд во Владивостоке за 1 визит — <span className="text-foreground font-semibold">iTOP гигиена</span> + <span className="text-foreground font-semibold">импланты от 85 000 ₽</span>
          </p>
          <p className="text-gold font-semibold text-lg mb-10">⚡ Первый осмотр — БЕСПЛАТНО</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={record}
              className="btn-gold px-10 py-5 rounded-full text-lg font-bold inline-flex items-center justify-center gap-3 animate-pulse-gold"
            >
              <Icon name="CalendarCheck" size={22} />
              Записаться бесплатно
            </button>
            <a
              href="https://wa.me/7423xxxxxxx"
              target="_blank"
              rel="noreferrer"
              className="btn-outline-gold px-10 py-5 rounded-full text-lg font-semibold inline-flex items-center justify-center gap-3"
            >
              <Icon name="MessageCircle" size={22} />
              WhatsApp
            </a>
          </div>

          {/* stats row */}
          <div className="mt-16 grid grid-cols-3 gap-6 max-w-xl mx-auto">
            {[
              { n: "500+", l: "отзывов" },
              { n: "4.9 / 5", l: "рейтинг" },
              { n: "10 лет", l: "гарантия" },
            ].map((s) => (
              <div key={s.l} className="card-glass rounded-2xl py-4 px-2">
                <div className="font-display text-2xl gold-gradient font-semibold">{s.n}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        <a href="#problem" className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted-foreground hover-gold transition-all">
          <span className="text-xs tracking-widest uppercase">Листайте</span>
          <Icon name="ChevronDown" size={20} className="animate-bounce" />
        </a>
      </section>

      {/* ── PROBLEM ── Interest */}
      <section id="problem" className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-px w-8 bg-gold opacity-50" />
              <span className="text-gold text-sm tracking-[0.2em] uppercase">Проблема</span>
              <div className="h-px w-8 bg-gold opacity-50" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-light">
              Почему <span className="gold-gradient italic">70% владивостокцев</span><br className="hidden md:block" /> игнорируют стоматолога?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: "BadgeDollarSign", title: "Цены «Москва+доставка»", desc: "Имплант 200 000 ₽+, без шансов на рассрочку", color: "from-red-500/10 to-red-800/5" },
              { icon: "Clock4", title: "Очереди на месяц вперёд", desc: "Звонки с 8 утра, занятые номера, потеря времени", color: "from-orange-500/10 to-orange-800/5" },
              { icon: "Wind", title: "Зимой дёсны воспаляются", desc: "+20% случаев пародонтита в Приморье в холодный сезон", color: "from-blue-500/10 to-blue-800/5" },
            ].map((c) => (
              <div key={c.title} className={`card-glass rounded-2xl p-8 bg-gradient-to-br ${c.color} border border-border hover:-translate-y-1 transition-all duration-300`}>
                <div className="w-14 h-14 rounded-2xl bg-muted flex items-center justify-center mb-5">
                  <Icon name={c.icon} size={26} className="text-foreground/60" fallback="AlertCircle" />
                </div>
                <h3 className="font-semibold text-foreground text-lg mb-2">{c.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider w-3/4 mx-auto" />

      {/* ── DESIRE ── До → После */}
      <section id="services" className="py-24 relative">
        <div className="absolute inset-0 mesh-bg opacity-30 pointer-events-none" />
        <div className="container mx-auto px-6 relative">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-px w-8 bg-gold opacity-50" />
              <span className="text-gold text-sm tracking-[0.2em] uppercase">Решение</span>
              <div className="h-px w-8 bg-gold opacity-50" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-light">
              До → <span className="gold-gradient italic">После</span> за 1 визит
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "Sparkles",
                badge: "Хит сезона",
                title: "iTOP Гигиена",
                price: "2 500 ₽",
                old: "",
                desc: "Профессиональная чистка + обучение правильной гигиене. Результат виден сразу.",
              },
              {
                icon: "Zap",
                badge: "Лучший выбор",
                title: "Имплант Nobel",
                price: "85 000 ₽",
                old: "",
                desc: "Швейцарский Nobel Biocare — гарантия 10 лет. В 2 раза дешевле московских клиник.",
              },
              {
                icon: "Star",
                badge: "За 1 час",
                title: "Hollywood Smile",
                price: "15 000 ₽",
                old: "",
                desc: "Профессиональное отбеливание до 8 тонов. Эффект держится до 2 лет.",
              },
            ].map((s, i) => (
              <div
                key={s.title}
                className={`card-glass rounded-2xl p-8 relative overflow-hidden hover:-translate-y-2 hover:gold-glow transition-all duration-500 ${i === 1 ? "border-gold/40 gold-glow" : ""}`}
              >
                {i === 1 && (
                  <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-lilac via-gold to-lilac" />
                )}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold/15 border border-gold/25 mb-5">
                  <span className="text-gold text-xs font-semibold">{s.badge}</span>
                </div>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-lilac/20 to-gold/20 flex items-center justify-center mb-5">
                  <Icon name={s.icon} size={26} className="text-gold" fallback="Star" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">{s.desc}</p>
                <div className="text-2xl font-bold gold-gradient">{s.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider w-3/4 mx-auto" />

      {/* ── SOLUTION ── Почему мы №1 */}
      <section id="about" className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 mb-6">
                <div className="h-px w-8 bg-gold opacity-50" />
                <span className="text-gold text-sm tracking-[0.2em] uppercase">Почему мы</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-light mb-10 leading-tight">
                Что делает нас<br />
                <span className="gold-gradient italic">№1 Владивостока</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: "MessageCircle", title: "Онлайн-запись 24/7", desc: "Через WhatsApp — без звонков и очередей" },
                  { icon: "Microscope", title: "Лечение под микроскопом", desc: "Точность 99%, видно то, что не видно глазу" },
                  { icon: "Wind", title: "Седация газом", desc: "Для пугливых пациентов — засыпаете, просыпаетесь с улыбкой" },
                  { icon: "CreditCard", title: "Рассрочка 0%", desc: "Через Тинькофф банк — без переплат" },
                ].map((f) => (
                  <div key={f.title} className="card-glass rounded-xl p-5 flex gap-4 items-start hover:border-gold/40 transition-all duration-300 group">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-lilac/20 to-gold/20 flex items-center justify-center shrink-0">
                      <Icon name={f.icon} size={18} className="text-gold" fallback="Check" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground text-sm group-hover:text-gold transition-colors">{f.title}</div>
                      <div className="text-xs text-muted-foreground mt-1 leading-snug">{f.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl overflow-hidden lilac-glow">
                <img src={DOCTOR_IMG} alt="Врач клиники" className="w-full h-[480px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              </div>
              <div className="absolute -bottom-5 -left-5 card-glass rounded-2xl p-5 gold-glow">
                <div className="text-2xl font-display gold-gradient font-semibold">Гарантия</div>
                <div className="text-sm text-muted-foreground">10 лет на импланты</div>
              </div>
              <div className="absolute -top-5 -right-5 card-glass rounded-2xl p-5 lilac-glow text-center">
                <div className="text-2xl font-display gold-gradient font-semibold">№1</div>
                <div className="text-xs text-muted-foreground">Владивосток</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider w-3/4 mx-auto" />

      {/* ── PROOF ── Отзывы */}
      <section id="reviews" className="py-24 relative">
        <div className="absolute inset-0 mesh-bg opacity-25 pointer-events-none" />
        <div className="container mx-auto px-6 relative">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-px w-8 bg-gold opacity-50" />
              <span className="text-gold text-sm tracking-[0.2em] uppercase">Доказательства</span>
              <div className="h-px w-8 bg-gold opacity-50" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-light">
              Пациенты <span className="gold-gradient italic">говорят</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {[
              {
                text: "10 лет боялась стоматолога. 6 имплантов под седацией — не почувствовала ничего! Цены в 2 раза ниже Москвы. Теперь улыбаюсь на всех фото!",
                name: "Татьяна К., 42 года",
                city: "Находка",
                service: "Имплантация",
              },
              {
                text: "iTOP-гигиена спасла дёсны зимой. Теперь чищу правильно — врач объяснил всё по шагам. За такие деньги — просто фантастика.",
                name: "Алексей М., 35 лет",
                city: "Уссурийск",
                service: "iTOP Гигиена",
              },
            ].map((r) => (
              <div key={r.name} className="card-glass rounded-2xl p-8 relative overflow-hidden hover:gold-glow transition-all duration-500">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-gold/8 to-transparent rounded-bl-full" />
                <div className="flex gap-0.5 mb-4">
                  {Array(5).fill(0).map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="text-gold" fallback="Star" />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed italic mb-6">"{r.text}"</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-lilac to-gold flex items-center justify-center text-deep font-bold font-display">
                      {r.name[0]}
                    </div>
                    <div>
                      <div className="font-semibold text-foreground text-sm">{r.name}</div>
                      <div className="text-xs text-muted-foreground">{r.city}</div>
                    </div>
                  </div>
                  <span className="text-xs px-3 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold">{r.service}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="inline-flex items-center gap-4 card-glass rounded-2xl px-8 py-4">
              <div className="text-4xl font-display gold-gradient font-semibold">4.9</div>
              <div className="text-left">
                <div className="flex gap-1 mb-1">
                  {Array(5).fill(0).map((_, i) => <Icon key={i} name="Star" size={14} className="text-gold" fallback="Star" />)}
                </div>
                <div className="text-sm text-muted-foreground">500+ отзывов на Яндекс Картах</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── OFFER ── Акция */}
      <section id="offer" className="py-24">
        <div className="container mx-auto px-6">
          <div className="relative rounded-3xl overflow-hidden">
            {/* bg */}
            <div className="absolute inset-0 bg-gradient-to-br from-lilac-dark/60 via-background to-background" />
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gold/10 blur-[80px]" />
            <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-lilac/15 blur-[60px]" />

            <div className="relative z-10 p-10 md:p-16">
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-red-500/15 border border-red-500/30">
                <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
                <span className="text-red-300 text-sm font-semibold uppercase tracking-wider">Акция до 15 апреля</span>
              </div>

              <h2 className="font-display text-4xl md:text-6xl font-light mb-4">
                <span className="gold-gradient">−50%</span> на iTOP Гигиену
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
                <div className="card-glass rounded-2xl p-8">
                  <div className="flex items-baseline gap-3 mb-4">
                    <span className="font-display text-4xl font-bold gold-gradient">1 250 ₽</span>
                    <span className="text-muted-foreground line-through text-xl">2 500 ₽</span>
                  </div>
                  <h3 className="font-semibold text-foreground text-lg mb-4">Что входит:</h3>
                  <ul className="space-y-2">
                    {[
                      "Профессиональная чистка зубов",
                      "Фторирование эмали",
                      "Щётка iTOP в подарок",
                      "Паста на 3 месяца",
                      "Обучение правильной гигиене",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm text-muted-foreground">
                        <Icon name="Check" size={16} className="text-gold shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col justify-between">
                  <div className="card-glass rounded-2xl p-8 mb-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Icon name="Users" size={24} className="text-gold" />
                      <span className="font-bold text-foreground text-xl">Осталось мест: <span className="text-gold">15</span></span>
                    </div>
                    <p className="text-muted-foreground text-sm">Зима без воспалений — позаботьтесь о дёснах прямо сейчас</p>
                  </div>

                  <button
                    onClick={record}
                    className="btn-gold w-full py-5 rounded-2xl text-lg font-bold flex items-center justify-center gap-3"
                  >
                    <Icon name="Zap" size={22} />
                    Забронировать место
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── Action */}
      <section id="contacts" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-lilac-dark/30 via-background to-background pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gold/8 blur-[80px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-6 relative">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-px w-8 bg-gold opacity-50" />
              <span className="text-gold text-sm tracking-[0.2em] uppercase">Запись</span>
              <div className="h-px w-8 bg-gold opacity-50" />
            </div>
            <h2 className="font-display text-5xl md:text-6xl font-light mb-4">
              Запишитесь за <span className="gold-gradient italic">30 секунд!</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-lg mx-auto">
              Перезвоним в течение 15 минут и подберём удобное время
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {/* Контакты */}
            <div className="space-y-5">
              {[
                { icon: "Phone", val: "+7 (423) xxx-xx-xx", label: "Телефон", note: "Звонок бесплатный" },
                { icon: "MessageCircle", val: "WhatsApp 24/7", label: "Мессенджер", note: "Ответим за 5 минут" },
                { icon: "MapPin", val: "Владивосток, центр", label: "Адрес", note: "10 мин от остановки" },
                { icon: "Clock", val: "Пн–Вс: 9:00 – 21:00", label: "График работы", note: "Без выходных" },
              ].map((c) => (
                <div key={c.label} className="card-glass rounded-2xl p-5 flex items-center gap-4 hover:border-gold/40 transition-all duration-300 group cursor-pointer">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-lilac/20 to-gold/20 flex items-center justify-center shrink-0 group-hover:from-gold/20 group-hover:to-lilac/20 transition-all">
                    <Icon name={c.icon} size={20} className="text-gold" fallback="Info" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">{c.label}</div>
                    <div className="font-semibold text-foreground">{c.val}</div>
                    <div className="text-xs text-gold">{c.note}</div>
                  </div>
                </div>
              ))}

              <div className="mt-4 inline-flex items-center gap-3 px-5 py-3 rounded-full border border-gold/30 bg-gold/5 w-full justify-center">
                <Icon name="ShieldCheck" size={16} className="text-gold" />
                <span className="text-foreground text-sm font-semibold">НЕ ЖДИТЕ БОЛИ — запишитесь сейчас!</span>
              </div>
            </div>

            {/* Форма */}
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-deep py-10">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-lilac to-gold flex items-center justify-center">
              <span className="text-deep font-display font-bold">С</span>
            </div>
            <span className="font-display text-lg font-semibold text-foreground">Стоматология Владивосток</span>
          </div>
          <div className="gold-line w-48 mx-auto mb-4" />
          <p className="text-muted-foreground text-sm">
            © 2026 Стоматология Владивосток. Все права защищены. Гарантия 10 лет.
          </p>
          <p className="text-xs text-muted-foreground/60 mt-2">
            Лицензия на медицинскую деятельность. Информация не является публичной офертой.
          </p>
        </div>
      </footer>

    </div>
  );
}