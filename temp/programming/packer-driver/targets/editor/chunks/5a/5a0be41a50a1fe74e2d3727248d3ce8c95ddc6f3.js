System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, geometry, input, Input, Camera, PhysicsSystem, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, test02;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      geometry = _cc.geometry;
      input = _cc.input;
      Input = _cc.Input;
      Camera = _cc.Camera;
      PhysicsSystem = _cc.PhysicsSystem;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ce2bbbZSNFK97lOLHGNWBUi", "test02", undefined);

      __checkObsolete__(['_decorator', 'Component', 'geometry', 'input', 'Input', 'Camera', 'EventMouse', 'PhysicsSystem']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("test02", test02 = (_dec = ccclass('test02'), _dec2 = property(Camera), _dec(_class = (_class2 = class test02 extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "camera", _descriptor, this);
        }

        start() {
          // 添加鼠标的监听事件，在按下时触发OnMouseDown方法
          input.on(Input.EventType.MOUSE_DOWN, this.OnMouseDown, this);
        }

        OnMouseDown(event) {
          //通过监听鼠标按下的输入事件，实现将鼠标坐标转换成射线
          var outRay = new geometry.Ray();
          var sampleRay = this.camera.screenPointToRay(event.getLocationX(), event.getLocationY(), outRay); // 检查射线检测的结果

          if (PhysicsSystem.instance.raycastClosest(sampleRay)) {
            const raycastClosestResult = PhysicsSystem.instance.raycastClosestResult;
            const hitPoint = raycastClosestResult.hitPoint; // 获取击中点（世界坐标）

            this.node.setPosition(hitPoint); // 修改物体位置
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "camera", [_dec2], {
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
//# sourceMappingURL=5a0be41a50a1fe74e2d3727248d3ce8c95ddc6f3.js.map