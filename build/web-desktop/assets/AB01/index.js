System.register("chunks:///_virtual/AB01",["./test01.ts"],(function(){return{setters:[null],execute:function(){}}}));

System.register("chunks:///_virtual/test01.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(i){var t,n,e,a,o,r,s,l,p;return{setters:[function(i){t=i.applyDecoratedDescriptor,n=i.inheritsLoose,e=i.initializerDefineProperty,a=i.assertThisInitialized},function(i){o=i.cclegacy,r=i._decorator,s=i.AnimationClip,l=i.SkeletalAnimation,p=i.Component}],execute:function(){var c,u,h,m,f;o._RF.push({},"5dd9cWFG+FBib2pjfh18hZe","test01",void 0);var d=r.ccclass,y=r.property;i("test01",(c=d("test01"),u=y([s]),c((f=t((m=function(i){function t(){for(var t,n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(t=i.call.apply(i,[this].concat(o))||this).animation=void 0,e(t,"animationClips",f,a(t)),t.index=0,t}n(t,i);var o=t.prototype;return o.start=function(){this.animation=this.getComponent(l),this.animation.defaultClip=this.animationClips[this.index],this.animation.play(),this.animation.on(l.EventType.FINISHED,this.NextAnimation,this)},o.NextAnimation=function(){this.animation.defaultClip=this.animationClips[this.index+1],this.animation.play()},t}(p)).prototype,"animationClips",[u],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),h=m))||h));o._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/AB01', 'chunks:///_virtual/AB01'); 
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