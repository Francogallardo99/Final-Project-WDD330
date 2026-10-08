export function renderRecipe(meal, ingredients) {
    let ingredientsHTML = "<ul class='ingredients-list'>";

    ingredients.forEach(item => {
        ingredientsHTML += `<li>${item}</li>`;
    });

    ingredientsHTML += "</ul>";

    const recipeHTML = `
        <div class="recipe-container">
            <button id="btn-back-home" class="btn-action btn-back">⬅ Back to Home</button>
            
            <div class="recipe-card-detailed">
                <h2 class="recipe-title">${meal.strMeal}</h2>
                
                <div class="recipe-layout">
                    <div class="recipe-image-wrapper">
                        <img src="${meal.strMealThumb}" alt="${meal.strMeal}" class="recipe-image">
                    </div>
                    
                    <div class="recipe-content-wrapper">
                        <div class="ingredients-section">
                            <h3>🛒 Ingredients</h3>
                            ${ingredientsHTML}
                            <button id="btn-save-list" class="btn-action btn-save">Save Shopping List</button>
                        </div>
                        
                        <div class="instructions-section">
                            <h3>👨‍🍳 Instructions</h3>
                            <p class="recipe-instructions">${meal.strInstructions}</p>
                        </div>
                    </div>
                </div>
            </div>
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