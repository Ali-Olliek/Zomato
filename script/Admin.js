
const addResto = document.getElementById("upload");
const displayUsers = document.getElementById("display");
const monitorReviews = document.getElementById("monitor");
const show_resto = document.getElementById("1");
const show_users = document.getElementById("3");
const show_reviews = document.getElementById("2");



show_resto.addEventListener("click", function () {
  displayUsers.style.display = "none";
  monitorReviews.style.display = "none";
  addResto.style.display = "block";
});
show_users.addEventListener("click", function () {
  addResto.style.display = "none";
  monitorReviews.style.display = "none";
  displayUsers.style.display = "block";
});
show_reviews.addEventListener("click", function () {
  addResto.style.display = "none";
  displayUsers.style.display = "none";
  monitorReviews.style.display = "block";
});

// Adding restaurant

let button1 = document.getElementById("submitResto");
button1.addEventListener("click", function (event) {
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

let button2 = document.getElementById("3");
button2.addEventListener("click", function(){
    const review = document.getElementById("review").value;
    let data = new FormData();
    data.append("review", )
})
