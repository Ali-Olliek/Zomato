document.querySelector('#Overview').addEventListener('click',function(){
    selectTab('#Overview');

})
document.querySelector('#Reviews').addEventListener('click',function(){
    selectTab('#Reviews');
})
document.querySelector('#Photos').addEventListener('click',function(){
    selectTab('#Photos');

    
})

function selectTab(tab_id){
    let tabs = ["#Overview","#Reviews","#Photos"]
    for (var i = 0 ; i< tabs.length; i++){
        if(tabs[i] === tab_id){
            tabs.splice(i,1);
        }
    }
    let selected_content = tab_id + "-content";
    let content0 = tabs[0]+"-content";
    let content1 = tabs[1]+"-content";

    document.querySelector(tab_id).classList.add("selected-tab");
    document.querySelector(tabs[0]).classList.remove("selected-tab");
    document.querySelector(tabs[1]).classList.remove("selected-tab");
    document.querySelector(selected_content).classList.remove("hide");
    document.querySelector(content0).classList.add("hide");
    document.querySelector(content1).classList.add("hide");
    console.log(content0);
    console.log(content1);
    console.log(selected_content);


}