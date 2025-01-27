import { defineType } from "sanity";

export const review = defineType({
  name: "review",
  title: "Review",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      readOnly: true,
    },
    {
      name: "review",
      title: "Review",
      type: "text",
      readOnly: true,
    },
    {
      name: "product",
      title: "Product",
      type: "reference",
      to: [{ type: "product" }],
    }
  ],
 })