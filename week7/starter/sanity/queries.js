// GROQ queries = how we ask Sanity for data.
// Try them out in Studio → Vision tab!

// every product, A → Z
export const PRODUCTS_QUERY = `*[_type == "product"] | order(name asc) {
  name,
  "slug": slug.current,
  price,
  description,
  inStock,
  "imageUrl": image.asset->url
}`;

// one product by its slug, e.g. { slug: "husky-mug" }
export const PRODUCT_QUERY = `*[_type == "product" && slug.current == $slug][0] {
  name,
  "slug": slug.current,
  price,
  description,
  inStock,
  "imageUrl": image.asset->url
}`;
