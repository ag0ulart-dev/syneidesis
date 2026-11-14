async function carregarArtigo(caminho) {
    const resposta = await fetch(caminho);
    const markdown = await resposta.text();

    document.querySelector("#conteudo-artigo").innerHTML = marked.parse(markdown, { breaks: true});
}
