//Enter Age
var name = prompt("Enter your Name");
var surname = prompt("Enter your Surname");
var age = prompt("Enter your Age");
console.log(age);

//Insert Distance in 'km'

var km = prompt("enter the distance you want to travel in 'KM");
console.log(km);

//Price per KM

var price = km * 0.21;
console.log(price);

//Discount 20% under 18 & 40% over 65

var discount20 = price * 20 / 100;
console.log(discount20);

var discount40 = price * 40 / 100;
console.log(discount40);

//Calculating Price with discount based on Age

if (age < 18) {
    ticketPrice = (price - discount20).toFixed(2);
} else if (age > 65) {
    ticketPrice = (price - discount40).toFixed(2);
} else {
    ticketPrice = price;
}
console.log(ticketPrice)

document.getElementById('ticket').style.opacity = "1";

document.getElementById('name').innerHTML = name;

document.getElementById('surname').innerHTML = surname;

document.getElementById('age').innerHTML = age;

document.getElementById('ticketNumber').innerHTML = Math.floor((Math.random() * 1000) + 1);

document.getElementById('ticketDetails').innerHTML = "Ticket Price: " + ticketPrice + " €";




