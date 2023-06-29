exports.ids = [1];
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


/***/ })

};;
//# sourceMappingURL=loading-animation.js.map