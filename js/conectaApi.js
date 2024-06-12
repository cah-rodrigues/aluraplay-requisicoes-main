async function listaVideos() {
    const conexao = await fetch("http://localhost:3000/videos"); //fetch = promessa => requisição GET
    const conexaoConvertida = await conexao.json();
    
    return conexaoConvertida;
}

async function criaVideo(titulo, descricao, url, imagem){
    console.log("imagem", imagem)
    console.log("url", url)
    console.log("titulo", titulo)
    console.log("descricao", descricao)
    await fetch("http://localhost:3000/videos", {
        method: "POST",
        headers:{
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mil visualizações`,
            url: url,
            imagem: imagem
        })
    });

    const conexaoConvertida = await conexao.json();

     return conexaoConvertida;
}

async function buscaVideo(termoDeBusca){
    const conexao = await fetch(`http://localhost:3000/videos?q=${termoDeBusca}`)
    const conexaoConvertida = conexao.json();

    return conexaoConvertida;
}

export const conectaApi = {
    listaVideos,
    criaVideo,
    buscaVideo
}