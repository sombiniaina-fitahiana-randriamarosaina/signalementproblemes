
import CreateType from "../../components/gestionSignalement/CreateType";
import ListeSignalement from "../../components/gestionSignalement/ListeSignalement";
import "./Signalement.css";

const Signalement=(props)=>{
    return(

        <div className="homeWidgets">
            <CreateType />
            <ListeSignalement/>
        </div>
    )
}
export default Signalement;