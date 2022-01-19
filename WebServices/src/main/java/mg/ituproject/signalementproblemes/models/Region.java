/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package mg.ituproject.signalementproblemes.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 *
 * @author sombiniaina
 */
@Entity
@Table(name = "region")
public class Region {
    // Fields
    @Id @GeneratedValue(strategy=GenerationType.IDENTITY) @Column(nullable = false, updatable = false, name="idregion")
    protected String id;
    
    @Column(name = "nomregion")
    protected String nom;

    // Getters && Setters
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }
    
    
}
