function verificar() {
    var ano = new Date().getFullYear()
    var fano = document.querySelector('input#txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert('[ERRO] Ano inválido')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 5) {
                img.setAttribute('src', './imagens/fotobebemenino.png')
            } else if (idade < 18){
                img.setAttribute('src', './imagens/jovemhomem.png')
            } else if (idade < 60) {
                img.setAttribute('src', './imagens/fotoadulto.png')
            } else {
                img.setAttribute('src', './imagens/fotosenhor.png')
            }
        } else {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 5) {
                img.setAttribute('src', './imagens/fotobebemenina.png')
            } else if (idade < 18) {
                img.setAttribute('src', './imagens/jovemmenina.png')
            } else if (idade < 60) {
                img.setAttribute('src', './imagens/fotoadulta.png')
            } else {
                img.setAttribute('src', './imagens/fotosenhora.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    } 
}