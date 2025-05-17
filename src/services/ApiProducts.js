export async function getProducts() {
  try {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/products`);
    return res.json();
  } catch (err) {
    throw new Error("Error fetching products: " + err?.message);
  }
}

export async function getSingleProducts(id) {
  try {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/products/${id}`);
    return res.json();
  } catch (err) {
    throw new Error("Error fetching product: " + err?.message);
  }
}

export async function createProduct(newProduct) {
  try {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    });
    return res.json();
  } catch (err) {
    throw new Error("Error creating products: " + err?.message);
  }
}

export async function updateProduct(id, newProduct) {
  try {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    });
    return res.json();
  } catch (err) {
    throw new Error("Error updating products: " + err?.message);
  }
}

export async function deleteProduct(id) {
  try {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/products/${id}`, {
      method: "DELETE",
    });
    return res.json();
  } catch (err) {
    throw new Error("Error deleting products: " + err?.message);
  }
}
