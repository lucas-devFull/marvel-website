function criaPaginacao() {
	totalPaginas = Math.trunc(totalImagens / totalPorPagina);
	$('#Paginas').html('');

	if (conjuntoPaginas[0] != 1) {
		$('#Paginas').append('<li><a id="Pagina_1" class="selecionavel">1</a></li>');
		$('#Pagina_1')[0].click = paginaClick.bind(this, 1);

		$('#Paginas').append('<li><a>...</a></li>');
	}

	$('#Paginas').append('<li><a id="Pagina_' + conjuntoPaginas[0] + '" class="selecionavel">' + conjuntoPaginas[0] + '</a></li>');
	$('#Pagina_' + conjuntoPaginas[0])[0].onclick = paginaClick.bind(this, conjuntoPaginas[0]);

	$('#Paginas').append('<li><a id="Pagina_' + conjuntoPaginas[1] + '" class="selecionavel">' + conjuntoPaginas[1] + '</a></li>');
	$('#Pagina_' + conjuntoPaginas[1])[0].onclick = paginaClick.bind(this, conjuntoPaginas[1]);

	$('#Paginas').append('<li><a id="Pagina_' + conjuntoPaginas[2] + '" class="selecionavel">' + conjuntoPaginas[2] + '</a></li>');
	$('#Pagina_' + conjuntoPaginas[2])[0].onclick = paginaClick.bind(this, conjuntoPaginas[2]);

	if (conjuntoPaginas[2] != totalPaginas) {
		$('#Paginas').append('<li><a>...</a></li>');

		$('#Paginas').append('<li><a id="Pagina_' + totalPaginas + '" class="selecionavel">' + totalPaginas + '</a></li>');
		$('#Pagina_' + totalPaginas)[0].onclick = paginaClick.bind(this, totalPaginas);
	}

	$('#Pagina_' + paginaSelecionada)[0].classList.add('pagSelecionada');
}

function paginaClick(idPagina) {
	if (idPagina == totalPaginas) {
		conjuntoPaginas[0] = totalPaginas - 2;
		conjuntoPaginas[1] = totalPaginas - 1;
		conjuntoPaginas[2] = totalPaginas;
	}
	else if (idPagina == 1) {
		conjuntoPaginas[0] = 1;
		conjuntoPaginas[1] = 2;
		conjuntoPaginas[2] = 3;
	}
	else if (idPagina == conjuntoPaginas[2]) {
		conjuntoPaginas[0] = conjuntoPaginas[1]
		conjuntoPaginas[1] = conjuntoPaginas[2]
		conjuntoPaginas[2] = idPagina + 1;
	}
	else if (idPagina == conjuntoPaginas[0]) {
		conjuntoPaginas[2] = conjuntoPaginas[1]
		conjuntoPaginas[1] = conjuntoPaginas[0]
		conjuntoPaginas[0] = idPagina - 1;
	}
	paginaSelecionada = idPagina;
	resquestAPI((idPagina - 1) * totalPorPagina);
}

function resquestAPI(primeiroLista) {
	$.get(getUrl(primeiroLista), function (data) {
		totalImagens = data.data.total;
		criaPaginacao();
		var resultados = data.data.results;

		$('#CorpoPerspnagens').html('');
		for (i in resultados) {
			MontaTela(resultados[i].id, resultados[i].thumbnail.path + ".jpg", resultados[i].name)
		}
	})
}
