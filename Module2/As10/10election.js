let numberOfCandidates;
do {
  numberOfCandidates = prompt('Number of candidates');
} while (isNaN(Number(numberOfCandidates)));

const candidates = [];
for (let i = 0; i < numberOfCandidates; i++) {
  const candidate = {'name': prompt(`Name for candidate ${i + 1}`), 'votes': 0};
  candidates.push(candidate);
}

let numberOfVoters;
do {
  numberOfVoters = prompt('Number of voters');
} while (isNaN(Number(numberOfCandidates)));

for (let i = 0; i < numberOfVoters; i++) {
  let vote;
  let isValidVote = false;

  do {
    vote = prompt('Name of the candidate you\'re voting for');
    isValidVote = candidates.some(cand => cand.name === vote) || vote === '';
    if (!isValidVote) {
      alert('Invalid candidate name.');
    }
  } while (!isValidVote);

  candidates.forEach((cand) => {
    if (cand['name'] === vote) {
      cand['votes'] += 1;
    }
  });
}
candidates.sort((a, b) => {
  return b.votes - a.votes;
});

console.log('The winner is ' + candidates[0]['name'] + ' with ' +
    candidates[0]['votes'] + ' votes.');

candidates.forEach((candidate) => {
  console.log(candidate["name"] + ': ' + candidate['votes'] + ' votes')
})
