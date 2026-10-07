export async function fetchMeals() {
    try {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
        const data = await response.json();
        return data.meals;
    } catch (error) {
        console.error('Error fetching meals:', error);
        return [];
    }
}

export function getIngredients(meal) {
    const cleanList = [];

    for (let i = 1; i <= 20; i++) {
        const ingredient = meal["strIngredient" + i];
        const measure = meal["strMeasure" + i];
        if (ingredient && ingredient.trim() !== "") {
            cleanList.push(ingredient + " " + measure);
        }
    }
    return cleanList;
}