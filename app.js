const input = document.getElementById('input')
const output = document.getElementById('output')
const encryptBtn = document.getElementById('encrypt')
const decryptBtn = document.getElementById('decrypt')
const copyBtn = document.getElementById("copy")

encryptBtn.addEventListener('click',encrypt)
decryptBtn.addEventListener('click',decrypt)
copyBtn.addEventListener('click', copyOutput)

function encrypt(){
    // 1)Tomar el texto del input
    let text = input.value
    // 2)Transformar el texto según la lógica de encriptación
    let encryptedText = text.replace(/e/g,"enter")
    encryptedText = encryptedText.replace(/i/g,"imes")
    encryptedText = encryptedText.replace(/a/g,"ai")
    encryptedText = encryptedText.replace(/o/g,"ober")
    encryptedText = encryptedText.replace(/u/g,"ufat")
    // 3)Mostrar el texto en el output 
    output.value = encryptedText
}

function decrypt(){
    // 1)Tomar el texto del input
    let text = input.value
    // 2)Transformar el texto según la lógica de encriptación
    let decryptedText = text.replace(/enter/g,"e")
    decryptedText = decryptedText.replace(/imes/g,"i")
    decryptedText = decryptedText.replace(/ai/g,"a")
    decryptedText = decryptedText.replace(/ober/g,"o")
    decryptedText = decryptedText.replace(/ufat/g,"u")
    // 3)Mostrar el texto en el output 
    output.value = decryptedText   
}

function copyOutput(){
    // https://www.w3schools.com/howto/howto_js_copy_clipboard.asp
    // 1) Tomar el texto del output
    var copyText = output.value
    // 2) Seleccionar todo el texto
    output.select();
    output.setSelectionRange(0, 99999); // For mobile devices
    // 3) Move the text to clipboard
    navigator.clipboard.writeText(copyText);
}
