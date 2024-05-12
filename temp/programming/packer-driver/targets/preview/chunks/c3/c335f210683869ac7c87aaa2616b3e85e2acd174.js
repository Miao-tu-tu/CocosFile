System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, assetManager, director, KeyCode, input, Input, _dec, _class, _crd, ccclass, property, final;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      assetManager = _cc.assetManager;
      director = _cc.director;
      KeyCode = _cc.KeyCode;
      input = _cc.input;
      Input = _cc.Input;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b3dd1Bz8G5BOIx3EHK2xB5P", "final", undefined);

      __checkObsolete__(['_decorator', 'Component', 'assetManager', 'director', 'EventKeyboard', 'KeyCode', 'input', 'Input', 'error', 'Scene']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("final", final = (_dec = ccclass('final'), _dec(_class = class final extends Component {
        start() {
          input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
        }

        onKeyDown(event) {
          if (event.keyCode === KeyCode.KEY_A) {
            console.log("a");
          }
        }

        LoadAB1() {
          // 加载ab包
          assetManager.loadBundle("test01", (err, bundle) => {
            console.log(err);
            console.log(bundle.name);
          });
        }

        ReleaseAB1() {
          // 释放ab包
          var bundle = assetManager.getBundle("test01");
          bundle.release("1");
          bundle.releaseAll();
          console.log("卸载ab包");
        }

        LoadAB2() {
          assetManager.loadBundle("test02", (err, bundle) => {
            console.log(err);
            console.log(bundle.name);
          });
        }

        ReleaseAB2() {
          var bundle = assetManager.getBundle("test02");
          bundle.release("2");
          bundle.releaseAll();
          console.log("卸载ab包");
        }

        LoadAB3() {
          assetManager.loadBundle("test03", (err, bundle) => {
            console.log(err);
            console.log(bundle.name);
          });
        }

        ReleaseAB3() {
          var bundle = assetManager.getBundle("test03");
          bundle.release("3");
          bundle.releaseAll();
          console.log("卸载ab包");
        }

        EnterScene1() {
          var bundle = assetManager.getBundle("test01"); // 需要先加载ab包

          bundle.loadScene("1", function (err, scene) {
            director.runScene(scene);
          }); // assetManager.loadBundle("test01",(err,bundle)=>{
          //     bundle.loadScene("1",function(err,scene){
          //         director.runScene(scene)
          //     })
          // }) 
        }

        EnterScene2() {
          var bundle = assetManager.getBundle("test02"); // 需要先加载ab包

          bundle.loadScene("2", function (err, scene) {
            director.runScene(scene);
          });
        }

        EnterScene3() {
          var bundle = assetManager.getBundle("test03"); // 需要先加载ab包

          bundle.loadScene("3", function (err, scene) {
            director.runScene(scene);
          });
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c335f210683869ac7c87aaa2616b3e85e2acd174.js.map