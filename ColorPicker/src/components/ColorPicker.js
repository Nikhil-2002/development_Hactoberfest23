// import { useState } from "react";
import { Component } from "react";
import './ColorPicker.css';

class ColorPicker extends Component{
    constructor(props){
        super(props);
        this.state = {bgcolor: "white",colorList: []};
        this.changeBG = this.changeBG.bind(this);
        this.pickColor = this.pickColor.bind(this);
    }

    changeBG(color){
        this.setState({colorList: []})
        this.setState({bgcolor:color});
        
    }

    pickColor(){
        var colorItems = this.props.colorArray.map((color) => 
            <button key = {color} onClick = {this.changeBG.bind(this, color)} className = "colorButton" style={{backgroundColor:color, border:color}}></button>
        );
        this.setState({colorList: colorItems});

    }

    render(){
        
        return(
            <div>
            <h1>Color Picker</h1>
            <div className = "container" style = {{backgroundColor: this.state.bgcolor}}>
                <div>{this.state.colorList}</div>
                <button className = "pickColor" onClick={this.pickColor}>Pick a color</button>
            </div>
            </div>
            
        )
    }

    
}

export default ColorPicker;