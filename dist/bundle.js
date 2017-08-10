/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fetch__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__parse_wiki__ = __webpack_require__(2);



const findPhilosophy = async (term) => {
  const visited = []
  let foundPhilosophy = false
  let currentTerm = term
  let pathDisplay = document.querySelector('#path')
  console.log(pathDisplay)
  while (visited.length < 100 && !foundPhilosophy) { // stop after 100 tries
    let results = await __WEBPACK_IMPORTED_MODULE_0__fetch__["a" /* WikipediaNode */](currentTerm) // get the wikipedia DOM
    if (!results.parse.title) {
      console.log('No wiki found! Try a new term!')
      return false
    }
    if (visited.includes(results.parse.title)) { // If you've already visited, you're in a loop
      console.log('you found a loop!')
      return false
    }

    visited.push(results.parse.title) // all good, keep moving.
    if (visited[visited.length - 1] === 'Philosophy') { // check to see if you're on philosophy now
      console.log('found Philosophy!')
      foundPhilosophy = true
      break
    } else {
      let url = await Object(__WEBPACK_IMPORTED_MODULE_1__parse_wiki__["a" /* parseResults */])(results)
      currentTerm = url.slice(6)
    }
  }
}
document.addEventListener('DOMContentLoaded', async () => {

  /********* 
  *Start UI*
  *********/
  let userInput = document.querySelector('#startTerm')
  let button = document.querySelector('#submitButton')
  button.addEventListener('click', (e) => {
    e.preventDefault()
    findPhilosophy(userInput.value)
  })
})



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = WikipediaNode;
async function WikipediaNode (page) {
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


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = parseResults;
async function parseResults (results) {
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


/***/ })
/******/ ]);