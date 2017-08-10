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


console.log(__WEBPACK_IMPORTED_MODULE_0__fetch__["a" /* dog */])



// document.addEventListener('DOMContentLoaded', () => {
//   const tutorial = new Tutorial()
//   const tutorialLink = document.getElementById('begin-tutorial-link')
//   tutorialLink.addEventListener('click', function () {
//     tutorial.beginTutorial()
//   })
// })


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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


const dog = 'dog'
/* harmony export (immutable) */ __webpack_exports__["a"] = dog;


/***/ })
/******/ ]);