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
public class Meta implements Serializable{

    public Meta(int status, String message) {
        this.setStatus(status);
        this.setMessage(message);
    }
    
    // Fields
    protected int status;
    protected String message;
    
    // Getters && Setters
    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
