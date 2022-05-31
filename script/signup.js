let button = document.getElementById("submit");
button.addEventListener("click", function(event){
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("pwd").value;
    const DOB = document.getElementById("DOB").value;
    const gender = document.getElementById("gender").value;
    const email = document.getElementById("email").value;

    let data = new FormData();
    data.append('username', username);
    data.append('User_email', email)
    data.append('User_password', password);
    data.append('Date_of_birth', DOB);
    data.append('gender',DOB)

    let url = 'http://localhost/Zomato/ZomatoBackEnd/signupP.php'; //specifiy where to go after submitting data?
    let id = localStorage.getItem("user_id");
    url += "?user_id=" + id;

    axios({
        method: 'post',
        url: url
    })
})