import * as fetch from './fetch'
import { parseResults } from './parse-wiki'
import * as ui from './ui'

const findPhilosophy = async (term) => {
  const visited = []
  let foundPhilosophy = false
  let currentTerm = term
  let i = 1

  while (visited.length < 100 && !foundPhilosophy) { // stop after 100 tries
    let results = await fetch.WikipediaNode(currentTerm) // get the wikipedia DOM
    if (results === 'No Wiki Found') {
      ui.handleError(results)
      return false
    }

    if (visited.includes(results.parse.title)) { // If you've already visited, you're in a loop
      ui.addToPath(results.parse.title, i)
      ui.handleError('You found a loop! Please try another search term.')
      return false
    }
    visited.push(results.parse.title)
    
    ui.addToPath(results.parse.title, i)
    i++
     // all good, keep moving.
    if (visited[visited.length - 1] === 'Philosophy') { // check to see if you're on philosophy now
      console.log('found Philosophy!')
      foundPhilosophy = true
      break
    } else {
      let url = await parseResults(results)
      currentTerm = url.slice(6)
    }
  }
}


document.addEventListener('DOMContentLoaded', async () => {
  //Main Process
  let userInput = document.querySelector('#startTerm')
  let button = document.querySelector('#submitButton')
  let ul = document.getElementById('path')
  button.addEventListener('click', (e) => {
    e.preventDefault()
    ul.innerHTML = ''
    findPhilosophy(userInput.value)
  })

  //Toggle About
  let aboutToggle = document.querySelector('#about-button')
  const aboutInfo = document.querySelector('#about-info')
  aboutToggle.addEventListener('click', () => {
    if (aboutInfo.style.display === 'none' || aboutInfo.style.display === '') {
      aboutInfo.style.display = 'block'
    } else {
      aboutInfo.style.display = 'none'
    }
  })
})

