export async function WikipediaNode (page) {
  this.currentPage = {}
  const wikipediaApi = `https://en.wikipedia.org/w/api.php?action=parse&page=${page}&prop=text&origin=*&format=json`
  
  await fetch(wikipediaApi)
    .then(resp => { return resp.json() })
    .then(resp => {
      this.currentPage = resp
    })

  return this.currentPage
}
