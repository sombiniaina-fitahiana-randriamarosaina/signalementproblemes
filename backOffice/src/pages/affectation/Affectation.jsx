import {
  
  Publish,Chocolate
} from "@material-ui/icons";
import { useEffect,useState } from "react";
import Select from 'react-select'
import "./user.css";
import { useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { getAllNotAffected,affecter } from "../../slices/signalement";
import { getAllRegion } from "../../slices/region";
import { Link,Redirect } from "react-router-dom";
function Affectation(props) {
  const location = useLocation();
  const[id,setId]=useState();
  const[region,setRegion]=useState([]);
  const [signalement,setSignalement]=useState();
  const[idRegion,setIdRegion]=useState();
  const [redirect,setRedirect]=useState(false);

  useEffect(()=>{

    setId(location.state.id);
    setSignalement( props.liste.filter( elem=> elem.id == location.state.id));
    console.log('sign',signalement);

  },[props.liste]);

  useEffect(()=>{
    props.getAllNotAffected().unwrap()
    .then(data=>{
    }).catch(err => console.log(err));
    props.getAllRegion();
  },[])
  const handeChangeRegion=(value)=>{
 
    setIdRegion(value.value)
   

  }


  const options = [
    { value: 'REG1', label: 'Diana' },
    { value: 'REG1', label: 'Sava' },
    { value: 'REG1', label: 'Itasy' },
    { value: 'REG1', label: 'Analamanga' },
    { value: 'REG1', label: 'Vakinankaratra' }

  ]

  const submit=(event)=>{
      event.preventDefault();
      let data={idSIG:signalement[0].id,idREG:idRegion}
      console.log(
        "hhhhhhaaaaaa",data
      );
      props.affecter(data).unwrap().then(data=>{
      setRedirect(true)
      }).catch(error=>{
        console.log(error);
      })

  }
  if(redirect){
    return <Redirect to={{
        pathname: '/users/'

    }}/>
}
 
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Affectation Region</h1>
        {/* <Link to="/newUser">
          <button className="userAddButton">Create</button>
        </Link> */}
      </div>
      <div className="userContainer">
        
        <div className="userUpdate">
          <span className="userUpdateTitle">Signalement</span>
          {
            signalement ?
            <form className="userUpdateForm" onSubmit={submit}>
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Type</label>
                <input
                  type="text"
                  placeholder={signalement[0].typeSignalement.libelle}
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Description</label>
                <input
                  type="text"
                  placeholder={signalement[0].description}
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Date</label>
                <input
                  type="text"
                  placeholder={signalement[0].date}
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
              <label>Region</label>
                <Select  options={options}  className="userUpdateInput"  onChange={value => handeChangeRegion(value)}  />
              </div>

              <div className="userUpdateItem">
              <button className="userUpdateButton">Valider</button>
              </div>
  
            </div>
            
              
         
          </form>:null
          }
          
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {

  var liste=state.signalement.notAffected;
  var region=state.region.liste;
  return {liste};
  
}
export default connect(mapStateToProps, {
getAllNotAffected,getAllRegion,affecter
})(Affectation);