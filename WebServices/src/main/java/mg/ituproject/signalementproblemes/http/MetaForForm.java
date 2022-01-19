/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package mg.ituproject.signalementproblemes.http;

import java.util.ArrayList;
import java.util.List;
import mg.ituproject.signalementproblemes.utils.FieldError;

/**
 *
 * @author sombiniaina
 */
public class MetaForForm extends Meta{
    public MetaForForm(int status, String message) {
        super(status, message);
        this.fieldsErrors = new ArrayList<>();
    }
    
    public MetaForForm(int status, String message, List<FieldError> fieldsErrors) {
        super(status, message);
        this.fieldsErrors = fieldsErrors;
    }
    
    // Fields
    protected List<FieldError> fieldsErrors;
    
    // Getters && Setters
    public List<FieldError> getFieldsErrors() {
        return fieldsErrors;
    }

    public void addFieldError(FieldError fieldError) {
        this.fieldsErrors.add(fieldError);
    }
    public void addAllFieldsErrors(List<FieldError> fieldsErrors) {
        this.fieldsErrors.addAll(fieldsErrors);
    }
}
