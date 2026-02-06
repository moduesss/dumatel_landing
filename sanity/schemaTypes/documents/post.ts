import { defineField, defineType } from "sanity";

export const post = defineType({
  name: "post",
  title: "Публикация",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Заголовок",
      type: "string",
      description: "Основной заголовок статьи.",
      validation: (rule) => rule.required().error("Обязательно для заполнения."),
    }),
    defineField({
      name: "slug",
      title: "Ссылка",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      description: "Формируется из заголовка, можно отредактировать.",
      validation: (rule) => rule.required().error("Обязательно для заполнения."),
    }),
    defineField({
      name: "excerpt",
      title: "Анонс",
      type: "text",
      rows: 3,
      description: "Краткое описание для списка и превью.",
      validation: (rule) => rule.required().error("Обязательно для заполнения."),
    }),
    defineField({
      name: "seoKeywords",
      title: "SEO-ключевые слова",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
      description: "Ключевые слова для поисковиков и мета-тегов.",
      validation: (rule) => rule.required().error("Обязательно для заполнения."),
    }),
    defineField({
      name: "author",
      title: "Автор",
      type: "reference",
      to: [{ type: "author" }],
      description: "Автор публикации.",
      validation: (rule) => rule.required().error("Обязательно для заполнения."),
    }),
    defineField({
      name: "categories",
      title: "Разделы",
      type: "array",
      of: [{ type: "reference", to: [{ type: "category" }] }],
      description: "Выберите один или несколько разделов.",
      validation: (rule) => rule.unique().error("Разделы должны быть уникальными."),
    }),
    defineField({
      name: "publishedAt",
      title: "Дата публикации",
      type: "datetime",
      description:
        "Используется для отображения и фильтрации публикаций по дате.",
      validation: (rule) => rule.required().error("Обязательно для заполнения.")
    }),
    defineField({
      name: "coverImage",
      title: "Обложка",
      type: "image",
      options: {
        hotspot: true,
      },
      description: "Основное изображение статьи.",
      validation: (rule) => rule.required().error("Обязательно для заполнения."),
    }),
    defineField({
      name: "body",
      title: "Текст статьи",
      type: "blockContent",
      description: "Основной контент статьи с возможностью вставки изображений.",
    }),
  ],
  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "coverImage",
    },
    prepare({ title, author, media }) {
      return {
        title,
        subtitle: author ? `Автор: ${author}` : undefined,
        media,
      };
    },
  },
});
