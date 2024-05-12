System.register("bundle://test03/_virtual/rollupPluginModLoBabelHelpers.js",[],(function(t){return{execute:function(){function e(o,r){return(e=t("setPrototypeOf",Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t}))(o,r)}t({inheritsLoose:function(t,o){t.prototype=Object.create(o.prototype),t.prototype.constructor=t,e(t,o)},setPrototypeOf:e})}}}));

System.register("bundle://test03/_virtual/test03",["./test03.ts"],(function(){return{setters:[null],execute:function(){}}}));

System.register("bundle://test03/_virtual/test03.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,n,o,s,r;return{setters:[function(t){e=t.inheritsLoose},function(t){n=t.cclegacy,o=t._decorator,s=t.assetManager,r=t.Component}],execute:function(){var c;n._RF.push({},"e6ac7mDNhFCNYZDE+dJmiqg","test03",void 0);var u=o.ccclass;o.property,t("test03",u("test03")(c=function(t){function n(){return t.apply(this,arguments)||this}e(n,t);var o=n.prototype;return o.start=function(){s.loadBundle("test03",(function(t,e){console.log(t),console.log(e.name)}))},o.update=function(t){},n}(r))||c);n._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/test03', 'bundle://test03/_virtual/test03'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});