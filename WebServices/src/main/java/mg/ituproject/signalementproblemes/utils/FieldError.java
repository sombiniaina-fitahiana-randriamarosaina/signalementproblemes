/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package mg.ituproject.signalementproblemes.utils;

import java.io.Serializable;

/**
 *
 * @author sombiniaina
 */
public class FieldError implements Serializable{

    public FieldError(String field, String message) {
        this.setField(field);
        this.setMessage(message);
    }
    
    protected String field;
    protected String message;

    public String getField() {
        return field;
    }

    public void setField(String field) {
        this.field = field;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
