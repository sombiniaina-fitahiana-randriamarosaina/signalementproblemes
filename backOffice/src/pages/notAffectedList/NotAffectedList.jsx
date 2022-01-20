import "./notAffected.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { signalement } from "../../dummyData";
import { Link,Redirect } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllNotAffected } from "../../slices/signalement";
import { connect } from "react-redux";


 function NotAffectedList(props) {
  const [liste,setListe]=useState();
  useEffect(()=>{
    props.getAllNotAffected().unwrap()
    .then(data=>{
    }).catch(err => console.log(err));
  },[])
  useEffect(()=>{
    setListe(props.liste)
  },[props.liste])

  const [data, setData] = useState(signalement);
  const [redirect,setRedirect]=useState(false);
  const [params,setParams]=useState();

  const handleClick = (id) => {
  
    setRedirect(true);
    setParams(id);
  };
  
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "type",
      headerName: "Type",
      width: 200,
      valueGetter: (params) => {
        console.log("aaaa",params);
        let result = [];
        if (params.row.typeSignalement) {
          if (params.row.typeSignalement.libelle) {
            result.push(  params.row.typeSignalement.libelle);
          }
        
        }
        return result.join(", ");
      }
    },
    { field: "description", headerName: "Description", width: 200 },
    {
      field: "date",
      headerName: "Date",
      width: 120,
    },
   
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
           
           <Link to={{ pathname: '/affectation/', state: { id: params.row.id} }}>
             <button  className="userListEdit">Affecter</button>
            </Link>
           
           


          </>
        );
      },
    },
  ];
  if(redirect){
    return <Redirect to={{
        pathname: '/affect/'+ params,
        state: {  id: params }
    }}/>
}
 
  return (
    <div className="userList">
      {
        liste ?
        <DataGrid
          rows={liste}
          disableSelectionOnClick
          columns={columns}
          pageSize={8}
        // checkboxSelection
      />:<DataGrid
      rows={[]}
      disableSelectionOnClick
      columns={columns}
      pageSize={8}
    // checkboxSelection
  />
      }
      
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log("state",state);
  var liste=state.signalement.notAffected;
  return {liste};
  
}
export default connect(mapStateToProps, {
getAllNotAffected
})(NotAffectedList);