const cats = ["Milo", "Otis", "Garfield"];

beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });
  function destructivelyAppendCat(name) {
    cats.push(name);
  }
    destructivelyAppendCat('Ralph');

  beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });
    function destructivelyPrependCat(name) {
    cats.unshift(name);
  }
  destructivelyPrependCat('Bob');
 
  beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });
function destructivelyRemoveLastCat(name){
    cats.pop(name);
}
beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });
  function destructivelyRemoveFirstCat(name){
    cats.shift(name);
  }
  beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });
  function appendCat(name){
    const newCats = [...cats, name];
  return newCats;
}
const newCatsArray = appendCat("Broom");

beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });
  function prependCat(name){
    const newCats = [name, ...cats];
  return newCats;
}

beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });
  function removeLastCat(name){
    const newCats = cats.slice(0, cats.length - 1);
  return newCats;
}
beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });
  function removeFirstCat(name){
    const newCats = cats.slice(1);
  return newCats;
  }

