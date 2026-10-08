export async function fetchRestaurants(lat, lng) {
    try {
        const response = await fetch('https://ramen-api.dev/shops?perPage=5');

        const data = await response.json();

        const formattedRestaurants = data.shops.map(shop => {
            return {
                name: shop.name,
                address: `${shop.prefecture}, Japón`
            };
        });

        return formattedRestaurants;

    } catch (error) {
        console.error('Error fetching restaurants:', error);
        return [];
    }
}