System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, SkeletalAnimation, _dec, _class, _crd, ccclass, property, HelloWorld;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      SkeletalAnimation = _cc.SkeletalAnimation;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "91a01IasYxJKrtEwVV/0gpe", "HelloWorld", undefined);

      __checkObsolete__(['_decorator', 'Component', 'SkeletalAnimation']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("HelloWorld", HelloWorld = (_dec = ccclass('HelloWorld'), _dec(_class = class HelloWorld extends Component {
        constructor() {
          super(...arguments);
          this.SampleSkeletalAnimation = void 0;
        }

        start() {
          this.SampleSkeletalAnimation = this.node.getComponent(SkeletalAnimation);
          this.SampleSkeletalAnimation.on(Animation.EventType);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5ae92d1913632511110a1e88a10d6bd88b3cb07b.js.map