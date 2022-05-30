axios({
    method: 'get',
    url: 'http://localhost/group_project/php/get_restaurants.php',
})
.then(function (response) {
    for(let i = 0; i<response.data.length;i++){
        //create resturant element having image and name
        let resto_list = document.getElementById("resto_list");
        let resto = document.createElement('a');
        resto.id = response.data[i]["idRestaurants"];
        resto.href="./../html/restaurant.html?r_id="+resto.id;
        resto.classList.add("restaurant_icon");
        let resto_img = document.createElement("img");
        resto_img.id = "restaurant_img";
        resto_img.src= response.data[i]["Resto_picture"];
        let resto_name =document.createElement('p');
        resto_name.id="resto_name";
        //add name and rating
        resto_name.innerText = response.data[i]["Resto_Name"] +" ( " + response.data[i]["Resto_rating"] + " )";
        resto.appendChild(resto_img);
        resto.appendChild(resto_name);
        resto_list.appendChild(resto);
        
    }
    
    }
)