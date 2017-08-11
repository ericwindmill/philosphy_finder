import fetchWikipediaPage from './parse_helpers/fetch'
import ParseWiki from './parse_helpers/parseWiki'
import UI from './ui_helpers/ui'
import cheerio from 'cheerio'

async function gettingToPhilosophy (page) {
  let visited = []
  let foundPhilosophy = false
  let counter = 1
  let currentPage = page

  while (!foundPhilosophy && visited.length < 100) {
    const ui = new UI()
    let nextPage = await fetchWikipediaPage(currentPage)
    
    if (nextPage === 'Page does not exist') {
      ui.handleError('Page does not exists! Please try another search term.')
      return false
    }

    if (visited.includes(nextPage.title)) {
      ui.addToPath(nextPage.title, counter)
      ui.handleError('You found a loop! Please try another search term.')
      return false
    }

    visited.push(nextPage.title)
    ui.addToPath(currentPage, counter)
    counter++

    if (visited[visited.length - 1] === 'Philosophy') {
      foundPhilosophy = true
      ui.addToPath(nextPage.title, counter)
      ui.philosophyIsFound(counter)
    } else {
      currentPage = nextPage.title
    }
  }
}


// handle page
document.addEventListener('DOMContentLoaded', async () => {
  let userInput = document.querySelector('#startTerm')
  let button = document.querySelector('#submitButton')
  let ul = document.getElementById('path')
  button.addEventListener('click', (e) => {
    e.preventDefault()
    ul.innerHTML = ''
    gettingToPhilosophy(userInput.value)
  })

  //Toggle About
  let aboutToggle = document.querySelector('#about-button')
  const aboutInfo = document.querySelector('#about-info')
  const exit = document.querySelector('#exit')
  aboutToggle.addEventListener('click', () => {
    if (aboutInfo.style.display === 'none' || aboutInfo.style.display === '') {
      aboutInfo.style.display = 'block'
    } else {
      aboutInfo.style.display = 'none'
    }
  })
  exit.addEventListener('click', () => {
    aboutInfo.style.display = 'none'
  })
})
