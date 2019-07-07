class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }
  get title() {
    return this._title;
  }
  get isCheckedOut() {
    return this._isCheckedOut;
  }
  get ratings() {
    return this._rating;
  }
  
  set isCheckedOut(checkIt) {
    this._isCheckedOut = checkIt
  }
  
  toggleCheckOutStatus() {
    this._isCheckedOut = !this._isCheckedOut
  }
    
  getAverageRating() {
   let ratingsSum = this._ratings.reduce((currentSum, rating) => currentSum + rating, 0);
    let lengthOfArray =  this._ratings.length;
    let averageValue = ratingsSum / lengthOfArray;
    return averageValue;
  }
  
 addRating(rating) {
    this._ratings.push(rating);
  }
}

class Book extends Media {
  constructor(author, title, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }
  get author() {
    return this.author;
  }
  get pages() {
    return this.pages;
  }
};

class Movie extends Media {
  constructor(director, title, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }
  get director() {
    return this.director;
  }
  get runTime() {
    return this.runTime;
  }
};

let historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544)
historyOfEverything.toggleCheckOutStatus();
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
historyOfEverything.getAverageRating();
console.log(historyOfEverything.getAverageRating());

let speed = new Movie('Jan de Bont', 'Speed', 116);
speed.toggleCheckOutStatus();
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
speed.getAverageRating();
console.log(speed.getAverageRating());
