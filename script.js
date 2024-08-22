function criptografar() {
    const texto = document.getElementById('textoEntrada').value;
    let textoCriptografado = texto.replace(/e/g, 'enter')
                                  .replace(/i/g, 'imes')
                                  .replace(/a/g, 'ai')
                                  .replace(/o/g, 'ober')
                                  .replace(/u/g, 'ufat');
    document.getElementById('mensagemTexto').innerText = textoCriptografado;
}

function descriptografar() {
    const texto = document.getElementById('mensagemTexto').innerText;
    let textoDescriptografado = texto.replace(/enter/g, 'e')
                                     .replace(/imes/g, 'i')
                                     .replace(/ai/g, 'a')
                                     .replace(/ober/g, 'o')
                                     .replace(/ufat/g, 'u');
    document.getElementById('mensagemTexto').innerText = textoDescriptografado;
}

function copiar() {
    const texto = document.getElementById('mensagemTexto').innerText;
    navigator.clipboard.writeText(texto).then(() => {
        alert('Texto copiado para a área de transferência!');
    });
}
