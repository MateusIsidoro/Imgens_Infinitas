let item = 1
const max = 83;

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
    for( ;item <84;item++){
        proxImage(item);   
    }
}
window.onload = setInterval(function(){
    proxImage(item++ %max);
    let scrollPoint = window.scrollY - window.innerHeight;
    window.scrollTo({ top: scrollPoint, behavior: 'smooth'})
}, 2000);


// window.onscroll = function(){
//     let altura = document.body.scrollHeight;
//     let scrollPoint = window.scrollY + window.innerHeight;
//     if(scrollPoint >= altura){
//         proxImage(item++ % max);
//     }
// }