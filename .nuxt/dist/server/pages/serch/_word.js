exports.ids = [5,1];
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

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(42);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("18b373fb", content, true, context)
};

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_word_vue_vue_type_style_index_0_id_41e49acc_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_word_vue_vue_type_style_index_0_id_41e49acc_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_word_vue_vue_type_style_index_0_id_41e49acc_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_word_vue_vue_type_style_index_0_id_41e49acc_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_word_vue_vue_type_style_index_0_id_41e49acc_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "#page_index[data-v-41e49acc]{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;color:#2c3e50;font-family:Avenir,Helvetica,Arial,sans-serif;margin:auto;min-height:100vh;text-align:center;width:100vw}#page_index .margin[data-v-41e49acc]{padding-top:80px}.home[data-v-41e49acc]{display:grid;grid-template-columns:50% 50%;margin:auto;width:50vw}.page_block[data-v-41e49acc]{border-radius:5px;box-shadow:0 0 8px gray;font-family:\"Zen Maru Gothic\",sans-serif;height:calc(14vh + 157px);margin:auto;position:relative;transition:.25s;width:90%}.page_block img[data-v-41e49acc]{border-top-left-radius:5px;border-top-right-radius:5px;height:14vh;-o-object-fit:cover;object-fit:cover;width:100%}.page_block a[data-v-41e49acc]{height:100%;left:0;position:absolute;top:0;width:100%}.tag_space[data-v-41e49acc]{margin-left:10px;margin-right:10px}.tag[data-v-41e49acc]{background-color:transparent;border:1px solid #42b983;color:#42b983;transition:.25s}.tag[data-v-41e49acc],.tag[data-v-41e49acc]:hover{border-radius:5px;margin:auto;padding:5px;-webkit-text-decoration:none;text-decoration:none;width:-moz-fit-content;width:fit-content}.tag[data-v-41e49acc]:hover{background-color:#42b983;color:#fff}.dark .page_block h3[data-v-41e49acc]{color:#fff}.page_block[data-v-41e49acc]:hover{border-radius:5px;box-shadow:0 0 .5px gray;height:calc(14vh + 157px);margin:auto;position:relative;width:90%}@media screen and (max-width:800px){.home[data-v-41e49acc]{display:block;margin:auto;width:50vw}}@media screen and (max-width:400px){.home[data-v-41e49acc]{display:block;margin:auto;width:100vw}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/serch/_word.vue?vue&type=template&id=41e49acc&scoped=true&
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
  }), _vm._ssrNode(" <div class=\"margin\" data-v-41e49acc></div> <div class=\"home\" data-v-41e49acc>" + _vm._ssrList(_vm.pages, function (page) {
    return "<div class=\"page_block\" data-v-41e49acc><img" + _vm._ssrAttr("src", page.cover.external.url) + " alt data-v-41e49acc> <h3 data-v-41e49acc>" + _vm._ssrEscape("\n            " + _vm._s(page.properties.Name.title[0].plain_text) + "\n          ") + "</h3> <p data-v-41e49acc>" + _vm._ssrEscape("\n            " + _vm._s(page.properties.Date.date.start) + "\n          ") + "</p> <div class=\"tag_space\" data-v-41e49acc>" + _vm._ssrList(page.properties.Tag.multi_select, function (tag) {
      return "<p class=\"tag\" data-v-41e49acc>" + _vm._ssrEscape("\n              " + _vm._s(tag.name) + "\n            ") + "</p>";
    }) + "</div></div>";
  }) + "</div>")], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/serch/_word.vue?vue&type=template&id=41e49acc&scoped=true&

// EXTERNAL MODULE: ./components/LoadingAnimation.vue + 2 modules
var LoadingAnimation = __webpack_require__(29);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/serch/_word.vue?vue&type=script&lang=js&

/* harmony default export */ var _wordvue_type_script_lang_js_ = ({
  name: "page",
  data() {
    return {
      loading: true,
      pages: []
    };
  },
  async mounted() {
    var res = await this.$axios.get(`${location.origin}/api/serch/${this.$route.params.word}`);
    this.pages = res.data.results;
    this.loading = false;
  },
  methods: {
    link(id) {
      this.$router.push('/page/' + id);
    }
  }
});
// CONCATENATED MODULE: ./pages/serch/_word.vue?vue&type=script&lang=js&
 /* harmony default export */ var serch_wordvue_type_script_lang_js_ = (_wordvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/serch/_word.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(41)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  serch_wordvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "41e49acc",
  "77479aea"
  
)

/* harmony default export */ var _word = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {LoadingAnimation: __webpack_require__(29).default})


/***/ })

};;
//# sourceMappingURL=_word.js.map