

var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

form.addEventListener('submit', addItem)

function addItem(e) {
    e.preventDefault();
    console.log(1)

    var newItem = document.getElementById('item').value;
    
    var li = document.createElement('li')
    li.className = 'list-group-item'
    console.log(li)
    li.appendChild(document.createTextNode(newItem))
    itemList.appendChild(li);
}

