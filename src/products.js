export async function getProducts() {
  const url = 'https://fakestoreapi.com/products';

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('404 Not Found');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
