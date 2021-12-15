const Cinema = function (films) {
  this.films = films;
};


Cinema.prototype.listOfFilmsTitle = function(){
  const result = this.films.map((film) => film.title)
  return result;
}; 

Cinema.prototype.findFilmTitle = function(title) {
  const foundFilm = this.films.find((film) => film.title === title);
  return foundFilm;
};


Cinema.prototype.findFilmGenre = function(genre) {
  const foundGenre = this.films.filter((film) => film.genre === genre);
  return foundGenre;
}


Cinema.prototype.findFilmYear = function(year) {
  const hasFound = this.films.some((film) => film.year === year);
  return hasFound;
}




Cinema.prototype.runTime = function(length){
  const filmLenght = this.films.every((film) => film.length > length );
  return filmLenght;
}


Cinema.prototype.totalTime = function () {
  return this.films.reduce((runningTotal, film) => {
    return runningTotal + film.length
  }, 0)
}



module.exports = Cinema;
