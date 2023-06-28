exports.ids = [4,1];
exports.modules = {

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(31);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("14846af4", content, true, context)
};

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/LoadingAnimation.vue?vue&type=template&id=2a3be8a6&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "animebox"
  }, [_vm._ssrNode("<div class=\"spinner-box\" data-v-2a3be8a6><div class=\"blue-orbit leo\" data-v-2a3be8a6></div> <div class=\"green-orbit leo\" data-v-2a3be8a6></div> <div class=\"red-orbit leo\" data-v-2a3be8a6></div> <div class=\"white-orbit w1 leo\" data-v-2a3be8a6></div> <div class=\"white-orbit w2 leo\" data-v-2a3be8a6></div> <div class=\"white-orbit w3 leo\" data-v-2a3be8a6></div></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/LoadingAnimation.vue?vue&type=template&id=2a3be8a6&scoped=true&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/LoadingAnimation.vue

var script = {}
function injectStyles (context) {
  
  var style0 = __webpack_require__(30)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "2a3be8a6",
  "9ca47b92"
  
)

/* harmony default export */ var LoadingAnimation = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingAnimation_vue_vue_type_style_index_0_id_2a3be8a6_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingAnimation_vue_vue_type_style_index_0_id_2a3be8a6_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingAnimation_vue_vue_type_style_index_0_id_2a3be8a6_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingAnimation_vue_vue_type_style_index_0_id_2a3be8a6_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingAnimation_vue_vue_type_style_index_0_id_2a3be8a6_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@keyframes spin3D-2a3be8a6{0%{transform:rotate3d(.5,.5,.5,1turn)}to{transform:rotate3d(0deg)}}.animebox[data-v-2a3be8a6]{background-color:#fff}.animebox[data-v-2a3be8a6],.dark .animebox[data-v-2a3be8a6]{height:100vh;left:0;position:fixed;top:0;width:100vw;z-index:20}.dark .animebox[data-v-2a3be8a6]{background-color:#353b41}.spinner-box[data-v-2a3be8a6]{background-color:transparent;height:300px;margin:auto;padding-top:25vh;width:300px}.leo[data-v-2a3be8a6],.spinner-box[data-v-2a3be8a6]{align-items:center;display:flex;justify-content:center}.leo[data-v-2a3be8a6]{border-radius:50%;position:absolute}.dark .blue-orbit[data-v-2a3be8a6]{border:1px solid rgba(145,218,255,.647)}.blue-orbit[data-v-2a3be8a6],.dark .blue-orbit[data-v-2a3be8a6]{animation:spin3D-2a3be8a6 3s linear .2s infinite;height:165px;width:165px}.blue-orbit[data-v-2a3be8a6]{border:1px solid #5f96b1}.dark .green-orbit[data-v-2a3be8a6]{border:1px solid #91ffbf}.dark .green-orbit[data-v-2a3be8a6],.green-orbit[data-v-2a3be8a6]{animation:spin3D-2a3be8a6 2s linear 0s infinite;height:120px;width:120px}.green-orbit[data-v-2a3be8a6]{border:1px solid #487f5f}.dark .red-orbit[data-v-2a3be8a6]{border:1px solid #ffca91}.dark .red-orbit[data-v-2a3be8a6],.red-orbit[data-v-2a3be8a6]{animation:spin3D-2a3be8a6 1s linear 0s infinite;height:90px;width:90px}.red-orbit[data-v-2a3be8a6]{border:1px solid #c16548}.dark .white-orbit[data-v-2a3be8a6]{border:2px solid #fff}.dark .white-orbit[data-v-2a3be8a6],.white-orbit[data-v-2a3be8a6]{animation:spin3D-2a3be8a6 10s linear 0s infinite;height:60px;width:60px}.white-orbit[data-v-2a3be8a6]{border:2px solid #687682}.w1[data-v-2a3be8a6]{transform:rotate3D(1,1,1,90deg)}.w2[data-v-2a3be8a6]{transform:rotate3D(1,2,.5,90deg)}.w3[data-v-2a3be8a6]{transform:rotate3D(.5,1,2,90deg)}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(38);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("ca4ca0a4", content, true, context)
};

/***/ }),

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(40);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("56f19a24", content, true, context)
};

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_3503deba_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_3503deba_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_3503deba_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_3503deba_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_3503deba_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "#page_index[data-v-3503deba]{margin:auto;position:relative;width:100vw}#page[data-v-3503deba]{margin:auto auto 25vh;width:70%}#page .margin[data-v-3503deba]{padding-top:80px}.head_img[data-v-3503deba]{height:40vh;-o-object-fit:cover;object-fit:cover;width:100%}.propaty[data-v-3503deba]{justify-content:center;width:100%}.propaty p[data-v-3503deba]{margin-left:5px;margin-right:5px}.tags[data-v-3503deba]{display:flex;margin:auto;width:-moz-fit-content;width:fit-content}.tag[data-v-3503deba]{background-color:transparent;border:1px solid #42b983;color:#42b983;transition:.25s}.tag[data-v-3503deba],.tag[data-v-3503deba]:hover{border-radius:5px;margin:auto;padding:5px;-webkit-text-decoration:none;text-decoration:none;width:-moz-fit-content;width:fit-content}.tag[data-v-3503deba]:hover{background-color:#42b983;color:#fff}.content[data-v-3503deba]{margin:auto;width:50vw}.content h2[data-v-3503deba]{text-align:left}.content .bold[data-v-3503deba]{font-weight:700}.content h3[data-v-3503deba],.content li[data-v-3503deba],.content p[data-v-3503deba]{text-align:left}.content code[data-v-3503deba]{border:1px solid #c4c4c5;border-radius:5px;overflow-x:scroll;padding:10px;width:70%}.content code[data-v-3503deba],.content code span[data-v-3503deba]{display:inline-block;font-family:\"Source Code Pro\",monospace;text-align:left}.content blockquote[data-v-3503deba]{border-left:2px solid gray;padding-bottom:1px;padding-left:10px;padding-top:1px}.content blockquote p[data-v-3503deba]{margin:0}.content img[data-v-3503deba]{width:70%}.dark h1[data-v-3503deba],.dark h2[data-v-3503deba],.dark h3[data-v-3503deba],.dark li[data-v-3503deba],.dark p[data-v-3503deba]{color:#fff}@media screen and (max-width:800px){.content[data-v-3503deba]{margin:auto;width:70vw}.content img[data-v-3503deba]{width:90%}}@media screen and (max-width:400px){.content[data-v-3503deba]{margin:auto;width:90vw}#page[data-v-3503deba]{margin:auto auto 25vh}#page[data-v-3503deba],.content img[data-v-3503deba]{width:90%}h1.title[data-v-3503deba]{font-size:1.6em}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_1_id_3503deba_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_1_id_3503deba_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_1_id_3503deba_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_1_id_3503deba_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_1_id_3503deba_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".dark .mjx-char{color:#fff}span.hljs-number{color:#9b5fd3}span.hljs-keyword{color:#ff006b}span.hljs-title{color:#5ea405}span.hljs-string{color:#ffb05e}.dark span.hljs-string{color:#e6e05f}.dark span.hljs-title{color:#86d705}.dark .content code{border:1px solid gray;color:#eceded}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/page/_id.vue?vue&type=template&id=3503deba&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    attrs: {
      "id": "page_index"
    }
  }, [_c('LoadingAnimation', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.loading,
      expression: "loading"
    }]
  }), _vm._ssrNode(" "), _vm._ssrNode("<div id=\"page\" data-v-3503deba>", "</div>", [_vm._ssrNode("<div class=\"margin\" data-v-3503deba></div> <img" + _vm._ssrAttr("src", _vm.cover) + " alt class=\"head_img\" data-v-3503deba> <h1 class=\"title\" data-v-3503deba>" + _vm._ssrEscape(_vm._s(_vm.title)) + "</h1> "), _vm._ssrNode("<div class=\"propaty\" data-v-3503deba>", "</div>", [_vm._ssrNode("<div class=\"tags\" data-v-3503deba>", "</div>", _vm._l(_vm.tags, function (tag) {
    return _c('nuxt-link', {
      key: tag.id,
      staticClass: "tag",
      attrs: {
        "to": '/serch/' + tag.name
      }
    }, [_vm._v("\n            " + _vm._s(tag.name) + "\n          ")]);
  }), 1), _vm._ssrNode(" <p data-v-3503deba>" + _vm._ssrEscape(_vm._s(_vm.date)) + "</p>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"content\" data-v-3503deba>", "</div>", _vm._l(_vm.contents, function (content) {
    return _vm._ssrNode("<div data-v-3503deba>", "</div>", [content.type == 'heading_1' ? _vm._ssrNode("<div data-v-3503deba>", "</div>", [_vm._ssrNode("<h2 data-v-3503deba>" + _vm._ssrEscape(_vm._s(content.heading_1.rich_text[0].text.content)) + "</h2>")], 2) : content.type == 'heading_2' ? _vm._ssrNode("<div data-v-3503deba><h3 data-v-3503deba>" + _vm._ssrEscape(_vm._s(content.heading_2.rich_text[0].text.content)) + "</h3></div>") : content.type == 'paragraph' ? _vm._ssrNode("<div class=\"outer\" data-v-3503deba>", "</div>", [_vm._ssrNode("<p data-v-3503deba>", "</p>", [_vm._l(content.paragraph.rich_text, function (text) {
      return [text.type == 'text' ? _vm._ssrNode("<span" + _vm._ssrClass(null, text.annotations) + " data-v-3503deba>", "</span>", [_vm._ssrNode(_vm._ssrEscape("\n                " + _vm._s(text.text.content) + "\n              "))], 2) : text.type == 'equation' ? _vm._ssrNode("<span data-v-3503deba>", "</span>", [_c('vue-mathjax', {
        attrs: {
          "formula": '$' + text.equation.expression + '$'
        }
      })], 1) : _vm._e()];
    })], 2)]) : content.type == 'bulleted_list_item' ? _vm._ssrNode("<div data-v-3503deba><li data-v-3503deba>" + _vm._ssrEscape(_vm._s(content.bulleted_list_item.rich_text[0].text.content)) + "</li></div>") : content.type == 'equation' ? _vm._ssrNode("<div data-v-3503deba>", "</div>", [_c('vue-mathjax', {
      attrs: {
        "formula": '$$' + content.equation.expression + '$$'
      }
    })], 1) : content.type == 'code' ? _c('pre', {
      directives: [{
        name: "highlightjs",
        rawName: "v-highlightjs"
      }]
    }, [_vm._ssrNode("<code" + _vm._ssrClass(null, content.code.language) + " data-v-3503deba>" + _vm._ssrEscape(_vm._s(content.code.rich_text[0].text.content)) + "</code>")]) : content.type == 'quote' ? _vm._ssrNode("<div data-v-3503deba><blockquote data-v-3503deba><p data-v-3503deba>" + _vm._ssrEscape(_vm._s(content.quote.rich_text[0].text.content)) + "</p></blockquote></div>") : content.type == 'image' ? _vm._ssrNode("<div data-v-3503deba><img" + _vm._ssrAttr("src", content.image.file.url) + " alt data-v-3503deba></div>") : _vm._ssrNode("<div data-v-3503deba>" + _vm._ssrEscape("\n            " + _vm._s(content.type) + "\n        ") + "</div>")]);
  }), 0)], 2)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/page/_id.vue?vue&type=template&id=3503deba&scoped=true&

// EXTERNAL MODULE: external "vue-mathjax"
var external_vue_mathjax_ = __webpack_require__(27);

// EXTERNAL MODULE: ./components/LoadingAnimation.vue + 2 modules
var LoadingAnimation = __webpack_require__(29);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/page/_id.vue?vue&type=script&lang=js&


/* harmony default export */ var _idvue_type_script_lang_js_ = ({
  name: "page",
  components: {
    "vue-mathjax": external_vue_mathjax_["VueMathjax"]
  },
  data() {
    return {
      loading: true,
      tags: {},
      contents: [],
      cover: "",
      date: "",
      title: ""
    };
  },
  async mounted() {
    var res_propaty = await this.$axios.get(`${location.origin}/api/page/property/${this.$route.params.id}`);
    this.cover = res_propaty.data.cover.external.url;
    this.title = res_propaty.data.properties.Name.title[0].plain_text;
    this.date = res_propaty.data.properties.Date.date.start;
    this.tags = res_propaty.data.properties.Tag.multi_select;
    var res_content = await this.$axios.get(`${location.origin}/api/page/content/${this.$route.params.id}`);
    this.contents = res_content.data.results;
    this.loading = false;
  },
  head() {
    return {
      title: "hatkarc/" + this.title,
      script: [{
        src: "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.2/MathJax.js?config=TeX-MML-AM_CHTML"
      }],
      link: [{
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com'
      }, {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com'
      }, {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@0,500;1,500&display=swap'
      }],
      meta: [{
        name: 'twitter:card',
        content: 'Summary_large_image'
      }, {
        name: 'twitter:site',
        content: '@hataka799288335'
      }, {
        name: 'twitter:title',
        content: this.title
      }, {
        name: 'twitter:description',
        content: ''
      }, {
        name: 'twitter:image',
        content: this.cover
      }]
    };
  }
});
// CONCATENATED MODULE: ./pages/page/_id.vue?vue&type=script&lang=js&
 /* harmony default export */ var page_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/page/_id.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(37)
if (style0.__inject__) style0.__inject__(context)
var style1 = __webpack_require__(39)
if (style1.__inject__) style1.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  page_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "3503deba",
  "e2422a02"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {LoadingAnimation: __webpack_require__(29).default})


/***/ })

};;
//# sourceMappingURL=_id.js.map