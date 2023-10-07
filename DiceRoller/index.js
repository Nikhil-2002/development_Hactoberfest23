function shuffle(){
    const img = document.getElementById("img")
    let randomNumber = Math.floor(Math.random()*6)+1;
    console.log(`./img/${randomNumber}.jpeg`)
    img.setAttribute("src" , `./img/${randomNumber}.jpeg`)
}