let button = document.getElementById("submit");
button.addEventListener("click", function(event){
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("pwd").value;


    let data = new FormData();
    data.append('username', username);
    data.append('password', password);

    let url = 'http://localhost/Zomato/ZomatoBackEnd/LoginP.php'; //specifiy where to go after submitting data?
    let id = localStorage.getItem("user_id");
    url += "?user_id=" + id;

    axios({
        method: 'GET',
        url: url
    })
    .then(function(response){
        let result = response.data;
        let message = result.status;
        let id = result.user_id;
        if(message == "Welcome"){
            document.getElementById("status").style.display = "block";
        }
    })
})