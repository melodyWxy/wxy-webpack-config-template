import React,{Component} from  'react'


function c (Inconponent){


    return  class C extends Component{

        render(){
            return (
                <div>
                    我是组件C
                    <Inconponent />
                </div>
            )
        }
    }
}


export default c;