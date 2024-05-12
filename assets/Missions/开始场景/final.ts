import { _decorator, Component,assetManager, director, EventKeyboard,KeyCode, input, Input, error, Scene } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('final')
export class final extends Component {
    start() {
        input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
    }

    onKeyDown(event: EventKeyboard) {
        if (event.keyCode === KeyCode.KEY_A) {
            console.log("a")
        }
    }

    LoadAB1(){ // 加载ab包
        assetManager.loadBundle("test01",(err,bundle)=>{
            console.log(err)
            console.log(bundle.name)
        })
    }

    ReleaseAB1(){ // 释放ab包
        let bundle = assetManager.getBundle("test01")
        bundle.release("1")
        bundle.releaseAll()
        console.log("卸载ab包")
    }

    LoadAB2(){
        assetManager.loadBundle("test02",(err,bundle)=>{
            console.log(err)
            console.log(bundle.name)
        })
    }

    ReleaseAB2(){
        let bundle = assetManager.getBundle("test02")
        bundle.release("2")
        bundle.releaseAll()
        console.log("卸载ab包")
    }

 
    EnterScene1(){
        let bundle = assetManager.getBundle("test01") // 需要先加载ab包
        bundle.loadScene("1",function(err,scene){
            director.runScene(scene)
        })
      
    }
    EnterScene2(){
        let bundle = assetManager.getBundle("test02") 
        bundle.loadScene("2",function(err,scene){
            director.runScene(scene)
        })
    }
 
}


