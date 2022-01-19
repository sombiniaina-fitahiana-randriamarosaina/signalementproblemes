/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package mg.ituproject.signalementproblemes.utils;

import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author sombiniaina
 */
public class ControlException extends Exception{
    public ControlException() {
        this.errors = new ArrayList<>();
    }
    
    // Fields
    private List<FieldError> errors;
    
    // Getters && Setters
    public List<FieldError> getErrors() {
        return errors;
    }
    
    public void addError(FieldError error){
        this.errors.add(error);
    }
    
    public void required(String field, Object value){
        this.errors.add(new FieldError(field, "required!"));
    }
    
    public void exist(String field,Object value){
        this.errors.add(new FieldError(field, "already exist!"));
    }
    
    // Others Methods
    public boolean hasErrors(){
        return this.errors.size() != 0;
    }
}
