var global = '';
$(document).ready(function () {
    ChamaporID()
    botaoserie()
    botaostorie()
    botaocomics()
    botaoevents()
    
})

var image = 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg'
function criapagina(foto, nome, descricao) {

    if (descricao == "") {
        var col = '<div class="col-lg-3 col-sm-6 col-md-3 col-xs-12 ajuste" >\
                        <div class="thumbnail thumb">\
                        <img src="'+ foto + '" alt="FotoMarvel" id="Foto" data-id="' + idPersonagem + '">\
                        <div class="caption">\
                            <h4 class="nomePersonagem">'+ nome + '</h4>\
                        </div>\
                        </div>\
                        </div>\
                    <div class="class=" col-lg-3 col-sm-6 col-md-3 col-xs-12 " id="botoes">\
\
\
                    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">\
                    <div class="modal-dialog" role="document">\
                      <div class="modal-content">\
                        <div class="modal-header">\
                          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>\
                          <h4 class="modal-title" id="myModalLabel">'+ nome + '</h4>\
                        </div>\
                        <div class="modal-body">\
                          Não Possui Descrição \
                        </div>\
                        <div class="modal-footer">\
                          <button type="button" class="btn" data-dismiss="modal">Close</button>\
                        </div>\
                      </div>\
                    </div>\
                  </div>\
\
\
                        <button type="button" class="btn" data-toggle="modal" data-target="#myModal">Descrição</button>\
                        <button id="series" class="btn ">Series</button>\
                        <button id="stories" class="btn ">Histórias</button>\
                        <button id="comics" class="btn ">HQ'+ "'" + 's</button>\
                        <button id="events" class="btn ">Eventos</button>\
                        <a href="index.html" class="btn voltar" id="voltar">GO BACK  <i class="fas fa-arrow-circle-left"></i></a>\
                    </div>\
                </div>'


        $('#Perspnagens').append(col)

    } else {
        var col = '<div class="col-lg-3 col-sm-6 col-md-3 col-xs-12 ajuste" >\
        <div class="thumbnail thumb">\
        <img src="'+ foto + '" alt="FotoMarvel" id="Foto" data-id="' + idPersonagem + '">\
        <div class="caption">\
            <h4 class="nomePersonagem">'+ nome + '</h4>\
        </div>\
        </div>\
        </div>\
    <div class="class=" col-lg-3 col-sm-6 col-md-3 col-xs-12 " id="botoes">\
\
\
    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">\
    <div class="modal-dialog" role="document">\
      <div class="modal-content">\
        <div class="modal-header">\
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>\
          <h4 class="modal-title" id="myModalLabel">'+ nome + '</h4>\
        </div>\
        <div class="modal-body">\
        '+ descricao + '\
        </div>\
        <div class="modal-footer">\
          <button type="button" class="btn" data-dismiss="modal">Close</button>\
        </div>\
      </div>\
    </div>\
  </div>\
\
\
        <button type="button" class="btn" data-toggle="modal" data-target="#myModal">Descrição</button>\
        <button id="series" class="btn ">Series</button>\
        <button id="stories" class="btn ">Histórias</button>\
        <button id="comics" class="btn ">HQ'+ "'" + 's</button>\
        <button id="events" class="btn ">Eventos</button>\
        <a href="index.html" class="btn voltar" id="voltar">GO BACK  <i class="fas fa-arrow-circle-left"></i></a>\
    </div>\
</div>'
        $('#Perspnagens').append(col)
    }

}
function ChamaporID() {

    $.get(urlid, function (data) {
        global = data.data.results[0]

        criapagina(global.thumbnail.path + '.jpg', global.name, global.description)

    })

}
 