import '@fortawesome/fontawesome-free/css/all.min.css';
import React,{Component} from "react";
import Facture from "./facture";
import Facturetable from "./Facturetable";

class App extends Component{
    render(){
        return(
            <>
            <Facture/>
            <Facturetable/>
            </>
        )
    }
}
export default App;