/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact-load.js":
/*!*****************************!*\
  !*** ./src/contact-load.js ***!
  \*****************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _content_clear__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content-clear */ \"./src/content-clear.js\");\n\n\nfunction loadContact() {\n    (0,_content_clear__WEBPACK_IMPORTED_MODULE_0__.default)();\n\n    const form = document.createElement('form');\n    const h2 = document.createElement('h2');\n    h2.innerHTML = 'Contact Us';\n    const nameLabel = document.createElement('label');\n    const nameInput = document.createElement('input');\n    nameInput.name = 'name';\n    nameLabel.htmlFor = 'name';\n    nameLabel.innerHTML = 'Name:';\n    const emailLabel = document.createElement('label');\n    const emailInput = document.createElement('input');\n    emailInput.name = 'email';\n    emailLabel.htmlFor = 'email';\n    emailLabel.innerHTML = 'Email:';\n    const messageLabel = document.createElement('label');\n    const messageInput = document.createElement('input');\n    messageLabel.name = 'messageInput';\n    messageLabel.htmlFor = 'messageInput';\n    messageLabel.innerHTML = 'Message:';\n    const submit = document.createElement('button');\n    submit.innerHTML = 'Submit';\n\n    form.appendChild(h2)\n    form.appendChild(nameLabel)\n    form.appendChild(nameInput)\n    form.appendChild(emailLabel)\n    form.appendChild(emailInput)\n    form.appendChild(messageLabel)\n    form.appendChild(messageInput)\n    form.appendChild(submit)\n\n    document.querySelector('.tabContent').appendChild(form);\n    \n    const contact = document.createElement('img');\n    contact.id = 'contact';\n    contact.src = '../images/contact.png';\n\n    document.querySelector('.tabContent').appendChild(contact);\n\n    const ul = document.querySelector(\"ul\");\n    ul.childNodes[3].classList.add(\"active\");\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);\n\n//# sourceURL=webpack://restaurant-page/./src/contact-load.js?");

/***/ }),

/***/ "./src/content-clear.js":
/*!******************************!*\
  !*** ./src/content-clear.js ***!
  \******************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nfunction clearContent() {\n    const active = document.querySelector(\".active\");\n    active.classList.remove('active');\n    const content = document.querySelector(\".tabContent\");\n    content.innerHTML = '';\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clearContent);\n\n//# sourceURL=webpack://restaurant-page/./src/content-clear.js?");

/***/ }),

/***/ "./src/home-load.js":
/*!**************************!*\
  !*** ./src/home-load.js ***!
  \**************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _content_clear__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content-clear */ \"./src/content-clear.js\");\n\n\nfunction loadHome() {\n  (0,_content_clear__WEBPACK_IMPORTED_MODULE_0__.default)();\n  const h1 = document.createElement(\"h1\");\n  const p = document.createElement(\"p\");\n  const div = document.querySelector(\".tabContent\");\n  h1.innerHTML = \"Welcome!\";\n  p.innerHTML =\n    \"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis rem consequuntur consequatur porro nesciunt autem quia nostrum id quis. Corporis ipsa quaerat odio rem possimus ullam adipisci numquam quasi eligendi.\";\n  div.appendChild(h1);\n  div.appendChild(p);\n  const ul = document.querySelector(\"ul\");\n  ul.firstChild.classList.add(\"active\");\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);\n\n\n//# sourceURL=webpack://restaurant-page/./src/home-load.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _page_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-load */ \"./src/page-load.js\");\n/* harmony import */ var _home_load__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-load */ \"./src/home-load.js\");\n/* harmony import */ var _menu_load__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu-load */ \"./src/menu-load.js\");\n/* harmony import */ var _news_load__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./news-load */ \"./src/news-load.js\");\n/* harmony import */ var _contact_load__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact-load */ \"./src/contact-load.js\");\n\n\n\n\n\n\n\n(0,_page_load__WEBPACK_IMPORTED_MODULE_0__.default)();\n\nconst home = document.querySelector('#Home');\nhome.addEventListener('click', _home_load__WEBPACK_IMPORTED_MODULE_1__.default);\n\nconst menu = document.querySelector('#Menu');\nmenu.addEventListener('click', _menu_load__WEBPACK_IMPORTED_MODULE_2__.default);\n\nconst News = document.querySelector('#News');\nNews.addEventListener('click', _news_load__WEBPACK_IMPORTED_MODULE_3__.default);\n\nconst Contact = document.querySelector('#Contact');\nContact.addEventListener('click', _contact_load__WEBPACK_IMPORTED_MODULE_4__.default);\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu-load.js":
/*!**************************!*\
  !*** ./src/menu-load.js ***!
  \**************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _content_clear__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content-clear */ \"./src/content-clear.js\");\n\n\nfunction loadMenu() {\n    (0,_content_clear__WEBPACK_IMPORTED_MODULE_0__.default)();\n    const div = document.querySelector(\".tabContent\");\n    const menu = document.createElement(\"img\");\n    menu.id = 'menu';\n    menu.src = '../images/menu';\n    div.appendChild(menu);\n    const ul = document.querySelector(\"ul\");\n    ul.childNodes[1].classList.add(\"active\");\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);\n\n//# sourceURL=webpack://restaurant-page/./src/menu-load.js?");

/***/ }),

/***/ "./src/news-load.js":
/*!**************************!*\
  !*** ./src/news-load.js ***!
  \**************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _content_clear__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content-clear */ \"./src/content-clear.js\");\n\n\nfunction loadNews() {\n    (0,_content_clear__WEBPACK_IMPORTED_MODULE_0__.default)();\n    const ul = document.querySelector(\"ul\");\n    ul.childNodes[2].classList.add(\"active\");\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadNews);\n\n//# sourceURL=webpack://restaurant-page/./src/news-load.js?");

/***/ }),

/***/ "./src/page-load.js":
/*!**************************!*\
  !*** ./src/page-load.js ***!
  \**************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _home_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-load */ \"./src/home-load.js\");\n\n\nfunction loadPage() {\n  const tabNames = [\"Home\", \"Menu\", \"News\", \"Contact\"];\n\n  const ul = document.createElement(\"ul\");\n\n  for (let i = 0; i < 4; i++) {\n    const li = document.createElement(\"li\");\n    const a = document.createElement(\"a\");\n    a.textContent = tabNames[i];\n    a.id = tabNames[i];\n    li.appendChild(a);\n    ul.appendChild(li);\n  }\n\n  ul.firstChild.classList.add('active');\n  ul.lastChild.id = \"right\";\n\n  document.querySelector(\"#content\").appendChild(ul);\n  const div = document.createElement(\"div\");\n  div.classList.add('tabContent');\n  document.querySelector(\"#content\").appendChild(div);\n  (0,_home_load__WEBPACK_IMPORTED_MODULE_0__.default)();\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadPage);\n\n\n//# sourceURL=webpack://restaurant-page/./src/page-load.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;