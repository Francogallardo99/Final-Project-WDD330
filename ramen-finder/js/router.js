import { fetchMeals, getIngredients } from './api-meals.js';
import { renderRecipe, renderRestaurants } from './ui-builder.js';
import { fetchRestaurants } from './api-places.js';

const homeView = document.getElementById('home-view');
const restaurantView = document.getElementById('restaurant-view');
const recipeView = document.getElementById('recipe-view');

function switchView(viewToShow) {
    homeView.classList.remove('view-active');
    homeView.classList.add('view-hidden');
    restaurantView.classList.remove('view-active');
    restaurantView.classList.add('view-hidden');
    recipeView.classList.remove('view-active');
    recipeView.classList.add('view-hidden');

    viewToShow.classList.remove('view-hidden');
    viewToShow.classList.add('view-active');
}

export function initRouter() {
    const btnEatOut = document.getElementById('btn-eat-out');
    const btnCookHome = document.getElementById('btn-cook-home');

    document.addEventListener('click', (event) => {
        if (event.target.closest('#btn-back-home')) {
            console.log('Navigating back to Home');
            switchView(homeView);
        }
    });

    btnEatOut.addEventListener('click', () => {
        navigator.geolocation.getCurrentPosition(async (position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            console.log(`Navigating to: Eat Out at (${latitude}, ${longitude})`);

            const restaurants = await fetchRestaurants(latitude, longitude);
            console.log('Restaurants found:', restaurants);

            renderRestaurants(restaurants);
            switchView(restaurantView);

        }, error => {
            console.error('Error getting location:', error);
            alert("We couldn't access your location. Let's look at some recipes to cook at home instead.");
            switchView(recipeView);
        });
    });

    btnCookHome.addEventListener('click', async () => {
        const textoOriginal = btnCookHome.innerHTML;
        btnCookHome.innerHTML = "<span>⏳ Buscando receta...</span>";
        btnCookHome.disabled = true; 

        const meals = await fetchMeals();

        if (meals && meals.length > 0) {
            const randomMeal = meals[Math.floor(Math.random() * meals.length)];
            const ingredients = getIngredients(randomMeal);
            console.log(`Navigating to: Cook at Home with ${randomMeal.strMeal}`);

            renderRecipe(randomMeal, ingredients);

            switchView(recipeView);
        } else {
            console.error('No meals found.');
            alert("No pudimos cargar las recetas. Inténtalo de nuevo.");
        }
        btnCookHome.innerHTML = textoOriginal;
        btnCookHome.disabled = false;
    });
}