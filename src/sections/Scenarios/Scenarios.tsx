"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import Button from "@/components/Button";
import { withBasePath } from "@/lib/paths";
import { setupScenariosAnimations } from "./Scenarios.anim";
import styles from "./Scenarios.module.scss";

type ScenarioSetId =
  | "work"
  | "research"
  | "hr"
  | "sales"
  | "legal"
  | "procurement"
  | "management";

type Badge = { id: ScenarioSetId; label: string };

type MediaClass =
  | "scenario-docs"
  | "scenario-files"
  | "scenario-dialog"
  | "scenario-methods"
  | "scenario-posts"
  | "scenario-cta-circle"
  | "scenario-resume"
  | "scenario-bag"
  | "scenario-tkp"
  | "scenario-offer"
  | "scenario-compare"
  | "scenario-versions"
  | "scenario-check"
  | "scenario-calendar"
  | "scenario-search"
  | "scenario-document"
  | "scenario-window"
  | "scenario-contract";

type IllSize = "ill-xs" | "ill-sm" | "ill-md" | "ill-lg";

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

function ScenarioCard({
  title,
  iconSrc,
  iconAlt = "",
  iconW,
  iconH,
  hint,
  note,
  text,
  tag,
  media,
}: {
  title: React.ReactNode;
  iconSrc?: string;
  iconAlt?: string;
  iconW?: number;
  iconH?: number;
  hint?: string;
  note?: React.ReactNode;
  text?: React.ReactNode;
  tag?: { label: string; iconSrc: string; iconW: number; iconH: number };
  media: React.ReactNode;
}) {
  return (
    <article className={styles["scenario-card"]} data-anim="sc-card">
      <div className={styles["scenario-card__media"]}>{media}</div>

      <div className={styles["scenario-card__body"]}>
        {(iconSrc || title) && (
          <div className={styles["scenario-card__title-row"]}>
            {iconSrc ? (
              <span className={styles["scenario-card__title-icon"]}>
                <Image
                  src={withBasePath(iconSrc)}
                  alt={iconAlt}
                  width={iconW ?? 28}
                  height={iconH ?? 28}
                  className={styles["scenario-card__title-icon-image"]}
                />
              </span>
            ) : null}

            <h3>{title}</h3>
          </div>
        )}

        {hint ? <p className={styles["scenario-card__hint"]}>{hint}</p> : null}

        {note ? <div className={styles["scenario-card__note"]}>{note}</div> : null}

        {text ? (
          <p className={styles["scenario-card__text"]}>
            {tag ? (
              <>
                <span className={styles["scenario-card__tag"]}>
                  <span className={styles["scenario-card__tag-icon"]}>
                    <Image
                      src={withBasePath(tag.iconSrc)}
                      alt=""
                      width={tag.iconW}
                      height={tag.iconH}
                    />
                  </span>
                  {tag.label}
                </span>{" "}
              </>
            ) : null}
            {text}
          </p>
        ) : null}
      </div>
    </article>
  );
}

function MediaWrap({
  wrap,
  size,
  children,
}: {
  wrap?: MediaClass;
  size?: IllSize;
  children: React.ReactNode;
}) {
  if (!wrap && !size) return <>{children}</>;
  return <div className={cx(wrap ? styles[wrap] : "", size ? styles[size] : "")}>{children}</div>;
}

function IllImage({
  src,
  alt,
  w,
  h,
  className,
  priority,
}: {
  src: string;
  alt: string;
  w: number;
  h: number;
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src={withBasePath(src)}
      alt={alt}
      width={w}
      height={h}
      className={className ? className : styles["scenario-ill"]}
      priority={priority}
    />
  );
}

function WorkCards() {
  return (
    <>
      <ScenarioCard
        title="Аналитический отчёт за считанные секунды!"
        hint="Думатель умеет:"
        note={
          <p>
            <strong>Объединять таблицы </strong>
            <span className={styles["scenario-card__note-medium"]}>
              и отчёты, находит ключевые показатели,{" "}
            </span>
            <strong>строит графики и формирует краткий аналитический документ </strong>
            <span>с причинами изменений и ссылками на источники.</span>
          </p>
        }
        media={
          <MediaWrap wrap="scenario-docs" size="ill-md">
            <Image
              src={withBasePath("/usecases/doc_left.svg")}
              alt="Документ с ключевыми показателями"
              width={320}
              height={360}
              className={styles["scenario-docs__image"]}
            />
            <Image
              src={withBasePath("/usecases/doc_right.svg")}
              alt="Документ с обоснованием закупки"
              width={320}
              height={360}
              className={styles["scenario-docs__image"]}
            />
          </MediaWrap>
        }
      />

      <ScenarioCard
        title={
          <>
            Думатель проводит расчёт прямо <br />
            по документам
          </>
        }
        iconSrc="/icons/scenario-calc.svg"
        iconW={21}
        iconH={28}
        text={
          <>
            Система находит формулы и числовые значения, подставляет данные и показывает
            точный результат с указанием источника.
          </>
        }
        media={
          <MediaWrap wrap="scenario-files" size="ill-md">
            <div className={cx(styles["scenario-file"], styles["scenario-file--pdf"])} aria-hidden="true">
              <Image
                src={withBasePath("/icons/scenario-pdf.svg")}
                alt=""
                width={150}
                height={200}
                className={styles["scenario-file__image"]}
              />
              <span className={styles["scenario-file__label"]}>PDF</span>
            </div>

            <div className={cx(styles["scenario-file"], styles["scenario-file--xls"])} aria-hidden="true">
              <Image
                src={withBasePath("/icons/scenario-xls.svg")}
                alt=""
                width={150}
                height={200}
                className={styles["scenario-file__image"]}
              />
              <span className={styles["scenario-file__label"]}>XLS</span>
            </div>

            <div className={cx(styles["scenario-file"], styles["scenario-file--doc"])} aria-hidden="true">
              <Image
                src={withBasePath("/icons/scenario-doc.svg")}
                alt=""
                width={150}
                height={200}
                className={styles["scenario-file__image"]}
              />
              <span className={styles["scenario-file__label"]}>DOC</span>
            </div>
          </MediaWrap>
        }
      />

      <ScenarioCard
        title={
          <>
            Найдите уникальное решение под задачу <br />
            вместе с Веб-Агентом!
          </>
        }
        iconSrc="/icons/scenario-web-title.svg"
        iconW={27}
        iconH={28}
        tag={{ label: "Веб-Агент", iconSrc: "/icons/scenario-web-badge.svg", iconW: 16, iconH: 22 }}
        text={
          <>
            анализирует открытые источники, проверяет отзывы и формирует список решений с плюсами и минусами.
          </>
        }
        media={
          <IllImage
            src="/usecases/web_agent_work.svg"
            alt="Веб-Агент ищет и анализирует данные"
            w={620}
            h={360}
            className={cx(styles["scenario-ill"], styles["scenario-ill-web-agent"], styles["ill-md"])}
            priority
          />
        }
      />

      <ScenarioCard
        title={
          <>
            Работайте в удовольствие вместе с нашим <br />
            Думателем
          </>
        }
        iconSrc="/icons/scenario-cta.svg"
        iconW={27}
        iconH={30}
        text={
          <>
            Сократите время затраченное на задачи до минимума и закрывайте их как можно быстрее без потери качества работы.
          </>
        }
        media={
          <MediaWrap wrap="scenario-cta-circle" size="ill-xs">
            <Image
              src={withBasePath("/icons/scenario-dialog-circle.svg")}
              alt="Экран Думателя"
              width={200}
              height={200}
              className={styles["scenario-ill"]}
            />
          </MediaWrap>
        }
      />
    </>
  );
}

function ResearchCards() {
  return (
    <>
      <ScenarioCard
        title={
          <>
            Конспектирование длинных текстов <br />и статей
          </>
        }
        iconSrc="/icons/scenario-research-icon.svg"
        iconW={27}
        iconH={30}
        text={<>Думатель сокращает десятки страниц до структурированного краткого содержания с цитатами.</>}
        media={
          <MediaWrap wrap="scenario-dialog" size="ill-md">
            <div className={styles["scenario-dialog__bubble"]}>
              <span className={styles["scenario-dialog__label"]}>Думатель</span>
              <p>Генерирую краткое содержание вашей статьи, которую вы указали как внешнюю гипер-ссылку.</p>
            </div>
            <Image
              src={withBasePath("/icons/scenario-research-dialog.svg")}
              alt=""
              width={48}
              height={48}
              className={styles["scenario-dialog__dot"]}
            />
          </MediaWrap>
        }
      />

      <ScenarioCard
        title="Думатель анализирует и сравнивает методики."
        iconSrc="/icons/scenario-research-icon-2.svg"
        iconW={22}
        iconH={28}
        text={<>Система извлекает все необходимые параметры и строит таблицы, а так же выделяет отличия.</>}
        media={
          <MediaWrap wrap="scenario-methods" size="ill-lg">
            <Image
              src={withBasePath("/usecases/sheet.svg")}
              alt="Таблица с методиками"
              width={260}
              height={200}
              className={styles["scenario-methods__doc"]}
            />
            <Image
              src={withBasePath("/icons/scenario-research-loading.svg")}
              alt="Загрузка анализа"
              width={64}
              height={64}
              className={styles["scenario-methods__loader"]}
            />
            <Image
              src={withBasePath("/usecases/dumatel_file.svg")}
              alt="Документ с анализом"
              width={220}
              height={220}
              className={styles["scenario-methods__doc"]}
            />
          </MediaWrap>
        }
      />

      <ScenarioCard
        title="Находите свежие публикации и источники"
        iconSrc="/icons/scenario-research-title.svg"
        iconW={28}
        iconH={28}
        tag={{ label: "Веб-Агент", iconSrc: "/icons/scenario-web-badge.svg", iconW: 16, iconH: 22 }}
        text={<>собирает материалы из открытых баз, проверяет достоверность и показывает список ссылок с аннотациями.</>}
        media={
          <MediaWrap wrap="scenario-posts" size="ill-lg">
            <div /* className={styles["scenario-post"]} */ data-variant="center">
              <Image
                src={withBasePath("/usecases/post_main.svg")}
                alt="Подбор публикаций и источников"
                width={200}
                height={200}
                className={styles["scenario-post__image"]}
              />
            </div>
          </MediaWrap>
        }
      />

      <ScenarioCard
        title="Занимайтесь исследованиями вместе с Думателем!"
        iconSrc="/icons/scenario-cta.svg"
        iconW={27}
        iconH={30}
        text={<>Сократите время затраченное на задачи до минимума и закрывайте их как можно быстрее без потери качества работы.</>}
        media={
          <MediaWrap wrap="scenario-cta-circle" size="ill-xs">
            <Image src={withBasePath("/icons/scenario-dialog-circle.svg")} alt="" width={200} height={200} />
          </MediaWrap>
        }
      />
    </>
  );
}

function HrCards() {
  return (
    <>
      <ScenarioCard
        title="Сравнивайте резюме всего за минуту"
        iconSrc="/icons/scenario-hr-icon-2.svg"
        iconW={27}
        iconH={30}
        text={<>Система извлекает все необходимые данные и составляет таблицу компетенции в отдельном файле.</>}
        media={
          <MediaWrap wrap="scenario-resume" size="ill-md">
            <Image
              src={withBasePath("/usecases/resume.svg")}
              alt="Список резюме с выбранным кандидатом"
              width={520}
              height={260}
              className={styles["scenario-resume__image"]}
            />
          </MediaWrap>
        }
      />

      <ScenarioCard
        title="Генерация тестовых заданий и чек-листов"
        iconSrc="/icons/scenario-hr-icon-1.svg"
        iconW={28}
        iconH={28}
        text={<>Думатель использует шаблоны компании и формирует готовое задание с критериями оценивания.</>}
        media={
          <MediaWrap wrap="scenario-dialog" size="ill-md">
            <div className={styles["scenario-dialog__bubble"]}>
              <span className={styles["scenario-dialog__label"]}>Думатель говорит:</span>
              <p>Тестовое задание основано на шаблонах вашей компании и ее специфики, даю готовый шаблон с критериями оценивания.</p>
            </div>

            <div className={styles["scenario-file-card"]}>
              <div className={styles["scenario-file-card__icon"]}>
                <Image src={withBasePath("/icons/scenario-hr-pdf.svg")} alt="" width={38} height={51} />
                <span>PDF</span>
              </div>
              <div className={styles["scenario-file-card__meta"]}>
                <p>Тестовое</p>
                <p>задание.pdf</p>
                <span>24.3 МБ.</span>
              </div>
            </div>
          </MediaWrap>
        }
      />

      <ScenarioCard
        title="Думатель анализирует рынок вакансий"
        iconSrc="/icons/scenario-hr-title.svg"
        iconW={28}
        iconH={28}
        tag={{ label: "Веб-Агент", iconSrc: "/icons/scenario-web-badge.svg", iconW: 16, iconH: 22 }}
        text={<>собирает предложения с площадок, фильтрует дубли и формирует сводную таблицу по условиям.</>}
        media={
          <MediaWrap wrap="scenario-bag" size="ill-lg">
            <Image
              src={withBasePath("/usecases/shop_bag.svg")}
              alt="Корзина с тегами вакансий"
              width={260}
              height={180}
              className={styles["scenario-bag__image"]}
            />
          </MediaWrap>
        }
      />

      <ScenarioCard
        title="Вы занимаетесь HR? Думатель - то, что вам действительно нужно!"
        iconSrc="/icons/scenario-cta.svg"
        iconW={27}
        iconH={30}
        text={<>Сократите время затраченное на задачи до минимума и закрывайте их как можно быстрее без потери качества работы.</>}
        media={
          <MediaWrap wrap="scenario-cta-circle" size="ill-xs">
            <Image src={withBasePath("/icons/scenario-dialog-circle.svg")} alt="" width={200} height={200} />
          </MediaWrap>
        }
      />
    </>
  );
}

function SalesCards() {
  return (
    <>
      <ScenarioCard
        title="Думатель быстро подготовит ТКП"
        iconSrc="/icons/scenario-sales-icon-tkp.svg"
        iconW={28}
        iconH={28}
        text={<>Думатель выравнивает форматы и формирует таблицу сравнения цен и сроков.</>}
        media={
          <MediaWrap wrap="scenario-tkp" size="ill-sm">
            <Image
              src={withBasePath("/usecases/dumatel_tkp.svg")}
              alt="Подготовленный ТКП"
              width={200}
              height={160}
              className={styles["scenario-tkp__doc"]}
            />
            <span className={styles["scenario-tkp__label"]}>ТКП от 03.12</span>
            <span className={styles["scenario-tkp__cursor"]}>
              <Image src={withBasePath("/icons/scenario-sales-cursor.svg")} alt="" width={23} height={28} />
            </span>
          </MediaWrap>
        }
      />

      <ScenarioCard
        title={
          <>
            Формирование коммерческого <br />
            предложения
          </>
        }
        iconSrc="/icons/scenario-sales-icon-offer.svg"
        iconW={28}
        iconH={28}
        text={<>Думатель объединяет описание товара, условия и делает расчёт итоговой суммы за вас.</>}
        media={
          <MediaWrap wrap="scenario-offer" size="ill-md">
            <div className={styles["scenario-offer__bubble"]}>
              <span className={styles["scenario-offer__label"]}>Думатель говорит:</span>
              <p>Составил Коммерческое Предложение на основе вашего офера, который вы предоставили мне файлом, упаковываю в PDF.</p>
            </div>

            <div className={styles["scenario-offer__file"]}>
              <div className={styles["scenario-offer__file-icon"]}>
                <Image src={withBasePath("/icons/scenario-sales-pdf.svg")} alt="" width={38} height={51} />
                <span>PDF</span>
              </div>
              <div className={styles["scenario-offer__file-meta"]}>
                <p>КП-РГС-2026</p>
                <p>.pdf</p>
                <span>24.3 МБ.</span>
              </div>
            </div>
          </MediaWrap>
        }
      />

      <ScenarioCard
        title="Сравнение конкурентов на рынке"
        iconSrc="/icons/scenario-magnifier.svg"
        iconW={28}
        iconH={28}
        tag={{ label: "Веб-Агент", iconSrc: "/icons/scenario-web-badge.svg", iconW: 16, iconH: 22 }}
        text={<>анализирует все предложения, отзывы и показывает честное сравнение без прекрас.</>}
        media={
          <MediaWrap wrap="scenario-compare" size="ill-lg">
            <div className={styles["scenario-compare__docs"]}>
              <div className={styles["scenario-compare__item"]} data-tone="success">
                <Image
                  src={withBasePath("/usecases/sales_accept.svg")}
                  alt="Документ успешного предложения"
                  width={170}
                  height={210}
                  className={styles["scenario-compare__doc"]}
                />
              </div>
              <div className={styles["scenario-compare__item"]} data-tone="error">
                <Image
                  src={withBasePath("/usecases/sales_deny.svg")}
                  alt="Документ конкурента с замечаниями"
                  width={170}
                  height={210}
                  className={styles["scenario-compare__doc"]}
                />
              </div>
            </div>
          </MediaWrap>
        }
      />

      <ScenarioCard
        title={
          <>
            Ваша деятельность - продажи? Думатель <br />
            отличное решение под ваши задачи!
          </>
        }
        iconSrc="/icons/scenario-cta-sales.svg"
        iconW={27}
        iconH={30}
        text={<>Сократите время затраченное на задачи до минимума и закрывайте их как можно быстрее без потери качества работы.</>}
        media={
          <MediaWrap wrap="scenario-cta-circle" size="ill-xs">
            <Image src={withBasePath("/icons/scenario-dialog-circle.svg")} alt="" width={200} height={200} />
          </MediaWrap>
        }
      />
    </>
  );
}

function LegalCards() {
  return (
    <>
      <ScenarioCard
        title={
          <>
            Думатель сравнивает условия <br />в договорах
          </>
        }
        iconSrc="/icons/scenario-legal-icon-contract.svg"
        iconW={28}
        iconH={28}
        text={<>Думатель находит нужные пункты, сопоставляет формулировки и показывает таблицу различий с источниками.</>}
        media={
          <IllImage
            src="/usecases/dogovor.svg"
            alt="Документ договора с выделенными пунктами"
            w={520}
            h={260}
            className={cx(styles["scenario-ill"], styles["scenario-contract__image"], styles["ill-md"])}
            priority
          />
        }
      />

      <ScenarioCard
        title={
          <>
            Система контролирует изменения <br />и версии
          </>
        }
        iconSrc="/icons/scenario-legal-icon-versions.svg"
        iconW={28}
        iconH={28}
        text={<>Думатель выделяет отличия по пунктам и создаёт отчёт с подробными пояснениями.</>}
        media={
          <MediaWrap wrap="scenario-versions" size="ill-md">
            <div className={styles["scenario-versions__docs"]}>
              <Image src={withBasePath("/icons/scenario-doc-gray.svg")} alt="" width={150} height={200} className={styles["scenario-versions__doc"]} />
              <Image src={withBasePath("/icons/scenario-doc-gray.svg")} alt="" width={150} height={200} className={styles["scenario-versions__doc"]} />
              <Image src={withBasePath("/icons/scenario-doc-gray.svg")} alt="" width={150} height={200} className={styles["scenario-versions__doc"]} />
            </div>
            <Image
              src={withBasePath("/icons/scenario-legal-versions-line.svg")}
              alt=""
              width={356}
              height={36}
              className={styles["scenario-versions__line"]}
            />
          </MediaWrap>
        }
      />

      <ScenarioCard
        title={
          <>
            Проверка подрядчиков по открытым <br />
            данным в сети
          </>
        }
        iconSrc="/icons/scenario-magnifier.svg"
        iconW={28}
        iconH={28}
        tag={{ label: "Веб-Агент", iconSrc: "/icons/scenario-web-badge.svg", iconW: 16, iconH: 22 }}
        text={<>собирает данные из реестров и формирует карточку с рисками и подробностями.</>}
        media={
          <IllImage
            src="/usecases/providers.svg"
            alt="Проверка подрядчиков по открытым данным"
            w={520}
            h={240}
            className={cx(styles["scenario-ill"], styles["scenario-ill-providers"], styles["ill-md"])}
          />
        }
      />

      <ScenarioCard
        title={
          <>
            Вы юрист? Думатель с уверенностью <br />
            поможет вам в работе!
          </>
        }
        iconSrc="/icons/scenario-cta-sales.svg"
        iconW={27}
        iconH={30}
        text={<>Сократите время затраченное на задачи до минимума и закрывайте их как можно быстрее без потери качества работы.</>}
        media={
          <MediaWrap wrap="scenario-cta-circle" size="ill-xs">
            <Image src={withBasePath("/icons/scenario-dialog-circle.svg")} alt="" width={200} height={200} />
          </MediaWrap>
        }
      />
    </>
  );
}

function ProcurementCards() {
  return (
    <>
      <ScenarioCard
        title={
          <>
            Сравнение предложений буквально <br />за считанные минуты
          </>
        }
        iconSrc="/icons/scenario-proc-icon-2.svg"
        iconW={27}
        iconH={30}
        text={<>Система выравнивает форматы и строит таблицу по цене, срокам и условиям.</>}
        media={
          <IllImage
            src="/usecases/compraison.svg"
            alt="Окно сравнения предложений"
            w={540}
            h={260}
            className={cx(styles["scenario-ill"], styles["scenario-ill-comparison"], styles["ill-md"])}
          />
        }
      />

      <ScenarioCard
        title="Система контролирует сроки и условия поставок"
        iconSrc="/icons/scenario-proc-icon-1.svg"
        iconW={28}
        iconH={28}
        text={<>Думатель извлекает даты из документов и формирует календарь поставок.</>}
        media={
          <IllImage
            src="/usecases/calendar.svg"
            alt="Календарь поставок"
            w={420}
            h={260}
            className={cx(styles["scenario-ill"], styles["scenario-ill-calendar"], styles["ill-md"])}
          />
        }
      />

      <ScenarioCard
        title="Думатель помогает найти и проверить поставщиков"
        iconSrc="/icons/scenario-proc-title.svg"
        iconW={27}
        iconH={28}
        tag={{ label: "Веб-Агент", iconSrc: "/icons/scenario-web-badge.svg", iconW: 16, iconH: 22 }}
        text={<>проверяет открытые источники, собирает репутацию компаний и показывает лучших партнёров.</>}
        media={
          <IllImage
            src="/usecases/providers.svg"
            alt="Поиск и проверка поставщиков"
            w={520}
            h={260}
            className={cx(styles["scenario-ill"], styles["scenario-ill-providers"], styles["ill-md"])}
          />
        }
      />

      <ScenarioCard
        title="Занимаетесь закупками? Думатель - то, что вам действительно нужно."
        iconSrc="/icons/scenario-cta.svg"
        iconW={27}
        iconH={30}
        text={<>Сократите время затраченное на задачи до минимума и закрывайте их как можно быстрее без потери качества работы.</>}
        media={
          <MediaWrap wrap="scenario-cta-circle" size="ill-xs">
            <Image src={withBasePath("/icons/scenario-dialog-circle.svg")} alt="" width={200} height={200} />
          </MediaWrap>
        }
      />
    </>
  );
}

function ManagementCards() {
  return (
    <>
      <ScenarioCard
        title={
          <>
            Думатель составит протокол совещания <br />за минуту
          </>
        }
        iconSrc="/icons/scenario-mgmt-icon-2.svg"
        iconW={27}
        iconH={30}
        text={<>Думатель анализирует расшифровку встречи, письма и документы проекта, извлекает ключевые решения, задачи и поручения.</>}
        media={
          <IllImage
            src="/usecases/protocol.svg"
            alt="Протокол совещания с выделенными решениями"
            w={420}
            h={260}
            className={cx(styles["scenario-ill"], styles["scenario-ill-protocol"], styles["ill-xs"])}
          />
        }
      />

      <ScenarioCard
        title="План задач и KPI-отчёт без ручных сводок"
        iconSrc="/icons/scenario-mgmt-icon-1.svg"
        iconW={28}
        iconH={28}
        text={
          <>
            Система объединяет данные из таблиц, CRM и отчётов, сравнивает выполнение целей, визуализирует динамику и автоматически
            формирует управленческое резюме.
          </>
        }
        media={
          <IllImage
            src="/usecases/kpi_table.svg"
            alt="Виджет с KPI и планом задач"
            w={520}
            h={260}
            className={cx(styles["scenario-ill"], styles["scenario-ill-kpi"], styles["ill-md"])}
          />
        }
      />

      <ScenarioCard
        title="Думатель составляет отчёт о рисках и несоответствиях"
        iconSrc="/icons/scenario-mgmt-title.svg"
        iconW={28}
        iconH={28}
        text={<>Думатель просматривает аудиторские отчёты, акты проверок и письма, выявляет отклонения и классифицирует их по степени критичности.</>}
        media={
          <IllImage
            src="/icons/scenario-mgmt-risk.svg"
            alt=""
            w={208}
            h={208}
            className={cx(styles["scenario-ill"], styles["scenario-risk"], styles["ill-sm"])}
          />
        }
      />

      <ScenarioCard
        title={
          <>
            Вы управленец? Думатель станет вашей <br />правой рукой!
          </>
        }
        iconSrc="/icons/scenario-cta.svg"
        iconW={27}
        iconH={30}
        text={<>Сократите время затраченное на задачи до минимума и закрывайте их как можно быстрее без потери качества работы.</>}
        media={
          <MediaWrap wrap="scenario-cta-circle" size="ill-xs">
            <Image src={withBasePath("/icons/scenario-dialog-circle.svg")} alt="" width={200} height={200} />
          </MediaWrap>
        }
      />
    </>
  );
}

const badges: Badge[] = [
  { id: "work", label: "Работа" },
  { id: "research", label: "Исследования" },
  { id: "hr", label: "HR" },
  { id: "sales", label: "Продажи" },
  { id: "legal", label: "Юристам" },
  { id: "procurement", label: "Закупки" },
  { id: "management", label: "Управление" },
];

const contentById: Record<ScenarioSetId, React.ComponentType> = {
  work: WorkCards,
  research: ResearchCards,
  hr: HrCards,
  sales: SalesCards,
  legal: LegalCards,
  procurement: ProcurementCards,
  management: ManagementCards,
};

export default function Scenarios() {
  const rootRef = useRef<HTMLElement | null>(null);
  const [activeId, setActiveId] = useState<ScenarioSetId>("work");

  const ActiveContent = useMemo(() => contentById[activeId] ?? WorkCards, [activeId]);

  useEffect(() => {
    if (!rootRef.current) return;
    return setupScenariosAnimations(rootRef.current);
  }, []);

  return (
    <section
      className={styles.scenarios}
      aria-labelledby="scenarios-title"
      ref={rootRef}
      data-section="scenarios"
    >
      <div className={styles.scenarios__inner}>
        <header className={styles.scenarios__header}>
          <h2 id="scenarios-title" data-anim="sc-header">
            От личных документов <br />
            до бизнес-задач
          </h2>
          <p data-anim="sc-header">
            Сценарии, где Думатель экономит часы и снижает ошибки. В каждом примере:
            работа с документами и Web-агент
          </p>
        </header>

        <div className={styles.scenarios__badges} role="group" aria-label="Категории сценариев">
          {badges.map((b) => (
            <button
              key={b.id}
              type="button"
              className={styles.scenarios__badge}
              data-active={b.id === activeId}
              aria-pressed={b.id === activeId}
              onClick={() => setActiveId(b.id)}
              data-anim="sc-badge"
            >
              {b.label}
            </button>
          ))}
        </div>

        <div className={styles.scenarios__grid}>
          <ActiveContent />
        </div>

        <Button variant="primary" size="lg" href="https://app.dumatel.ru/">
          Протестировать Думателя сейчас
        </Button>
      </div>
    </section>
  );
}
