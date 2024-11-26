const form = document.getElementById('searchForm');
const queryInput = document.getElementById('query');
const target = document.getElementById('joke');
const requestRandomJoke = 'https://api.chucknorris.io/jokes/random';

async function getJoke() {
  try {
    const responseRandom = await fetch(requestRandomJoke);
    const randomJoke = await responseRandom.json();
    console.log(randomJoke.value);
  } catch (error) {
    console.log(error.message);
  }
}

// Wrap it in an async function
(async function main() {
  await getJoke();
})();

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  try {
    const requestSpecificJoke = `https://api.chucknorris.io/jokes/search?query=${queryInput.value}`;
    const responseSpecific = await fetch(requestSpecificJoke);
    const jokes = await responseSpecific.json();

    target.innerHTML = '';

    if (jokes.result.length > 0) {
      jokes.result.forEach(({value}) => {
        const article = document.createElement('article');
        const jokeHere = document.createElement('p');
        jokeHere.innerText = value

        article.appendChild(jokeHere);
        target.appendChild(article);

      });
    } else {
      const article = document.createElement('article')
      article.innerText = 'No jokes found!'
      target.appendChild(article)
    }

  } catch (error) {
    console.log(error.message);
  }
});