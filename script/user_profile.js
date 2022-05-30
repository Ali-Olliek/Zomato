
        let data = new FormData();
        data.append('idUsers',4);
        axios({
            method: 'post',
            url: 'http://localhost/group_project/php/get_user_data.php',
            data: data,
        })
        .then(function (response) {
            document.querySelector('#fname_lname').innerHTML =response.data[0]['user_fname'] + " " + response.data[0]['User_Lname'];
            insertData('fav-res','User_Preferences',response)
            insertData('age','User_DOB',response);
            insertData('email','User_email',response);
            insertData('bio','User_bio',response);
            setProfilePic('User_Ppic',response);
            }
        )

        function insertData(class_name,key_name,response){
            const child = document.createElement("div");
            const added_div = document.getElementsByClassName(class_name)[0].appendChild(child);
            if(key_name!=='User_DOB'){
                added_div.innerHTML =response.data[0][key_name];
            }
            else{
                const d = new Date();
                let year = d.getFullYear();
                added_div.innerHTML =year - parseInt((response.data[0][key_name]).slice(0,4));
            }
        }
        function setProfilePic(pic_url,response){
            document.querySelector("#profile_pic").src=response.data[0][pic_url];
        }