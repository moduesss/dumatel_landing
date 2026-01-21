"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Button from "@/components/Button";
import { withBasePath } from "@/lib/paths";
import { setupScenariosAnimations } from "./Scenarios.anim";
import styles from "./Scenarios.module.scss";

const workWebAgentItems = [
  "Электронный документооборот: Обязательно укажите, что приемка осуществляется исключительно через электронное актирование в ЕИС.",
  "Нацрежим: В 2025 году действуют обновленные правила импортозамещения (нацрежим). Проверьте, попадает ли ваш товар под запрет или ограничения на закупку иностранных товаров.",
  "Сроки: Помните, что для субъектов малого предпринимательства (СМП) сроки оплаты в 2025 году остаются сокращенными (обычно до 7 рабочих дней).",
  "Электронный документооборот: Обязательно укажите, что приемка осуществляется исключительно через электронное актирование в ЕИС.",
  "Нацрежим: В 2025 году действуют обновленные правила импортозамещения (нацрежим). Проверьте, попадает ли ваш товар под запрет или ограничения на закупку иностранных товаров.",
  "Сроки: Помните, что для субъектов малого предпринимательства (СМП)",
];

const postPreviewLines = [
  "fhgjf chajhf chfj cjfj chfjkjc",
  "fjfjf cjfhhhf chfhhjf cjfhhjc fhc",
];

function WorkCards() {
  return (
    <>
      <article className={styles["scenario-card"]}>
        <div className={styles["scenario-card__media"]}>
          <div className={styles["scenario-docs"]}>
            <div
              className={[
                styles["scenario-doc"],
                styles["scenario-doc--tilt-left"],
              ].join(" ")}
            >
              <p className={styles["scenario-doc__title"]}>
                Ключевые показатели для 2025 года:
              </p>
              <ol className={styles["scenario-doc__list"]}>
                <li>
                  Электронный документооборот: Обязательно укажите, что приемка
                  осуществляется исключительно через электронное актирование в
                  ЕИС.
                </li>
                <li>
                  Нацрежим: В 2025 году действуют обновленные правила
                  импортозамещения (нацрежим). Проверьте, попадает ли ваш товар
                  под запрет или ограничения на закупку иностранных товаров.
                </li>
                <li>
                  Сроки: Помните, что для субъектов малого предпринимательства
                  (СМП) сроки оплаты в 2025 году остаются сокращенными (обычно до
                  7 рабочих дней).
                </li>
              </ol>
            </div>
            <div
              className={[
                styles["scenario-doc"],
                styles["scenario-doc--tilt-right"],
              ].join(" ")}
            >
              <p className={styles["scenario-doc__title"]}>
                «Обоснование объекта закупки на 2025 финансовый год»
              </p>
              <div className={styles["scenario-doc__text"]}>
                <p>
                  1. Общие положения
                  <br />
                  Настоящая закупка осуществляется в соответствии с
                  планом-графиком на 2025 год для обеспечения государственных
                  (муниципальных) нужд / нужд предприятия. Целью закупки
                  является бесперебойное функционирование [название
                  подразделения/организации] и реализация утвержденных
                  программ на 2025 год.
                </p>
                <p>2. Объект закупки и код позиции</p>
                <ul>
                  <li>
                    Наименование объекта: [Например: Поставка офисной бумаги и
                    канцелярских принадлежностей]
                  </li>
                  <li>Код по ОКПД2: [Например: 17.12.14.110]</li>
                  <li>
                    Период поставки/оказания услуг: с 01.01.2025 по
                    31.12.2025.
                  </li>
                </ul>
                <p>
                  3. Обоснование начальной (максимальной) цены контракта (НМЦК)
                  <br />
                  Расчет НМЦК на 2025 год произведен методом сопоставимых
                  рыночных цен (анализа рынка) на основании коммерческих
                  предложений, полученных в IV квартале 2024 года, с учетом
                  прогнозного уровня инфляции и индексов-дефляторов,
                  установленных Минэкономразвития на 2025 год.
                </p>
                <p>4. Требования к участникам в 2025 году</p>
                <ul>
                  <li>
                    Соответствие единым требованиям согласно ч. 1 ст. 31 44-ФЗ.
                  </li>
                  <li>
                    Отсутствие сведений об участнике в реестре
                    недобросовестных поставщиков (РНП).
                  </li>
                  <li>
                    Приоритет товарам российского происхождения в
                    соответствии с актуальными квотами на 2025 год (ПП РФ
                    №2013 / ПП РФ №2014).
                  </li>
                </ul>
                <p>
                  5. Особенности исполнения контракта
                  <br />
                  Оплата производится по факту поставки товара (выполнения
                  работ) в течение [7/10] рабочих дней с даты подписания
                  документа о приемке в электронной форме через ЕИС (Единую
                  информационную систему), что является обязательным
                  требованием для всех закупок в 2025 году.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles["scenario-card__body"]}>
          <h3>Аналитический отчёт за считанные секунды!</h3>
          <p className={styles["scenario-card__hint"]}>Думатель умеет:</p>
          <div className={styles["scenario-card__note"]}>
            <p>
              <strong>Объединять таблицы </strong>
              <span className={styles["scenario-card__note-medium"]}>
                и отчёты, находит ключевые показатели, {""}
              </span>
              <strong>
                строит графики и формирует краткий аналитический документ {""}
              </strong>
              <span>с причинами изменений и ссылками на источники.</span>
            </p>
          </div>
        </div>
      </article>

      <article className={styles["scenario-card"]}>
        <div className={styles["scenario-card__media"]}>
          <div className={styles["scenario-files"]}>
            <div
              className={[
                styles["scenario-file"],
                styles["scenario-file--pdf"],
              ].join(" ")}
              aria-hidden="true"
            >
              <Image
                src={withBasePath("/icons/scenario-pdf.svg")}
                alt=""
                width={150}
                height={200}
                className={styles["scenario-file__image"]}
              />
              <span className={styles["scenario-file__label"]}>PDF</span>
            </div>
            <div
              className={[
                styles["scenario-file"],
                styles["scenario-file--xls"],
              ].join(" ")}
              aria-hidden="true"
            >
              <Image
                src={withBasePath("/icons/scenario-xls.svg")}
                alt=""
                width={150}
                height={200}
                className={styles["scenario-file__image"]}
              />
              <span className={styles["scenario-file__label"]}>XLS</span>
            </div>
            <div
              className={[
                styles["scenario-file"],
                styles["scenario-file--doc"],
              ].join(" ")}
              aria-hidden="true"
            >
              <Image
                src={withBasePath("/icons/scenario-doc.svg")}
                alt=""
                width={150}
                height={200}
                className={styles["scenario-file__image"]}
              />
              <span className={styles["scenario-file__label"]}>DOC</span>
            </div>
          </div>
        </div>
        <div className={styles["scenario-card__body"]}>
          <div className={styles["scenario-card__title-row"]}>
            <span className={styles["scenario-card__title-icon"]}>
              <Image
                src={withBasePath("/icons/scenario-calc.svg")}
                alt=""
                width={21}
                height={28}
                className={styles["scenario-card__title-icon-image"]}
              />
            </span>
            <h3>
              Думатель проводит расчёт прямо <br />
              по документам
            </h3>
          </div>
          <p className={styles["scenario-card__text"]}>
            Система находит формулы и числовые значения, подставляет данные и
            показывает точный результат с указанием источника.
          </p>
        </div>
      </article>

      <article className={styles["scenario-card"]}>
        <div className={styles["scenario-card__media"]}>
          <div className={styles["scenario-browser"]}>
            <div className={styles["scenario-browser__header"]}>
              <span className={styles["scenario-browser__icon"]}>
                <Image
                  src={withBasePath("/icons/scenario-web-icon.svg")}
                  alt=""
                  width={16}
                  height={22}
                />
              </span>
              <p>Выхожу в интернет и ищу необходимую информацию...</p>
            </div>
            <ol className={styles["scenario-browser__list"]}>
              {workWebAgentItems.map((item, index) => (
                <li key={`web-agent-${index}`}>{item}</li>
              ))}
            </ol>
          </div>
        </div>
        <div className={styles["scenario-card__body"]}>
          <div className={styles["scenario-card__title-row"]}>
            <span className={styles["scenario-card__title-icon"]}>
              <Image
                src={withBasePath("/icons/scenario-web-title.svg")}
                alt=""
                width={27}
                height={28}
                className={styles["scenario-card__title-icon-image"]}
              />
            </span>
            <h3>
              Найдите уникальное решение под задачу <br />
              вместе с Веб-Агентом!
            </h3>
          </div>
          <p className={styles["scenario-card__text"]}>
            <span className={styles["scenario-card__tag"]}>
              <span className={styles["scenario-card__tag-icon"]}>
                <Image
                  src={withBasePath("/icons/scenario-web-badge.svg")}
                  alt=""
                  width={16}
                  height={22}
                />
              </span>
              Веб-Агент
            </span>{" "}
            анализирует открытые источники, проверяет отзывы и формирует список
            решений с плюсами и минусами.
          </p>
        </div>
      </article>

      <article className={styles["scenario-card"]}>
        <div className={styles["scenario-card__media"]}>
          <Image
            src={withBasePath("/images/думатель скрин 1.png")}
            alt="Экран Думателя"
            width={687}
            height={372}
            className={styles["scenario-card__media-image"]}
          />
        </div>
        <div className={styles["scenario-card__body"]}>
          <div className={styles["scenario-card__title-row"]}>
            <span className={styles["scenario-card__title-icon"]}>
              <Image
                src={withBasePath("/icons/scenario-cta.svg")}
                alt=""
                width={27}
                height={30}
                className={styles["scenario-card__title-icon-image"]}
              />
            </span>
            <h3>
              Работайте в удовольствие вместе с нашим <br />
              Думателем
            </h3>
          </div>
          <p className={styles["scenario-card__text"]}>
            Сократите время затраченное на задачи до минимума и закрывайте их
            как можно быстрее без потери качества работы.
          </p>
        </div>
      </article>
    </>
  );
}

function ResearchCards() {
  return (
    <>
      <article className={styles["scenario-card"]}>
        <div className={styles["scenario-card__media"]}>
          <div className={styles["scenario-dialog"]}>
            <div className={styles["scenario-dialog__bubble"]}>
              <span className={styles["scenario-dialog__label"]}>Думатель</span>
              <p>
                Генерирую краткое содержание вашей статьи, которую вы указали
                как внешнюю гипер-ссылку.
              </p>
            </div>
            <Image
              src={withBasePath("/icons/scenario-research-dialog.svg")}
              alt=""
              width={48}
              height={48}
              className={styles["scenario-dialog__dot"]}
            />
          </div>
        </div>
        <div className={styles["scenario-card__body"]}>
          <div className={styles["scenario-card__title-row"]}>
            <span className={styles["scenario-card__title-icon"]}>
              <Image
                src={withBasePath("/icons/scenario-research-icon.svg")}
                alt=""
                width={27}
                height={30}
                className={styles["scenario-card__title-icon-image"]}
              />
            </span>
            <h3>
              Конспектирование длинных текстов <br />и статей
            </h3>
          </div>
          <p className={styles["scenario-card__text"]}>
            Думатель сокращает десятки страниц до структурированного краткого
            содержания с цитатами.
          </p>
        </div>
      </article>

      <article className={styles["scenario-card"]}>
        <div className={styles["scenario-card__media"]}>
          <div className={styles["scenario-methods"]}>
            <Image
              src={withBasePath("/icons/scenario-research-doc-green.svg")}
              alt=""
              width={150}
              height={200}
              className={styles["scenario-methods__doc"]}
            />
            <Image
              src={withBasePath("/icons/scenario-research-loading.svg")}
              alt=""
              width={64}
              height={64}
              className={styles["scenario-methods__loader"]}
            />
            <Image
              src={withBasePath("/icons/scenario-research-doc-orange.svg")}
              alt=""
              width={150}
              height={200}
              className={styles["scenario-methods__doc"]}
            />
          </div>
        </div>
        <div className={styles["scenario-card__body"]}>
          <div className={styles["scenario-card__title-row"]}>
            <span className={styles["scenario-card__title-icon"]}>
              <Image
                src={withBasePath("/icons/scenario-research-icon-2.svg")}
                alt=""
                width={22}
                height={28}
                className={styles["scenario-card__title-icon-image"]}
              />
            </span>
            <h3>Думатель анализирует и сравнивает методики.</h3>
          </div>
          <p className={styles["scenario-card__text"]}>
            Система извлекает все необходимые параметры и строит таблицы, а так
            же выделяет отличия.
          </p>
        </div>
      </article>

      <article className={styles["scenario-card"]}>
        <div className={styles["scenario-card__media"]}>
          <div className={styles["scenario-posts"]}>
            <div
              className={styles["scenario-post"]}
              data-variant="left"
              aria-hidden="true"
            >
              <div className={styles["scenario-post__header"]} />
              <span className={styles["scenario-post__avatar"]}>
                <Image
                  src={withBasePath("/icons/scenario-research-avatar.svg")}
                  alt=""
                  width={22}
                  height={22}
                />
              </span>
              <div className={styles["scenario-post__text"]}>
                {postPreviewLines.map((line) => (
                  <p key={`post-left-${line}`}>{line}</p>
                ))}
              </div>
            </div>
            <div className={styles["scenario-post"]} data-variant="center">
              <div
                className={styles["scenario-post__header"]}
                data-tone="accent"
              />
              <span className={styles["scenario-post__avatar"]}>
                <Image
                  src={withBasePath("/icons/scenario-research-avatar.svg")}
                  alt=""
                  width={22}
                  height={22}
                />
              </span>
              <div className={styles["scenario-post__text"]}>
                {postPreviewLines.map((line) => (
                  <p key={`post-center-${line}`}>{line}</p>
                ))}
              </div>
            </div>
            <div
              className={styles["scenario-post"]}
              data-variant="right"
              aria-hidden="true"
            >
              <div className={styles["scenario-post__header"]} />
              <span className={styles["scenario-post__avatar"]}>
                <Image
                  src={withBasePath("/icons/scenario-research-avatar.svg")}
                  alt=""
                  width={22}
                  height={22}
                />
              </span>
              <div className={styles["scenario-post__text"]}>
                {postPreviewLines.map((line) => (
                  <p key={`post-right-${line}`}>{line}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className={styles["scenario-card__body"]}>
          <div className={styles["scenario-card__title-row"]}>
            <span className={styles["scenario-card__title-icon"]}>
              <Image
                src={withBasePath("/icons/scenario-research-title.svg")}
                alt=""
                width={28}
                height={28}
                className={styles["scenario-card__title-icon-image"]}
              />
            </span>
            <h3>Находите свежие публикации и источники</h3>
          </div>
          <p className={styles["scenario-card__text"]}>
            <span className={styles["scenario-card__tag"]}>
              <span className={styles["scenario-card__tag-icon"]}>
                <Image
                  src={withBasePath("/icons/scenario-web-badge.svg")}
                  alt=""
                  width={16}
                  height={22}
                />
              </span>
              Веб-Агент
            </span>{" "}
            собирает материалы из открытых баз, проверяет достоверность и
            показывает список ссылок с аннотациями.
          </p>
        </div>
      </article>

      <article className={styles["scenario-card"]}>
        <div className={styles["scenario-card__media"]}>
          <div className={styles["scenario-cta-circle"]}>
            <Image
              src={withBasePath("/icons/scenario-dialog-circle.svg")}
              alt=""
              width={256}
              height={256}
            />
          </div>
        </div>
        <div className={styles["scenario-card__body"]}>
          <div className={styles["scenario-card__title-row"]}>
            <span className={styles["scenario-card__title-icon"]}>
              <Image
                src={withBasePath("/icons/scenario-cta.svg")}
                alt=""
                width={27}
                height={30}
                className={styles["scenario-card__title-icon-image"]}
              />
            </span>
            <h3>Занимайтесь исследованиями вместе с Думателем!</h3>
          </div>
          <p className={styles["scenario-card__text"]}>
            Сократите время затраченное на задачи до минимума и закрывайте их
            как можно быстрее без потери качества работы.
          </p>
        </div>
      </article>
    </>
  );
}

function HrCards() {
  return (
    <>
      <article className={styles["scenario-card"]}>
        <div className={styles["scenario-card__media"]}>
          <div className={styles["scenario-resume"]}>
            <div className={styles["scenario-resume__item"]} data-variant="ghost">
              Владимир, 24 года. WordPress Developer.
            </div>
            <div className={styles["scenario-resume__item"]} data-variant="soft">
              Николай, 32 года. Frontend-разработка.
            </div>
            <div className={styles["scenario-resume__item"]} data-variant="active">
              <span className={styles["scenario-resume__content"]}>
                <span className={styles["scenario-resume__label"]}>
                  Кандидат Думателя:
                </span>
                <span className={styles["scenario-resume__text"]}>
                  Алексей, 22 года. Веб-Разработчик.
                </span>
              </span>
              <span className={styles["scenario-resume__cursor"]}>
                <Image
                  src={withBasePath("/icons/scenario-cursor.svg")}
                  alt=""
                  width={23}
                  height={28}
                />
              </span>
            </div>
            <div className={styles["scenario-resume__item"]} data-variant="soft">
              Владислав, 21 год. Вёрстка сайтов.
            </div>
            <div className={styles["scenario-resume__item"]} data-variant="ghost">
              Антон, 38 лет. Tilda/React-разработка.
            </div>
          </div>
        </div>
        <div className={styles["scenario-card__body"]}>
          <div className={styles["scenario-card__title-row"]}>
            <span className={styles["scenario-card__title-icon"]}>
              <Image
                src={withBasePath("/icons/scenario-hr-icon-2.svg")}
                alt=""
                width={27}
                height={30}
                className={styles["scenario-card__title-icon-image"]}
              />
            </span>
            <h3>Сравнивайте резюме всего за минуту</h3>
          </div>
          <p className={styles["scenario-card__text"]}>
            Система извлекает все необходимые данные и составляет таблицу
            компетенции в отдельном файле.
          </p>
        </div>
      </article>

      <article className={styles["scenario-card"]}>
        <div className={styles["scenario-card__media"]}>
          <div className={styles["scenario-dialog"]}>
            <div className={styles["scenario-dialog__bubble"]}>
              <span className={styles["scenario-dialog__label"]}>
                Думатель говорит:
              </span>
              <p>
                Тестовое задание основано на шаблонах вашей компании и ее
                специфики, даю готовый шаблон с критериями оценивания.
              </p>
            </div>
            <div className={styles["scenario-file-card"]}>
              <div className={styles["scenario-file-card__icon"]}>
                <Image
                  src={withBasePath("/icons/scenario-hr-pdf.svg")}
                  alt=""
                  width={38}
                  height={51}
                />
                <span>PDF</span>
              </div>
              <div className={styles["scenario-file-card__meta"]}>
                <p>Тестовое</p>
                <p>задание.pdf</p>
                <span>24.3 МБ.</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles["scenario-card__body"]}>
          <div className={styles["scenario-card__title-row"]}>
            <span className={styles["scenario-card__title-icon"]}>
              <Image
                src={withBasePath("/icons/scenario-hr-icon-1.svg")}
                alt=""
                width={28}
                height={28}
                className={styles["scenario-card__title-icon-image"]}
              />
            </span>
            <h3>Генерация тестовых заданий и чек-листов</h3>
          </div>
          <p className={styles["scenario-card__text"]}>
            Думатель использует шаблоны компании и формирует готовое задание с
            критериями оценивания.
          </p>
        </div>
      </article>

      <article className={styles["scenario-card"]}>
        <div className={styles["scenario-card__media"]}>
          <div className={styles["scenario-bag"]}>
            <div className={styles["scenario-bag__tags"]}>
              <span className={styles["scenario-bag__tag"]} data-tone="dark">
                администратор
              </span>
              <span className={styles["scenario-bag__tag"]} data-tone="blue">
                менеджер
              </span>
              <span className={styles["scenario-bag__tag"]} data-tone="gray">
                разработчик
              </span>
              <span className={styles["scenario-bag__tag"]} data-tone="orange">
                дизайнер
              </span>
            </div>
            <Image
              src={withBasePath("/icons/scenario-hr-bag.svg")}
              alt=""
              width={223}
              height={130}
            />
          </div>
        </div>
        <div className={styles["scenario-card__body"]}>
          <div className={styles["scenario-card__title-row"]}>
            <span className={styles["scenario-card__title-icon"]}>
              <Image
                src={withBasePath("/icons/scenario-hr-title.svg")}
                alt=""
                width={28}
                height={28}
                className={styles["scenario-card__title-icon-image"]}
              />
            </span>
            <h3>Думатель анализирует рынок вакансий</h3>
          </div>
          <p className={styles["scenario-card__text"]}>
            <span className={styles["scenario-card__tag"]}>
              <span className={styles["scenario-card__tag-icon"]}>
                <Image
                  src={withBasePath("/icons/scenario-web-badge.svg")}
                  alt=""
                  width={16}
                  height={22}
                />
              </span>
              Веб-Агент
            </span>{" "}
            собирает предложения с площадок, фильтрует дубли и формирует сводную
            таблицу по условиям.
          </p>
        </div>
      </article>

      <article className={styles["scenario-card"]}>
        <div className={styles["scenario-card__media"]}>
          <div className={styles["scenario-cta-circle"]}>
            <Image
              src={withBasePath("/icons/scenario-dialog-circle.svg")}
              alt=""
              width={256}
              height={256}
            />
          </div>
        </div>
        <div className={styles["scenario-card__body"]}>
          <div className={styles["scenario-card__title-row"]}>
            <span className={styles["scenario-card__title-icon"]}>
              <Image
                src={withBasePath("/icons/scenario-cta.svg")}
                alt=""
                width={27}
                height={30}
                className={styles["scenario-card__title-icon-image"]}
              />
            </span>
            <h3>
              Вы занимаетесь HR? Думатель - то, что вам действительно нужно!
            </h3>
          </div>
          <p className={styles["scenario-card__text"]}>
            Сократите время затраченное на задачи до минимума и закрывайте их
            как можно быстрее без потери качества работы.
          </p>
        </div>
      </article>
    </>
  );
}

function SalesCards() {
  return (
    <>
      <article className={styles["scenario-card"]}>
        <div className={styles["scenario-card__media"]}>
          <div className={styles["scenario-tkp"]}>
            <Image
              src={withBasePath("/icons/scenario-sales-doc-orange.svg")}
              alt=""
              width={150}
              height={200}
              className={styles["scenario-tkp__doc"]}
            />
            <span className={styles["scenario-tkp__label"]}>ТКП от 03.12</span>
            <span className={styles["scenario-tkp__cursor"]}>
              <Image
                src={withBasePath("/icons/scenario-sales-cursor.svg")}
                alt=""
                width={23}
                height={28}
              />
            </span>
          </div>
        </div>
        <div className={styles["scenario-card__body"]}>
          <div className={styles["scenario-card__title-row"]}>
            <span className={styles["scenario-card__title-icon"]}>
              <Image
                src={withBasePath("/icons/scenario-sales-icon-tkp.svg")}
                alt=""
                width={28}
                height={28}
                className={styles["scenario-card__title-icon-image"]}
              />
            </span>
            <h3>Думатель быстро подготовит ТКП</h3>
          </div>
          <p className={styles["scenario-card__text"]}>
            Думатель выравнивает форматы и формирует таблицу сравнения цен и
            сроков.
          </p>
        </div>
      </article>

      <article className={styles["scenario-card"]}>
        <div className={styles["scenario-card__media"]}>
          <div className={styles["scenario-offer"]}>
            <div className={styles["scenario-offer__bubble"]}>
              <span className={styles["scenario-offer__label"]}>
                Думатель говорит:
              </span>
              <p>
                Составил Коммерческое Предложение на основе вашего офера, который
                вы предоставили мне файлом, упаковываю в PDF.
              </p>
            </div>
            <div className={styles["scenario-offer__file"]}>
              <div className={styles["scenario-offer__file-icon"]}>
                <Image
                  src={withBasePath("/icons/scenario-sales-pdf.svg")}
                  alt=""
                  width={38}
                  height={51}
                />
                <span>PDF</span>
              </div>
              <div className={styles["scenario-offer__file-meta"]}>
                <p>КП-РГС-2026</p>
                <p>.pdf</p>
                <span>24.3 МБ.</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles["scenario-card__body"]}>
          <div className={styles["scenario-card__title-row"]}>
            <span className={styles["scenario-card__title-icon"]}>
              <Image
                src={withBasePath("/icons/scenario-sales-icon-offer.svg")}
                alt=""
                width={28}
                height={28}
                className={styles["scenario-card__title-icon-image"]}
              />
            </span>
            <h3>
              Формирование коммерческого <br />
              предложения
            </h3>
          </div>
          <p className={styles["scenario-card__text"]}>
            Думатель объединяет описание товара, условия и делает расчёт итоговой
            суммы за вас.
          </p>
        </div>
      </article>

      <article className={styles["scenario-card"]}>
        <div className={styles["scenario-card__media"]}>
          <div className={styles["scenario-compare"]}>
            <div className={styles["scenario-compare__docs"]}>
              <Image
                src={withBasePath("/icons/scenario-doc-gray-alt.svg")}
                alt=""
                width={150}
                height={200}
                className={styles["scenario-compare__doc"]}
              />
              <Image
                src={withBasePath("/icons/scenario-doc-gray.svg")}
                alt=""
                width={150}
                height={200}
                className={styles["scenario-compare__doc"]}
              />
            </div>
            <Image
              src={withBasePath("/icons/scenario-sales-compare-badges.svg")}
              alt=""
              width={64}
              height={64}
              className={styles["scenario-compare__badges"]}
            />
          </div>
        </div>
        <div className={styles["scenario-card__body"]}>
          <div className={styles["scenario-card__title-row"]}>
            <span className={styles["scenario-card__title-icon"]}>
              <Image
                src={withBasePath("/icons/scenario-magnifier.svg")}
                alt=""
                width={28}
                height={28}
                className={styles["scenario-card__title-icon-image"]}
              />
            </span>
            <h3>Сравнение конкурентов на рынке</h3>
          </div>
          <p className={styles["scenario-card__text"]}>
            <span className={styles["scenario-card__tag"]}>
              <span className={styles["scenario-card__tag-icon"]}>
                <Image
                  src={withBasePath("/icons/scenario-web-badge.svg")}
                  alt=""
                  width={16}
                  height={22}
                />
              </span>
              Веб-Агент
            </span>{" "}
            анализирует все предложения, отзывы и показывает честное сравнение
            без прекрас.
          </p>
        </div>
      </article>

      <article className={styles["scenario-card"]}>
        <div className={styles["scenario-card__media"]}>
          <div className={styles["scenario-cta-circle"]}>
            <Image
              src={withBasePath("/icons/scenario-dialog-circle.svg")}
              alt=""
              width={256}
              height={256}
            />
          </div>
        </div>
        <div className={styles["scenario-card__body"]}>
          <div className={styles["scenario-card__title-row"]}>
            <span className={styles["scenario-card__title-icon"]}>
              <Image
                src={withBasePath("/icons/scenario-cta-sales.svg")}
                alt=""
                width={27}
                height={30}
                className={styles["scenario-card__title-icon-image"]}
              />
            </span>
            <h3>
              Ваша деятельность - продажи? Думатель <br />
              отличное решение под ваши задачи!
            </h3>
          </div>
          <p className={styles["scenario-card__text"]}>
            Сократите время затраченное на задачи до минимума и закрывайте их
            как можно быстрее без потери качества работы.
          </p>
        </div>
      </article>
    </>
  );
}

function LegalCards() {
  return (
    <>
      <article className={styles["scenario-card"]}>
        <div className={styles["scenario-card__media"]}>
          <div className={styles["scenario-contract"]}>
            <div className={styles["scenario-contract__card"]}>
              <div className={styles["scenario-contract__title"]}>
                <p>«Договор об оказании услуг</p>
                <p>для “РТП-ГАЗ»</p>
              </div>
              <div className={styles["scenario-contract__lines"]}>
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <Image
                src={withBasePath("/icons/scenario-legal-doc-icon.svg")}
                alt=""
                width={44}
                height={44}
                className={styles["scenario-contract__icon"]}
              />
            </div>
          </div>
        </div>
        <div className={styles["scenario-card__body"]}>
          <div className={styles["scenario-card__title-row"]}>
            <span className={styles["scenario-card__title-icon"]}>
              <Image
                src={withBasePath("/icons/scenario-legal-icon-contract.svg")}
                alt=""
                width={28}
                height={28}
                className={styles["scenario-card__title-icon-image"]}
              />
            </span>
            <h3>
              Думатель сравнивает условия <br />в договорах
            </h3>
          </div>
          <p className={styles["scenario-card__text"]}>
            Думатель находит нужные пункты, сопоставляет формулировки и
            показывает таблицу различий с источниками.
          </p>
        </div>
      </article>

      <article className={styles["scenario-card"]}>
        <div className={styles["scenario-card__media"]}>
          <div className={styles["scenario-versions"]}>
            <div className={styles["scenario-versions__docs"]}>
              <Image
                src={withBasePath("/icons/scenario-doc-gray.svg")}
                alt=""
                width={150}
                height={200}
                className={styles["scenario-versions__doc"]}
              />
              <Image
                src={withBasePath("/icons/scenario-doc-gray.svg")}
                alt=""
                width={150}
                height={200}
                className={styles["scenario-versions__doc"]}
              />
              <Image
                src={withBasePath("/icons/scenario-doc-gray.svg")}
                alt=""
                width={150}
                height={200}
                className={styles["scenario-versions__doc"]}
              />
            </div>
            <Image
              src={withBasePath("/icons/scenario-legal-versions-line.svg")}
              alt=""
              width={356}
              height={36}
              className={styles["scenario-versions__line"]}
            />
          </div>
        </div>
        <div className={styles["scenario-card__body"]}>
          <div className={styles["scenario-card__title-row"]}>
            <span className={styles["scenario-card__title-icon"]}>
              <Image
                src={withBasePath("/icons/scenario-legal-icon-versions.svg")}
                alt=""
                width={28}
                height={28}
                className={styles["scenario-card__title-icon-image"]}
              />
            </span>
            <h3>
              Система контролирует изменения <br />и версии
            </h3>
          </div>
          <p className={styles["scenario-card__text"]}>
            Думатель выделяет отличия по пунктам и создаёт отчёт с подробными
            пояснениями.
          </p>
        </div>
      </article>

      <article className={styles["scenario-card"]}>
        <div className={styles["scenario-card__media"]}>
          <div className={styles["scenario-check"]}>
            <div className={styles["scenario-check__bubble"]} data-variant="left">
              <div className={styles["scenario-check__lines"]}>
                <span />
                <span />
                <span />
              </div>
            </div>
            <Image
              src={withBasePath("/icons/scenario-legal-globe.svg")}
              alt=""
              width={166}
              height={166}
              className={styles["scenario-check__globe"]}
            />
            <div className={styles["scenario-check__bubble"]} data-variant="right">
              <div className={styles["scenario-check__lines"]}>
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>
        </div>
        <div className={styles["scenario-card__body"]}>
          <div className={styles["scenario-card__title-row"]}>
            <span className={styles["scenario-card__title-icon"]}>
              <Image
                src={withBasePath("/icons/scenario-magnifier.svg")}
                alt=""
                width={28}
                height={28}
                className={styles["scenario-card__title-icon-image"]}
              />
            </span>
            <h3>
              Проверка подрядчиков по открытым <br />
              данным в сети
            </h3>
          </div>
          <p className={styles["scenario-card__text"]}>
            <span className={styles["scenario-card__tag"]}>
              <span className={styles["scenario-card__tag-icon"]}>
                <Image
                  src={withBasePath("/icons/scenario-web-badge.svg")}
                  alt=""
                  width={16}
                  height={22}
                />
              </span>
              Веб-Агент
            </span>{" "}
            собирает данные из реестров и формирует карточку с рисками и
            подробностями.
          </p>
        </div>
      </article>

      <article className={styles["scenario-card"]}>
        <div className={styles["scenario-card__media"]}>
          <div className={styles["scenario-cta-circle"]}>
            <Image
              src={withBasePath("/icons/scenario-dialog-circle.svg")}
              alt=""
              width={256}
              height={256}
            />
          </div>
        </div>
        <div className={styles["scenario-card__body"]}>
          <div className={styles["scenario-card__title-row"]}>
            <span className={styles["scenario-card__title-icon"]}>
              <Image
                src={withBasePath("/icons/scenario-cta-sales.svg")}
                alt=""
                width={27}
                height={30}
                className={styles["scenario-card__title-icon-image"]}
              />
            </span>
            <h3>
              Вы юрист? Думатель с уверенностью <br />
              поможет вам в работе!
            </h3>
          </div>
          <p className={styles["scenario-card__text"]}>
            Сократите время затраченное на задачи до минимума и закрывайте их
            как можно быстрее без потери качества работы.
          </p>
        </div>
      </article>
    </>
  );
}

function ProcurementCards() {
  return (
    <>
      <article className={styles["scenario-card"]}>
        <div className={styles["scenario-card__media"]}>
          <div className={styles["scenario-window"]}>
            <div className={styles["scenario-window__stack"]}>
              <div className={styles["scenario-window__header"]}>
                <span />
                <span />
                <span />
              </div>
              <div className={styles["scenario-window__body"]}>
                <div className={styles["scenario-window__col"]}>
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
                <div className={styles["scenario-window__center"]}>
                  <Image
                    src={withBasePath("/icons/scenario-proc-window-icon.svg")}
                    alt=""
                    width={44}
                    height={44}
                  />
                </div>
                <div className={styles["scenario-window__col"]}>
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            </div>
            <Image
              src={withBasePath("/icons/scenario-cursor.svg")}
              alt=""
              width={23}
              height={28}
              className={styles["scenario-window__cursor"]}
            />
          </div>
        </div>
        <div className={styles["scenario-card__body"]}>
          <div className={styles["scenario-card__title-row"]}>
            <span className={styles["scenario-card__title-icon"]}>
              <Image
                src={withBasePath("/icons/scenario-proc-icon-2.svg")}
                alt=""
                width={27}
                height={30}
                className={styles["scenario-card__title-icon-image"]}
              />
            </span>
            <h3>
              Сравнение предложений буквально <br />за считанные минуты
            </h3>
          </div>
          <p className={styles["scenario-card__text"]}>
            Система выравнивает форматы и строит таблицу по цене, срокам и
            условиям.
          </p>
        </div>
      </article>

      <article className={styles["scenario-card"]}>
        <div className={styles["scenario-card__media"]}>
          <div className={styles["scenario-calendar"]}>
            <Image
              src={withBasePath("/icons/scenario-proc-calendar.svg")}
              alt=""
              width={255}
              height={255}
              className={styles["scenario-calendar__image"]}
            />
            <div className={styles["scenario-calendar__text"]}>
              <span className={styles["scenario-calendar__day"]}>21 день</span>
              <span className={styles["scenario-calendar__weekday"]}>
                суббота
              </span>
            </div>
          </div>
        </div>
        <div className={styles["scenario-card__body"]}>
          <div className={styles["scenario-card__title-row"]}>
            <span className={styles["scenario-card__title-icon"]}>
              <Image
                src={withBasePath("/icons/scenario-proc-icon-1.svg")}
                alt=""
                width={28}
                height={28}
                className={styles["scenario-card__title-icon-image"]}
              />
            </span>
            <h3>Система контролирует сроки и условия поставок</h3>
          </div>
          <p className={styles["scenario-card__text"]}>
            Думатель извлекает даты из документов и формирует календарь
            поставок.
          </p>
        </div>
      </article>

      <article className={styles["scenario-card"]}>
        <div className={styles["scenario-card__media"]}>
          <div className={styles["scenario-search"]}>
            <span className={styles["scenario-search__globe"]}>
              <Image
                src={withBasePath("/icons/scenario-proc-globe.svg")}
                alt=""
                width={124}
                height={124}
              />
            </span>
            <div className={styles["scenario-search__pill"]}>
              <span>поставщики</span>
              <span className={styles["scenario-search__avatar"]}>
              <Image
                src={withBasePath("/icons/scenario-proc-avatar.svg")}
                alt=""
                width={51}
                height={51}
                className={styles["scenario-search__image"]}
              />
                <Image
                  src={withBasePath("/icons/scenario-proc-avatar-icon.svg")}
                  alt=""
                  width={28}
                  height={28}
                  className={styles["scenario-search__icon"]}
                />
              </span>
            </div>
          </div>
        </div>
        <div className={styles["scenario-card__body"]}>
          <div className={styles["scenario-card__title-row"]}>
            <span className={styles["scenario-card__title-icon"]}>
              <Image
                src={withBasePath("/icons/scenario-proc-title.svg")}
                alt=""
                width={27}
                height={28}
                className={styles["scenario-card__title-icon-image"]}
              />
            </span>
            <h3>Думатель помогает найти и проверить поставщиков</h3>
          </div>
          <p className={styles["scenario-card__text"]}>
            <span className={styles["scenario-card__tag"]}>
              <span className={styles["scenario-card__tag-icon"]}>
                <Image
                  src={withBasePath("/icons/scenario-web-badge.svg")}
                  alt=""
                  width={16}
                  height={22}
                />
              </span>
              Веб-Агент
            </span>{" "}
            проверяет открытые источники, собирает репутацию компаний и
            показывает лучших партнёров.
          </p>
        </div>
      </article>

      <article className={styles["scenario-card"]}>
        <div className={styles["scenario-card__media"]}>
          <div className={styles["scenario-cta-circle"]}>
            <Image
              src={withBasePath("/icons/scenario-dialog-circle.svg")}
              alt=""
              width={256}
              height={256}
            />
          </div>
        </div>
        <div className={styles["scenario-card__body"]}>
          <div className={styles["scenario-card__title-row"]}>
            <span className={styles["scenario-card__title-icon"]}>
              <Image
                src={withBasePath("/icons/scenario-cta.svg")}
                alt=""
                width={27}
                height={30}
                className={styles["scenario-card__title-icon-image"]}
              />
            </span>
            <h3>Занимаетесь закупками? Думатель - то, что вам действительно нужно.</h3>
          </div>
          <p className={styles["scenario-card__text"]}>
            Сократите время затраченное на задачи до минимума и закрывайте их
            как можно быстрее без потери качества работы.
          </p>
        </div>
      </article>
    </>
  );
}

function ManagementCards() {
  return (
    <>
      <article className={styles["scenario-card"]}>
        <div className={styles["scenario-card__media"]}>
          <div className={styles["scenario-document"]}>
            <Image
              src={withBasePath("/icons/scenario-mgmt-doc.svg")}
              alt=""
              width={192}
              height={257}
              className={styles["scenario-document__image"]}
            />
            <div className={styles["scenario-document__label"]}>
              <p>Протокол_совещания_</p>
              <p>от_12_03_2026</p>
            </div>
            <Image
              src={withBasePath("/icons/scenario-cursor.svg")}
              alt=""
              width={23}
              height={28}
              className={styles["scenario-document__cursor"]}
            />
          </div>
        </div>
        <div className={styles["scenario-card__body"]}>
          <div className={styles["scenario-card__title-row"]}>
            <span className={styles["scenario-card__title-icon"]}>
              <Image
                src={withBasePath("/icons/scenario-mgmt-icon-2.svg")}
                alt=""
                width={27}
                height={30}
                className={styles["scenario-card__title-icon-image"]}
              />
            </span>
            <h3>
              Думатель составит протокол совещания <br />за минуту
            </h3>
          </div>
          <p className={styles["scenario-card__text"]}>
            Думатель анализирует расшифровку встречи, письма и документы
            проекта, извлекает ключевые решения, задачи и поручения.
          </p>
        </div>
      </article>

      <article className={styles["scenario-card"]}>
        <div className={styles["scenario-card__media"]}>
          <div className={styles["scenario-window"]} data-variant="kpi">
            <div className={styles["scenario-window__stack"]}>
              <div className={styles["scenario-window__header"]}>
                <span />
                <span />
                <span />
              </div>
              <div className={styles["scenario-window__body"]}>
                <div className={styles["scenario-window__lines"]}>
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles["scenario-card__body"]}>
          <div className={styles["scenario-card__title-row"]}>
            <span className={styles["scenario-card__title-icon"]}>
              <Image
                src={withBasePath("/icons/scenario-mgmt-icon-1.svg")}
                alt=""
                width={28}
                height={28}
                className={styles["scenario-card__title-icon-image"]}
              />
            </span>
            <h3>План задач и KPI-отчёт без ручных сводок</h3>
          </div>
          <p className={styles["scenario-card__text"]}>
            Система объединяет данные из таблиц, CRM и отчётов, сравнивает
            выполнение целей, визуализирует динамику и автоматически формирует
            управленческое резюме.
          </p>
        </div>
      </article>

      <article className={styles["scenario-card"]}>
        <div className={styles["scenario-card__media"]}>
          <Image
            src={withBasePath("/icons/scenario-mgmt-risk.svg")}
            alt=""
            width={208}
            height={208}
            className={styles["scenario-risk"]}
          />
        </div>
        <div className={styles["scenario-card__body"]}>
          <div className={styles["scenario-card__title-row"]}>
            <span className={styles["scenario-card__title-icon"]}>
              <Image
                src={withBasePath("/icons/scenario-mgmt-title.svg")}
                alt=""
                width={28}
                height={28}
                className={styles["scenario-card__title-icon-image"]}
              />
            </span>
            <h3>Думатель составляет отчёт о рисках и несоответствиях</h3>
          </div>
          <p className={styles["scenario-card__text"]}>
            Думатель просматривает аудиторские отчёты, акты проверок и письма,
            выявляет отклонения и классифицирует их по степени критичности.
          </p>
        </div>
      </article>

      <article className={styles["scenario-card"]}>
        <div className={styles["scenario-card__media"]}>
          <div className={styles["scenario-cta-circle"]}>
            <Image
              src={withBasePath("/icons/scenario-dialog-circle.svg")}
              alt=""
              width={256}
              height={256}
            />
          </div>
        </div>
        <div className={styles["scenario-card__body"]}>
          <div className={styles["scenario-card__title-row"]}>
            <span className={styles["scenario-card__title-icon"]}>
              <Image
                src={withBasePath("/icons/scenario-cta.svg")}
                alt=""
                width={27}
                height={30}
                className={styles["scenario-card__title-icon-image"]}
              />
            </span>
            <h3>
              Вы управленец? Думатель станет вашей <br />правой рукой!
            </h3>
          </div>
          <p className={styles["scenario-card__text"]}>
            Сократите время затраченное на задачи до минимума и закрывайте их
            как можно быстрее без потери качества работы.
          </p>
        </div>
      </article>
    </>
  );
}

const scenarioSets = [
  { id: "work", label: "Работа", Content: WorkCards },
  { id: "research", label: "Исследования", Content: ResearchCards },
  { id: "hr", label: "HR", Content: HrCards },
  { id: "sales", label: "Продажи", Content: SalesCards },
  { id: "legal", label: "Юристам", Content: LegalCards },
  { id: "procurement", label: "Закупки", Content: ProcurementCards },
  { id: "management", label: "Управление", Content: ManagementCards },
];

export default function Scenarios() {
  const rootRef = useRef<HTMLElement | null>(null);
  const [activeBadge, setActiveBadge] = useState(0);
  const ActiveContent = scenarioSets[activeBadge]?.Content ?? scenarioSets[0].Content;

  useEffect(() => {
    if (!rootRef.current) {
      return;
    }

    return setupScenariosAnimations(rootRef.current);
  }, []);

  return (
    <section
      className={styles.scenarios}
      aria-labelledby="scenarios-title"
      ref={rootRef}
    >
      <div className={styles.scenarios__inner}>
        <header className={styles.scenarios__header}>
          <h2 id="scenarios-title">
            От личных документов <br />
            до бизнес-задач
          </h2>
          <p>
            Сценарии, где Думатель экономит часы и снижает ошибки. В каждом
            примере: работа с документами и Web-агент
          </p>
        </header>

        <div
          className={styles.scenarios__badges}
          role="group"
          aria-label="Категории сценариев"
        >
          {scenarioSets.map((badge, index) => (
            <button
              key={badge.id}
              type="button"
              className={styles.scenarios__badge}
              data-active={index === activeBadge}
              aria-pressed={index === activeBadge}
              onClick={() => setActiveBadge(index)}
            >
              {badge.label}
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
