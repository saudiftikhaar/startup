import React, { Component } from "react";
import Image from './Image';
import Details from './Details';
export default class App extends Component {
       render() {
        return(
            <div>
               <Image
                url="https://randomuser.me/portraits/women/22.jpg"
                />
               <Details 
               para = "ANY TEXT"
               buttonText = "Click Here"
               />
            </div>
        );
       }
}