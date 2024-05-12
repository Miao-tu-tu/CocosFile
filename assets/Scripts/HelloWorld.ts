import { _decorator, Component, SkeletalAnimation, } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('HelloWorld')
export class HelloWorld extends Component {
    SampleSkeletalAnimation:SkeletalAnimation
    start(){
        this.SampleSkeletalAnimation = this.node.getComponent(SkeletalAnimation);
        this.SampleSkeletalAnimation.on(Animation.EventType)
    }
}


