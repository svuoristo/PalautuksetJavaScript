const form = document.getElementById('searchForm');
const userInput = document.getElementById('query');
const results = document.getElementById('results');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const query = userInput.value.trim();
  if (!query) {
    results.innerHTML = '<p>Please enter a valid TV show name.</p>';
    return;
}

  try {
    const response = await fetch(
        `https://api.tvmaze.com/search/shows?q=${userInput.value}`);
    //if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    const data = await response.json();

    console.log(data);

    results.innerHTML = ''
    data.forEach(({show}) => {
      const name = show.name
      const url = show.url
      const mediumImage = show.image ? show.image.medium : 'https://via.placeholder.com/210x295?text=Not%20Found'
      const summary = show.summary || '<p>No summary available.</p>';

      const article = document.createElement('article')
      const title = document.createElement('h2')
      const image = document.createElement('img')
      const link = document.createElement('a')
      const summaryDiv = document.createElement('div')

      title.textContent = name
      image.src = mediumImage
      image.alt = name
      link.href = url
      link.text = name
      link.target="_blank"
      summaryDiv.innerHTML = summary

      results.appendChild(article)
      article.appendChild(title)
      article.appendChild(image)
      article.appendChild(link)
      article.appendChild(summaryDiv)

    });



  } catch (error) {
    console.log(error.message);
  }
});

