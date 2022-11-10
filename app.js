//Pokemon calling ID
let pokemon1=null;
let pokemon2=null;
let pokemon3=null;
let pokemon4=null;
let pokemon5=null;
let pokemon6=null;
let pokemon7=null;
let pokemon8=null;

let pokemonid1;
let pokemonid2;
let pokemonid3;
let pokemonid4;
let pokemonid5;
let pokemonid6;
let pokemonid7;
let pokemonid8;





let pokemonImg1= document.getElementById("pokemon-image1")
let pokemonImg2= document.getElementById("pokemon-image2")
let pokemonImg3= document.getElementById("pokemon-image3")
let pokemonImg4= document.getElementById("pokemon-image4")
let pokemonImg5= document.getElementById("pokemon-image5")
let pokemonImg6= document.getElementById("pokemon-image6")
let pokemonImg7= document.getElementById("pokemon-image7")
let pokemonImg8= document.getElementById("pokemon-image8")

let pokemonImg11=document.getElementById("pokemon-image11")
let pokemonImg22=document.getElementById("pokemon-image22")
let pokemonImg33=document.getElementById("pokemon-image33")
let pokemonImg44=document.getElementById("pokemon-image44")
let pokemonImg55=document.getElementById("pokemon-image55")
let pokemonImg66=document.getElementById("pokemon-image66")
let pokemonImg77=document.getElementById("pokemon-image77")
let pokemonImg88=document.getElementById("pokemon-image88")


const button = document.getElementById("submit")



button.addEventListener("click",(e)=>{
    id1=  Math.floor((Math.random() * 150) + 1);
    id2=  Math.floor((Math.random() * 150) + 1);
    id3=  Math.floor((Math.random() * 150) + 1);
    id4=  Math.floor((Math.random() * 150) + 1);
    id5=  Math.floor((Math.random() * 150) + 1);
    id6=  Math.floor((Math.random() * 150) + 1);
    id7=  Math.floor((Math.random() * 150) + 1);
    id8=  Math.floor((Math.random() * 150) + 1);



    // first pokemon 
    fetch(`https://pokeapi.co/api/v2/pokemon/${id1}/`,{
    method: "GET"
}).then(res=>res.json().then(data=>{pokemon1=data
    pokemon1=data
    pokemonid1=id1
    console.log(pokemonid1)
    restart.classList.add('show-btn')
    pokemonImg1.setAttribute("src",pokemon1.sprites.front_default)
    pokemonImg11.setAttribute("src",pokemon1.sprites.front_default)
}))
// second pokemon
fetch(`https://pokeapi.co/api/v2/pokemon/${id2}/`,{
    method: "GET"
}).then(res=>res.json().then(data=>{pokemon2=data
    pokemon2=data
    pokemonid2=id2
    pokemonImg2.setAttribute("src",pokemon2.sprites.front_default)
    pokemonImg22.setAttribute("src",pokemon2.sprites.front_default)

}))
// third pokemon
fetch(`https://pokeapi.co/api/v2/pokemon/${id3}/`,{
    method: "GET"
}).then(res=>res.json().then(data=>{pokemon3=data
    pokemon3=data
    pokemonid3=id3
    pokemonImg3.setAttribute("src",pokemon3.sprites.front_default)
    pokemonImg33.setAttribute("src",pokemon3.sprites.front_default)
}))
// four pokemon
fetch(`https://pokeapi.co/api/v2/pokemon/${id4}/`,{
    method: "GET"
}).then(res=>res.json().then(data=>{pokemon4=data
    pokemon4=data
    pokemonid4=id4
    pokemonImg4.setAttribute("src",pokemon4.sprites.front_default)
    pokemonImg44.setAttribute("src",pokemon4.sprites.front_default)
}))
// five pokemon
fetch(`https://pokeapi.co/api/v2/pokemon/${id5}/`,{
    method: "GET"
}).then(res=>res.json().then(data=>{pokemon5=data
    pokemon5=data
    pokemonid5=id5
    pokemonImg5.setAttribute("src",pokemon5.sprites.front_default)
    pokemonImg55.setAttribute("src",pokemon5.sprites.front_default)
}))
// six pokemon
fetch(`https://pokeapi.co/api/v2/pokemon/${id6}/`,{
    method: "GET"
}).then(res=>res.json().then(data=>{pokemon6=data
    pokemon6=data
    pokemonid6=id6
    pokemonImg6.setAttribute("src",pokemon6.sprites.front_default)
    pokemonImg66.setAttribute("src",pokemon6.sprites.front_default)
}))
// seven pokemon
fetch(`https://pokeapi.co/api/v2/pokemon/${id7}/`,{
    method: "GET"
}).then(res=>res.json().then(data=>{pokemon7=data
    pokemon7=data
    pokemonid7=id7
    pokemonImg7.setAttribute("src",pokemon7.sprites.front_default)
    pokemonImg77.setAttribute("src",pokemon7.sprites.front_default)
}))
// eight pokemon
fetch(`https://pokeapi.co/api/v2/pokemon/${id8}/`,{
    method: "GET"
}).then(res=>res.json().then(data=>{pokemon8=data
    pokemon8=data
    pokemonid8=id8
    pokemonImg8.setAttribute("src",pokemon8.sprites.front_default)
    pokemonImg88.setAttribute("src",pokemon8.sprites.front_default)
}))

})

let $ = document
let cards = $.querySelectorAll('.card')
let restart = $.querySelector('.restart')
let matchCount = 0
let cardOne, cardTwo
let disable = false

function rotation({target: clickcard}) {
    
    if (cardOne !== clickcard && !disable) {
        clickcard.classList.add('rotate')
        if (!cardOne) {
            return cardOne = clickcard
        }
        cardTwo = clickcard
        disable = true
        let cardIconOne = cardOne.querySelector('.back .icon').src,
            cardIconTow = cardTwo.querySelector('.back .icon').src

        checkMatchCards(cardIconOne, cardIconTow)
    }
}

function checkMatchCards(icon1, icon2) {
    if (icon1 === icon2) {
        matchCount++

        if (matchCount == 8) {
            restart.classList.add('show-btn')
        }
        cardOne.removeEventListener("click", rotation)
        cardTwo.removeEventListener("click", rotation)
        cardOne = ''
        cardTwo = ''
        return disable = false
    }
    setTimeout(() => {
        cardOne.classList.add("shake");
        cardTwo.classList.add("shake");
    }, 400);

    setTimeout(() => {
        cardOne.classList.remove("shake", "rotate")
        cardTwo.classList.remove("shake", "rotate")
        cardOne = ''
        cardTwo = ''
        disable = false
    }, 1200);

}

function onmergeCard() {
    matchCount = 0;
    disable = false
    cardOne = ''
    cardTwo = ''
    let numbers = [pokemonid1, pokemonid2, pokemonid3, pokemonid4, pokemonid5, pokemonid6, pokemonid7, pokemonid8,pokemonid1, pokemonid2, pokemonid3, pokemonid4, pokemonid5, pokemonid6, pokemonid7, pokemonid8];
    numbers.sort(() => Math.random() > 0.5 ? 1 : -1)
    cards.forEach((card, i) => {
        card.classList.remove("rotate");
        let iconTag = card.querySelector(".back .icon")
        // iconTag.src=numbers[i]
        iconTag.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numbers[i]}.png`
        card.addEventListener("click", rotation)
    });
    restart.classList.remove('show-btn')
}

onmergeCard()


cards.forEach(card => {
    card.addEventListener('click', rotation)
})

restart.addEventListener('click', onmergeCard)