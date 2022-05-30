document.querySelector('#Overview').addEventListener('click',function(){
    selectTab('#Overview');

})
document.querySelector('#Reviews').addEventListener('click',function(){
    selectTab('#Reviews');
})
document.querySelector('#Photos').addEventListener('click',function(){
    selectTab('#Photos');

    
})

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
//for user pic
let data1 = new FormData();
data1.append('idUsers', 4);
axios({
    method: 'post',
    url: 'http://localhost/group_project/php/get_user_pp.php',
    data: data1,
})
.then(function (response) {
    document.getElementById('profile_pic').src=response.data[0]['User_Ppic'];
    
    }
)




function selectTab(tab_id){
    let tabs = ["#Overview","#Reviews","#Photos"]
    for (var i = 0 ; i< tabs.length; i++){
        if(tabs[i] === tab_id){
            tabs.splice(i,1);
        }
    }
    let selected_content = tab_id + "_content";
    let content0 = tabs[0]+"_content";
    let content1 = tabs[1]+"_content";

    document.querySelector(tab_id).classList.add("selected-tab");
    document.querySelector(tabs[0]).classList.remove("selected-tab");
    document.querySelector(tabs[1]).classList.remove("selected-tab");
    document.querySelector(selected_content).classList.remove("hide");
    document.querySelector(content0).classList.add("hide");
    document.querySelector(content1).classList.add("hide");
    // console.log(content0);
    // console.log(content1);
    // console.log(selected_content);


}
function addRestaurantPhoto(img_url){
    let image_div = document.createElement("div");
    image_div.classList.add("resto-photo");
    let image = document.createElement("img");
    image.src=img_url;
    image_div.appendChild(image);
    document.querySelector("#Photos_content").appendChild(image_div);
}
function insertData(id,key_name,response){
    document.getElementById(id).innerText = response.data[0][key_name];

}