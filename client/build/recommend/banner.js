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
/******/ ([
/* 0 */
/***/ function(module, exports) {

	;__weex_define__("@weex-component/25528900d265ce11e7ea843c97a3585d", [], function(__weex_require__, exports, __weex_module__){

	;
	  __weex_module__.exports = {
	    methods: {
	      
	    },

	    data: function () {return {
	      sliderPages: [
	      	{link: 'http://scimg.jb51.net/allimg/160815/103-160Q509544OC.jpg'},
	      	{link: 'http://scimg.jb51.net/allimg/160815/103-160Q509544OC.jpg'},
	      	{link: 'http://scimg.jb51.net/allimg/160815/103-160Q509544OC.jpg'},
	      	{link: 'http://scimg.jb51.net/allimg/160815/103-160Q509544OC.jpg'},
	      	{link: 'http://scimg.jb51.net/allimg/160815/103-160Q509544OC.jpg'},
	      ],
	    }}
	  }

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "slider",
	  "classList": [
	    "pager"
	  ],
	  "children": [
	    {
	      "type": "indicator",
	      "classList": [
	        "indicator"
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "pager"
	      ],
	      "repeat": function () {return this.sliderPages},
	      "children": [
	        {
	          "type": "image",
	          "style": {
	            "width": 750,
	            "height": 230
	          },
	          "attr": {
	            "src": function () {return this.link}
	          }
	        }
	      ]
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "indicator": {
	    "position": "absolute",
	    "width": 750,
	    "height": 20,
	    "top": 190,
	    "itemSize": 20,
	    "itemColor": "#58336d",
	    "itemSelectedColor": "#fff"
	  },
	  "pager": {
	    "width": 750,
	    "height": 230
	  }
	})
	})
	;__weex_bootstrap__("@weex-component/25528900d265ce11e7ea843c97a3585d", {
	  "transformerVersion": "0.3.1"
	},undefined)

/***/ }
/******/ ]);