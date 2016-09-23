/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(228)
	var __weex_style__ = __webpack_require__(229)
	var __weex_script__ = __webpack_require__(230)

	__weex_define__('@weex-component/b40420dfe575cbe06a71dd757f5b9128', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})

	__weex_bootstrap__('@weex-component/b40420dfe575cbe06a71dd757f5b9128',undefined,undefined)

/***/ },

/***/ 4:
/***/ function(module, exports) {

	

/***/ },

/***/ 228:
/***/ function(module, exports) {

	module.exports = {
	  "type": "scroller",
	  "children": [
	    {
	      "type": "wxc-panel",
	      "attr": {
	        "title": "Dialog",
	        "type": "primary"
	      },
	      "children": [
	        {
	          "type": "wxc-tip",
	          "attr": {
	            "type": "success",
	            "value": "It's a weex example template."
	          },
	          "style": {
	            "marginBottom": 20
	          }
	        },
	        {
	          "type": "wxc-hn",
	          "attr": {
	            "level": "1",
	            "value": "H1"
	          }
	        },
	        {
	          "type": "wxc-button",
	          "attr": {
	            "type": "primary",
	            "value": "Toast"
	          },
	          "events": {
	            "click": "toast"
	          }
	        },
	        {
	          "type": "wxc-hn",
	          "attr": {
	            "level": "2",
	            "value": "H3"
	          }
	        },
	        {
	          "type": "wxc-button",
	          "attr": {
	            "type": "warning",
	            "value": "Toast"
	          },
	          "events": {
	            "click": "toast"
	          }
	        }
	      ]
	    },
	    {
	      "type": "wxc-panel",
	      "attr": {
	        "title": "Image",
	        "type": "primary"
	      },
	      "children": [
	        {
	          "type": "wxc-tip",
	          "attr": {
	            "type": "warning",
	            "value": "Weex screen width is 750"
	          },
	          "style": {
	            "marginBottom": 20
	          }
	        },
	        {
	          "type": "image",
	          "classList": [
	            "img"
	          ],
	          "style": {
	            "width": 400,
	            "height": 400
	          },
	          "attr": {
	            "src": function () {return this.img}
	          }
	        },
	        {
	          "type": "wxc-panel",
	          "attr": {
	            "title": "Image",
	            "type": "default"
	          },
	          "children": [
	            {
	              "type": "text",
	              "attr": {
	                "value": "sub info"
	              }
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ },

/***/ 229:
/***/ function(module, exports) {

	module.exports = {}

/***/ },

/***/ 230:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	__webpack_require__(4);
	module.exports = {
	  data: function () {return {
	    img: '//gw.alicdn.com/tps/i2/TB1DpsmMpXXXXabaXXX20ySQVXX-512-512.png_400x400.jpg'
	  }},
	  methods: {
	    toast: function toast() {
	      this.$call('modal', 'toast', { 'message': 'a toast', 'duration': 2 });
	    }
	  }
	};}
	/* generated by weex-loader */


/***/ }

/******/ });