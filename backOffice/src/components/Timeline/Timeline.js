import "../../scss/Timeline.scss";
import Detail from "./Detail";
import {useEffect, useState} from "react"
import { connect } from "react-redux";
const Timeline = (props) => {
	const [items,setItems]=useState([]);
	useEffect(() =>{
		setItems(props.historique);
	},[props.historique])
	let temp=[props.historique];
	const totalItems = items.length;
	const numberOfActiveItems = items.filter(item => item.active).length;
	const progressBarWidth = totalItems > 1 ? (numberOfActiveItems - 1) / (totalItems - 1) * 100 : 0;
	
	return (
		<div className="timeline">
			<div className="timeline-progress" style={{ width: `${progressBarWidth}%`}}></div>
			<div className="timeline-items">
				{items.map((item, i) => (
					<div key={i} className={"timeline-item" + (item.active ? ' active' : '')}>
						<Detail name={i}></Detail>
					</div>
				))}
			</div>
		</div>
	)
}
const mapStateToProps = (state) => {
    console.log("blablballablabalbalbalbl",state);
    const historique=state.historique.historique;
    return {historique};
  };
export default connect(mapStateToProps, null)(Timeline);
