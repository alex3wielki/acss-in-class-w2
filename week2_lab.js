document.querySelector('h1.item-page__main-title.is-truncated').textContent="potato";

document.querySelector('.product-image__image--single').src='http://via.placeholder.com/350x150';

let nav = Array.from(document.querySelectorAll('ul.top-nav__list>li'));

let navArr = ['potato','strawberry','apple','tomato'];

nav.map( (element,i) => element.textContent=navArr[i]);

document.querySelector('.indigo-logo').innerHTML = "<img src='http://via.placeholder.com/350x150' alt=''/>";

let vegetales = {name:'Potato',calories:300,taste:'tasty'};

let node = document.querySelector('.item-description__content');

function render(obj) { let snippet = ` <ul> <li>${obj.name}</li> <li>${obj.calories}</li> <li>${obj.taste}</li> </ul> `; node.innerHTML = snippet; };


document.querySelector('a.item-contributor__link').href="http://www.georgiancollege.ca/";

document.querySelector('a[href="https://www.chapters.indigo.ca/en-ca/checkout/shoppingbag.html?link-usage=Header%3A%20https%3A%2F%2Fwww.chapters.indigo.ca%2Fen-ca%2Fcheckout%2Fshoppingbag.html"]').addEventListener('click',function(event){event.preventDefault();document.documentElement.innerHTML=''});

//^^ This is not the best way to do it, but I had no other idea on how to get it done.
//I'm just testing SSH here
