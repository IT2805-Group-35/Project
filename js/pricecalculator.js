// Function for a price calculator that lets users get a price estimate for Kjell-Inge's services.
function calculatePrice() {
    const amountHours = document.getElementById('amount_hours').value;
    const products = document.querySelector('input[name="products"]:checked').value
    const print = document.getElementById('print').checked;
    let price;

    const priceHour = 2500;
    const priceVideo = 2700;
    const pricePhotoVideo = 2900;
    const pricePrint = 2000;


    // Calculates differentiated prices based on whether the user wants only photos, videos or both
    if (products === "Fotografi") {
        price = Math.round(priceHour * amountHours);
        document.getElementById('print').removeAttribute('disabled');
    }
    else if (products === "Video") {
        price = Math.round(priceVideo * amountHours);
        document.getElementById('print').setAttribute('disabled', 'disabled');
        document.getElementById('print').checked = false;
    }

    else if (products ==="VideoPhoto") {
        price = Math.round(pricePhotoVideo * amountHours);
        document.getElementById('print').removeAttribute('disabled');
    }

    if (print === true) {
        price = Math.round(price + pricePrint);
    }


    document.getElementById('priceEstimate').innerHTML = price;
}


// Recalculates for every user interaction.
let form = document.getElementById('priceCalculator');
form.addEventListener('change', function() {
    calculatePrice()
});
