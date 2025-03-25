function burgerMenu(){
    let burger = document.querySelector('.dropboxcontainer1');
    burger.classList.add('open');
}
function cancel(){
    let burger = document.querySelector('.dropboxcontainer1');
    burger.classList.remove('open');
}

function displayLang(){
    let language = document.querySelector('.language');
    language.classList.toggle('open')
}

function displayCurrency(){
    let currency = document.querySelector('.currency');
    currency.classList.toggle('open')
}

function languageDisplay(){
    let newLanguage =  document.querySelector('.LangCurrency');
    newLanguage.classList.toggle('open')
}

function currencyDisplay(){
    /*document.querySelector('.langCurrency').style.display = 'none';*/
    let newCurrency =  document.querySelector('.LangCurrency2');
    newCurrency.classList.toggle('open')
}