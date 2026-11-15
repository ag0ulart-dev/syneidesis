async function carregarArtigo(caminho) {
    const resposta = await fetch(caminho);
    const markdown = await resposta.text();

    document.querySelector("#conteudo-artigo").innerHTML =
        marked.parse(markdown, { breaks: true });

    const minutos = tempoLeitura(markdown);

    document.querySelector("#tempo-leitura").textContent =
        `${minutos} min de leitura`;
}

function tempoLeitura(texto) {
    const palavras = texto.trim().split(/\s+/).length;
    return Math.max(1, Math.ceil(palavras / 180));
}
