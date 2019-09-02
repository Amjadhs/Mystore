/*
fetch("./product.json")
  .then(response => response.json())
  .then(data => createTable(data.products));

//function creatproductinformation (products){
//var ifoDiv=document.createElement("div");
//infoDiv.cclassName="PInfo";
//}
//function creatInfoItem(info,className){
//var infoItemDiv}

function createTable(records) {
  var table = document.createElement("table");
  table.setAttribute("border", 1);
  table.appendChild(createHeading(records[0]));
  for (let record of records) {
    table.appendChild(createRow(record));
  }
  document.getElementById("content").appendChild(table);
}
function createHeading(record) {
  var row = document.createElement("tr");
  for (let prop in record) {
    var heading = document.createElement("th");
    heading.innerHTML = prop.toUpperCase();
    row.appendChild(heading);
  }
  return row;
}
function createRow(record) {
  var row = document.createElement("tr");
  for (let prop in record) {
    var column = document.createElement("td");
    column.innerHTML = record[prop];
    row.appendChild(column);
  }
  return row;
}

function createProducts(record) {
  var container = document.getElementById("content");
  for (let obj of products) {
    for (let prop in record) {
      var value = obj[prop];
      var div = document.createElement("div");
      div.innerHTML = value;
      container.appendChild(div);
    }
  }
  return container;
}
*/

// Fetch data
var productData;
var promise = fetch("./product.json");
promise
  .then(response => {
    return response.json();
  })
  .then(data => {
    productData = data;
    createProducts(data);
  });

function createProducts(test) {
  var MyContentPage = document.getElementById("container");
  MyContentPage.className = "Pagecontent";
  for (let obj of test) {
    var Mygallery = document.createElement("div");
    Mygallery.className = "Product";
    var img = document.createElement("img");
    img.src = obj.imageSRC;
    Mygallery.appendChild(img);

    var p = document.createElement("p");
    p.className = "p";
    p.innerHTML = getDescription(obj);
    Mygallery.appendChild(p);

    var label = document.createElement("label");
    label.className = "p";
    label.innerHTML = getDescription1(obj);
    Mygallery.appendChild(label);

    var button = document.createElement("button");
    button.className = "button";
    button.innerHTML = "add";
    button.onclick = incrementCartAmount;
    Mygallery.appendChild(button);

    MyContentPage.appendChild(Mygallery);
  }
}

function getDescription(element) {
  return element.name;
}
function getDescription1(element) {
  return element.price;
}

//searching for a product
function filterdProducts() {
  var search_input = document.getElementById("search").value;
  document.getElementById("container").innerHTML = "";
  createProducts(
    productData.filter(value => {
      var lowerCaseProduct = value.name.toLowerCase();
      return lowerCaseProduct.includes(search_input);
    })
  );
}

//Adding items to the shopping cart
function incrementCartAmount() {
  var currentCount = document.getElementById("cartItem");
  var currentCountParsed = parseInt(currentCount.textContent);
  var nextCount = counter(currentCountParsed);
  // console.log(currentCount);
  currentCount.innerHTML = nextCount;
}
function counter(currentCountParsed) {
  // var cartCount = cartCount.value;
  return currentCountParsed + 1;
}

//logout Function
function logout() {
  window.location.replace("index.html");
}
