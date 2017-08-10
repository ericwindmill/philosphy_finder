export async function parseResults (results) {
  // if (results.parse.title === 'Philosophy') {
  //   console.log('found philosophy')
  //   return true
  // }

  let shadowDom = document.querySelector('#shadowDom')
  shadowDom.innerHTML = `${results.parse.text['*']}`

  function findFirstLink (i) {
    let wikiDom = document.getElementsByClassName('mw-parser-output')[0]
    let articleFirstBodyParagraph = wikiDom.querySelector('p > b').parentElement
    let potentialFirstLink = articleFirstBodyParagraph.getElementsByTagName('a')[i]
    var url = potentialFirstLink.getAttribute('href')
    return url
  }

  function checkLink (link) {
    const goodLink = (
      link.includes('wiki') &&
      !link.includes('Help:') &&
      !link.includes('File') &&
      !link.includes('Wikipedia') &&
      !link.includes('wiktionary') &&
      !link.includes('Latin')
    )
    return goodLink
  }

  let i = 0
  let found = false
  let link
  while (!found) {
    link = await findFirstLink(i)
    if (checkLink(link)) {
      found = true
    } else {
      i++
    }
  }

  return link
}
