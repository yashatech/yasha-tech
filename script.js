/**
 * Yasha Technology — Landing Page
 * i18n, theme toggle, mobile menu, scroll reveal, contact form stub
 */

const STORAGE_THEME = "yasha-theme";
const STORAGE_LANG = "yasha-lang";

const translations = {
  ru: {
    metaDescription: "Yasha Technology — партнёр по разработке программного обеспечения и цифровых продуктов для стартапов и растущих компаний.",
    "nav.highlights": "Компетенции",
    "nav.services": "Услуги",
    "nav.portfolio": "Портфолио",
    "nav.process": "Процесс",
    "nav.stack": "Стек",
    "nav.why": "Почему мы",
    "nav.contact": "Контакты",
    "nav.cta": "Обсудить проект",
    "hero.eyebrow": "Партнёр по разработке ПО",
    "hero.title": "Проектируем, разрабатываем и масштабируем надёжные цифровые продукты",
    "hero.subtitle": "Yasha Technology помогает стартапам и растущим компаниям создавать современные программные продукты — от MVP до production, мониторинга и долгосрочной поддержки.",
    "hero.ctaPrimary": "Обсудить проект",
    "hero.ctaSecondary": "Смотреть портфолио",
    "hero.chip1": "Full-stack",
    "hero.chip2": "Mobile",
    "hero.chip3": "Cloud & DevOps",
    "hero.chip4": "AI & Automation",
    "hero.cardLabel": "СТРОИТЬ · ЗАПУСКАТЬ · МАСШТАБИРОВАТЬ",
    "hero.card1": "Полный цикл разработки",
    "hero.card2": "Прозрачный процесс и отчётность",
    "hero.card3": "Production-ready архитектура",
    "hero.card4": "Быстрый старт команды",
    "hero.metric1": "направлений",
    "hero.metric2": "технологий",
    "hero.metric3": "поддержка",
    "highlights.eyebrow": "Ключевые компетенции",
    "highlights.title": "Инженерная экспертиза для цифровых продуктов и enterprise-систем",
    "highlights.desc": "Один партнёр закрывает продукт, backend, cloud, AI и безопасность — с фокусом на бизнес-результат и долгосрочную эксплуатацию.",
    "highlights.h1.title": "Full-stack разработка",
    "highlights.h1.desc": "Web, SaaS, backend и системные интеграции в единой продуктовой архитектуре.",
    "highlights.h2.title": "Mobile development",
    "highlights.h2.desc": "iOS, Android и кросс-платформенные приложения для клиентов и операционных команд.",
    "highlights.h3.title": "Cloud & DevOps",
    "highlights.h3.desc": "Облачная архитектура, CI/CD, мониторинг и масштабирование под рост нагрузки.",
    "highlights.h4.title": "AI-решения",
    "highlights.h4.desc": "LLM, OCR, прогнозирование, рекомендации и автоматизация бизнес-процессов.",
    "highlights.h5.title": "Автоматизация",
    "highlights.h5.desc": "Интеграции с CRM, ERP, back-office и операционными инструментами.",
    "highlights.h6.title": "Enterprise-системы",
    "highlights.h6.desc": "Модернизация 1С / ERP, API-слои и операционные порталы.",
    "highlights.h7.title": "Кибербезопасность",
    "highlights.h7.desc": "Security-first архитектура, аудит и защита данных на всех этапах.",
    "highlights.h8.title": "Долгосрочное партнёрство",
    "highlights.h8.desc": "Выделенная команда, поддержка после запуска и развитие продукта.",
    "services.eyebrow": "Услуги",
    "services.title": "Комплексные решения для цифрового бизнеса",
    "services.s1.title": "Web-разработка",
    "services.s1.desc": "Веб-приложения, SaaS и подписочные платформы с масштабируемой архитектурой.",
    "services.s2.title": "Mobile app development",
    "services.s2.desc": "Мобильные приложения для iOS и Android, клиентские и операционные сценарии.",
    "services.s3.title": "Backend development",
    "services.s3.desc": "API, базы данных, бизнес-логика и системные интеграции.",
    "services.s4.title": "UI/UX design",
    "services.s4.desc": "Пользовательские сценарии, структура продукта и понятные интерфейсы.",
    "services.s5.title": "Cloud & DevOps",
    "services.s5.desc": "AWS, Azure, GCP, Docker, Kubernetes, CI/CD и мониторинг.",
    "services.s6.title": "AI / ML solutions",
    "services.s6.desc": "AI-ассистенты, OCR, KYC, голосовой AI и предиктивная аналитика.",
    "services.s7.title": "API integrations",
    "services.s7.desc": "Платежи, карты, уведомления, odds API и back-office системы.",
    "services.s8.title": "Enterprise systems",
    "services.s8.desc": "Интеграция 1С / ERP, операционные порталы и модернизация UI.",
    "services.s9.title": "Custom software",
    "services.s9.desc": "Betting & iGaming, Web3, кибербезопасность и выделенные команды.",
    "portfolio.eyebrow": "Портфолио",
    "portfolio.title": "Цифровые продукты для маркетплейсов, логистики и бизнес-систем",
    "portfolio.desc": "Enterprise-модернизация, логистические платформы и AI-интеграция в реальных продуктах.",
    "portfolio.case": "КЕЙС",
    "portfolio.industry": "Отрасль",
    "portfolio.tech": "Технологии",
    "portfolio.value": "Ценность",
    "portfolio.open": "Открыть сайт",
    "portfolio.playStore": "Google Play",
    "portfolio.live": "Запущен",
    "portfolio.v.desc": "Маркетплейс с интеграцией 1С:Предприятие — бронирование, каталоги, промо-механика и loyalty-сценарии.",
    "portfolio.v.industry": "Маркетплейс / Beauty & Wellness",
    "portfolio.v.value": "Интеграция с 1С, бронирование, персонализация и коммерческое вовлечение",
    "portfolio.u.desc": "Web- и мобильная логистическая платформа для доставки, маршрутов и курьерских процессов.",
    "portfolio.u.industry": "Логистика / Last-mile delivery",
    "portfolio.u.value": "Операционная прозрачность, оптимизация маршрутов и ETA-прогнозирование",
    "portfolio.p.desc": "Экосистема доставки с real-time трекингом, wallet-процессами и commerce-сценариями.",
    "portfolio.p.industry": "Delivery ecosystem / Commerce",
    "portfolio.p.value": "Self-service портал, трекинг, wallet и автоматизация поддержки",
    "portfolio.comingSoon": "В разработке",
    "portfolio.c.desc": "AI fitness-тренер с распознаванием поз в реальном времени, автоматическим подсчётом повторений и голосовым сопровождением во время тренировок.",
    "portfolio.c.industry": "Здоровье и фитнес / Wellness-технологии",
    "portfolio.c.tech": "Android (Kotlin, Jetpack Compose), MediaPipe Pose, Text-to-Speech, Supabase, Cloudflare Workers",
    "portfolio.c.value": "Подсчёт повторений через камеру без рук, мгновенные голосовые коррекции техники и персонализированные тренировки без необходимости смотреть на экран",
    "portfolio.c.alt1": "Cila Fit — AI-тренер с отслеживанием поз",
    "portfolio.c.alt2": "Cila Fit — экосистема на разных устройствах",
    "portfolio.c.alt3": "Cila Fit — тренировка с голосовым коучингом",
    "process.eyebrow": "Процесс",
    "process.title": "Понятный путь от идеи до запуска и масштабирования",
    "process.s1.title": "Discovery",
    "process.s1.desc": "Цели бизнеса, аудитория, требования и риски.",
    "process.s2.title": "Planning",
    "process.s2.desc": "MVP scope, архитектура, backend, база данных и инфраструктура.",
    "process.s3.title": "UI/UX design",
    "process.s3.desc": "Пользовательские сценарии, структура продукта и прототипы.",
    "process.s4.title": "Development",
    "process.s4.desc": "Frontend, mobile, backend, cloud, AI и интеграции.",
    "process.s5.title": "QA",
    "process.s5.desc": "Тестирование, безопасность, производительность и стабильность.",
    "process.s6.title": "Deployment",
    "process.s6.desc": "Релиз, мониторинг, оптимизация и контроль качества.",
    "process.s7.title": "Long-term support",
    "process.s7.desc": "Поддержка, развитие продукта и масштабирование команды.",
    "stack.eyebrow": "Технологический стек",
    "stack.title": "Современные технологии для разработки, облака, AI и Web3",
    "stack.frontend": "Frontend",
    "stack.mobile": "Mobile",
    "stack.backend": "Backend",
    "stack.db": "Databases",
    "stack.cloud": "Cloud & DevOps",
    "stack.ai": "AI & Data",
    "stack.web3": "Blockchain / Web3",
    "why.eyebrow": "Почему Yasha Technology",
    "why.title": "Сильная инженерия, прозрачный процесс и ответственность за результат",
    "why.desc": "Мы проектируем продукты, которые можно быстро запустить и безопасно масштабировать — с понятной коммуникацией на каждом этапе.",
    "why.l1": "Надёжная инженерия для реальной production-эксплуатации",
    "why.l2": "Масштабируемая архитектура с учётом роста и нагрузки",
    "why.l3": "Прозрачные сроки, этапы, риски и отчётность",
    "why.l4": "Security-first подход и контроль качества",
    "why.l5": "Продуктовое мышление и фокус на бизнес-результат",
    "why.l6": "Долгосрочная поддержка и развитие после запуска",
    "contact.eyebrow": "Контакты",
    "contact.title": "Давайте построим ваш продукт вместе",
    "contact.desc": "Мы можем оценить вашу идею, предложить техническое решение и лучший подход для запуска и роста.",
    "contact.l1": "Бесплатная оценка проекта",
    "contact.l2": "Техническое решение и план MVP",
    "contact.l3": "Архитектурная консультация",
    "contact.l4": "Разработка и поддержка на всех этапах",
    "contact.telegram": "Telegram",
    "contact.emailAria": "Email: contact@yasha.tech",
    "contact.telegramAria": "Telegram",
    "contact.imageAlt": "Специалист поддержки Yasha Technology в наушниках",
    "footer.tagline": "Партнёр по разработке программного обеспечения и цифровых продуктов",
    "footer.rights": "Все права защищены."
  },
  en: {
    metaDescription: "Yasha Technology — software and digital product development partner for startups and growing companies.",
    "nav.highlights": "Expertise",
    "nav.services": "Services",
    "nav.portfolio": "Portfolio",
    "nav.process": "Process",
    "nav.stack": "Stack",
    "nav.why": "Why Us",
    "nav.contact": "Contact",
    "nav.cta": "Discuss project",
    "hero.eyebrow": "Software Development Partner",
    "hero.title": "We design, build, and scale reliable digital products",
    "hero.subtitle": "Yasha Technology helps startups and growing companies build modern software products — from MVP to production, monitoring, and long-term support.",
    "hero.ctaPrimary": "Discuss your project",
    "hero.ctaSecondary": "View portfolio",
    "hero.chip1": "Full-stack",
    "hero.chip2": "Mobile",
    "hero.chip3": "Cloud & DevOps",
    "hero.chip4": "AI & Automation",
    "hero.cardLabel": "BUILD · LAUNCH · SCALE",
    "hero.card1": "Full development lifecycle",
    "hero.card2": "Transparent process and reporting",
    "hero.card3": "Production-ready architecture",
    "hero.card4": "Fast team onboarding",
    "hero.metric1": "service areas",
    "hero.metric2": "technologies",
    "hero.metric3": "support",
    "highlights.eyebrow": "Core expertise",
    "highlights.title": "Engineering expertise for digital products and enterprise systems",
    "highlights.desc": "One partner covers product, backend, cloud, AI, and security — with a focus on business outcomes and long-term operation.",
    "highlights.h1.title": "Full-stack development",
    "highlights.h1.desc": "Web, SaaS, backend, and system integrations in a unified product architecture.",
    "highlights.h2.title": "Mobile development",
    "highlights.h2.desc": "iOS, Android, and cross-platform apps for customers and operations teams.",
    "highlights.h3.title": "Cloud & DevOps",
    "highlights.h3.desc": "Cloud architecture, CI/CD, monitoring, and scaling for growing load.",
    "highlights.h4.title": "AI solutions",
    "highlights.h4.desc": "LLM, OCR, forecasting, recommendations, and business process automation.",
    "highlights.h5.title": "Automation",
    "highlights.h5.desc": "Integrations with CRM, ERP, back-office, and operational tools.",
    "highlights.h6.title": "Enterprise systems",
    "highlights.h6.desc": "1C / ERP modernization, API layers, and operational portals.",
    "highlights.h7.title": "Cybersecurity",
    "highlights.h7.desc": "Security-first architecture, audits, and data protection at every stage.",
    "highlights.h8.title": "Long-term partnership",
    "highlights.h8.desc": "Dedicated team, post-launch support, and product growth.",
    "services.eyebrow": "Services",
    "services.title": "Comprehensive solutions for digital business",
    "services.s1.title": "Web development",
    "services.s1.desc": "Web applications, SaaS, and subscription platforms with scalable architecture.",
    "services.s2.title": "Mobile app development",
    "services.s2.desc": "Mobile apps for iOS and Android — customer and operational workflows.",
    "services.s3.title": "Backend development",
    "services.s3.desc": "APIs, databases, business logic, and system integrations.",
    "services.s4.title": "UI/UX design",
    "services.s4.desc": "User flows, product structure, and clear interfaces.",
    "services.s5.title": "Cloud & DevOps",
    "services.s5.desc": "AWS, Azure, GCP, Docker, Kubernetes, CI/CD, and monitoring.",
    "services.s6.title": "AI / ML solutions",
    "services.s6.desc": "AI assistants, OCR, KYC, voice AI, and predictive analytics.",
    "services.s7.title": "API integrations",
    "services.s7.desc": "Payments, maps, notifications, odds APIs, and back-office systems.",
    "services.s8.title": "Enterprise systems",
    "services.s8.desc": "1C / ERP integration, operational portals, and UI modernization.",
    "services.s9.title": "Custom software",
    "services.s9.desc": "Betting & iGaming, Web3, cybersecurity, and dedicated teams.",
    "portfolio.eyebrow": "Portfolio",
    "portfolio.title": "Digital products for marketplaces, logistics, and business systems",
    "portfolio.desc": "Enterprise modernization, logistics platforms, and AI integration in real products.",
    "portfolio.case": "CASE",
    "portfolio.industry": "Industry",
    "portfolio.tech": "Technologies",
    "portfolio.value": "Value delivered",
    "portfolio.open": "Visit website",
    "portfolio.playStore": "Google Play",
    "portfolio.live": "Live",
    "portfolio.v.desc": "Marketplace integrated with 1C:Enterprise — booking, catalogs, promo mechanics, and loyalty.",
    "portfolio.v.industry": "Marketplace / Beauty & Wellness",
    "portfolio.v.value": "1C integration, booking, personalization, and commercial engagement",
    "portfolio.u.desc": "Web and mobile logistics platform for delivery, routing, and courier operations.",
    "portfolio.u.industry": "Logistics / Last-mile delivery",
    "portfolio.u.value": "Operational transparency, route optimization, and ETA prediction",
    "portfolio.p.desc": "Delivery ecosystem with real-time tracking, wallet flows, and commerce scenarios.",
    "portfolio.p.industry": "Delivery ecosystem / Commerce",
    "portfolio.p.value": "Self-service portal, tracking, wallet, and support automation",
    "portfolio.comingSoon": "In development",
    "portfolio.c.desc": "AI fitness coach with real-time pose detection, automatic rep counting, and live voice coaching during workouts.",
    "portfolio.c.industry": "Health & Fitness / Wellness technology",
    "portfolio.c.tech": "Android (Kotlin, Jetpack Compose), MediaPipe Pose, Text-to-Speech, Supabase, Cloudflare Workers",
    "portfolio.c.value": "Hands-free rep counting via camera pose tracking, instant spoken form corrections, and personalized workout guidance without watching the screen",
    "portfolio.c.alt1": "Cila Fit AI coach with pose tracking",
    "portfolio.c.alt2": "Cila Fit multi-device fitness ecosystem",
    "portfolio.c.alt3": "Cila Fit workout with voice coaching",
    "process.eyebrow": "Process",
    "process.title": "A clear path from idea to launch and scaling",
    "process.s1.title": "Discovery",
    "process.s1.desc": "Business goals, audience, requirements, and risks.",
    "process.s2.title": "Planning",
    "process.s2.desc": "MVP scope, architecture, backend, database, and infrastructure.",
    "process.s3.title": "UI/UX design",
    "process.s3.desc": "User flows, product structure, and prototypes.",
    "process.s4.title": "Development",
    "process.s4.desc": "Frontend, mobile, backend, cloud, AI, and integrations.",
    "process.s5.title": "QA",
    "process.s5.desc": "Testing, security, performance, and stability.",
    "process.s6.title": "Deployment",
    "process.s6.desc": "Release, monitoring, optimization, and quality control.",
    "process.s7.title": "Long-term support",
    "process.s7.desc": "Support, product growth, and team scaling.",
    "stack.eyebrow": "Technology stack",
    "stack.title": "Modern technologies for development, cloud, AI, and Web3",
    "stack.frontend": "Frontend",
    "stack.mobile": "Mobile",
    "stack.backend": "Backend",
    "stack.db": "Databases",
    "stack.cloud": "Cloud & DevOps",
    "stack.ai": "AI & Data",
    "stack.web3": "Blockchain / Web3",
    "why.eyebrow": "Why Yasha Technology",
    "why.title": "Strong engineering, transparent process, and ownership of the result",
    "why.desc": "We design products that launch quickly and scale securely — with clear communication at every stage.",
    "why.l1": "Reliable engineering for real production environments",
    "why.l2": "Scalable architecture designed for growth and load",
    "why.l3": "Transparent timelines, stages, risks, and reporting",
    "why.l4": "Security-first approach and quality control",
    "why.l5": "Product thinking focused on business outcomes",
    "why.l6": "Long-term support and growth after launch",
    "contact.eyebrow": "Contact",
    "contact.title": "Let's build your product together",
    "contact.desc": "We can evaluate your idea, propose a technical solution, and define the best approach for launch and growth.",
    "contact.l1": "Free project evaluation",
    "contact.l2": "Technical solution and MVP plan",
    "contact.l3": "Architecture consultation",
    "contact.l4": "Development and support at every stage",
    "contact.telegram": "Telegram",
    "contact.emailAria": "Email: contact@yasha.tech",
    "contact.telegramAria": "Telegram",
    "contact.imageAlt": "Yasha Technology support specialist wearing a headset",
    "footer.tagline": "Software and digital product development partner",
    "footer.rights": "All rights reserved."
  }
};

const html = document.documentElement;
const header = document.querySelector(".header");
const nav = document.getElementById("nav");
const navLinks = document.querySelectorAll(".nav a[data-nav]");
const burger = document.getElementById("burger");
const themeToggle = document.getElementById("theme-toggle");
const langButtons = document.querySelectorAll(".lang-switch__btn");

function getSavedLang() {
  return localStorage.getItem(STORAGE_LANG) || "ru";
}

function applyTheme(theme) {
  html.setAttribute("data-theme", theme);
  localStorage.setItem(STORAGE_THEME, theme);
  const metaTheme = document.querySelector('meta[name="theme-color"]');
  if (metaTheme) metaTheme.content = theme === "dark" ? "#05070f" : "#f4f7ff";
}

function initTheme() {
  const saved = localStorage.getItem(STORAGE_THEME);
  if (saved === "light" || saved === "dark") {
    applyTheme(saved);
    return;
  }
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  applyTheme(prefersDark ? "dark" : "light");
}

function applyLanguage(lang) {
  const dict = translations[lang];
  if (!dict) return;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
    const key = el.getAttribute("data-i18n-alt");
    if (dict[key]) el.alt = dict[key];
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    const key = el.getAttribute("data-i18n-aria");
    if (dict[key]) el.setAttribute("aria-label", dict[key]);
  });

  html.lang = lang;
  document.title = lang === "ru"
    ? "Yasha Technology — Разработка ПО и цифровых продуктов"
    : "Yasha Technology — Software & Digital Product Development";

  const meta = document.querySelector('meta[name="description"]');
  if (meta) meta.content = dict.metaDescription;

  langButtons.forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.lang === lang);
  });

  localStorage.setItem(STORAGE_LANG, lang);
}

function initReveal() {
  const items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  items.forEach((el) => observer.observe(el));
}

function closeMobileNav() {
  nav.classList.remove("is-open");
  burger.classList.remove("is-open");
  burger.setAttribute("aria-expanded", "false");
}

function initHeaderScroll() {
  if (!header) return;
  const onScroll = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 24);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

function initScrollSpy() {
  if (!navLinks.length) return;
  const sections = Array.from(navLinks)
    .map((link) => document.getElementById(link.dataset.nav))
    .filter(Boolean);

  const setActive = (id) => {
    navLinks.forEach((link) => {
      link.classList.toggle("is-active", link.dataset.nav === id);
    });
  };

  if (!("IntersectionObserver" in window)) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    },
    { rootMargin: "-40% 0px -50% 0px", threshold: 0.01 }
  );

  sections.forEach((section) => observer.observe(section));
}

themeToggle?.addEventListener("click", () => {
  const next = html.getAttribute("data-theme") === "dark" ? "light" : "dark";
  applyTheme(next);
});

langButtons.forEach((btn) => {
  btn.addEventListener("click", () => applyLanguage(btn.dataset.lang));
});

burger?.addEventListener("click", () => {
  const open = !nav.classList.contains("is-open");
  nav.classList.toggle("is-open", open);
  burger.classList.toggle("is-open", open);
  burger.setAttribute("aria-expanded", String(open));
});

nav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMobileNav);
});

document.querySelector(".btn--header")?.addEventListener("click", closeMobileNav);

document.getElementById("year").textContent = new Date().getFullYear();

initTheme();
applyLanguage(getSavedLang());
initReveal();
initHeaderScroll();
initScrollSpy();
