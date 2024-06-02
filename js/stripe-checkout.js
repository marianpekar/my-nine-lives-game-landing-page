(function() {
    var stripe = Stripe('pk_live_fkYxMNr6XJKVCw49C9RL8V3m00ktgCQtz5');

    var successUrl = 'https://www.myninelivesgame.com/success.html';
    var cancelUrl = 'https://www.myninelivesgame.com';

    // Friendly Meow 1.00 USD       
    var checkoutButtonFriendlyMeow = document.getElementById('checkout-button-price_HNC7UHJH5tVx2I');
    checkoutButtonFriendlyMeow.addEventListener('click', function () {
    stripe.redirectToCheckout({
        lineItems: [{price: 'price_HNC7UHJH5tVx2I', quantity: 1}],
        mode: 'payment',
        successUrl: successUrl,
        cancelUrl: cancelUrl,
    })
    .then(function (result) {
        if (result.error) {
        var displayError = document.getElementById('error-message');
        displayError.textContent = result.error.message;
        }
    });
    });
    
    // High Paw 5.00 USD  
    var checkoutButtonHighPaw = document.getElementById('checkout-button-price_HNC8HFouIJJiDp');
    checkoutButtonHighPaw.addEventListener('click', function () {
    stripe.redirectToCheckout({
        lineItems: [{price: 'price_HNC8HFouIJJiDp', quantity: 1}],
        mode: 'payment',
        successUrl: successUrl,
        cancelUrl: cancelUrl,
    })
    .then(function (result) {
        if (result.error) {
        var displayError = document.getElementById('error-message');
        displayError.textContent = result.error.message;
        }
    });
    });

    // Cat Hero 15.00 USD
    var checkoutButtonHighPaw = document.getElementById('checkout-button-price_HNC8tEhOvRBlaf');
    checkoutButtonHighPaw.addEventListener('click', function () {
    stripe.redirectToCheckout({
        lineItems: [{price: 'price_HNC8tEhOvRBlaf', quantity: 1}],
        mode: 'payment',
        successUrl: successUrl,
        cancelUrl: cancelUrl,
    })
    .then(function (result) {
        if (result.error) {
        var displayError = document.getElementById('error-message');
        displayError.textContent = result.error.message;
        }
    });
    });

    // Purr Love 25.00 USD 
    var checkoutButtonHighPaw = document.getElementById('checkout-button-price_HNC94YfeiLZsad');
    checkoutButtonHighPaw.addEventListener('click', function () {
    stripe.redirectToCheckout({
        lineItems: [{price: 'price_HNC94YfeiLZsad', quantity: 1}],
        mode: 'payment',
        successUrl: successUrl,
        cancelUrl: cancelUrl,
    })
    .then(function (result) {
        if (result.error) {
        var displayError = document.getElementById('error-message');
        displayError.textContent = result.error.message;
        }
    });
    });


    // Friendly Meow 25 Kč    
    var checkoutButtonFriendlyMeow = document.getElementById('checkout-button-price_HNDNvGrOSWYhQj');
    checkoutButtonFriendlyMeow.addEventListener('click', function () {
    stripe.redirectToCheckout({
        lineItems: [{price: 'price_HNDNvGrOSWYhQj', quantity: 1}],
        mode: 'payment',
        successUrl: successUrl,
        cancelUrl: cancelUrl,
    })
    .then(function (result) {
        if (result.error) {
        var displayError = document.getElementById('error-message');
        displayError.textContent = result.error.message;
        }
    });
    });
    
    // High Paw 120 Kč  
    var checkoutButtonHighPaw = document.getElementById('checkout-button-price_HNDO94Ooba6vfy');
    checkoutButtonHighPaw.addEventListener('click', function () {
    stripe.redirectToCheckout({
        lineItems: [{price: 'price_HNDO94Ooba6vfy', quantity: 1}],
        mode: 'payment',
        successUrl: successUrl,
        cancelUrl: cancelUrl,
    })
    .then(function (result) {
        if (result.error) {
        var displayError = document.getElementById('error-message');
        displayError.textContent = result.error.message;
        }
    });
    });

    // Cat Hero 350 Kč
    var checkoutButtonHighPaw = document.getElementById('checkout-button-price_HNDQMqaUcTj94F');
    checkoutButtonHighPaw.addEventListener('click', function () {
    stripe.redirectToCheckout({
        lineItems: [{price: 'price_HNDQMqaUcTj94F', quantity: 1}],
        mode: 'payment',
        successUrl: successUrl,
        cancelUrl: cancelUrl,
    })
    .then(function (result) {
        if (result.error) {
        var displayError = document.getElementById('error-message');
        displayError.textContent = result.error.message;
        }
    });
    });

    // Purr Love 600 Kč 
    var checkoutButtonHighPaw = document.getElementById('checkout-button-price_HNDRGSep2V0Sp8');
    checkoutButtonHighPaw.addEventListener('click', function () {
    stripe.redirectToCheckout({
        lineItems: [{price: 'price_HNDRGSep2V0Sp8', quantity: 1}],
        mode: 'payment',
        successUrl: successUrl,
        cancelUrl: cancelUrl,
    })
    .then(function (result) {
        if (result.error) {
        var displayError = document.getElementById('error-message');
        displayError.textContent = result.error.message;
        }
    });
    });
})();