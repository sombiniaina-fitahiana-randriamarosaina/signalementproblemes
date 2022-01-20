/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package mg.ituproject.signalementproblemes.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 *
 * @author sombiniaina
 */
@Entity
@Table(name = "stat_nbsignalement_region")
public class StatNbSigReg {
    // Fields
    @Id @Column(name="nomregion")
    protected String x;
    
    @Column(name = "nombre")
    protected String y;
    
    // Setters && Getters
    public String getX() {
        return x;
    }

    public void setX(String x) {
        this.x = x;
    }

    public String getY() {
        return y;
    }

    public void setY(String y) {
        this.y = y;
    }
}
