var filtragem = $('#campo');

$(document).ready(function () {
  Filtro()
})

function Filtro() {

  filtragem.on('input', function () {
    var textocampo = $(this).val().toUpperCase();


    $(".thumbnail").each(function () {
      var textoThumb = $(this).text().toUpperCase().indexOf(textocampo.toUpperCase())

      if (textoThumb < 0) {
        $(this).css("display", "none");
      } else {
        $(this).css("display", "block");
      }

    })

  })
}