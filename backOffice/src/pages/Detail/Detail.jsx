import {
  
    Publish,Chocolate
  } from "@material-ui/icons";
  import { useEffect,useState } from "react";
  import Select from 'react-select'
  import "./Detail.css";
  import { useLocation } from "react-router-dom";
  import { connect } from "react-redux";
  import { getAllAffected,affecter } from "../../slices/signalement";
  import { Link,Redirect } from "react-router-dom";
  function Detail(props) {
    const location = useLocation();
    const[id,setId]=useState();
    const[status,setStatus]=useState([]);
    const [signalement,setSignalement]=useState();
    const[idRegion,setIdRegion]=useState();
    const [redirect,setRedirect]=useState(false);
  
    useEffect(()=>{
  
      setId(location.state.id);
      setSignalement( props.liste.filter( elem=> elem.id == location.state.id));
      console.log('sign',signalement);
  
    },[props.liste]);
  
    useEffect(()=>{
      props.getAllAffected().unwrap()
      .then(data=>{
      }).catch(err => console.log(err));

    },[])
    const handeChangeStatus=(value)=>{
   
      setStatus(value.value)
     
  
    }
  
  
    const options = [
      { value: '0', label: 'terminé' },
      { value: '1', label: 'en cours' },
      { value: '2', label: 'nouveau' },
   
    
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
          <h1 className="userTitle">Mise a jour status</h1>
        
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
                <label>Status</label>
                  <Select  options={options}  className="userUpdateInput"  onChange={value => handeChangeStatus(value)}  />
                </div>
  
                <div className="userUpdateItem">
                <button className="userUpdateButton">Valider</button>
                </div>
    
              </div>
              {/* <div className="userUpdateRight">
                <div className="userUpdateUpload">
                  <img
                    className="userUpdateImg"
                    src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    alt=""
                  />
                  <label htmlFor="file">
                    <Publish className="userUpdateIcon" />
                  </label>
                  <input type="file" id="file" style={{ display: "none" }} />
                </div> */}
                
              {/* </div> */}
            </form>:null
            }
            
          </div>
        </div>
      </div>
    );
  }
  const mapStateToProps = (state) => {
  
    var liste=state.signalement.affected;
   
    return {liste};
    
  }
  export default connect(mapStateToProps, {
  getAllAffected,affecter
  })(Detail);