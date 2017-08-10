import * as fetch from './fetch'
import { parseResults } from './parse-wiki'

document.addEventListener('DOMContentLoaded', async () => {
  const visited = []
  let foundPhilosophy = false
  let currentTerm = 'cat'
  while (visited.length < 100 && !foundPhilosophy) { // stop after 100 tries
    console.log(currentTerm)
    let results = await fetch.WikipediaNode(currentTerm) // get the wikipedia DOM
    if (visited.includes(results.parse.title)) { // If you've already visited, you're in a loop
      console.log('you found a loop!')
      return false
    }

    visited.push(results.parse.title) // all good, keep moving.
    if (visited[visited.length - 1] === 'Philosophy') { // check to see if you're on philosophy now
      console.log('found Philosophy!')
      foundPhilosophy = true
    } else {
      let url = await parseResults(results)
      currentTerm = url.slice(6)
    }
  }
})

