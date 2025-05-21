$(document).ready(function () {
    resquestAPI(0);
    ProximaPagina()
})


function getUrl(primeiroLista) {
    return url + 'characters?ts=' + ts + '&apikey=' + publicKey + '&hash=' + hash + '&limit=' + totalPorPagina + '&offset=' + primeiroLista;
}

function MontaTela(idPersonagem, foto, nome) {
    if (foto == 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {


        var col = '<div class="col-lg-3 col-sm-6 col-md-3 col-xs-12" >\
                <div class="thumbnail thumb" id="remove">\
                <img src="img/notfound.jpg" alt="FotoMarvel" id="Foto" data-id="'+ idPersonagem + '">\
                <div class="caption">\
                    <h4 class="nomePersonagem">'+ nome + '</h4>\
                </div>\
             </div>'
        $('#CorpoPerspnagens').append(col)
    }
    else {
        var col = '<div class="col-lg-3 col-sm-6 col-md-3 col-xs-12" >\
                <div class="thumbnail thumb" id="remove">\
                <img src="'+ foto + '" alt="FotoMarvel" id="Foto" data-id="' + idPersonagem + '">\
                <div class="caption">\
                    <h4 class="nomePersonagem">'+ nome + '</h4>\
                </div>\
             </div>'
        $('#CorpoPerspnagens').append(col)
    }

}

function ProximaPagina() {

    $(document).on("click", "#Foto", function () {
        var idPersonagem = $(this).attr('data-id');
        window.location.href = 'personagens.html?id=' + idPersonagem;
        criapagina()

    })
}