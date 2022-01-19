/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package mg.ituproject.signalementproblemes.services;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;

/**
 *
 * @author sombiniaina
 */
public class BaseService {
    @Autowired
    private SessionFactory sessioFactory;
    
    // getters and setters
    public SessionFactory getSessioFactory() {
        return sessioFactory;
    }

    public void setSessioFactory(SessionFactory sessioFactory) {
        this.sessioFactory = sessioFactory;
    }
    
}
