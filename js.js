let item = 1
const max = 80;

function proxImage( img ){
    fetch(`img/${img}.jpg`)
    .then(resp => resp.blob())
    .then(blob =>{
        const imageObjectURL = URL.createObjectURL(blob);
        console.log(imageObjectURL);

        const proxImg = document.createElement("img");
        proxImg.src = imageObjectURL;
        document.getElementById("placeholder").appendChild(proxImg);



    })

}
window.onload = function(){
    for( ;item <49;item++){
        proxImage(item);   
    }
}
window.onscroll = function(){
    let altura = document.body.scrollHeight;
    let scrollPoint = window.scrollY + window.innerHeight;
    if(scrollPoint >= altura){
        proxImage(item++ % max);
    }
}