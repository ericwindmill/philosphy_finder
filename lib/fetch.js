export async function WikipediaNode (page) {
  this.currentPage = {}
  const wikipediaApi = `https://en.wikipedia.org/w/api.php?action=parse&page=${page}&prop=text&origin=*&format=json`
  
  function handleErrors(response) {
    if (response.error) {
      console.log('no wiki found')
      return false
    }
    return response
  }

  await fetch(wikipediaApi)
    .then(resp => { return resp.json() })
    .then(resp => handleErrors(resp))
    .then(resp => {
      this.currentPage = resp
    })

  return this.currentPage
}
