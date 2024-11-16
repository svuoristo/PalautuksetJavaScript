function myConcat(strings) {
  let concatenated = '';
  strings.forEach((string) => {
    concatenated = concatenated.concat(string);
  });
  return concatenated;
}

document.querySelector('#here').innerHTML = myConcat(
    ['Johnny', 'DeeDee', 'Joey', 'Marky']);
