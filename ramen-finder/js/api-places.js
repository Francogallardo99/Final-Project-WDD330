export async function fetchRestaurants(lat, lng) {
    try {
        const urlExterna = `https://api.proveedor.com/buscar?lat=${lat}&lng=${lng}&query=ramen`;

        const response = await fetch(urlExterna);

        const data = await response.json();

        return data.results;

    } catch (error) {
        console.error('Error fetching restaurants:', error);
        return []; 
    }
}