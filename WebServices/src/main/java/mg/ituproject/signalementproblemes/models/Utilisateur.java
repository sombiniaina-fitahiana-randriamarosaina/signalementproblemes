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
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

/**
 *
 * @author sombiniaina
 */
@Entity
@Table(name = "utilisateur")
public class Utilisateur {
    // Fields
    @Id @GeneratedValue(strategy=GenerationType.IDENTITY) @Column(nullable = false, updatable = false, name="idutilisateur")
    protected String id;
    
    @Column(name = "emailutilisateur")
    protected String email;
    
    @Column(name = "motdepasse")
    protected String motDePasse;
    
    @Column(name = "role")
    protected String role;
    
    @OneToOne @JoinColumn(name="idregion", referencedColumnName = "idregion")
    protected Region region;

    // Getters && Setters
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getMotDePasse() {
        return motDePasse;
    }

    public void setMotDePasse(String motDePasse) {
        this.motDePasse = motDePasse;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public Region getRegion() {
        return region;
    }

    public void setRegion(Region region) {
        this.region = region;
    }
    
    
}
