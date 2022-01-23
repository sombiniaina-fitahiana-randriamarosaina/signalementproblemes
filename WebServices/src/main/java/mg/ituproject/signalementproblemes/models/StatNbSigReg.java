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
    protected String name;
    
    @Column(name = "nombre")
    protected String nombre;
    
    // Setters && Getters
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
}
