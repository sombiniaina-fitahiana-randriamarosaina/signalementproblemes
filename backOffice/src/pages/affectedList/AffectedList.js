import "./AffectedList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link,Redirect } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllAffected } from "../../slices/signalement";
import { connect } from "react-redux";


 function AffectedList(props) {
    const [liste,setListe]=useState();
  useEffect(()=>{
        props.getAllAffected().unwrap()
        .then(data=>{
            console.log("data",data);
        }).catch(err => console.log(err));
 
   
  },[])
  useEffect(()=>{
      setListe(props.liste)
  },[props.liste])

  const [redirect,setRedirect]=useState(false);
  const [params,setParams]=useState();


  
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
            return (
              <>
               
               <h1>nouveau</h1>
               
              </>
            );
          },

      },
   
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
           
           <Link to={{ pathname: '/updateStatus/', state: { id: params.row.id} }}>
             <button  className="userListEdit">Update Status</button>
            </Link>
           
          </>
        );
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
    console.log("sataete",state);
  var liste=state.signalement.affected;
  return {liste};
  
}
export default connect(mapStateToProps, {
getAllAffected
})(AffectedList);