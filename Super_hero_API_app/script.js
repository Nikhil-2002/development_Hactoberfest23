
const superHeroToken = '122111586092030236'
const baseUrl = `https://superheroapi.com/api.php/${superHeroToken}`
const heroImgDIv=document.getElementById('heroImg')
const heroButtonDiv=document.getElementById('heroButton')
const searchButtonDiv=document.getElementById('searchButton')
const searchInput=document.getElementById('Search-Input')


const getSuperHero = (id,name) => {
  //name -> base_url/search/batman
  //json.results[0].image.url
  
  //id -> base_url/id
  //json.image.url

  fetch(`${baseUrl}/${id}`)
    .then(response => response.json())
    .then(json => {
      console.log(json.powerstats)
      const superHero=json
      getStatsHTML(superHero)
    })
}



const statEmoji={
  intelligence:'🧠',
  strength:'🦾',
  speed:'🚴🏻‍♂️',
  durability:'🏋🏻‍♀️',
  power:'📊',
  combat:'🤾🏻',
}


const getStatsHTML = (character) => {
  const name=`<h2>${character.name}</h2>`

  const image= `<img src="${character.image.url}" height =300 width = 300/>`
  
 const stats=Object.keys(character.powerstats).map(stat => {
   return `<p>${statEmoji[stat]} ${stat.toUpperCase()} : ${character.powerstats[stat]}</p>`
 }).join('')

heroImgDIv.innerHTML = `${name}${image}${stats}`

}




const getSearchSuperHero = (name) => {
  fetch(`${baseUrl}/search/${name}`)
    .then(response => response.json())
    .then(json =>{
      const hero = json.results[0]
      getStatsHTML(hero)
      // console.log(hero)
      
    })

}
const randomHero = () => {
  const numberofhero = 731
  return Math.floor(Math.random() * numberofhero)+1
}

heroButtonDiv.onclick = () => getSuperHero(randomHero())

searchButtonDiv.onclick = () => getSearchSuperHero(searchInput.value)


          
