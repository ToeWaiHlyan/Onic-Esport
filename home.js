const hambugerMenuContainerTag = document.querySelector(".hambuger-menu-container");
const hambugerLine1Tag  = document.querySelector(".hambuger-line1");
const hambugerLine2Tag  = document.querySelector(".hambuger-line2");
const hambugerLine3Tag  = document.querySelector(".hambuger-line3");

hambugerMenuContainerTag.addEventListener("click",()=>
{
    if(hambugerMenuContainerTag.classList.contains("isOpened"))
    {
        hambugerLine1Tag.classList.remove("rotatePlus45deg");
        hambugerLine2Tag.classList.remove("hideLine2");
        hambugerLine3Tag.classList.remove("rotateMinus45deg");
        hambugerMenuContainerTag.classList.remove("isOpened")
    }
    else
    {
        hambugerLine1Tag.classList.add("rotatePlus45deg");
        hambugerLine2Tag.classList.add("hideLine2");
        hambugerLine3Tag.classList.add("rotateMinus45deg");
        hambugerMenuContainerTag.classList.add("isOpened")
    }
})

hambugerMenuContainerTag.onclick = function()
{
    let navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active");
}

const allPlayerContainer = document.querySelector('.all-player-container')
const pubgPlayer = document.querySelector('.pubg-player');
const mobileLegendPlayer = document.querySelector('.mobile-legend-player');
const freefirePlayer = document.querySelector('.free-fire-player');

pubgPlayer.addEventListener('click',()=>
{

    const playerImageContainer = document.querySelector('.player-image-container');

    playerImageContainer.innerHTML = 
    `

    <img src="./Image/Player Photo/CECIL_PUBGM.png">
    <img src="./Image/Player Photo/MICKEY_PUBGM.png">
    <img src="./Image/Player Photo/SCARLET_PUBGM.png">
    <img src="./Image/Player Photo/SOTHPE_PUBGM.png">
    `
});

mobileLegendPlayer.addEventListener('click',()=>
{
    const playerImageContainer = document.querySelector('.player-image-container');
    playerImageContainer.innerHTML = 
    `
    <img src="./Image/Player Photo/KAIRI_MLBB.png">
    <img src="./Image/Player Photo/BUTSSS_MLBB.png">
    <img src="./Image/Player Photo/CW_MLBB.png">

    <img src="./Image/Player Photo/KIBOY_MLBB.png">
    <img src="./Image/Player Photo/SANZ_MLBB.png">
    <img src="./Image/Player Photo/YEB_MLBB.png">
    `
})

freefirePlayer.addEventListener('click',()=>
{
    const playerImageContainer = document.querySelector('.player-image-container');
    playerImageContainer.innerHTML = 
    `
    <img src="./Image/Player Photo/GARDU_Freefire.png">
    <img src="./Image/Player Photo/GAREE_Freefire.png">
    <img src="./Image/Player Photo/PANGGIH_Freefire.png">
    <img src="./Image/Player Photo/PUYAA_Freefire.png">
    <img src="./Image/Player Photo/TABUL_Freefire.png">
    <img src="./Image/Player Photo/TAYOOO_Freefire.png">
    <img src="./Image/Player Photo/WIZAAA_Freefire.png">
    <img src="./Image/Player Photo/ZAAACK_Freefire.png">
    <img src="./Image/Player Photo/ZXIA_Freefire.png">
    `
})