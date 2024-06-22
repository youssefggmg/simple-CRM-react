import React, { Component } from 'react'
import "./style/Newclient.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSquareXmark } from "@fortawesome/free-solid-svg-icons"


export default class Newclient extends Component {
    constructor(props){
        super(props);
        this.state = {
            name:false,
            email: false,
            phone: false,
            address: false,
            errors:{
                name: "",
                email: "",
                phone: "",
                address: "",
                lasterror:""
            },
            oldClients: [JSON.parse(localStorage.getItem("client"))] || []
        }
    }
    // this function update the statet in the parent componet to close the modale state name is client form
    closemodale=()=>{
        this.props.updateState(false)
    }

    clientchange=(event,field)=>{
        const {value}=event.target;
        const emailRegex=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (field==="name") {
            if (value.length<3) {
                this.setState(prevState=>({
                    errors: {...prevState.errors, name: "please enter a valid name longer than 3 letters"}
                }))
            }else{
                this.setState(prevState=>({
                    errors: {...prevState.errors, name:""},
                    name:value
                }))
            }
        }
        if(field ==="phonenumber"){
            if (value.length<10 || value.length>10) {
                this.setState(prevState=>({
                    errors: {...prevState.errors, phone: "the phone number must have 10 numbers "}
                }))
            }
            else{
                this.setState(prevState=>({
                    errors: {...prevState.errors, phone:""},
                    phone:value
                }))
            }
        }
        if (field ==="address") {
            if (value.length< 20) {
                this.setState(prevState=>({
                    errors: {...prevState.errors, address: "please enter a valid address longer than 20 letters"}
                }))
            }
            else{
                this.setState(prevState=>({
                    errors: {...prevState.errors, address:""},
                    address:value
                }))
            }
        }
        if (field ==="email") {
            if (!emailRegex.test(value)) {
                this.setState(prevState=>({
                    errors: {...prevState.errors, email: "please enter a valid email"}
                }))
            }
            else{
                this.setState(prevState=>({
                    errors: {...prevState.errors, email:""},
                    email:value
                }))
            }
        }
    }
    addclient=()=>{
        const {address,email,name,phone,oldClients}=this.state
        console.log(address,email,name,phone)
        if(!name || !email ||!phone ||!address){
            this.setState(prevState=>({
                errors:{...prevState.errors,lasterror:"please inter all the nasesar informations "}
            }))
        }
        else{ 
            console.log("i'm in ");
            const client = {
                name:name,
                phone: phone,
                address: address,
                email:email
                }
                    oldClients.push(client)
                localStorage.setItem("client",JSON.stringify(oldClients))
                this.setState({
                    name:"",
                    phone:"",
                    address:"",
                    email:"",
                    errors:{
                        name: "",
                        email: "",
                        phone: "",
                        address: "",
                        lasterror:""
                    }
                    })
                    this.setState(prevState=>({
                        errors:{...prevState.errors,lasterror:""}
                    }))
                    this.closemodale()
        }
    }
    render() {
        const {isActive}=this.props;
        const {address,email,name,phone,lasterror}=this.state.errors
        console.log();
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
                            <input id="name" className='clientInput' onChange={(event)=>this.clientchange(event,"name")} required></input>
                        </div>
                        <p className='error'> {name}</p>
                        <div className='inputs'>
                            <label for='phonenumber'>Phonenumber</label>
                            <input id="phonenumber" className='clientInput' onChange={(event)=>this.clientchange(event,"phonenumber")} required type='number' onWheel={(e) => e.target.blur()} ></input>
                        </div>
                        <p className='error'>{phone}</p>
                        <div className='inputs'>
                            <label for='addres'>Addres </label>
                            <input id="addres"className='clientInput' onChange={(event)=>this.clientchange(event,"address")} required></input>
                        </div>
                        <p className=' error'>{address}</p>
                        <div className='inputs'>
                            <label for='email' >email</label>
                            <input id="email"className='clientInput' onChange={(event)=>this.clientchange(event,"email")} required></input>
                        </div>
                        <p className='error'>{email}</p>
                        <div className='inputs'>
                            <button className='addButton roundbox' onClick={this.addclient} ><b>Add</b></button>
                        </div>
                        <p className='error'>{lasterror}</p>
                    </div> 
                ):(<></>)

            }
            </div>
        )
    }
}
