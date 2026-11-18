import { products } from "../data/data.js";

export function getProducts() {
  return products;
}

export function getIdProduct(id) {
  const newId = Number(id);
  const produk = products.find((data) => data.id === newId);
  if (!produk) return null;
  return produk;
}

export function getSearchProduct(data) {
  const search = data || "";
  const produk = products.filter((data) =>
    data.name.toLowerCase().includes(search.toLowerCase()),
  );
  return produk;
}

export function createProduct(data) {
  const { name, category, price } = data;
  const id =
    products.length > 0 ? Math.max(...products.map((item) => item.id)) + 1 : 1;
    
    if(name.trim() === "" ){
        return null
    }
    if(category === ""){
        return null
    }
    if(typeof price !== "number" || price <= 0){
        return null
    }
    const newProduct = {
    id,
    name,
    category,
    price,
  };
  products.push(newProduct);
  return newProduct;
}

export function updateProduct(id, data) {
    const newId = Number(id);

    // 1. Validasi ID
    if (!Number.isInteger(newId) || newId <= 0) {
        return {
            error: "VALIDATION_ERROR",
            message: "Invalid product ID"
        };
    }

    // 2. Cari produk
    const index = products.findIndex(
        item => item.id === newId
    );

    if (index === -1) {
        return {
            error: "NOT_FOUND",
            message: "Product not found"
        };
    }

    // 3. Validasi body
    if (
        !data ||
        typeof data !== "object" ||
        Array.isArray(data)
    ) {
        return {
            error: "VALIDATION_ERROR",
            message: "Invalid request body"
        };
    }

    const allowedFields = ["name", "category", "price"];

    if (
        Object.keys(data).length === 0 ||
        Object.keys(data).some(key => !allowedFields.includes(key))
    ) {
        return {
            error: "VALIDATION_ERROR",
            message: "Invalid or empty product fields"
        };
    }

    // 4. Validasi name jika dikirim
    if (
        data.name !== undefined &&
        (typeof data.name !== "string" || data.name.trim() === "")
    ) {
        return {
            error: "VALIDATION_ERROR",
            message: "Name must be a non-empty string"
        };
    }

    // 5. Validasi category jika dikirim
    if (
        data.category !== undefined &&
        (typeof data.category !== "string" || data.category.trim() === "")
    ) {
        return {
            error: "VALIDATION_ERROR",
            message: "Category must be a non-empty string"
        };
    }

    // 6. Validasi price jika dikirim
    if (
        data.price !== undefined &&
        (!Number.isFinite(data.price) || data.price <= 0)
    ) {
        return {
            error: "VALIDATION_ERROR",
            message: "Price must be a positive number"
        };
    }

    // 7. Gabungkan data lama dan baru
    const currentProduct = products[index];

    const updatedProduct = {
        ...currentProduct,
        ...data,
        name: data.name !== undefined
            ? data.name.trim()
            : currentProduct.name,
        category: data.category !== undefined
            ? data.category.trim()
            : currentProduct.category,
        id: currentProduct.id
    };

    // 8. Simpan perubahan
    products[index] = updatedProduct;

    return {
        data: updatedProduct
    };
}

export function replaceProduct(id, data) {
    const newId = Number(id);

    // 1. Validasi ID
    if (!Number.isInteger(newId) || newId <= 0) {
        return {
            error: "VALIDATION_ERROR",
            message: "Invalid product ID"
        };
    }

    // 2. Cari produk
    const index = products.findIndex(
        item => item.id === newId
    );

    if (index === -1) {
        return {
            error: "NOT_FOUND",
            message: "Product not found"
        };
    }

    // 3. Validasi body
    if (
        !data ||
        typeof data !== "object" ||
        Array.isArray(data)
    ) {
        return {
            error: "VALIDATION_ERROR",
            message: "Invalid request body"
        };
    }

    const { name, category, price } = data;

    // 4. Semua field wajib
    if (
        typeof name !== "string" ||
        name.trim() === "" ||
        typeof category !== "string" ||
        category.trim() === "" ||
        !Number.isFinite(price) ||
        price <= 0
    ) {
        return {
            error: "VALIDATION_ERROR",
            message: "Name, category and valid price are required"
        };
    }

    // 5. Buat pengganti produk
    const replacedProduct = {
        id: newId,
        name: name.trim(),
        category: category.trim(),
        price
    };

    // 6. Simpan penggantian
    products[index] = replacedProduct;

    return {
        data: replacedProduct
    };
}

export function deleteProduct(id) {
  const newId = Number(id);
  const produk = products.findIndex((item) => item.id === newId);
  if (produk === -1) return null;

  const deletedProduk = products[produk];
  products.splice(produk, 1);

  return deletedProduk;
}
