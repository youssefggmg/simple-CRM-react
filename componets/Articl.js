import React, { Component } from 'react'
import "./style/articl.css"

export default class Articl extends Component {
    constructor(){
        super();
        this.state = {
            // noa means the number of articls
            noa:0,
        }
    }
    addarticle=()=>{
        this.setState({ 
            noa:this.state.noa+1
            })
    }
    render() {
        console.log(this.state.noa);
        return (
            <div className='articls'>
                <button className='roundbox' onClick={this.addarticle}><b>+</b> ajouter Articl</button>
                <div className='articletitle'>
                    <h3>Articl</h3>
                    <h3>Quantite</h3>
                    <h3>Prix</h3>
                    <h3>Remise</h3>
                    <h3>Montant</h3>
                </div>
                <div className='articleinput'>
                <select></select>
                <input></input>
                <input></input>
                <input></input>
                <input></input>
                </div>
            </div>
        )
    }
}
