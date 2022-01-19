/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package mg.ituproject.signalementproblemes.http;

import java.io.Serializable;

/**
 *
 * @author sombiniaina
 */
public class Response implements Serializable{
    public Response(Meta meta, Object data){
        this.setMeta(meta);
        this.setData(data);
    }
    
    protected Meta meta;
    protected Object data;

    public Meta getMeta() {
        return meta;
    }

    public void setMeta(Meta meta) {
        this.meta = meta;
    }

    public Object getData() {
        return data;
    }

    public void setData(Object data) {
        this.data = data;
    }
}
