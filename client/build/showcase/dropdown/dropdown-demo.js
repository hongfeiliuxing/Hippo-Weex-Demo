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

	;__weex_define__("@weex-component/ac3e606c7f24790a08c26b46fd7a651b", [], function(__weex_require__, exports, __weex_module__){

	;
	    __webpack_require__(157);

	    var initData = '[{\"addTime\":\"2016-07-14\",\"questionStatus\":\"2\",\"questionStatusValue\":\"Closed\",\"title\":\"This is a demo\",\"vid\":\"AW5PMSC\"},{\"addTime\":\"2016-07-14\",\"questionStatus\":\"1\",\"questionStatusValue\":\"Waiting\",\"title\":\"This is a demo\",\"vid\":\"AW5PMSM\"},{\"addTime\":\"2016-07-14\",\"questionStatus\":\"2\",\"questionStatusValue\":\"Confirmed\",\"title\":\"This is a demo\",\"vid\":\"AW5PMSA\"}]';

	    __weex_module__.exports = {
	        data: function () {return {
	            screenHeight: 0,
	            // biz
	            status: '1',
	            list: []
	        }},
	        ready: function () {
	            this.screenHeight = this.$getConfig().env.deviceHeight ;
	            this.$on('statuschange', function (e) {
	                var detail = e.detail;
	                this.toast({
	                    message: JSON.stringify(detail)
	                });
	                this.status = detail.id;
	                this.filter();
	            }.bind(this));
	            this.filter();
	        },

	        methods: {
	            toast: function (params) {
	                var modal = __weex_require__('@weex-module/modal');
	                modal.toast(params);
	            },

	            filter: function () {
	                var status = this.status;
	                this.list = [];
	                var allList = JSON.parse(initData);
	                if(status == '0') {
	                    this.list = allList;
	                }else {
	                    this.list = allList.filter(function(item){
	                        return item.questionStatus == status;
	                    });
	                }
	            }
	        }
	    }

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "classList": [
	    "wrapper"
	  ],
	  "children": [
	    {
	      "type": "we-dropdown",
	      "classList": [
	        "dropdown"
	      ],
	      "attr": {
	        "statusId": function () {return this.status}
	      },
	      "children": [
	        {
	          "type": "div",
	          "style": {
	            "height": function () {return this.screenHeight}
	          },
	          "children": [
	            {
	              "type": "list",
	              "classList": [
	                "list"
	              ],
	              "shown": function () {return this.list.length},
	              "children": [
	                {
	                  "type": "cell",
	                  "append": "tree",
	                  "repeat": function () {return this.list},
	                  "classList": [
	                    "cell"
	                  ],
	                  "attr": {
	                    "vid": function () {return this.vid},
	                    "index": function () {return this.vid}
	                  },
	                  "children": [
	                    {
	                      "type": "text",
	                      "classList": [
	                        "title"
	                      ],
	                      "attr": {
	                        "value": function () {return this.title}
	                      }
	                    },
	                    {
	                      "type": "div",
	                      "classList": [
	                        "info"
	                      ],
	                      "children": [
	                        {
	                          "type": "text",
	                          "classList": function () {return ['txt', 'status', 'status-' + (this.questionStatus)]},
	                          "attr": {
	                            "value": function () {return this.questionStatusValue}
	                          }
	                        },
	                        {
	                          "type": "text",
	                          "classList": [
	                            "txt"
	                          ],
	                          "attr": {
	                            "value": function () {return ', id: ' + (this.vid) + ' ,'}
	                          }
	                        },
	                        {
	                          "type": "text",
	                          "classList": [
	                            "txt"
	                          ],
	                          "attr": {
	                            "value": function () {return 'time: ' + (this.addTime)}
	                          }
	                        }
	                      ]
	                    }
	                  ]
	                }
	              ]
	            }
	          ]
	        }
	      ]
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "dropdown": {
	    "justifyContent": "center",
	    "alignContent": "stretch",
	    "position": "relative",
	    "zIndex": 100
	  },
	  "wrapper": {
	    "justifyContent": "flex-start",
	    "flexDirection": "column",
	    "position": "relative"
	  },
	  "list": {
	    "flex": 1,
	    "width": 750
	  },
	  "refresh-view": {
	    "height": 120,
	    "width": 750,
	    "marginTop": 10,
	    "marginBottom": 10,
	    "alignItems": "center",
	    "justifyContent": "center"
	  },
	  "refresh-arrow": {
	    "fontSize": 30,
	    "color": "#45b5f0"
	  },
	  "indicator": {
	    "height": 40,
	    "width": 40,
	    "color": "#45b5f0"
	  },
	  "cell": {
	    "width": 750,
	    "paddingTop": 15,
	    "paddingBottom": 5,
	    "paddingLeft": 20,
	    "paddingRight": 20,
	    "borderBottomWidth": 1,
	    "borderStyle": "solid",
	    "borderColor": "#999999"
	  },
	  "title": {
	    "fontSize": 32,
	    "paddingTop": 5,
	    "paddingBottom": 5,
	    "color": "#333333"
	  },
	  "info": {
	    "flexDirection": "row",
	    "justifyContent": "flex-start",
	    "alignItems": "stretch"
	  },
	  "txt": {
	    "fontSize": 28,
	    "paddingTop": 5,
	    "paddingBottom": 5,
	    "color": "#999999"
	  },
	  "status-1": {
	    "color": "#009900"
	  },
	  "status-2": {
	    "color": "#ff0000"
	  }
	})
	})
	;__weex_bootstrap__("@weex-component/ac3e606c7f24790a08c26b46fd7a651b", {
	  "transformerVersion": "0.3.1"
	},undefined)

/***/ },

/***/ 157:
/***/ function(module, exports) {

	;__weex_define__("@weex-component/we-dropdown", [], function(__weex_require__, exports, __weex_module__){

	;
	    var animation = __weex_require__('@weex-module/animation');

	    __weex_module__.exports = {
	        data: function () {return {
	            statusId: '0', 
	            status: [
	                {id: '0', name: 'All'},
	                {id: '1', name: 'Doing'},
	                {id: '2', name: 'Done'}
	            ],
	            flagSrc: 'https://gw.alicdn.com/tps/TB11a2lKFXXXXbVXpXXXXXXXXXX-32-32.png',
	            arrowSrc: 'https://gw.alicdn.com/tps/TB1O3_aKFXXXXXdXVXXXXXXXXXX-27-23.png'
	        }},
	        computed: {
	            statusName: {
	                get: function(){
	                    var id = this.statusId;
	                    return this.status.filter(function(s){
	                        return s.id == id
	                    })[0].name;
	                }
	            }
	        },
	        methods: {
	            switchView: function() { 
	                this.toggleMaskVisible();

	                this.opacity(this._ids.mask.el.ref);
	                this.collapse(this._ids.options.el.ref);
	                this.rotate(this._ids.arrow.el.ref);

	            },

	            onItemClick: function(e) {
	                var vid = e.target.attr.vid;
	                this.updateStatus(vid);
	                this.switchView();
	                this.$dispatch('statuschange', {
	                    id: this.statusId,
	                    name: this.statusName
	                })
	            },

	            updateStatus: function(id) { 
	                this.statusId = id; 
	            },

	            toggleMaskVisible: function(){
	                this.current_showMask = !this.current_showMask;
	                var visibility = this.current_showMask? 'visible': 'hidden';
	                this._ids.mask.el.setClassStyle({visibility:visibility});
	            },

	            collapse: function(ref, callback) {
	                var platform = this.$getConfig().env.platform;
	                var translate = 'translate(0, 100%)'; // Web need % ;
	                if(platform == 'iOS') {
	                    translate = 'translate(0, 270)'; // ios bug && fixing
	                }
	                this.current_translate = this.current_translate ? '' : translate;
	                this.anim(ref, {
	                  transform: this.current_translate
	                }, 'ease', 100, callback);
	            },

	            opacity: function(ref, callback) {
	                var self = this;
	                self.current_opacity = self.current_opacity === 1 ? 0.1 : 1;
	                self.anim(ref, {
	                    opacity: self.current_opacity
	                }, 'ease', 100, callback);
	            },

	            rotate: function(ref, callback) {
	                var self = this;
	                if(!self.current_rotate) {
	                    self.current_rotate = 0;
	                }
	                self.current_rotate = self.current_rotate + 180;
	                self.anim(ref, {
	                    transform: 'rotate(' + self.current_rotate + 'deg)'
	                }, 'linear', 100, callback);
	            },

	            anim: function(ref, styles, timingFunction, duration, callback) {
	                animation.transition(ref, {
	                  styles: styles,
	                  timingFunction: timingFunction,
	                  duration: duration
	                }, callback || function(){});
	            }
	        }
	    }

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "classList": [
	    "select-container"
	  ],
	  "children": [
	    {
	      "type": "div",
	      "classList": [
	        "content"
	      ],
	      "children": [
	        {
	          "type": "content"
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "mask"
	      ],
	      "id": "mask",
	      "events": {
	        "click": "switchView"
	      }
	    },
	    {
	      "type": "div",
	      "classList": [
	        "options"
	      ],
	      "id": "options",
	      "children": [
	        {
	          "type": "div",
	          "repeat": function () {return this.status},
	          "classList": [
	            "cell"
	          ],
	          "attr": {
	            "vid": function () {return this.id}
	          },
	          "events": {
	            "click": "onItemClick"
	          },
	          "children": [
	            {
	              "type": "text",
	              "classList": function () {return ['name', this.id==this.statusId?'current':'']},
	              "attr": {
	                "value": function () {return this.name}
	              }
	            },
	            {
	              "type": "image",
	              "classList": [
	                "icon-curr-flag"
	              ],
	              "attr": {
	                "src": function () {return this.flagSrc}
	              },
	              "shown": function () {return this.id==this.statusId}
	            }
	          ]
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "select"
	      ],
	      "events": {
	        "click": "switchView"
	      },
	      "children": [
	        {
	          "type": "text",
	          "classList": [
	            "current-text"
	          ],
	          "attr": {
	            "value": function () {return this.statusName}
	          }
	        },
	        {
	          "type": "image",
	          "classList": [
	            "icon-arrow"
	          ],
	          "id": "arrow",
	          "attr": {
	            "src": function () {return this.arrowSrc}
	          }
	        }
	      ]
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "select-container": {
	    "flexDirection": "column",
	    "position": "relative",
	    "zIndex": 1000
	  },
	  "content": {
	    "width": 750,
	    "marginTop": 90
	  },
	  "mask": {
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "bottom": 0,
	    "right": 0,
	    "flex": 1,
	    "width": 750,
	    "backgroundColor": "rgba(0,0,0,0.5)",
	    "visibility": "hidden"
	  },
	  "select": {
	    "width": 750,
	    "height": 90,
	    "flexDirection": "row",
	    "alignItems": "center",
	    "justifyContent": "space-between",
	    "paddingLeft": 30,
	    "paddingRight": 30,
	    "borderBottomWidth": 1,
	    "borderStyle": "solid",
	    "borderColor": "#dddddd",
	    "backgroundColor": "#eeeeee",
	    "zIndex": 1001,
	    "position": "absolute",
	    "top": 0
	  },
	  "current-text": {
	    "color": "#333333",
	    "fontSize": 33,
	    "flex": 1
	  },
	  "icon-arrow": {
	    "width": 27,
	    "height": 23
	  },
	  "options": {
	    "position": "absolute",
	    "top": -181,
	    "width": 750,
	    "backgroundColor": "#ffffff",
	    "transformOrigin": "center center"
	  },
	  "cell": {
	    "flexDirection": "row",
	    "justifyContent": "space-between",
	    "alignItems": "center",
	    "width": 750,
	    "height": 90,
	    "paddingLeft": 30,
	    "paddingRight": 30,
	    "borderBottomWidth": 1,
	    "borderStyle": "solid",
	    "borderColor": "#dddddd"
	  },
	  "name": {
	    "color": "#333333",
	    "fontSize": 33,
	    "flex": 1
	  },
	  "icon-curr-flag": {
	    "width": 32,
	    "height": 32
	  },
	  "current": {
	    "color": "#0088FB"
	  }
	})
	})

/***/ }

/******/ });