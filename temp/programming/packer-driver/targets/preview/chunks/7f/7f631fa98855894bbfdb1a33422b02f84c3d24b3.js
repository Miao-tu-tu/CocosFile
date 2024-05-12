System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, _dec, _class, _crd, ccclass, property, HelloWorld;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "91a01IasYxJKrtEwVV/0gpe", "HelloWorld", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'log']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("HelloWorld", HelloWorld = (_dec = ccclass('HelloWorld'), _dec(_class = class HelloWorld extends Component {
        start() {
          var studentID = 2202100471;
          var studentIDArray = [studentID];

          for (var i = 0; i < studentIDArray.length; i++) {
            switch (studentIDArray[i]) {
              case 1:
              case 3:
              case 5:
              case 7:
                if (studentIDArray[i] % 2 === 1) {
                  // 相加
                  studentIDArray[i + 1] = studentIDArray[i] + 1;
                } else {
                  // 相减
                  studentIDArray[i + 1] = studentIDArray[i] - 1;
                }

                break;

              case 2:
              case 4:
              case 6:
                if (studentIDArray[i] % 2 === 0) {
                  // 相加
                  studentIDArray[i + 1] = studentIDArray[i] + 1;
                } else {
                  // 相减
                  studentIDArray[i + 1] = studentIDArray[i] - 1;
                }

                break;

              default:
                // 其他情况不进行操作
                break;
            }

            if (studentIDArray[i + 1] > 10 || studentIDArray[i + 1] < -10) {
              break;
            }

            console.log(studentIDArray[i + 1]);
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7f631fa98855894bbfdb1a33422b02f84c3d24b3.js.map