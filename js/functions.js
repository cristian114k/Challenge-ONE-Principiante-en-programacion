function encrypt(text) {

    const encryptMap = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };

    /* Convierte el texto a minúsculas, lo divide en un array de caracteres, mapea cada
    caracter según el mapa de encriptación o lo deja sin cambios si no está en el mapa,
    y finalmente, une los caracteres en un solo string */
    return text.toLowerCase().split('').map(char => encryptMap[char] || char).join('');
}

function decrypt(text) {
    const decryptedText = text
        .replace(/ufat/g, "u")
        .replace(/ober/g, "o")
        .replace(/ai/g, "a")
        .replace(/imes/g, "i")
        .replace(/enter/g, "e");
    return decryptedText;
}

function copy(element) {
    var inputElement = document.getElementById(element);

    navigator.clipboard.writeText(inputElement.value);
}

function hid(element) {
    var elementToHide = document.getElementById(element);
    var visibilityElementToHide = window.getComputedStyle(elementToHide).getPropertyValue('visibility');
    var displayElementToHide = window.getComputedStyle(elementToHide).getPropertyValue('display');
    if (elementToHide.tagName === 'BUTTON') {
        if (visibilityElementToHide === 'hidden'){
            elementToHide.style.visibility = 'visible';
        }
        else {
            elementToHide.style.visibility = 'hidden';
        }
    } 
    if (elementToHide.tagName != 'BUTTON') {
        if (displayElementToHide === 'none') {
            elementToHide.style.display = 'block';
        } else {
            elementToHide.style.display = 'none';
        }
    }
}

function hide(elementId) {
    var element = document.getElementById(elementId);

    var computedStyles = window.getComputedStyle(element);

    if (element.tagName === 'BUTTON') {
        element.style.visibility = (computedStyles.visibility === 'hidden') ? 'visible' : 'hidden';
    } else {
        element.style.display = (computedStyles.display === 'none') ? 'block' : 'none';
    }
}

export {encrypt,decrypt,copy,hide};