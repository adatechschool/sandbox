function getRandomInt(max) 
{
    return Math.floor(Math.random() * Math.floor(max));
}

document.body.style.backgroundImage = "url('icons/flowers.jpg')";

let divs = document.getElementsByTagName("div");
let imgs = document.getElementsByTagName("img");

for (let i = 0; i < divs.length; i++) 
{
    let red = getRandomInt(255);
    divs[i].style.color = "rgb(" + red + ", 51, 131)";
}

for (let i = 0; i < imgs.length; i++)
{
    imgs[i].setAttribute("src", "https://image-cdn.neatoshop.com/styleimg/23767/none/iceblue/default/245983-20.jpg");
}
