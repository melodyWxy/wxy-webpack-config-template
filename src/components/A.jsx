import React,{Component} from 'react';
import c from './../heightCompnents/c.js';

@c
class A extends Component{
    state={
        a:2
    }
    render(){
        return (
            <div >
                我是组件A{this.state.a}
            </div>
        )
    }
}



export default A;