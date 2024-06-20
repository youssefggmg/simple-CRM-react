import React, { Component } from 'react'
import "./style/facture.css"
import Articl from "./Articl";
import Newclient from './Newclient';

export default class Facture extends Component {
    constructor(){
        super();
        this.state ={
            IDfactur:"",
            dateFactur:"",
            facturea:"",
            numberArticle:0,
            articleSatate:[],
            clints:[],
            clientform:false
        }
    }
    numberOfArtecls=(articles)=>{
        // console.log(articles);
        this.setState({numberArticle:articles});
    }
    ArticlState=(articles)=>{
        // console.log(articles);
        this.setState({articleSatate:articles});
    }
    handelSelect=(event)=>{
        const {value}= event.target
        console.log(value)
        if (value === "addClient") {
            this.setState({clientform:true})
        }
        else(
            this.setState({clientform:false})
        )
    }
    // this function was made to update the state frpm the ciled component
    updateState=(state)=>{
        this.setState({clientform:state})
    }
    render() {
        const {clientform,clints} = this.state
        console.log(clientform);
        return (
            <div className='facture'>
                <form>
                    <input type='number' placeholder='ID facture' className='IDfactury roundbox'></input>
                    <input type='date' placeholder='date facture' className='datefacture roundbox'></input>
                    <select className='select roundbox' onChange={this.handelSelect}>
                        <option className='bold'  >sdfysiu</option>
                        <option className='bold' value="addClient" >+ ajouter client</option>
                    </select>
                    <button type='submit' className="roundbox" disabled={this.state.numberArticle===0}>Ajouter facture</button>
                </form>
                <Articl numberOfArtecls={this.numberOfArtecls} ArticlState={this.ArticlState} />
                <Newclient isActive={clientform} updateState={this.updateState}/>
            </div>
        )
    }
}
