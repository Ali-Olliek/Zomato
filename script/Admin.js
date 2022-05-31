
const addResto = document.getElementById("upload");
const displayUsers = document.getElementById("display");
const monitorReviews = document.getElementById("monitor");
const button1 = document.getElementById("1");
const button2 = document.getElementById("2");
const button3 = document.getElementById("3");



button1.addEventListener("click", function () {
  displayUsers.style.display = "none";
  monitorReviews.style.display = "none";
  addResto.style.display = "block";
});
button2.addEventListener("click", function () {
addResto.style.display = "none";
displayUsers.style.display = "none";
monitorReviews.style.display = "block";
});
button3.addEventListener("click", function () {
  addResto.style.display = "none";
  monitorReviews.style.display = "none";
  displayUsers.style.display = "block";
});


// Adding restaurant

let btnsubmit = document.getElementById("submitResto");
btnsubmit.addEventListener("click", function (event) {
  event.preventDefault();
  const restoName = document.getElementById("resto_name").value;
  const restoDescription = document.getElementById("resto_desc").value;
  const menu = document.getElementById("img").value;
  const cuisine = document.getElementById("cuisinelist").value;
  const location = document.getElementById("locationlist").value;

  let data = new FormData();
  data.append("resto_name", restoName);
  data.append("resto_desc", restoDescription);
  data.append("resto_menu", menu);
  data.append("resto_cuisine", cuisine);
  data.append("resto_loc", location);


  let url = "http://localhost/group_project/php/AdminAddResto.php"; //specifiy where to go after submitting data?
  let id = localStorage.getItem("idrestaurants");
  url += "?restaurant_id=" + 1;
    axios({
    method: "POST",
    url: url,
    data: data,
  })
    .then(function (response) {
    let result = response.data;
    let id = result.id;
    if (response == "success") {
        document.getElementById("resto_name").value = "";
        document.getElementById("resto_desc").value = "";
        document.getElementById("img").value ="";
        document.getElementById("cuisinelist").value = "";
        document.getElementById("locationlist").value = "";
    }
    });
});

button2.addEventListener("click", function(){
  axios({
    method:"GET",
    url: "http://localhost/group_project/group-project-backend/AdminMonitor.php"
  })
  .then(function(response){
    for (let i = 0; i<response.data.length ;i++){
      let review_list = document.getElementById("review_list")
      let review = document.createElement("li");
      review.classList.add("reviews")
      review.id = "reviews";
      review.innerText = response.data[i]["User_review"];
      review_list.appendChild(review);
  
  }

  })
})

button3.addEventListener("click", function(){
  axios({
    method: "GET",
    url: "http://localhost/group_project/group-project-backend/AdminDisplayUsers.php",
  })
  .then(function(response){
    console.log(response)
    for(let i = 0; i<response.data.length;i++){

      let user_id = document.createElement("li");
      user_id.classList.add("attr");
      let user_name = document.createElement("li");
      user_name.classList.add("attr");
      let user_email = document.createElement("li");
      user_email.classList.add("attr");
      let user_join_date = document.createElement("li");
      user_join_date.classList.add("attr");
      let user_reviews = document.createElement("li");
      user_reviews.classList.add("attr");
      let user_list = document.getElementById("display");
      user_id = response.data[i]["idUsers"] + " ";
      user_name = response.data[i]["user_fname"] + " " + response.data[i]["User_Lname"] + " ";
      user_email = response.data[i]["User_email"]+ " ";
      user_join_date = response.data[i]["User_Join_date"]+ " ";
      user_list.append(user_id + user_name + user_email);
      let break_line = document.createElement("br");
      user_list.append(break_line)
    }
  })
})
// for(let j=0;j<4;j++){
//       let attr = document.createElement("div");
//       user.append(attr);
//       user.setAttribute("id","user");
//       user.classList.add("users_list");
//       }

// User_DOB: "2022-05-31 18:03:08"
// User_Join_date: "2022-05-31 18:03:08"
// User_Lname: "othman"
// User_Preferences: null
// User_bio: "hello"
// User_email: "ahmad@test.com"
// User_gender: 1
// User_password: "123456"
// idUsers: 5
// user_fname: "ahmad"