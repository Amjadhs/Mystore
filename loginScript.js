var usersData;
var promise = fetch("./users.json");
promise
  .then(response => {
    return response.json();
  })
  .then(data => {
    usersData = data;
  });

function Login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  for (value of usersData) {
    if (value.username == username && value.password == password) {
      localStorage.setItem("username", username);
      window.location = "main.html";
    }
  }
  return false;
}
