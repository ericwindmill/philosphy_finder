// async function WikipediaNode (page) {
//       this.currentPage = {}
    
//       async function fetchPage (page) {
//         const wikipediaApi = `https://en.wikipedia.org/w/api.php?action=parse&page=${page}&prop=text&origin=*&format=json`
//         await fetch(wikipediaApi)
//           .then(resp => {return resp.json()})
//           .then(resp => {
//             this.currentPage = resp
//           })
//       }

//       await fetchPage(page)
//       console.log(this.currentPage)
//       return this.currentPage
//     }

//     let searchTerm = 'dragon'
//     let result = document.querySelector('.results')
//     let fetchButton = document.querySelector('.WikiFetch')
//     let returnJson
//     fetchButton.addEventListener('click', async (e) => {
//       e.preventDefault()
//       returnJson = await WikipediaNode('dragon')
//       result.innerHTML = `<p><pre><code>${returnJson.parse.text['*']}</code></pre></p>`
//     })


export const dog = 'dog'