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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/parts/calc.js":
/*!**************************!*\
  !*** ./js/parts/calc.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

function calc() {
  let persons = document.querySelectorAll('.counter-block-input')[0],
      restDays = document.querySelectorAll('.counter-block-input')[1],
      place = document.getElementById('select'),
      totalValue = document.getElementById('total'),
      personsSum = 0,
      daysSum = 0,
      total = 0;

  totalValue.innerHTML = 0;

  persons.addEventListener('change', function () {
      personsSum = +this.value;
      total = (daysSum + personsSum) * 4000;

      if (restDays.value == '' || persons.value == '') {
          totalValue.innerHTML = 0;
      } else {
          totalValue.innerHTML = total;
      }
  });

  restDays.addEventListener('change', function () {
      daysSum = +this.value;
      total = (daysSum + personsSum) * 4000;

      if (persons.value == '' || restDays.value == '') {
          totalValue.innerHTML = 0;
      } else {
          totalValue.innerHTML = total;
      }
  });

  place.addEventListener('change', function () {
      if (persons.value == '' || restDays.value == '') {
          totalValue.innerHTML = total;
      } else {
          let a = total;
          totalValue.innerHTML = a * this.options[this.selectedIndex].value;
      }
  });
}

module.exports = calc;

/***/ }),

/***/ "./js/parts/form.js":
/*!**************************!*\
  !*** ./js/parts/form.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

function form() {
  let message = {
      loading: 'Загрузка...',
      success: 'Спасибо ! Скоро мы с вами свяжемся.',
      failure: 'Ошибка !'
  }

  let form = document.querySelector('.main-form'),
      input = document.getElementsByTagName('input'),
      statusMessage = document.createElement('div');

  statusMessage.classList.add('status');

  form.addEventListener('submit', function (event) {
      event.preventDefault();
      form.appendChild(statusMessage);

      let request = new XMLHttpRequest();
      request.open('POST', 'server.php');
      // request.setRequestHeader('Content-type','application/x-www-form-urlencoded');
      request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

      let formData = new FormData(form);


      let obj = {};
      formData.forEach(function (value, key) {
          obj[key] = value;
      });
      let json = JSON.stringify(obj);

      request.send(json);

      request.addEventListener('readystatechange', function () {
          if (request.readyState < 4) {
              statusMessage.innerHTML = message.loading;
          } else if (request.readyState === 4 && request.status == 200) {
              statusMessage.innerHTML = message.success;
          } else {
              statusMessage.innerHTML = message.failure;
          }
      });

      for (let i = 0; i < input.length; i++) {
          input[i].value = '';
      }

  });
}

module.exports = form;

/***/ }),

/***/ "./js/parts/modal.js":
/*!***************************!*\
  !*** ./js/parts/modal.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

function modal() {
  let more = document.querySelector('.more'),
      overlay = document.querySelector('.overlay'),
      close = document.querySelector('.popup-close');
  
  more.addEventListener('click', function () {
      overlay.style.display = 'block';
      this.classList.add('more-splash');
      document.body.style.overflow = 'hidden';
  });
  close.addEventListener('click', function () {
      overlay.style.display = 'none';
      more.classList.remove('more-splash');
      document.body.style.overflow = '';
  });
  }
  
  module.exports = modal;

/***/ }),

/***/ "./js/parts/slider.js":
/*!****************************!*\
  !*** ./js/parts/slider.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

function slider() {
  let slideIndex = 1,
      slides = document.querySelectorAll('.slider-item'),
      prev = document.querySelector('.prev'),
      next = document.querySelector('.next'),
      dotsWrap = document.querySelector('.slider-dots'),
      dots = document.querySelectorAll('.dot');

  showSlides(slideIndex);

  function showSlides(n) {
      if (n > slides.length) {
          slideIndex = 1;
      }

      if (n < 1) {
          slideIndex = slides.length;
      }

      slides.forEach((item) => item.style.display = 'none');
      //  for(let i=0;i<slides.length;i++) {
      //  slides[i].style.display = 'none';
      // }
      dots.forEach((item) => item.classList.remove('dot-active'));

      slides[slideIndex - 1].style.display = 'block';
      dots[slideIndex - 1].classList.add('dot-active');
  }

  function plusSlides(n) {
      showSlides(slideIndex += n);
  }

  function currentSlide(n) {
      showSlides(slideIndex = n);
  }

  prev.addEventListener('click', function () {
      plusSlides(-1);
  });

  next.addEventListener('click', function () {
      plusSlides(1);
  });

  dotsWrap.addEventListener('click', function (event) {
      for (let i = 0; i < dots.length + 1; i++) {
          if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {
              currentSlide(i);
          }
      }
  });
}

module.exports = slider;

/***/ }),

/***/ "./js/parts/tabs.js":
/*!**************************!*\
  !*** ./js/parts/tabs.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

function tabs() {
  let tab = document.querySelectorAll('.info-header-tab'),
      info = document.querySelector('.info-header'),
      tabContent = document.querySelectorAll('.info-tabcontent');

  function hideTabContent(a) {
      for (let i = a; i < tabContent.length; i++) {
          tabContent[i].classList.remove('show');
          tabContent[i].classList.add('hide');
      }
  }
  hideTabContent(1);

  function showTabContent(b) {
      if (tabContent[b].classList.contains('hide')) {
          tabContent[b].classList.remove('hide');
          tabContent[b].classList.add('show');
      }
  }

  info.addEventListener('click', function (event) {
      let target = event.target;
      if (target && target.classList.contains('info-header-tab')) {
          for (let i = 0; i < tab.length; i++) {
              if (target == tab[i]) {
                  hideTabContent(0);
                  showTabContent(i);
                  break;
              }
          }
      }
  });
}

module.exports = tabs;

/***/ }),

/***/ "./js/parts/timer.js":
/*!***************************!*\
  !*** ./js/parts/timer.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

function timer() {
  let deadline = '2019-03-29';

  function getTimeRemaning(endtime) {
      let t = Date.parse(endtime) - Date.parse(new Date()),
          seconds = Math.floor((t / 1000) % 60),
          minutes = Math.floor((t / 1000 / 60) % 60),
          hours = Math.floor(t / 1000 / 60 / 60); // t/(1000*60*60)
      //  day = Math.floor((t/1000/60/60)%24);

      return {
          'total': t,
          'hours': hours,
          'minutes': minutes,
          'second': seconds
      };

  }

  function setClock(id, endtime) {
      let timer = document.getElementById(id),
          hours = timer.querySelector('.hours'),
          minutes = timer.querySelector('.minutes'),
          seconds = timer.querySelector('.seconds'),
          timeInterval = setInterval(updateClock, 1000);

      function updateClock() {
          let t = getTimeRemaning(endtime);
          if (t.hours.toString().length == 1) {
              hours.textContent = '0' + t.hours;
          } else {
              hours.textContent = t.hours;
          }
          if (t.minutes.toString().length == 1) {
              minutes.textContent = '0' + t.minutes;
          } else {
              minutes.textContent = t.minutes;
          }
          if (t.second.toString().length == 1) {
              seconds.textContent = '0' + t.second;
          } else {
              seconds.textContent = t.second;
          }

          if (t.total <= 0) {
              clearInterval(timeInterval);
          }
      }
  }

  setClock('timer', deadline);
}

module.exports = timer;

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

window.addEventListener('DOMContentLoaded', function() {

    var calc = __webpack_require__(/*! ./parts/calc.js */ "./js/parts/calc.js");
    var form = __webpack_require__(/*! ./parts/form.js */ "./js/parts/form.js");
    var modal = __webpack_require__(/*! ./parts/modal.js */ "./js/parts/modal.js");
    var slider = __webpack_require__(/*! ./parts/slider.js */ "./js/parts/slider.js");
    var tabs = __webpack_require__(/*! ./parts/tabs.js */ "./js/parts/tabs.js");
    var timer = __webpack_require__(/*! ./parts/timer.js */ "./js/parts/timer.js");

    calc();
    form();
    modal();
    slider();
    tabs();
    timer();

    
});

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map