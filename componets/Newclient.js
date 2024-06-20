import React, { Component } from 'react'
import "./style/Newclient.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSquareXmark } from "@fortawesome/free-solid-svg-icons"


export default class Newclient extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: "",
            email: "",
            phone: "",
            address: ""
        }
    }
    // this function update the statet in the parent componet to close the modale state name is client form
    closemodale=()=>{
        this.props.updateState(false)
    }

    render() {
        const {isActive}=this.props
        return (
            <div>
                {isActive ? (
                    <div className='addform'>
                        {/* <button className='colseButton'> */}
                        <FontAwesomeIcon icon={faSquareXmark} size="2xl" style={{color: "#ff0000",}} className={'colseButton'} onClick={this.closemodale}/>
                        {/* </button> */}
                        <h1 className='addClient'>addClient</h1>

                        <div className='inputs'>
                            <label for='name' >Name</label>
                            <input id="name" className='clientInput'></input>
                        </div>
                        <div className='inputs'>
                            <label for='phonenumber'>phone number</label>
                            <input id="phonenumber" className='clientInput'></input>
                        </div>
                        <div className='inputs'>
                            <label for='addres'>Addres </label>
                            <input id="address"className='clientInput'></input>
                        </div>
                        <div className='inputs'>
                            <label for='email' >email</label>
                            <input id="email"className='clientInput'></input>
                        </div>
                    </div> 
                ):(<></>)

            }
            </div>
        )
    }
}
