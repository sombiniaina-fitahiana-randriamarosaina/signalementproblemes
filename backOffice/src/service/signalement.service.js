import http from "../http-common";

class SignalementService {
    getAllNotAffected()
    {
       return http.get("admin/signalements-non-affecte",{mode:'cors'},{credentials: 'include'},{withCredentials: true});
    }
    getAllAffected(){
        return http.get("admin/signalements-affecte",{mode:'cors'},{credentials: 'include'},{withCredentials: true});
    }
    getAll(){
        return http.get("admin/signalements",{mode:'cors'},{credentials: 'include'},{withCredentials: true});
    }
    affectation(data){
        return http.post(`admin/signalements/${data.idSIG}/affecte`,{id:data.idREG},{mode:'cors'},{credentials: 'include'},{withCredentials: true});
    }
    createType(data){
        return http.post(`admin/type-signalements/`,data,{mode:'cors'},{credentials: 'include'},{withCredentials: true});
    }
    getAllType(){
        return http.get("admin/type-signalements/",{mode:'cors'},{credentials: 'include'},{withCredentials: true});
    }
}
export default new SignalementService();