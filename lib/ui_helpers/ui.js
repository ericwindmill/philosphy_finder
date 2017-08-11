export default class UI {
  constructor () {
    this.ul = document.getElementById('path')
    this.li = document.createElement('li')
  }

  addToPath (wikiNode, i) {
    if (this.ul.children.length > 0) {
      const prev = this.ul.children[this.ul.children.length - 1]
      prev.classList.remove('next-wiki')
    }
    this.li.innerHTML = `${i}. ${wikiNode}`
    this.li.classList.add('next-wiki')
    this.ul.appendChild(this.li)
  }

  philosophyIsFound () {
    const philosophy = this.ul.children[this.ul.children.length - 1]
    philosophy.classList.remove('philosophy-tag')
    philosophy.classList.add('philosophy-tag')
  }

  handleError (message) {
    this.li.classList.add('error')
    this.li.innerHTML = message
    this.ul.appendChild(this.li)
  }
}
