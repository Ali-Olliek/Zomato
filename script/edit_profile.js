const input =document.querySelector('.pro-pic').querySelector('input');
input.addEventListener('change',function(){
    const file1=input.files;
    console.log(file1[0]);
    const image = document.querySelector('#p_pic');
    image.src = URL.createObjectURL(file1[0]);
})

document.querySelector('form');