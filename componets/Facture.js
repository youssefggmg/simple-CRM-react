import React, { Component } from 'react'
import "./style/facture.css"
import Articl from "./Articl";
import Newclient from './Newclient';
import { v4 as uuidv4 } from 'uuid'; 

export default class Facture extends Component {
    constructor(){
        super();
        this.state ={
            error:"",
            IDfactur:uuidv4(),
            dateFactur:false,
            facturea:"",
            numberArticle:0,
            articleSatate:[],
            clientform:false,
            oldClients: JSON.parse(localStorage.getItem("client"))||[],
            oldFacturs: JSON.parse(localStorage.getItem("facture"))||[],
        }
        this.Articl=React.createRef()
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
            this.setState({facturea:value})
        )
    }
    // this function was made to update the state frpm the ciled component
    updateState=(state)=>{
        this.setState({clientform:state})
    }

    factureHandler=(event,field)=>{
        const {value}= event.target
        this.setState({dateFactur:value})
    }
    emtyTheArticle=()=>{
        this.Articl.current.returnDefualt([])
    }
    addFacture=(event)=>{
        event.preventDefault();
        console.log("clicked")
        const {error,IDfactur,dateFactur,facturea,numberArticle,articleSatate,clientform,oldClients,oldFacturs}=this.state
        // IDfactur=uuidv4();
        if ( dateFactur === false || facturea === "") {
            this.setState({error:"please fill all the fields"})
        }
        else{
            const newFacture={
                IDfactur:IDfactur,
                dateFactur:dateFactur,
                facturea:facturea,
                articleSatate:articleSatate,
            }
            this.setState({
                error:"",
                IDfactur:uuidv4()
            });
            oldFacturs.push(newFacture)
            this.setState({oldFacturs})
            localStorage.setItem("facture",JSON.stringify(oldFacturs) )
            this.emtyTheArticle()
        }
    }
    render() {
        const {clientform,clints,oldClients,articleSatate,error} = this.state
        console.log(articleSatate);
        console.log(clientform)
        // console.log(this.Articl);

        return (
            <div className='facture'>
                <form>
                    <input type='date' placeholder='date facture' className='datefacture roundbox' onChange={this.factureHandler}></input>
                    <select className='select roundbox' onChange={this.handelSelect}>
                        {
                            oldClients.map((client,i)=>{
                                return <option key={i} value={client.name}>{client.name}</option>
                            })
                        }
                        <option className='bold' value="addClient" >+ ajouter client</option>
                    </select>
                    <button className="roundbox" disabled={this.state.numberArticle===0} onClick={(event)=>this.addFacture(event)}>Ajouter facture</button>
                </form>
                <p className='error center' >{error}</p>
                <Articl numberOfArtecls={this.numberOfArtecls} ArticlState={this.ArticlState} ref={this.Articl} />
                <Newclient isActive={clientform} updateState={this.updateState}/>
            </div>
        )
    }
}
