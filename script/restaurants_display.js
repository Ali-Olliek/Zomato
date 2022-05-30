
let data = new FormData();
data.append('idRestaurants', 1);
axios({
    method: 'post',
    url: 'http://localhost/group_project/php/get_restaurant.php',
    data: data,
})
.then(function (response) {
//Resto_Name, Resto_Address,Resto_Acc,Resto_rating,Resto_picture,Resto_menu,Resto_average_cost
    insertData("resturant_name","Resto_Name",response);
    insertData("restaurant_description","Resto_Description",response);
    insertData("restaurant_rating","Resto_rating",response);
    insertData("overview_content","Resto_Overview",response);
    insertData("restaurant_address","Resto_Address",response);
    
    }
)