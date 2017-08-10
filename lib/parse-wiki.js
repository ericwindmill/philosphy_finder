export async function parseResults (results) {
  let shadowDom = document.querySelector('#shadowDom')
  shadowDom.innerHTML = `<p>${results.parse.text['*']}</p>`
  console.log(shadowDom)
}
//     let returnJson
//     fetchButton.addEventListener('click', async (e) => {
//       e.preventDefault()
//       returnJson = await WikipediaNode('dragon')
//       result.innerHTML = `<p><pre><code>${returnJson.parse.text['*']}</code></pre></p>`
//     })