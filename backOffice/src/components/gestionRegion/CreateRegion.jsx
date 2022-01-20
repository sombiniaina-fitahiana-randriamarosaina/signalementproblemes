import "./newUser.css";
import { createRegion } from "../../slices/region";
import { connect } from "react-redux";
import { useState } from "react";

function CreateRegion(props) {
    const [nom,setNom]=useState();
    const create=(event)=>{
        event.preventDefault();
        console.log("nnnnn",nom);
        props.createRegion({nom:nom}).unwrap().then(data=>{
            console.log("doobbbbeee",data);
        }).catch(err=>{

        })

    }
    const handleChange=(event)=>{
        event.preventDefault();
        setNom(event.target.value);

       
    }
  return (
    <div className="newUser">
      <h1 className="newUserTitle">Nouvelle Region</h1>
      <form className="newUserForm" onSubmit={create}>
        <div className="newUserItem">
          <label>Region</label>
          <input onChange={handleChange} type="text" placeholder="nom" />
        </div>
        <button className="newUserButton">Create</button>
      </form>
    </div>
  );
}
const mapStateToProps = (state) => {
   
    
  }
  export default connect(null, {
    createRegion
  })(CreateRegion);