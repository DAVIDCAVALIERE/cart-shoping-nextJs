import { env } from "app/config/env";

export const shopifyUrls = {
  products: {
    all: `${env.SHOPIFY_HOSTNAME}/admin/api/2025-04/products.json`,
    mainProducts: `${env.SHOPIFY_HOSTNAME}/admin/api/2025-04/collections/450639069404/products.json`,
  },
  collections: {
    all: `${env.SHOPIFY_HOSTNAME}/admin/api/2025-04/smart_collections.json`,
    products: (id: string) =>
      `${env.SHOPIFY_HOSTNAME}/admin/api/2025-04/collections/${id}/products.json`,
  },
};
