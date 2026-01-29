import { defineField, defineType } from "sanity";

export const category = defineType({
  name: "category",
  title: "Раздел",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Название",
      type: "string",
      description: "Название раздела (рубрики).",
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
      description: "Формируется из названия раздела.",
      validation: (rule) => rule.required().error("Обязательно для заполнения."),
    }),
    defineField({
      name: "description",
      title: "Описание",
      type: "text",
      rows: 3,
      description: "Короткое описание раздела.",
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "description",
    },
  },
});
