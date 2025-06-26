const urlParams = new URL(location.href).searchParams;
const current_title = urlParams.get('title');
const current_content = urlParams.get('content');
const current_author = urlParams.get('author');

const tag_title = document.getElementById('title');
const tag_content = document.getElementById('content');
const tag_author = document.getElementById('author');

tag_title.innerHTML = current_title;
tag_content.innerHTML = current_content;
tag_author.innerHTML = `Autor: ${current_author}`;
