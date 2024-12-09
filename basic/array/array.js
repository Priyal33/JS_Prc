// 1) push()
let animals = ["cat", "dog", "elephant"];
animals.push("lion");
console.log(animals); 

// 2) length()
let colors = ["red", "blue", "green", "yellow"];
console.log(colors.length);

// 3) pop()
let cities = ["New York", "London", "Paris"];
let lastCity = cities.pop();
console.log(lastCity); 
console.log(cities); 

// 4) unshift()
let numbers = [2, 3, 4];
numbers.unshift(1);
console.log(numbers); 

// 5) shift()
let countries = ["USA", "UK", "Canada"];
let firstCountry = countries.shift();
console.log(firstCountry); 
console.log(countries); 

// 6) splice()
let months = ["January", "March", "April"];
months.splice(1, 0, "February");
console.log(months); 

// 7) slice()
let students = ["John", "Jane", "Mary", "Paul"];
let group = students.slice(1, 3);
console.log(group); 

// 8) indexOf()
let cars = ["Toyota", "Honda", "Tesla"];
console.log(cars.indexOf("Tesla")); 

// 9) includes()
let tech = ["laptop", "tablet", "phone"];
console.log(tech.includes("camera")); 

// 10) sort()
let scores = [9, 4, 7, 1];
scores.sort();
console.log(scores);

// 11) reverse()
let letters = ["a", "b", "c", "d"];
letters.reverse();
console.log(letters); 

// 12) forEach()
let planets = ["Earth", "Mars", "Venus"];
planets.forEach(planet => console.log(planet)); 


// 13) map()
let prices = [10, 20, 30];
let discounted = prices.map(price => price * 0.9);
console.log(discounted); 

// 14) filter()
let words = ["apple", "pear", "banana", "kiwi"];
let shortWords = words.filter(word => word.length <= 4);
console.log(shortWords); 

// 15) reduce()
let grades = [85, 90, 78];
let average = grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
console.log(average);

// 16) join()
let animalsList = ["lion", "tiger", "bear"];
let joinedAnimals = animalsList.join(" & ");
console.log(joinedAnimals); 
