export function addToPath (wikiNode, i) {
  const ul = document.getElementById('path')
  const li = document.createElement('li')
  if (ul.children.length > 0) {
    var prev = ul.children[ul.children.length - 1]
    prev.classList.remove('next-wiki')
  }
  li.innerHTML = `${i}. ${wikiNode}`
  li.classList.add('next-wiki')
  ul.appendChild(li)
}

export const handleError = (message) => {
  const ul = document.getElementById('path')
  const li = document.createElement('li')
  li.classList.add('error')
  li.innerHTML = message
  ul.appendChild(li)
}
