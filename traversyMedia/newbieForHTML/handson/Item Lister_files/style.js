// // examine the document objects
// // console.dir(document)

// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// // document.title = 123;

// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// document.all[10].textContent = 'Hello!'

// console.log(document.forms[0]);
// console.log(document.links);

// console.log(document.images);

// // GETELEMENTBYID 

// console.log(document.getElementById("header-title"))

// var headerTitle = document.getElementById("header-title")
// var header = document.getElementById("main-header")

// console.log(headerTitle)
// console.log(headerTitle.textContent)
// console.log(headerTitle.innerText)

// // headerTitle.textContent = "Hello"
// // headerTitle.innerText = "GoodBye"
// // headerTitle.innerHTML = "<h3>Hello?</h3>"

// header.style.borderBottom = 'solid 3px #000';

// getElementsByClassname

// var items = document.getElementsByClassName("list-group-item");
// console.log(items);
// console.log(items[1]);
// items[1].textContent = "Hello 2"
// items[1].style.fontWeight = "bold"
// items[1].style.backgroundColor = "yellow"

// for (var i=0; i <= items.length; i++) {
//     items[i].style.backgroundColor = '#f4f4f4'
// }

// getElementsByTagName

// var li = document.getElementsByTagName("li");
// console.log(li);
// console.log(li[1]);
// li[1].textContent = "Hello 2"
// li[1].style.fontWeight = "bold"
// li[1].style.backgroundColor = "yellow"

// for (var i=0; i <= li.length; i++) {
//     li[i].style.backgroundColor = '#f4f4f4'
// }

// querySelector 

// var header = document.querySelector("#main-header");
// console.log(header)
// header.style.borderBottom = 'solid 4px #ccc'

// var input = document.querySelector('input');
// input.value = "Hello World!"

// var submit = document.querySelector('input[type="submit"]');
// submit.value = "SEND"


// var item = document.querySelector(".list-group-item");
// item.style.color = 'red'

// var lastItem = document.querySelector(".list-group-item:last-child");
// lastItem.style.color = 'blue'

// var lastItem = document.querySelector(".list-group-item:nth-child(2)");
// lastItem.style.color = 'coral'


// var titles = document.querySelectorAll(".title");
// // console.log(titles);
// titles[0].textContent = 'Hello';

// var odd = document.querySelectorAll("li:nth-child(odd)");
// for (var i=0; i < odd.length; i++){
//     odd[i].style.backgroundColor = "#f4f4f4"
// }

// var even = document.querySelectorAll("li:nth-child(even)");
// console.log(even)
// for (var i=0; i < even.length; i++){
//     even[i].style.backgroundColor = "#000"
// }


var itemList = document.querySelector("#items");
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4'
// console.log(itemList.parentNode.parentNode);

// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4'
// console.log(itemList.parentElement.parentElement);

// console.log(itemList.children); // better then childNodes
// itemList.parentElement.style.backgroundColor = '#f4f4f4'
// console.log(itemList.parentElement.parentElement);


// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = '#f4f4f4'

// itemList.firstElementChild.style.backgroundColor = '#f4f4f4'
// itemList.lastElementChild.style.backgroundColor = '#ccc'


// console.log(itemList.nextSibling);
// console.log(itemList.nextElementSibling);
// console.log(itemList.previousSibling);
// console.log(itemList);
// console.log(itemList.previousElementSibling);


// var newDiv = document.createElement('div');
// console.log(newDiv)
// newDiv.className = "hello";
// newDiv.id = 'hello1';
// newDiv.setAttribute('title', 'Hello Div');

// var newDivText = document.createTextNode("Hello World")
// newDiv.appendChild(newDivText)
// console.log(newDiv)

// var container = document.querySelector("header .container");
// var h1 = document.querySelector("header h1");

// container.insertBefore(newDiv, h1);

// var button = document.getElementById('button').addEventListener('click', buttonClick)

// function buttonClick(e){
//     // console.log(e);
//     // console.log(e.target)
//     // console.log(e.target.className)
//     // console.log(e.target.classList[0])
//     // var output = document.getElementById("output")
//     // output.innerHTML = '<h3>' + e.target.id + '</h3>'

//     console.log(e.type)
//     // console.log(e.clientX)
//     // console.log(e.clientY)

//     console.log(e.offsetX);
//     // console.log(e.offsetY);
    
//     console.log(e.altKey)
//     console.log(e.shiftKey)
// // }

// var button = document.getElementById('button');
// // button.addEventListener('dblclick', runEvent);
// // button.addEventListener('mouseup', runEvent);
// // button.addEventListener('mousedown', runEvent);


// var box = document.getElementById('box');
// var output = document.getElementById('output')
// box.addEventListener('mouseenter', runEvent)
// box.addEventListener('mouseleave', runEvent)
// box.addEventListener('mouseover', runEvent);
// box.addEventListener('mouseout', runEvent);
// box.addEventListener('mousemove', runEvent);

var itemInput = document.querySelector('input[type="text"]');
var form = document.querySelector('form');

itemInput.addEventListener('keydown', runEvent)

function runEvent(e){
    console.log('EVENT TYPE: ' + e.type)
    // output.innerHTML = '<h3>MouseX : ' + e.offsetX + ' </h3><h3> MouseY : ' + e.offsetY + '</h3>'
    // document.body.style.backgroundColor = 'rgb(' + e.offsetX + ',' + e.offsetY + ',40)'
} 













