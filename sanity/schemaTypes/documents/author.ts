import { defineField, defineType } from "sanity";

export const author = defineType({
  name: "author",
  title: "Автор",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Имя",
      type: "string",
      description: "Имя автора, как будет отображаться на сайте.",
      validation: (rule) => rule.required().error("Обязательно для заполнения."),
    }),
    defineField({
      name: "slug",
      title: "Ссылка",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      description: "Формируется из имени автора.",
      validation: (rule) => rule.required().error("Обязательно для заполнения."),
    }),
    defineField({
      name: "role",
      title: "Должность",
      type: "string",
      description: "Опционально: должность или роль автора.",
    }),
    defineField({
      name: "image",
      title: "Фото",
      type: "image",
      options: {
        hotspot: true,
      },
      description: "Аватар автора.",
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "role",
      media: "image",
    },
  },
});
