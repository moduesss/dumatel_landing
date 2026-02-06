import Header from "@/components/Header";
import AssistantCarousel from "@/sections/AssistantCarousel";
import ComparisonMatrix from "@/sections/ComparisonMatrix";
import Formats from "@/sections/Formats";
import FAQ from "@/sections/FAQ";
import Hero from "@/sections/Hero";
import PricingPlans from "@/sections/PricingPlans";
import Reviews from "@/sections/Reviews";
import Scenarios from "@/sections/Scenarios";
import SecurityShowcase from "@/sections/SecurityShowcase";
import QuestionWindow from "@/sections/QuestionWindow";
import Footer from "@/components/Footer";

export default function HomePage() {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Думатель",
    url: "https://dumatel.ru",
    logo: "https://dumatel.ru/icons/logo-vector.svg",
    sameAs: ["https://app.dumatel.ru/"],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+7-499-286-00-04",
        contactType: "customer service",
        availableLanguage: ["Russian"],
        email: "info@dumatel.ru",
      },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "В чем преимущество использования Думателя в сравнении с другими ИИ?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "«Думатель» — интеллектуальное пространство, которое объединяет хранение, поиск и генерацию в одной среде на архитектуре RAG. Он индексирует весь массив данных и отвечает на основе реальных источников с прозрачными ссылками и подсветкой фрагментов.",
        },
      },
      {
        "@type": "Question",
        name: "Есть ли бесплатная версия Думателя?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Базовая версия доступна бесплатно: можно загружать ограниченный объём файлов, работать с проектами и создавать артефакты в пределах месячного лимита кредитов. Для расширения лимитов доступны платные тарифы.",
        },
      },
      {
        "@type": "Question",
        name: "Можно ли интегрировать Думателя на крупное предприятие?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Да. «Думатель» поддерживает корпоративное развёртывание (on-prem) и работу с внутренними базами документов. Возможна работа в облаке или на серверах заказчика.",
        },
      },
      {
        "@type": "Question",
        name: "Безопасно ли использовать Думателя? Есть ли риск утечки данных?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Все данные шифруются, изолируются и не используются для обучения моделей. Для корпоративных клиентов есть разграничение прав доступа, контроль версий и on-prem-развёртывание.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Header />
      <main>
        <Hero />
        <AssistantCarousel />
        <Scenarios />
        <Reviews />
        <PricingPlans />
        <Formats />
        <ComparisonMatrix />
        <SecurityShowcase />
        <QuestionWindow />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
