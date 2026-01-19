import Image from "next/image";

export default function Header() {
  return (
    <header className="site-header" role="banner">
      <div className="site-header__pill">
        <div className="site-header__brand">
          <Image
            src="/icons/Group 298956478.svg"
            alt="Думатель"
            width={204}
            height={44}
            priority
          />
          <span className="site-header__beta">бета</span>
        </div>
        <nav className="site-header__nav" aria-label="Основная навигация">
          <a className="site-header__nav-item" href="#product">
            О продукте
          </a>
          <a className="site-header__nav-item" href="#audience">
            Кому подходит
          </a>
          <a className="site-header__nav-item" href="#pricing">
            Тарифы
          </a>
          <a className="site-header__nav-item" href="#usage">
            Форма использования
          </a>
        </nav>
        <div className="site-header__contacts">
          <a className="site-header__phone" href="tel:+74992860004">
            +7 (499) 286-00-04
          </a>
          <a className="site-header__email" href="mailto:info@dumatel.ru">
            <Image
              src="/icons/Email.svg"
              alt="Email"
              width={16}
              height={16}
            />
            <span>info@dumatel.ru</span>
          </a>
        </div>
        <a className="site-header__cta" href="#cta">
          Попробовать сейчас
        </a>
      </div>
    </header>
  );
}
