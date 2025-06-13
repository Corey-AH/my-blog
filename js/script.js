let path = window.location.pathname;
let week = null;

if (path.includes("week")) {
  let match = path.match(/week(\d+)/);
  if (match) {
    week = "Week " + match[1];
  }
}


fetch('js/data.json')
  .then(response => response.json())
  .then(data => {
    const container = document.querySelector('#posts');

    data.forEach(post => {

    if (week && post.title.indexOf(week) === -1) return;


      const article = document.createElement('article');
      article.classList.add('post');

      article.innerHTML = `
        <h2 class="title">${post.title}</h2>
        <p><span class="author">${post.author}</span> | <span class="date">${post.date}</span></p>
        <p class="content">${post.content}</p>
      `;

      container.appendChild(article);
    });
  })
  .catch(error => {
    console.error('We had a problem!', error);
  });
