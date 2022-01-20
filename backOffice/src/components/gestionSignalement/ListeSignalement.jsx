
import "./widgetLg.css";
import { useState,useEffect } from "react";
import { getAllType } from "../../slices/signalement";
import { connect } from "react-redux";

function ListeSignalement(props) {
  const [types,setTypes]=useState();

  useEffect(()=>{
      props.getAllType().unwrap().then(data=>{
      }).catch(error=>{
          console.log(error);

      })

  },[])

  useEffect(()=>{
      setTypes(props.types);
    
     
  },[props.types])


  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Liste Type Signalement</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Signalement</th>
        </tr>
        {
          types ? types.map(type=>{
            return  <tr className="widgetLgTr">
            <td className="widgetLgDate">{type.libelle}</td>
          </tr>
          }) :null
        }
       
      </table>
    </div>
  );
}
const mapStateToProps = (state) => {
  console.log("state",state);
  var types=state.signalement.types;
  return {types};
  
}
export default connect(mapStateToProps, {
  getAllType
})(ListeSignalement);