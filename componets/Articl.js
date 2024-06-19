import React, { Component } from 'react'
import "./style/articl.css"
import { v4 as uuidv4 } from 'uuid'; 
import { products } from './products';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

export default class Articl extends Component {
    constructor(){
        super();
        // Initial state with an empty article array
        this.state = {
            article:[]
        }
    }
    
    // Method to add a new article to the state
    addarticle = () => {
        this.setState(prevSate => {
            return {
                article: [...prevSate.article, {
                    id: uuidv4(),  // Generate a unique ID for the new article
                    article: "",
                    quantite: "",
                    prix: "",
                    remis: "",
                    montont: ""
                }]
            }
        })
    }

    // Method to handle changes in input fields
    handelChange = (event, id, field) => {
        const { value } = event.target
        this.setState(prevSatate => {
            return {
                article: prevSatate.article.map(e => {
                    if (e.id == id) {
                        const updatedArticl = {
                            ...e,
                            [field]: value  // Update the specific field with the new value
                        }
                        // If the article field is updated, find the corresponding product and update the price
                        if (field === "article") {
                            const product = products.find(p => p.articl === value);
                            updatedArticl.prix = product.prix;
                        }
                        // Update the remise (discount) based on the quantity
                        if (field == "quantite" ) {
                            if (value >= 0 && value <= 50) {
                                updatedArticl.remis = 2
                            }
                            if (value >= 51 && value <= 100) {
                                updatedArticl.remis = 6
                            }
                            if (value > 100) {
                                updatedArticl.remis = 10
                            }
                        }
                        // Calculate the total amount after discount
                        const temp = updatedArticl.prix * updatedArticl.quantite
                        updatedArticl.montont = temp - (temp * updatedArticl.remis / 100)
                        return updatedArticl
                    }
                    return e
                })
            }
        })
    }
    
    render() {
        const { article } = this.state;
        console.log(article)
        return (
            <div className='articls'>
                {/* Button to add a new article */}
                <button className='roundbox' onClick={this.addarticle}><b>+</b> ajouter Articl</button>
                <div className='articletitle'>
                    <h3>Articl</h3>
                    <h3>Quantite</h3>
                    <h3>Prix</h3>
                    <h3>Remise</h3>
                    <h3>Montant</h3>
                </div>
                {/* Map through each article and create a corresponding input form */}
                {article.map((e, i) => {
                    return (
                        <div key={e.id} className='articleinput'>
                            <select onChange={(event) => this.handelChange(event, e.id, "article")} value={e.article}>
                                {products.map((e, i) => {
                                    return (
                                        <option key={i} value={e.articl}> {e.articl} </option>
                                    )
                                })}
                            </select>
                            <input onChange={(event) => this.handelChange(event, e.id, "quantite")} required type='number'></input>
                            <input disabled value={e.prix}></input>
                            <input disabled value={e.remis}></input>
                            <input disabled value={e.montont}></input>
                            {/* Icon to delete an article */}
                            <i class="fa-regular fa-trash-can" data-id={e.id} onClick={this.deleteArticl}></i>
                        </div>
                    )
                })}
            </div>
        )
    }
}
