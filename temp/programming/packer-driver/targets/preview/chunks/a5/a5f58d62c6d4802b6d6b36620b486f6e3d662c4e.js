System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, AnimationClip, Component, SkeletalAnimation, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, test01;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      AnimationClip = _cc.AnimationClip;
      Component = _cc.Component;
      SkeletalAnimation = _cc.SkeletalAnimation;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5dd9cWFG+FBib2pjfh18hZe", "test01", undefined);

      __checkObsolete__(['_decorator', 'AnimationClip', 'Component', 'Node', 'SkeletalAnimation']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("test01", test01 = (_dec = ccclass('test01'), _dec2 = property([AnimationClip]), _dec(_class = (_class2 = class test01 extends Component {
        constructor() {
          super(...arguments);
          this.animation = void 0;

          // 骨骼动画组件
          _initializerDefineProperty(this, "animationClips", _descriptor, this);

          this.index = 0;
        }

        start() {
          // 播放第一次的动画
          this.animation = this.getComponent(SkeletalAnimation);
          this.animation.defaultClip = this.animationClips[this.index];
          this.animation.play(); // 第一次动画播放完成后，切换为下一段动画

          this.animation.on(SkeletalAnimation.EventType.FINISHED, this.NextAnimation, this);
        } // 下一段动画


        NextAnimation() {
          this.animation.defaultClip = this.animationClips[this.index + 1];
          this.animation.play();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "animationClips", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a5f58d62c6d4802b6d6b36620b486f6e3d662c4e.js.map