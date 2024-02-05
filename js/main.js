import { encrypt, decrypt, copy, hide} from "./functions.js";

let encryptBtn = document.getElementById('encrypt-btn');
let decryptBtn = document.getElementById('decrypt-btn');
let copyBtn = document.getElementById('copy-btn');
let val = 0;

encryptBtn.addEventListener('click', function() {
    let encryptedText = encrypt(document.getElementById("encrypt-input").value);
    document.getElementById('encrypt-output').value = encryptedText;    
    if (encryptedText.length > 0 && val == 0) {
        hide('hide');
        hide('encrypt-output');
        hide('copy-btn');
        val=1;        
    }
    if (encryptedText.length == 0) {
        hide('hide');
        hide('encrypt-output');
        hide('copy-btn');
        val=0;        
    }
});

decryptBtn.addEventListener('click', function() {
    let decryptedText = decrypt(document.getElementById("encrypt-input").value);
    document.getElementById('encrypt-output').value = decryptedText;
});

copyBtn.addEventListener('click', function() {
    copy('encrypt-output')
});


