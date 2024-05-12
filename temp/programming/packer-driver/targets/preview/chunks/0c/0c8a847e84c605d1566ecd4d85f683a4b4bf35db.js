System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, assetManager, Component, Sprite, SpriteFrame, _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, test03;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      assetManager = _cc.assetManager;
      Component = _cc.Component;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e6ac7mDNhFCNYZDE+dJmiqg", "test03", undefined);

      __checkObsolete__(['_decorator', 'assetManager', 'Component', 'Sprite', 'SpriteFrame']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("test03", test03 = (_dec = ccclass('test03'), _dec2 = property({
        type: Sprite
      }), _dec(_class = (_class2 = class test03 extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "sprite", _descriptor, this);

          _initializerDefineProperty(this, "SampleSpriteFrame", _descriptor2, this);

          this.bundleURL = "D:\\Courses\\Cocos\\Cocos Projects\\Test\\build\\build-bundle\\web-desktop\\test03";
        }

        start() {// 在cocos引擎中，绑定单击事件
        } //加载ab包


        LoadBundle() {
          assetManager.loadBundle(this.bundleURL, (err, bundle) => {
            console.log(err);
            console.log("加载ab包完成，名称为：" + bundle.name);
          });
        } // 加载资源


        loadAsset() {
          var bundle = assetManager.getBundle("test03");
          bundle.load("1/spriteFrame", SpriteFrame, function (err, asset) {
            this.SampleSpriteFrame = asset;
            console.log("加载资源完成，名称为：" + this.SampleSpriteFrame.name);
          }.bind(this));
        } // 设置Sprite


        SetSpriteFrame() {
          var SampleSprite = this.node.getComponent(Sprite);
          SampleSprite.spriteFrame = this.SampleSpriteFrame;
          console.log("设置Sprite完成");
        } // 释放资源


        ReleaseAsset() {
          assetManager.releaseAsset(this.SampleSpriteFrame); // 获取已经加载完的资源包

          var bundle = assetManager.getBundle("test03");
          bundle.release("1/spriteFrame", SpriteFrame);
          bundle.releaseAll();
          console.log("释放资源：" + this.SampleSpriteFrame.name);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "sprite", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "SampleSpriteFrame", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0c8a847e84c605d1566ecd4d85f683a4b4bf35db.js.map