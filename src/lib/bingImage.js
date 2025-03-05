// Obtiene la imagen del día desde la API BingImage
// El objetivo es evitar el error Cross-Origin Request Blocked
// Se utiliza un midleware para obtener la imagen del día desde la API BingImage
// Se exporta la función getBingImageOfTheDay
export async function getBingImageOfTheDay() {
  try {
    // Obtiene la imagen del día desde el midleware la API BingIamge
    // El objetivo es evitar el error Cross-Origin Request Blocked
    const response = await fetch("/api/bingImage");
    const imageResponse = await response.json();
    const imageUrl = `https://www.bing.com${imageResponse.images[0].url}`;
    return imageUrl;
  } catch (error) {
    console.error("Error fetching Bing image of the day:", error);
    return null;
  }
}
