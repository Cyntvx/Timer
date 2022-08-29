// // document.getElementById()

// console.log(document.getElementById('task-title'));

// //Get things from the element
// console.log(document.getElementById('task-title').id)

// const taskTitle = document.getElementById('task-title');



// //Change styling
// taskTitle.style.background = '#333';
// taskTitle.style.color = '#fff';
// taskTitle.style.padding = '5px';

// //Change content
// taskTitle.textContent =' task list'; this changed it from tast-title to task list
// taskTitle.innerContent =' My tasks'; this changed it from tast-title to My tasks


// //document.querySelector()

// console.log(document.querySelector('#task-title')); and this will give us the h5 with the id of task-title
// console.log(document.querySelector('.card-title')); and this will give us the class card-title


// To target a particular element if there's more than 1
// document.querySelector('li').style.color = 'red'; this will select the first
// document.querySelector('li:nth-child(3)').style.color = 'yellow'; this will select the third
// document.querySelector('li:nth-child(odd)').style.color = 'green'; this will only select the first, to make it select all the odds, use "document.querySelectorAll"


// document.getElementsByClassName

// const items = document.getElementsByClassName('collection-item');
// // // To access a specific element from an item
// // console.log(items [0]); and this selects the first list item in the class
// // items[0].style.color = 'red'; this colors the first item in the class red
// // items[3].textContent = 'Hello'; this changes  the text of the third item in the class to hello


// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');    
// console.log(listItems); this selects the "collection-item" in the "ul"

// //To get elements by tag name
// let lis = document.getElementsByTagName('li');
// console.log(lis);

// //Convert html collection into array
// lis = Array.from(lis);

// lis.reverse(); this will reverse the array

// lis.forEach(function(li, index){
//   console.log(li.className);
//   li.textContent = `${index}: Hello`; this will change the content of the items in li with numbers and "Hello"
// });

// console.log(lis);

// document.querySelectorAll
//  const items = document.querySelectorAll('li');

//  items.forEach(function(li, index){
//    li.textContent = `${index}: Hello`;
//   });

//   const liOdd = document.querySelectorAll('li:nth-child(odd)');
//   const liEven = document.querySelectorAll('li:nth-child(even)');
  
//   liOdd.forEach(function(li, index){
//   li.style.background = '#ccc' and this turns the background grey
//    });

// OR

//   for(let i = 0; i < liEven.length; i++){
//    liEven[i].style.background = '#f4f4f4';
//   }
//   console.log(items);


// //  Traversing the DOM

// let val;
  
// const list = document.querySelector('ul.collection');
// const listItem = document.querySelector('li.collection-item:firstchild');
 
// val = listItem;
// val = list;

// // TYPES OF NODES
// //1 - Element
// // 2 - Attribute(deprecated)
// // 3 - Text node
// // 8 - Comment
// // 9 - Document itself
// // 10 - Doctype

// //Get the child nodes
// val = list.childNodes; but using this will also select the text nodes i.e the line breaks which we do not need . Hence we use ".children" rather than ".childNodes"
//  val = list.childNodes[1].nodeType will give us the type of node "1" is
//  val = list.childNodes[1].nodeName will give us the name of node "1" is

// //Get children element node
// val = list.children; this gives just the html collection without the text-node
// val = list.children[1];
// list.children[1].textContent = 'Hello';
// //To get the children of the children element node
// list.children[3].children[0]; and this will give us the first child of the child element node with index position of 3.
// //we can even add an id to a child of a child element node by:
// list.children[3].children[0].id = 'test-link'; now this added an id of test-link to the first child of the child element node with index position of 3.

// //First child
// val = list.firstChild; this gives us the first child node 
// val = list.firstElementChild; this gives us the first child element

// //Last child
// val = list.lastChild; this gives us the last child node
// val = list.lastElementChild; this gives us the last child element

// //Count child elements
// val = list.childElementCount; this gives us how many elements there is 

// //To get parent node
// val = listItem.parentNode; this will give us the parent node
// val = listItem.parentElement; this will give us the parent Element

// //To get the parent of the parent element
// val = listItem.parentElement.parentElement;

// //Get next sibling
// val = listItem.nextSibling; this will give us the node the next sibling
// val = listItem.nextElementSibling; this will give us the next list sibling
// val = listItem.nextElementSibling.nextElementSibling; this will give us the next 2 list sibling 

// //Get previous sibling
// val = listItem.previousSibling; this will give us the node the previous sibling
// val = listItem.previousElementSibling; this will give us the previous list sibling




// console.log(val);


// //How to create an element
// const li = document.createElement('li'); this will create a new element li

// //Add class
// li.className = 'collection-item'; this will create a new class of "collection-item" in the li

// //Add id
// li.id = 'new-item'; this will create a new id of "new - item" in the li

// //Add attribute
// li.setAttribute('title', 'New Item'); this will create a new title of "New Item" in the li


// // //Create text node and append
// li.appendChild(document.createTextNode('Hello World'));

// //Create new link element
// const link = document.createElement('a');

// //Add classes
// link.className = 'delete-item secondary-content';

// //Add icon html
// link.innerHTML = '<i class= "fa fa-remove"></i>';

// //Append link into li
// li.appendChild(link);

// //Append li as child to ul
// document.querySelector('ul.collection').appendChild(li);

// console.log(li);


// //Replace Element

// //Create Element
//  const newHeading = document.createElement('h2');

//  //Add id
//  newHeading.id = 'task-title'; we added the id of the "h5" to the "h2" that we want to use

//  //New text node
//  newHeading.appendChild(document.createTextNode('Task List'));

//  //Get the old heading
//  const oldHeading = document.getElementById('task-title');

//  //Parent
//  const cardAction = document.querySelector('.card-action');

//  //Replace
//  cardAction.replaceChild(newHeading, oldHeading); and this replaces the h5 with the h2


//  //Remove Element
//  const lis = document.querySelectorAll('li');
//  const list = document.querySelector('ul');

//  //Remove list item
//  lis[0].remove(); this removes the first list item in the li

//  //Remove child element
//  list.removeChild(lis[3]); this removes the fourth list item in the li

//  //Classes & Attribute
//  const firstLi = document.querySelector('li:first-child');
//  const link = firstLi.children[0];

//  let val;

//  //Classes
//  val = link.className;
//  val = link.classList;
//  val = link.classList[0];
//  link.classList.add('test');
//  link.classList.remove('test');
//  val = link;


//  //Attributes
//  val = link.getAttribute('href');
//  val = link.setAttribute('href', 'http:/google.com');
//  link.setAttribute('title', 'Google'); this set a title for the "a" as google
//  val = link.hasAttribute('title'); so this will be true because there is a title
//  link.removeAttribute('title'); this is used to remove the title
//  val = link;

//  console.log(val);


// DOM INTERACTION WITH THE UI

// // Start by 
// document.querySelector('.clear-tasks').addEventListener('click', onClick); "click in this case means the event we are looking for" this mean that on the click of this event the following would take place. :

// function onClick(e){
//   //console.log('Clicked'); when we click the item with the class of "clear-tasks" we get "clicked".
  
//   let val;
  
//   val = e;
  
//   //Event target element
//   val = e.target; this will give us the elements
//   val = e.target.id; this will give us the id
//   val = e.target.className; this will give us the class name of the event object "e"
//   val = e.target.classList; this will give us the class list in the event object "e"
  
//   e.target.innerText = 'Hello'; this will change the text of the event object to "Hello"

//   // To check the event type
//   val = e.type; this will give us a "click"

//   //Timestamp
//   val = e.timeStamp; this will give us the timeStamp whenever we click

//   //coords event relative to the window
//   val = e.clientY; this will give us the coord event "e" relative to the window
//   val = e.clientX; this will give us the coord event "e" relative to the window

//   //Coords event relative to the element
//   val = e.offsetY; 
//   val = e.offsetX;

//   console.log(val);
// }


// MOUSE 

// const clearBtn = document.querySelector('.clear-tasks');
// const card = document.querySelector('.card');
// const heading = document.querySelector('h5');

// //Click
// // clearBtn.addEventListener('click', runEvent);

// //DoubleClick
// // clearBtn.addEventListener('dblclick', runEvent);


// //Mouse down
// clearBtn.addEventListener('mousedown', runEvent);

// //Event Handler

// function runEvent(e){
//   console.log (`EVENT TYPE: ${e.type}`);
// }


// let password = 24433563;

// if (password.length = String('') && password.indexOf(' ')){
//   console.log('valid password!')
// }
// else if (password.length < 8 || password.indexOf(' ')){
//   console.log('invalid password!') 
// }
// else{
//   console.log('You gotta try again!')
// // }

// let num = 7;

// let color = num === 7 ? 'red' : 'blue';

// // NESTED ARRAYS
//  for instance if we have
//  const animalPairs = [
//   ['doe', 'buck'],
//   ['ewe', 'ram'],
//   ['peahen', 'peacock']
//  ] to get an element like ram from this array we can.: animalPairs[1][1] this is because the 2nd array has an index of 1 and ram in that nested array also has an index of 1
 

// const socials = {
//   notification : ['message', 'alerts']

// }
// if (!socials.notification.length ){
//   console.log('No new notification');

//  }
//  else{
//    console.log(socials.notification.length);
//  }


// // Loops
// for(let i = 200; i>= 0; i -= 25){
// 	console.log("c'mon", i);}


// const myStudents = [
// 	{
// 	firstName : 'Zeus',
// 	Score : 80},
	
// 	{
// 	firstName : 'Appollo',
// 	Score : 90},
	
// 	{
// 	firstName : 'Artemis',
// 	Score : 100}
//   ];
//   // for(let i = 0; i < myStudents.length; i++){
//   //        let student = myStudents[i];
//   //   console.log(`${student.firstName} scored ${student.Score}`);
//   // }

//   let total = 0;
//   for(let i = 0; i < myStudents.length; i++){
//          let student = myStudents[i];
//          total += student.Score;       
//    }
//         console.log(total/myStudents.length);
  
    // ];
    // We can say for (let i = 0; i <myStudents.length i++){
    // console.log([i]);
  // // This will give us everything in the array in this order 

  // const myStudents = [
  //    {
  //    firstName : "Zeus",
  //    Score : 80},
    
  //    {
  //    firstName : "Appollo",
  //    Score : 90},
    
  //    {
  //    firstName : "Artemis",
  //    Score : 100}
  // ]
  //  for(let i = 0; i < myStudents.length; i++){
    
  //    console.log(myStudents[i].firstName);
  //  }
  const gameBoard = [
    [4,5,64,45],
    [45,76,34,7],
    [11,76,90,22],
    [43,45,76,28]
   ];
  
  //  to loop this we can:
  // for(let i = 0; i <gameBoard.length i++){
  //   console.log(gameboard[i]);
  // }
  let total = 0;
  for(let i = 0; i <gameBoard.length; i++){
    let row = gameBoard[i];
    console.log(row);
    for (let j = 0; j > row.length; j++){
      total += row[j];
      console.log(row[j]);
    }
  }
  