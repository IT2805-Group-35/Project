

const isValidEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };
  
  const isValidPhone = (phone) => {
    const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    return re.test(String(phone).toLowerCase());
  };

const form = document.querySelector('form');
const nameInput = document.querySelector("input[name='name']");
const thankYou = document.querySelector("input[name='.takk']");
const emailInput = document.querySelector("input[name='email']");

let isFormValid = false;

const resetElm = (elm) => {
    elm.classList.remove("invalid");
    elm.nextElementSibling.classList.add("hidden");
}

const invalidateElm = () => {
    elm.classList.add("invalid");
    elm.nextElementSibling.classList.remove("hidden");
}

const validateInputs = () => {
    isFormValid = true;
    resetElm(nameInput);
    resetElm(emailInput);

    if (!nameInput.value) {
        isFormValid = false;
        invalidateElm(nameInput);
    }
    if (!isValidEmail(emailInput.value)) {
        isFormValid = false;
        invalidateElm(emailInput);
    }
};

form.addEventListener("submit", (e) => {
    e.preventDefault();
    validateInputs();
    if (isFormValid){
        form.remove();
        thankYou.classList.remove("hidden");

    }
});

nameInput.addEventListener("input", () => {
    validateInputs();
})