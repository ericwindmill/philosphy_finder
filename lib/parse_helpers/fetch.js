import cheerio from 'cheerio'
import parseWiki from './parseWiki'

export default async function fetchWikipediaPage (page) {
  const wikipediaApi = `https://en.wikipedia.org/w/api.php?action=parse&page=${page}&prop=text&origin=*&format=json`

  return fetch (wikipediaApi)
    .then(resp => { return resp.json() })
    .then(async resp => {
      const html = resp.parse.text['*']
      const $ = cheerio.load(html)
      const isRedirect = $('ul.redirectText li a')

      // handleError here, because it still comes back as 200.
      if (resp.error.code) {
        return resp.error.code
      }
      
      if (isRedirect.length) {
        return fetchWikipediaPage(isRedirect.text().split('/').pop().split('#')[0])
      }

      const nextPage = await parseWiki($, page)
      return {
        title: nextPage[0].attribs.title,
        nextPage
      }
    })
    .catch(resp => {
      return 'Page does not exist'
    })
}
