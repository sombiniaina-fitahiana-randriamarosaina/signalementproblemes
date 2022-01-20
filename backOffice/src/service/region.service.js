import http from "../http-common";

class RegionService {
    getAllRegion()
    {
       return http.get("admin/regions",{mode:'cors'},{credentials: 'include'},{withCredentials: true});
    }
    create(data){
        return http.post("admin/regions",data,{mode:'cors'},{credentials: 'include'},{withCredentials: true});
    }
}
export default new RegionService();