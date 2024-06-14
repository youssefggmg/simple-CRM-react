import React, { Component } from 'react'
import "./style/Facturetable.css"

export default class Facturetable extends Component {
  render() {
    return (
      <div className='table'>
        <table>
            <tr>
                <th>Facture ID</th>
                <th>Client </th>
                <th>Montant H.T</th>
                <th>TVA</th>
                <th>Montant TTC</th>
                <th>Details facture</th>
            </tr>
        </table>
      </div>
    )
  }
}
