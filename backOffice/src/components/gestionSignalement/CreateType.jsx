import "./newUser.css";
import { connect } from "react-redux";
import { useState } from "react";
import { createType } from "../../slices/signalement";

 function CreateType(props) {
  const [libelle,setLibelle]=useState();
  const create=(event)=>{
    event.preventDefault();
  
    props.createType({libelle:libelle}).unwrap().then(data=>{
        console.log("doobbbbeee",data);
    }).catch(err=>{

    })

}
const handleChange=(event)=>{
    event.preventDefault();
    setLibelle(event.target.value);

   
}

  return (
    <div className="newUser">
      <h1 className="newUserTitle">Nouveau type</h1>
      <form className="newUserForm" onSubmit={create}>
        <div className="newUserItem">
          <label>Signalement</label>
          <input onChange={handleChange} type="text" placeholder="nouveau" />
        </div>
        <button className="newUserButton">Create</button>
      </form>
    </div>
  );
}

export default connect(null, {
  createType
})(CreateType);