import React, { Component } from 'react'
import "./style/facture.css"
import Articl from "./Articl";

export default class Facture extends Component {
    constructor(){
        super();
        this.state ={
            IDfactur:"",
            dateFactur:"",
            facturea:"",
            numerArticle:this.numberOfArtecls
        }
    }
    numberOfArtecls=(articls)=>{
        this.setState.numerArticle
        }
        render() {
            console.log("")
            let classNamed="s"
            let disable=false
            if (this.numberOfArtecle) {
            classNamed="disacble";
            disable=true
        }
        return (
            <div className='facture'>
                <form>
                    <input type='number' placeholder='ID facture' className='IDfactury roundbox'></input>
                    <input type='date' placeholder='date facture' className='datefacture roundbox'></input>
                    <select className='select roundbox'></select>
                    <button type='submit' className={`roundbox ${classNamed}`} disabled={disable} >Ajouter facture</button>
                </form>
                <Articl numberOfArtecls={this.numberOfArtecls}/>
            </div>
        )
    }
}
