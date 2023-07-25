const API_KEY = '$2b$10$9NVJVwmvVHfJ8RIgQARgX.rQzp.BiQB73G9Gy.76neec/swiDy66a';
const BIN_ID = '64c03198b89b1e2299c40da9';
const API_URL = `https://api.jsonbin.io/v3/b/${BIN_ID}`;

async function listaVideos() {
  const conexao = await fetch(API_URL, {
    method: "GET",
    headers: {
      'Content-Type': 'application/json',
      'X-Master-Key': API_KEY
    }

  });
  const data = await conexao.json();
  return data.record.videos;
};

async function main() {
  const videos = await listaVideos();
  videos.forEach(video => {
    const id = video.id;
    const title = video.titulo;
    const description = video.descricao;
    const url = video.url;
    const image = video.imagem;
  });
}

main();

export const test = {
  listaVideos,
  main,
}