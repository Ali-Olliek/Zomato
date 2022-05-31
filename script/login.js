let button = document.getElementById("submit");
button.addEventListener("click", function(event){

    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("pwd").value;
    console.log(password, " ", username)


    let data = new FormData();
    data.append('username', username);
    data.append('password', password);

    let url = 'http://localhost/Group_Project/group-project-backend/loginP.php'; //specifiy where to go after submitting data?
    let id = localStorage.getItem("idUsers");
    url += "?idUsers=" + id;

    axios({
        method: 'POST',
        url: url,
        data: data,
    })
    .then(function(response){
        
        if (response === "Logged in") {
          console.log("logged in");
          var get_id = response.data[0]
          window.location.replace("http:/Group_Project/Zomato/html/restaurants_display.html");
        } else {
          console.log("user not found");
        }
    })
})