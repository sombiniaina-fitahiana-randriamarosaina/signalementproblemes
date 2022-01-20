import "./All.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";

import { Link,Redirect } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAll } from "../../slices/signalement";
import { connect } from "react-redux";


 function All(props) {
  const [liste,setListe]=useState();
  useEffect(()=>{
    props.getAll().unwrap()
    .then(data=>{
    }).catch(err => console.log(err));
  },[])
  useEffect(()=>{
    setListe(props.liste)
  },[props.liste])

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
        field: "status",
        headerName: "Status",
        width: 120,
        renderCell: (params) => {
          if(params.row.dateDebutConstruction == null ){
            return (
              <>
                nouveau
              </>
            );
          }
          if(params.row.dateFinConstruction !=null){
            return(
              <>
                terminé
              </>
            )
          }
          else{
            return(
              <>
                en cour
              </>
            )
          }
          },
      },
  ];
  if(redirect){
    return <Redirect to={{
        pathname: '/user/'+ params,
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
 
      />:<DataGrid
      rows={[]}
      disableSelectionOnClick
      columns={columns}
      pageSize={8}
  
  />
      }
      
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log("state",state);
  var liste=state.signalement.all;
  return {liste};
  
}
export default connect(mapStateToProps, {
getAll
})(All);