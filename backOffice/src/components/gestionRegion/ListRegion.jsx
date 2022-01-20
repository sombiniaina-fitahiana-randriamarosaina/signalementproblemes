import "./widgetLg.css";
import { getAllRegion } from "../../slices/region";
import { connect } from "react-redux";
import { useEffect ,useState} from "react";
function ListRegion(props) {
    const [regions,setRegions]=useState();
    useEffect(()=>{
        props.getAllRegion().unwrap().then(data=>{

        }).catch(error=>{
            console.log(error);
        })
       
    },[])
    useEffect(()=>{
        setRegions(props.regions);
        console.log("props",props.regions);
    },[props.regions])
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Liste Regions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Noms</th>
        </tr>
        {
            regions?
            regions.map(region=>{
                return <tr className="widgetLgTr">
                <td className="widgetLgDate">{region.nom}</td>
              </tr>
            }):null

        }
        
      </table>
    </div>
  );
}
const mapStateToProps = (state) => {
    console.log("state",state);
    var regions=state.region.liste;
    return {regions};
    
  }
  export default connect(mapStateToProps, {
    getAllRegion
  })(ListRegion);