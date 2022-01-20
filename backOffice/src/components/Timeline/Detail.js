import { useEffect, useState } from "react";
import "../../scss/Timeline.scss";
import { connect } from "react-redux";

const Detail = (props) => {
    const [title,setName]=useState(undefined)
    const [item,setItem]=useState(undefined);
    const [historique,setHistorique]=useState([]);
    useEffect(()=>{
        console.log("hhhhhh",props.name);
        const a=props.historique[props.name];

        setItem(a);
        setHistorique(a);

    },[props.name,props.historique])
    const stock=(item)=>{
        return(
            <>
                <span>Stock</span><br/>
                <span>date:{item.dateAttribution}</span>
                <span> validateur:{item.idUser}</span>
            </>
        )
    }
    const service=(item)=>{
        return(
            <>
            <span>Service : {item.idServiceDest}</span>
            <span>date:{item.dateAttribution}</span>
            <span> validateur:{item.idUser}</span>
         </>
        )
       
    }
    const technicien=(item)=>{
        return(
            <>
            <span>Technicien</span>
         </>
        )
    }
  

    const createRender=(item)=>{
        if(item.stock==1){
            return stock(item);
        }
        if(item.attributionservice ==1 || item.transfertservice == 1){
            return service(item);
        }
        if(item.attributiontechnicien==1 || item.transferttechnicien ==1 ){
            return technicien(item);
        }
    }
	return (
		<div className="timeline-content">
            {
                item && 
                createRender(item)
            }
			
		</div>
	)
}

const mapStateToProps = (state) => {
    console.log("blablballablabalbalbalbl",state);
    const historique=state.historique.historique;
    return {historique};
  };
export default connect(mapStateToProps, null)(Detail);
