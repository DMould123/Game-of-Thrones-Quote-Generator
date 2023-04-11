let quoteRandom = document.querySelector('.container p')
let character = document.querySelector('.container h3')
let house = document.querySelector('.container h4')
let btnRandom = document.getElementById('btnRandom')

let fetchRandom = () => {
  fetch('https://api.gameofthronesquotes.xyz/v1/random').then((response) =>
    response.json().then((result) => {
      console.log(result)
      quoteRandom.innerHTML = `"${result.sentence}"`
      character.innerHTML = `- ${result.character.name}`
      house.innerHTML = result.character.house.name
    })
  )
}

btnRandom.addEventListener('click', fetchRandom)
