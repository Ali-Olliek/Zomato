let button = document.getElementById("submit");
button.addEventListener("click", function(event){
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("pwd").value;
    const DOB = document.getElementById("DOB").value;
    const gender = document.getElementById("gender").value;
    const email = document.getElementById("email").value;
    console.log(gender)
    let data = new FormData();
    data.append('username', username);
    data.append('User_email', email)
    data.append('User_password', password);
    data.append('Date_of_birth', DOB);
    data.append('gender',gender)

    let url = 'http://localhost/Group_Project/group-project-backend/signupP.php'; //specifiy where to go after submitting data?
    let id = localStorage.getItem("user_id");
    url += "?user_id=" + id;

    axios({
        method: 'post',
        url: url,
        data :data,
    })
    .then(function(result){
        if(result=="success"){
            window.location.replace("http:/Group_Project/Zomato/html/restaurants_display.html");
        }else{
            console.log(result)
        }
    })
})