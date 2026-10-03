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

const cleanList = [];

for (let i = 1; i <= 20; i++) {
    const ingredient = meal["strIngredient" + i];
    const measure = meal["strMeasure" + i];
    cleanList.push(ingredient + " " + measure);
    if (ingredient !== " " && ingredient !== null) {
        cleanList.push(ingredient);
    }
}