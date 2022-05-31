const input =document.querySelector('.pro-pic').querySelector('input');
let img_url= '';
input.addEventListener('change',function(){
    const file1=input.files;
    console.log(file1[0]);
    const image = document.querySelector('#p_pic');
    img_url=URL.createObjectURL(file1[0])
    image.src = img_url;
})
let idUsers = localStorage.getItem('user_id');
let user_fname =document.getElementById('fName').value;
let User_Lname =document.getElementById('lName').value;
let User_bio =document.getElementById('bio').value;
let User_email = document.getElementById('u_email').value;
let User_password = document.getElementById('userpass').value; //not working and I dont know why!!
console.log(User_password);

function updateProfile(){
    let data = new FormData();
    data.append('idUsers',idUsers);
    data.append('User_Ppic',img_url);
    data.append('user_fname',user_fname);
    data.append('User_Lname',User_Lname);
    data.append('User_bio',User_bio);
    data.append('User_email',User_email);
    data.append('User_password',User_password);

    let url = 'http://localhost/Group_Project/php/edit_profile.php'; 


    axios({
        method: 'post',
        url: url,
        data :data,
    })
    .then(function (response) {
        alert(User_password);
        
        }
    )
    
}

let data1 = new FormData();
let uid = localStorage.getItem('user_id')
data1.append('idUsers', uid );
axios({
    method: 'post',
    url: 'http://localhost/group_project/php/get_user_pp.php',
    data: data1,

})
.then(function (response) {
    if (response.data[0]["User_Ppic"] === ''){
        document.querySelector("#p_pic").src='localhost/Zomato/assests/user_icon.png';

    document.querySelector("#p_pic").src=response.data[0]["User_Ppic"];
    
    }
})