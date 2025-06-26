insertPost('Senhas Vazadas', 'https://s2-g1.glbimg.com/Qgx14vaQH45p7nVMTGzgYesQ96I=/0x0:724x474/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2023/1/3/XqG3uJQOq3zskABGJtxQ/cuidado.png', '', '', 'https://g1.globo.com/tecnologia/noticia/2025/06/20/vazamento-de-dados-expoe-16-bilhoes-de-senhas-da-apple-google-e-facebook.ghtml');
insertPost('Copa 2026', 'https://th.bing.com/th/id/OIF.fmfpuFPAGr3bFUznV1SEdg?r=0&rs=1&pid=ImgDetMain', '', '', 'https://www.bing.com/images/search?view=detailV2&ccid=LMUSoIfO&id=F1A4EC66177B5EC1904E5D96E961E01C2D86CDCE&thid=OIF.fmfpuFPAGr3bFUznV1SEdg&mediaurl=https%3a%2f%2fwww.bnewssaopaulo.com.br%2fmedia%2fuploads%2f2025%2f06%2fvinicius-jr-selecao-brasileira.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.2cc512a087ce95f009e1c15bdc07f545%3frik%3d%26pid%3dImgRaw%26r%3d0&exph=800&expw=1200&q=noticias+do+mundo&simid=7108387113781&FORM=IRPRST&ck=7E67E9B853C01ABDDB154CE757548476&selectedIndex=18&itb=0');
insertPost('Nova Lei', 'https://s2-g1.glbimg.com/Uz8zfBaO4tsFtFY9fkRue0Ez0I8=/0x0:650x1242/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2025/4/Y/93ipXqQCehNSjP8TdKqw/250625-info-cadeiras-deputados.png', '', '', 'https://g1.globo.com/politica/noticia/2025/06/25/senado-e-camara-aprovam-no-mesmo-dia-projeto-que-aumenta-o-numero-de-deputados-federais.ghtml');
insertPost('Redes Sociais', 'https://s2-g1.glbimg.com/nkCLcckgFg7ZurJtu42KAfgSCik=/0x0:2047x1365/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2025/T/n/cDmmYDR2uGV9feAAUAxw/stf-julgamento.jpg', '', '', 'https://g1.globo.com/politica/noticia/2025/06/25/responsabilidade-das-redes-fachin-diverge-da-maioria-e-defende-retirada-de-conteudo-so-com-ordem-judicial.ghtml');


const post_list = JSON.parse(localStorage.getItem('posts') ?? '[]');

post_list.forEach(post => {
    insertPost(post.title, post.thumbnail, post.content, post.author);
});


function insertPost(title, thumbnail, content, author, destiny = 'false') {
    if (destiny == 'false') {
        destiny = `view_post.html?title=${title}&thumbnail=${thumbnail}&content=${content}&author=${author}`;
    }

    const template = `
<div class="post">
    <a href="${destiny}">
        <div class="post-img" style="background-image: url('${thumbnail}');"></div>
        <h3 class="post-title post-element">${title}</h3>
    </a>
</div>
    `;

    document.getElementById('posts-place').innerHTML += template;
}
