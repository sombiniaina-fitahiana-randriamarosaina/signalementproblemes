import CreateRegion from "../../components/gestionRegion/CreateRegion";
import ListRegion from "../../components/gestionRegion/ListRegion";
import "./Region.css";

const Region=(props)=>{
    return(

        <div className="homeWidgets">
            <CreateRegion/>
            <ListRegion/>
        </div>
    )
}
export default Region;