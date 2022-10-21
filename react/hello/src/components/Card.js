import React, {Component} from 'react';
export default class Card extends Component {
       constructor(props){
        super(props)
       }
        render() {
          const style = {
            color: "red",
            background: "blue"
          }
        return (
                 <div>
                        <p style={style}>{this.props.title}</p>
                        <button style={style}>{this.props.buttonText}</button>
                 </div>

        );
       }
}