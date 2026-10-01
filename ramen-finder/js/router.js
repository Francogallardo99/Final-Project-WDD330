export function initRouter() {
    const btnEatOut = document.getElementById('btn-eat-out');
    const btnCookHome = document.getElementById('btn-cook-home');

    btnEatOut.addEventListener('click', () => {
        console.log('Navigating to: Eat Out');
    });

    btnCookHome.addEventListener('click', () => {
        console.log('Navigating to: Cook at Home');
    });
}