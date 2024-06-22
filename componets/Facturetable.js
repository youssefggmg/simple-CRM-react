import React, { Component } from 'react';
import "./style/Facturetable.css"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

// Define a class-based component called Facturetable
export default class Facturetable extends Component {
  // Constructor to initialize the state
  constructor() {
    super(); // Call the superclass constructor
    // Initialize the state with factures fetched from localStorage or an empty array if none exist
    this.state = {
      factures: JSON.parse(localStorage.getItem("facture")) || []
    };
  }

  // Method to calculate the total amount excluding tax (HT) for a given facture
  calculateTotalHT(facture) {
    // Use the reduce function to sum up the total for each article in the facture
    return facture.articleSatate.reduce((total, article) => {
      // Parse the quantity, price, and discount (remis) from the article
      const quantite = parseFloat(article.quantite);
      const prix = parseFloat(article.prix);
      const remis = parseFloat(article.remis);
      // Calculate the total for this article considering the discount as a percentage
      const totalArticle = quantite * prix * (1 - remis / 100);
      // Add this article's total to the running total
      return total + totalArticle;
    }, 0); // Initialize the total as 0
  }

  // Render method to display the component
  render() {
    const { factures } = this.state; // Destructure factures from the state for easy access

    return (
      <div className='table'>
        <table>
          <thead>
            <tr>
              <th>Facture ID</th>
              <th>Client</th>
              <th>Montant H.T</th>
              <th>TVA</th>
              <th>Montant TTC</th>
              <th>Details facture</th>
            </tr>
          </thead>
          <tbody>
            {/* Map over the factures array to create a table row for each facture */}
            {factures.map((facture, index) => {
              // Calculate the total amount excluding tax (HT) for the current facture
              const montantHT = this.calculateTotalHT(facture);
              return (
                <tr key={index}>
                  <td>{facture.IDfactur}</td> {/* Display the facture ID */}
                  <td>{facture.facturea}</td> {/* Display the client name */}
                  <td>{montantHT.toFixed(2)}</td> {/* Display the total HT with 2 decimal places */}
                  <td>300</td> {/* Display the VAT (TVA) */}
                  <td>{(montantHT + 300).toFixed(2)}</td>  {/* Display the total amount including tax (TTC) */}
                  <td><FontAwesomeIcon icon={faEye} /></td> {/* Button to view facture details */}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
