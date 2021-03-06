import Color from 'color';
import { normalizeComponent, createInjector } from 'vue-runtime-helpers';

//
var script = {
  name: 'SkellyShine',
  props: {
    color: {
      type: String,
      default: '#000000'
    },
    lightMultiplier: {
      type: Number,
      default: 0.5
    },
    darkMultiplier: {
      type: Number,
      default: 0.5
    },
    lightOpacity: {
      type: Number,
      default: 0.25
    },
    darkOpacity: {
      type: Number,
      default: 0.125
    },
    lightSaturation: {
      type: Number,
      default: 0.75
    },
    darkSaturation: {
      type: Number,
      default: 0.75
    },
    mixBlendMode: {
      type: String,
      default: 'none'
    },
    animationDirection: {
      type: String,
      default: 'normal'
    },
    animationTimingFunction: {
      type: String,
      default: 'linear'
    },
    animationDuration: {
      type: String,
      default: '1.5s'
    }
  },
  computed: {
    lightColor() {
      return Color(this.color).lighten(this.lightMultiplier).saturate(this.lightSaturation).rgb();
    },

    darkColor() {
      return Color(this.color).darken(this.darkMultiplier).saturate(this.darkSaturation).rgb();
    },

    colorStops() {
      const lightColorString = this.lightColor.array().join(',');
      const darkColorString = this.darkColor.array().join(',');
      return [`rgba(${lightColorString}, 0) 0%`, `rgba(${lightColorString}, ${this.lightOpacity * 0.5}) 12.5%`, `rgba(${lightColorString}, ${this.lightOpacity}) 25%`, `rgba(${lightColorString}, ${this.lightOpacity * 0.5}) 37.5%`, `rgba(${lightColorString}, 0) 50%`, `rgba(${darkColorString}, 0) 50%`, `rgba(${darkColorString}, ${this.darkOpacity * 0.5}) 62.5%`, `rgba(${darkColorString}, ${this.darkOpacity}) 75%`, `rgba(${darkColorString}, ${this.darkOpacity * 0.5}) 87.5%`, `rgba(${darkColorString}, 0) 100%`].join(',');
    }

  }
};

/* script */
const __vue_script__ = script;
/* template */

var __vue_render__ = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c("div", {
    staticClass: "skelly-shine",
    style: {
      mixBlendMode: _vm.mixBlendMode,
      animationDirection: _vm.animationDirection,
      animationDuration: _vm.animationDuration,
      animationTimingFunction: _vm.animationTimingFunction,
      backgroundImage: "linear-gradient(to right, " + _vm.colorStops + ")"
    }
  });
};

var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;
/* style */

const __vue_inject_styles__ = function (inject) {
  if (!inject) return;
  inject("data-v-8212e92e_0", {
    source: "\n@keyframes move-right-data-v-8212e92e {\nfrom {\n    transform: translateX(-125%);\n}\nto {\n    transform: translateX(50%);\n}\n}\n.skelly-shine[data-v-8212e92e] {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 400%;\n  transform-style: preserve-3d;\n  backface-visibility: hidden;\n  will-change: transform;\n  animation-name: move-right-data-v-8212e92e;\n  animation-iteration-count: infinite;\n}\n",
    map: {
      "version": 3,
      "sources": ["/Users/kyle/Code/vue-skelly/src/components/_SkellyShine/SkellyShine.vue"],
      "names": [],
      "mappings": ";AA4FA;AACA;IACA,4BAAA;AACA;AAEA;IACA,0BAAA;AACA;AACA;AAEA;EACA,cAAA;EACA,kBAAA;EACA,MAAA;EACA,OAAA;EACA,YAAA;EACA,WAAA;EACA,4BAAA;EACA,2BAAA;EACA,sBAAA;EACA,0CAAA;EACA,mCAAA;AACA",
      "file": "SkellyShine.vue",
      "sourcesContent": ["<template>\n  <div\n    class=\"skelly-shine\"\n    :style=\"{\n      mixBlendMode,\n      animationDirection,\n      animationDuration,\n      animationTimingFunction,\n      backgroundImage: `linear-gradient(to right, ${colorStops})`,\n    }\"\n  />\n</template>\n\n<script>\nimport Color from 'color';\n\nexport default {\n  name: 'SkellyShine',\n  props: {\n    color: {\n      type: String,\n      default: '#000000',\n    },\n    lightMultiplier: {\n      type: Number,\n      default: 0.5,\n    },\n    darkMultiplier: {\n      type: Number,\n      default: 0.5,\n    },\n    lightOpacity: {\n      type: Number,\n      default: 0.25,\n    },\n    darkOpacity: {\n      type: Number,\n      default: 0.125,\n    },\n    lightSaturation: {\n      type: Number,\n      default: 0.75,\n    },\n    darkSaturation: {\n      type: Number,\n      default: 0.75,\n    },\n    mixBlendMode: {\n      type: String,\n      default: 'none',\n    },\n    animationDirection: {\n      type: String,\n      default: 'normal',\n    },\n    animationTimingFunction: {\n      type: String,\n      default: 'linear',\n    },\n    animationDuration: {\n      type: String,\n      default: '1.5s',\n    },\n  },\n  computed: {\n    lightColor() {\n      return Color(this.color).lighten(this.lightMultiplier).saturate(this.lightSaturation).rgb();\n    },\n    darkColor() {\n      return Color(this.color).darken(this.darkMultiplier).saturate(this.darkSaturation).rgb();\n    },\n    colorStops() {\n      const lightColorString = this.lightColor.array().join(',');\n      const darkColorString = this.darkColor.array().join(',');\n      return [\n        `rgba(${lightColorString}, 0) 0%`,\n        `rgba(${lightColorString}, ${this.lightOpacity * 0.5}) 12.5%`,\n        `rgba(${lightColorString}, ${this.lightOpacity}) 25%`,\n        `rgba(${lightColorString}, ${this.lightOpacity * 0.5}) 37.5%`,\n        `rgba(${lightColorString}, 0) 50%`,\n        `rgba(${darkColorString}, 0) 50%`,\n        `rgba(${darkColorString}, ${this.darkOpacity * 0.5}) 62.5%`,\n        `rgba(${darkColorString}, ${this.darkOpacity}) 75%`,\n        `rgba(${darkColorString}, ${this.darkOpacity * 0.5}) 87.5%`,\n        `rgba(${darkColorString}, 0) 100%`,\n      ].join(',')\n    },\n  },\n}\n</script>\n\n<style scoped>\n  @keyframes move-right {\n    from {\n      transform: translateX(-125%);\n    }\n\n    to {\n      transform: translateX(50%);\n    }\n  }\n\n  .skelly-shine {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 400%;\n    transform-style: preserve-3d;\n    backface-visibility: hidden;\n    will-change: transform;\n    animation-name: move-right;\n    animation-iteration-count: infinite;\n  }\n</style>"]
    },
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__ = "data-v-8212e92e";
/* module identifier */

const __vue_module_identifier__ = undefined;
/* functional template */

const __vue_is_functional_template__ = false;
/* style inject SSR */

/* style inject shadow dom */

const __vue_component__ = normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, createInjector, undefined, undefined);

var ShapeMixin = {
  name: 'SkellyShape',
  components: {
    SkellyShine: __vue_component__
  },
  props: {
    color: {
      type: String,
      default: '#DFDFDF'
    }
  }
};

//
var script$1 = {
  name: 'SkellyCircle',
  mixins: [ShapeMixin],
  props: {
    size: {
      type: String,
      default: '100%'
    }
  }
};

/* script */
const __vue_script__$1 = script$1;
/* template */

var __vue_render__$1 = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c("div", {
    staticClass: "skelly-circle",
    style: {
      width: _vm.size,
      height: _vm.size
    }
  }, [_c("div", {
    staticClass: "skelly-circle__shape",
    style: {
      backgroundColor: _vm.color
    }
  }, [_c("skelly-shine", {
    attrs: {
      color: _vm.color
    }
  })], 1)]);
};

var __vue_staticRenderFns__$1 = [];
__vue_render__$1._withStripped = true;
/* style */

const __vue_inject_styles__$1 = function (inject) {
  if (!inject) return;
  inject("data-v-546b5035_0", {
    source: "\n.skelly-circle__shape[data-v-546b5035] {\n  position: relative;\n  border-radius: 100%;\n  padding-bottom: 100%;\n  overflow: hidden;\n  -webkit-mask-image: -webkit-radial-gradient(white, black);\n}\n",
    map: {
      "version": 3,
      "sources": ["/Users/kyle/Code/vue-skelly/src/components/SkellyCircle/SkellyCircle.vue"],
      "names": [],
      "mappings": ";AAqCA;EACA,kBAAA;EACA,mBAAA;EACA,oBAAA;EACA,gBAAA;EACA,yDAAA;AACA",
      "file": "SkellyCircle.vue",
      "sourcesContent": ["<template>\n  <div\n    class=\"skelly-circle\"\n    :style=\"{\n      width: size,\n      height: size,\n    }\"\n  >\n    <div\n      class=\"skelly-circle__shape\"\n      :style=\"{\n        backgroundColor: color,\n      }\"\n    >\n      <skelly-shine :color=\"color\" />\n    </div>\n  </div>\n</template>\n\n<script>\nimport ShapeMixin from '../../mixins/ShapeMixin';\n\nexport default {\n  name: 'SkellyCircle',\n  mixins: [\n    ShapeMixin,\n  ],\n  props: {\n    size: {\n      type: String,\n      default: '100%',\n    },\n  },\n}\n</script>\n\n<style scoped>\n  .skelly-circle__shape {\n    position: relative;\n    border-radius: 100%;\n    padding-bottom: 100%;\n    overflow: hidden;\n    -webkit-mask-image: -webkit-radial-gradient(white, black);\n  }\n</style>"]
    },
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__$1 = "data-v-546b5035";
/* module identifier */

const __vue_module_identifier__$1 = undefined;
/* functional template */

const __vue_is_functional_template__$1 = false;
/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$1 = normalizeComponent({
  render: __vue_render__$1,
  staticRenderFns: __vue_staticRenderFns__$1
}, __vue_inject_styles__$1, __vue_script__$1, __vue_scope_id__$1, __vue_is_functional_template__$1, __vue_module_identifier__$1, false, createInjector, undefined, undefined);

//
var script$2 = {
  name: 'SkellyRectangle',
  mixins: [ShapeMixin],
  props: {
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '12px'
    },
    radius: {
      type: String,
      default: '3px'
    }
  }
};

/* script */
const __vue_script__$2 = script$2;
/* template */

var __vue_render__$2 = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c("div", {
    staticClass: "skelly-rectangle"
  }, [_c("div", {
    staticClass: "skelly-rectangle__shape",
    style: {
      backgroundColor: _vm.color,
      borderRadius: _vm.radius,
      width: _vm.width,
      height: _vm.height
    }
  }, [_c("skelly-shine", {
    attrs: {
      color: _vm.color
    }
  })], 1)]);
};

var __vue_staticRenderFns__$2 = [];
__vue_render__$2._withStripped = true;
/* style */

const __vue_inject_styles__$2 = function (inject) {
  if (!inject) return;
  inject("data-v-4a86df63_0", {
    source: "\n.skelly-rectangle__shape[data-v-4a86df63] {  \n  position: relative;\n  overflow: hidden;\n  max-width: 100%;\n}\n",
    map: {
      "version": 3,
      "sources": ["/Users/kyle/Code/vue-skelly/src/components/SkellyRectangle/SkellyRectangle.vue"],
      "names": [],
      "mappings": ";AA4CA;EACA,kBAAA;EACA,gBAAA;EACA,eAAA;AACA",
      "file": "SkellyRectangle.vue",
      "sourcesContent": ["<template>\n  <div\n    class=\"skelly-rectangle\"\n  >\n    <div\n      class=\"skelly-rectangle__shape\"\n      :style=\"{\n        backgroundColor: color,\n        borderRadius: radius,\n        width,\n        height,\n      }\"\n    >\n      <skelly-shine :color=\"color\" />\n    </div>\n  </div>\n</template>\n\n<script>\nimport ShapeMixin from '../../mixins/ShapeMixin';\n\nexport default {\n  name: 'SkellyRectangle',\n  mixins: [\n    ShapeMixin,\n  ],\n  props: {\n    width: {\n      type: String,\n      default: '100%',\n    },\n    height: {\n      type: String,\n      default: '12px',\n    },\n    radius: {\n      type: String,\n      default: '3px',\n    },\n  },\n}\n</script>\n\n<style scoped>\n  .skelly-rectangle__shape {  \n    position: relative;\n    overflow: hidden;\n    max-width: 100%;\n  }\n</style>"]
    },
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__$2 = "data-v-4a86df63";
/* module identifier */

const __vue_module_identifier__$2 = undefined;
/* functional template */

const __vue_is_functional_template__$2 = false;
/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$2 = normalizeComponent({
  render: __vue_render__$2,
  staticRenderFns: __vue_staticRenderFns__$2
}, __vue_inject_styles__$2, __vue_script__$2, __vue_scope_id__$2, __vue_is_functional_template__$2, __vue_module_identifier__$2, false, createInjector, undefined, undefined);



var components = /*#__PURE__*/Object.freeze({
  __proto__: null,
  SkellyCircle: __vue_component__$1,
  SkellyRectangle: __vue_component__$2
});

function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Object.keys(components).forEach(componentName => {
    Vue.component(componentName, components[componentName]);
  });
} // Create module definition for Vue.use()

const plugin = {
  install
}; // Auto-install when vue is found (eg. in browser via <script> tag)

let GlobalVue = null;

if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}

if (GlobalVue) {
  GlobalVue.use(plugin);
}

export default install;
