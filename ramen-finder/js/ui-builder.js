import { saveShoppingList } from './storage-manager.js';

export function renderRecipe(meal, ingredients) {
    let ingredientsHTML = "<ul>";

    ingredients.forEach(item => {
        ingredientsHTML += `<li>${item}</li>`;
    });

    ingredientsHTML += "</ul>";

    const recipeHTML = `
        <div class="recipe-card">
            <h3>${meal.strMeal}</h3>
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}" style="max-width: 100%; border-radius: 12px; margin: 1rem 0;">
            
            <div class="recipe-content">
                <div class="ingredients-section">
                    <h4>Ingredients</h4>
                    ${ingredientsHTML}
                    <button id="btn-save-list">Save Shopping List</button>
                </div>
                
                <div class="instructions-section">
                    <h4>Instructions</h4>
                    <p>${meal.strInstructions}</p>
                </div>
            </div>
            <button id="btn-back-home" style="margin-bottom: 1rem;">⬅ Back to Home</button>
        </div>
    `;

    const recipeView = document.getElementById('recipe-view');
    recipeView.innerHTML = recipeHTML;

    const btnSaveList = document.getElementById('btn-save-list');

    btnSaveList.addEventListener('click', () => {
        saveShoppingList(ingredients);
        alert("Shopping list saved!");
    });
}

export function renderRestaurants(restaurants) {
    let restaurantsHTML = `
        <div class="restaurants-container">
            <button id="btn-back-home" style="margin-bottom: 1rem; padding: 0.5rem 1rem; border-radius: 8px; cursor: pointer;">⬅ Back to Home</button>
            <h2>Ramen Spots Near You</h2>
            <div class="restaurant-grid" style="display: flex; flex-direction: column; gap: 1rem; margin-top: 1rem;">
    `;

    if (restaurants.length === 0) {
        restaurantsHTML += `<p>No ramen places found nearby. Maybe it's a good day to cook at home!</p>`;
    } else {
        restaurants.forEach(place => {
            const name = place.name || "Ramen Restaurant";
            const address = place.address || place.location?.address || "Unknown address";

            restaurantsHTML += `
                <div class="restaurant-card" style="background-color: var(--bg-card); padding: 1.5rem; border-radius: 12px; border-left: 4px solid var(--accent-orange);">
                    <h3>🍜 ${name}</h3>
                    <p style="color: var(--text-muted); margin-top: 0.5rem;">📍 ${address}</p>
                </div>
            `;
        });
    }

    restaurantsHTML += `
            </div>
        </div>
    `;

    const restaurantView = document.getElementById('restaurant-view');
    restaurantView.innerHTML = restaurantsHTML;
}