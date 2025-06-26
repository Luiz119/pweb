function createPost() {
    const title = document.getElementById('input-title').value;
    const content = document.getElementById('input-content').value;
    const author = document.getElementById('input-author').value;
    const thumbnail_url = document.getElementById('input-thumbnail').value || 'https://th.bing.com/th/id/R.20da0b9613001e20999e4f1c50f1916f?rik=9YM%2bglVVS1dfyg&pid=ImgRaw&r=0';

    const posts = JSON.parse(localStorage.getItem('posts') ?? '[]');

    posts.push({
        title,
        content,
        author,
        thumbnail: thumbnail_url
    });

    localStorage.setItem('posts', JSON.stringify(posts));

    location.href = 'main.html';
}
