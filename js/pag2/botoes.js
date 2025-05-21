// botao serie
function botaoserie() {


    $(document).on('click', '#series', function () {
        $.get(getserie, function (data) {
            
            let series = data.data.results
            console.log(series);
            if (data.data.total == 0) {
                iziToast.error({
                    title: 'Error',
                    message: 'Nao Possui registros de Eventos',
                });
            } else {
                criaserie()
                for (i in series) {
                    criaTrSerie(series[i].thumbnail.path + '.jpg', series[i].title, series[i].urls[0].url)
                }
            }
        })
    })
}
function criaserie() {
    $('#Perspnagens').html('')
    var col = '<div class="table-responsive">\
        <table class="table tabela">\
          <tr>\
          <a href="personagens.html?id='+ idPersonagem + '" class="btn voltar" id="voltar">GO BACK  <i class="fas fa-arrow-circle-left"></i></a>\
              <thead>\
                  <th>Card</th>\
                  <th>Ano de Publicação</th>\
                  <th>Link</th>\
              </thead>\
              <tbody id="coposerie">\
              </tbody>\
          </tr>\
        </table>\
      </div>'

    $('#Perspnagens').append(col)
}

function criaTrSerie(imagem, title, link) {

    var serieTr = '<tr>\
                    <td><img src="'+ imagem + '" alt="FotoMarvel" class="img-tabela"></td>\
                    <td>'+ title + '</td>\
                    <td><a href="'+ link + '">Saiba Mais Sobre a Serie </a></td>\
                </tr>'

    $("#coposerie").append(serieTr);

}
// acaba aqui 




// botao storie 

function botaostorie() {


    $(document).on('click', '#stories', function () {
        $.get(getstories, function (data) {
            let stories = data.data.results


            if (data.data.total == 0) {
                iziToast.error({
                    title: 'Error',
                    message: 'Nao Possui registros de Eventos',
                });
            } else {

                criastories()
                for (i in stories) {
                    criaTrStories(stories[i].title, stories[i].description)

                }

            }
        })
    })


}
function criastories() {
    $('#Perspnagens').html('')
    var col = '<div class="table-responsive">\
        <table class="table tabela">\
          <tr>\
          <a href="personagens.html?id='+ idPersonagem + '" class="btn voltar" id="voltar">GO BACK  <i class="fas fa-arrow-circle-left"></i></a>\
              <thead>\
                  <th>Titulo</th>\
                  <th>Descrição</th>\
                  <th>Link</th>\
              </thead>\
              <tbody id="copostorie">\
              </tbody>\
          </tr>\
        </table>\
      </div>'

    $('#Perspnagens').append(col)
}

function criaTrStories(title, descricao) {
    if (descricao == "") {
        var storieTr = '<tr>\
                    <td><h4>'+ title + '<h4></td>\
                    <td><p> Não possui Descrição... visite o site e confira mais<p></td>\
                    <td><a href="https://www.marvel.com"">Saiba Mais Sobre esta História </a></td>\
                </tr>'

        console.log(descricao);


        $("#copostorie").append(storieTr);
    } else {
        var storieTr = '<tr>\
                    <td><h4>'+ title + '<h4></td>\
                    <td><p>'+ descricao + '<p></td>\
                    <td><a href="https://www.marvel.com">Saiba Mais Sobre esta História </a></td>\
                </tr>'

        console.log(descricao);


        $("#copostorie").append(storieTr);
    }
}
// acaba aqui 


// botao HQ's
function botaocomics() {


    $(document).on('click', '#comics', function () {
        $.get(getcomics, function (data) {
            let comics = data.data.results
            console.log(comics);

            if (data.data.total == 0) {
                iziToast.error({
                    title: 'Error',
                    message: 'Nao Possui registros de Eventos',
                });
            } else {

                criacomics()
                for (i in comics) {
                    criaTrcomics(comics[i].thumbnail.path + ".jpg", comics[i].title, comics[i].description)

                }
            }
        })
    })


}
function criacomics() {
    $('#Perspnagens').html('')
    var col = '<div class="table-responsive">\
        <table class="table tabela">\
          <tr>\
          <a href="personagens.html?id='+ idPersonagem + '" class="btn voltar" id="voltar">GO BACK  <i class="fas fa-arrow-circle-left"></i></a>\
              <thead>\
                  <th>Card</th>\
                  <th>Titulo</th>\
                  <th>Descrição</th>\
              </thead>\
              <tbody id="copostorie">\
              </tbody>\
          </tr>\
        </table>\
      </div>'

    $('#Perspnagens').append(col)
}

function criaTrcomics(imagem, title, descricao) {
    if (descricao == "null" || descricao == " ") {
        var comicsTr = '<tr>\
    <td><img src="'+ imagem + '" class="img-tabela"<h4></td>\
    <td><h4>'+ title + '<h4></td>\
    <td>Não Possui Descrição</td>\
</tr>'

        console.log(descricao);


        $("#copostorie").append(comicsTr);

    } else {
        var comicsTr = '<tr>\
    <td><img src="'+ imagem + '" class="img-tabela"<h4></td>\
    <td><h4>'+ title + '<h4></td>\
    <td><p>'+ descricao + '"</p></td>\
</tr>'

        $("#copostorie").append(comicsTr);

    }
}


var contId;
$(document).one('click', '#events', function () {
    contId = 1;
})
// botao Events
function botaoevents() {

    $(document).one('click', '#events', function () {
        $.get(getevents, function (data) {
            let events = data.data.results
            console.log(data.data.total);

            if (data.data.total == 0) {
                iziToast.error({
                    title: 'Error',
                    message: 'Nao Possui registros de Eventos',
                });
            } else {

                for (i in events) {
                    criaevents(events[i].thumbnail.path + ".jpg", events[i].title, events[i].description, contId++)
                }
                var botaovoltar = '<div class="volte"><a href="personagens.html?id=' + idPersonagem + '" class="btn voltar" id="voltar1">GO BACK  <i class="fas fa-arrow-circle-left"></i></a></div>'

                $('#btn-events').prepend(botaovoltar)
            }
        })
    })
}
function criaevents(imagem, titulo, descricao, contId) {
    $('#Perspnagens').html('')
    var col = '<img src="' + imagem + '" class="img-tabela"> \
                     <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapse'+ contId + '" aria-expanded="false" aria-controls="collapse' + contId + '">\
                     '+ titulo + '\
                     </button>\
                 <div class="collapse" id="collapse'+ contId + '">\
                    <div class="well">\
                        '+ descricao + '\
                    </div>\
                </div>'
    $('#btn-events').append(col)
}
// acaba aqui 


