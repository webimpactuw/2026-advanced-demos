// What a "product" looks like in the CMS.
// Every field here becomes an input box in Sanity Studio.
const product = {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    { name: "name", title: "Name", type: "string", validation: (rule) => rule.required() },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" },
      validation: (rule) => rule.required(),
    },
    { name: "price", title: "Price ($)", type: "number", validation: (rule) => rule.required().min(0) },
    { name: "image", title: "Image", type: "image" },
    { name: "description", title: "Description", type: "text", rows: 3 },
    { name: "inStock", title: "In stock?", type: "boolean", initialValue: true },
  ],
};

export default product;
