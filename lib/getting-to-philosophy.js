import * as fetch from './fetch'
import { parseResults } from './parse-wiki'

document.addEventListener('DOMContentLoaded', async () => {
  let results = await fetch.WikipediaNode('cat')
  parseResults(results)
})

