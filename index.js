const menu = {
  _courses: {
    _appetizers: [],
    _mains: [],
    _desserts: [],
  get appetizers() {return this._appetizers;},
  set appetizers(appetizerIn) {this._appetizers = appetizerIn; }, 
  get mains() {return this._mains;},
  set mains(mainIn) {this._mains = mainIn;},
  get desserts() {return this._desserts;  },
  set desserts(dessertIn) {this._desserts = dessertIn;}
  },// end of _courses object
  
  get courses() {
    return {
      appetizers: this._courses.appetizers, 
      mains: this._courses.mains,
      desserts: this._courses.desserts
    }
  },// end of get courses()
  
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice,
    };// end of the dish variable
     this._courses[courseName].push(dish);
  },// end of the addDishToCourse method
   
getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    
  // To validate if I return the right thing here
  return dishes[randomIndex];
  
},// end of the getRandomDishFromCourse method
  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    
    const main = this.getRandomDishFromCourse('mains');
    
    const dessert = this.getRandomDishFromCourse('desserts');
    
    const totalPrice = appetizer.price + main.price + dessert.price
		
    return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name}. The price is $${totalPrice}.`;
  }// end of the generateRandomMeal method
};// end of the menu object
  
	menu.addDishToCourse('appetizers', 'Caesar Salad', 4);
  menu.addDishToCourse('appetizers', 'Olivie Salad', 5);
  menu.addDishToCourse('appetizers', 'VesenniivSalad', 6);
  menu.addDishToCourse('mains', 'Chili soup', 3);
  menu.addDishToCourse('mains', 'Kholodnik', 5);
  menu.addDishToCourse('mains', 'Okroshka', 77);
  menu.addDishToCourse('desserts', 'Ice-cream', 2);
  menu.addDishToCourse('desserts', 'Vareniki', 3);
  menu.addDishToCourse('desserts', 'Tort', 1);

let meal = menu.generateRandomMeal();

console.log(meal);
