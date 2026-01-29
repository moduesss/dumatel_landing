import { defineField, defineType } from "sanity";

export const settings = defineType({
  name: "settings",
  title: "Настройки",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Название сайта",
      type: "string",
      description: "Используется в заголовках и мета-тегах.",
    }),
    defineField({
      name: "description",
      title: "Описание сайта",
      type: "text",
      rows: 3,
      description: "Краткое описание для SEO и превью.",
    }),
    defineField({
      name: "ogImage",
      title: "OG-изображение",
      type: "image",
      options: {
        hotspot: true,
      },
      description: "Картинка для превью при шаринге ссылок.",
    }),
  ],
});
