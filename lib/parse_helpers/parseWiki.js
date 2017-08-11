import checkLink from './checkLink'

export default async function parseWiki ($, page) {
  let possibleLinks = $('p > a').length ? $('p > a') : $('a');

  let found = false
  let firstLink
  let i = 0
  while (!found) {
    firstLink = possibleLinks.eq(i)
    if (await checkLink($, firstLink)) {
      found = true
      firstLink = possibleLinks.eq(i)
    } else {
      i++
    }
  }
  return firstLink
}
