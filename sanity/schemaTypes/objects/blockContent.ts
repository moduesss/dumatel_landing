import { defineArrayMember, defineField, defineType } from "sanity";

export const blockContent = defineType({
  name: "blockContent",
  title: "Контент статьи",
  type: "array",
  of: [
    defineArrayMember({
      type: "block",
      title: "Текст",
    }),
    defineArrayMember({
      type: "image",
      title: "Изображение",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alt-текст",
          type: "string",
          description: "Описание изображения для доступности и SEO.",
        }),
      ],
    }),
  ],
});
