import { createClient as sanityClientFactory } from "next-sanity";

const client = sanityClientFactory({
  projectId: "kq4y1kj1", // Replace with your actual project ID
  dataset: "production", // Replace with your actual dataset name
  useCdn: true,
  apiVersion: "2023-10-10",
  token:"skkNazx1FYexqf9UhnmJIJqXld3QIglr3ODdrb76Q4Wg3FzKqfuRDGoxboYngzMgeuxvmFXFAQzmcmTlzgNJx0RLhluz1NafovRobUaV2YoIp7lAm5yE8U4qhgm9LgiG6H4cirxRhg02YADKOB1gqpAjkzfu9FoaOu2H2Tw3GtcXCTLouXEJ"
});





export async function getProducts() {
  const externalUrl = "https://template-03-api.vercel.app/api/products"; 
  // const externalUrl = "https://fakestoreapi.com/products/1"; 

  try {
    console.log("Fetching products from external URL...");

    // Fetch products from the external API
    const response = await fetch(externalUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const externalProducts = await response.json();

    // Validate API response structure
    if (!externalProducts || !Array.isArray(externalProducts.data)) {
      throw new Error("Invalid API response format");
    }

    console.log("Fetched products:", externalProducts.data);

    // Process products and upload images
    const sanityOperations = await Promise.all(
  externalProducts.data.map(async (product: any) => {
    let imageAssetId = null;

    try {
      // Ensure product.imageUrl is valid before fetching
      if (product.imageUrl?.trim()) {
        try {
          const imageRes = await fetch(product.imageUrl);
          if (!imageRes.ok) throw new Error("Failed to fetch image");

          const imageBlob = await imageRes.blob();
          const imageUploadResponse = await client.assets.upload("image", imageBlob, {
            filename: `product-image-${product.id || Date.now()}.png`,
          });

          imageAssetId = imageUploadResponse._id;
        } catch (err) {
          console.error("Image upload failed:", err);
        }
      }

      // Ensure the product has a valid ID
      const productId = product.id ? `product-${product.id}` : `product-${Date.now()}`;

      // Create or replace the product document in Sanity
      return client.createOrReplace({
        _type: "product",
        _id: productId,
        name: product.name || "Unknown Product",
        price: typeof product.price === "number" ? product.price : 0,
        image: imageAssetId
          ? {
              _type: "image",
              asset: {
                _type: "reference",
                _ref: imageAssetId,
              },
            }
          : null,
        description: product.description?.trim() || "No description available",
      });

    } catch (error) {
      console.error("Error processing product:", error);
      return null; // Return null to avoid breaking Promise.all
    }
  })
);

console.log("Stored products in Sanity!");
return externalProducts.data;

  } catch (error) {
    console.error("Error fetching or storing products:", error);
    return [];
  }
}

