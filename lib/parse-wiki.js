export async function parseResults (results) {
  let shadowDom = document.querySelector('#shadowDom')
  shadowDom.innerHTML = `${results.parse.text['*']}`

  function findFirstLink (i) {
    let wikiDom = document.getElementsByClassName('mw-parser-output')[0]
    let articleFirstBodyParagraph = wikiDom.querySelector('p > b').parentElement
    let potentialFirstLink = articleFirstBodyParagraph.getElementsByTagName('a')[i]
    console.log(potentialFirstLink)
    
    return potentialFirstLink
  }

  function checkLink (linkTag) {
    if (link.classList.contains('mw-redirect')) {
      return false
    }
    var url = linkTag.getAttribute('href')
    const goodLink = (
      url.includes('wiki') &&
      !url.includes('Help:') &&
      !url.includes('File') &&
      !url.includes('Wikipedia') &&
      !url.includes('wiktionary') &&
      !url.includes('Language')
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

  return link.getAttribute('href')
}
