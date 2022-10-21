 import React, {Component} from "react";
 export default class Details extends Component {
    constructor(props){
        super(props)
    }
     render() {
        const t = 101;
        return(
            <div>
            {(t > 100) && <p>testing.....</p>}
                <button>{this.props.buttonText}</button>
            </div>
        );
     }
 }