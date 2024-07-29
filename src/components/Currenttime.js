import {Component} from "react";
export class Currenttime extends Component{
    render(){
        let dt = new Date
        return <time>{dt.toLocaleTimeString()}</time>
    }
}