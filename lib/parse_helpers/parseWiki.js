import checkLink from './checkLink'

export default async function parseWiki ($, page) {
  let possibleLinks = $('p > a').length ? $('p > a') : $('a');
  possibleLinks = possibleLinks.not((i, el) => {
    return !$(el).attr('href') ||
        $(el).attr('href').indexOf(page) !== -1 ||
        $(el).attr('rel') === 'nofollow';
  })


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
