/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package mg.ituproject.signalementproblemes.models;

import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

/**
 *
 * @author sombiniaina
 */
@Entity
@Table(name = "signalement")
public class Signalement {
    // Fields
    @Id @GeneratedValue(strategy=GenerationType.IDENTITY) @Column(nullable = false, updatable = false, name="idsignalement")
    protected String id;
    
    @Column(name = "description")
    protected String description;
    
    @Column(name = "datesignalement") @Temporal(TemporalType.TIMESTAMP)
    protected Date date;
    
    @Column(name = "datedebutconstruction") @Temporal(TemporalType.TIMESTAMP)
    protected Date dateDebutConstruction;
    
    @Column(name = "datefinconstruction") @Temporal(TemporalType.TIMESTAMP)
    protected Date dateFinConstruction;
    
    @OneToOne @JoinColumn(name="idutilisateur", referencedColumnName = "idutilisateur")
    protected Utilisateur utilisateur;
    
    @OneToOne @JoinColumn(name="idtypesignalement", referencedColumnName = "idtypesignalement")
    protected TypeSignalement typeSignalement;
    
    @OneToOne @JoinColumn(name="idregion", referencedColumnName = "idregion")
    protected Region region;
    
    // Getters && Setters
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Date getDateDebutConstruction() {
        return dateDebutConstruction;
    }

    public void setDateDebutConstruction(Date dateDebutConstruction) {
        this.dateDebutConstruction = dateDebutConstruction;
    }

    public Date getDateFinConstruction() {
        return dateFinConstruction;
    }

    public void setDateFinConstruction(Date dateFinConstruction) {
        this.dateFinConstruction = dateFinConstruction;
    }

    public Utilisateur getUtilisateur() {
        return utilisateur;
    }

    public void setUtilisateur(Utilisateur utilisateur) {
        this.utilisateur = utilisateur;
    }

    public TypeSignalement getTypeSignalement() {
        return typeSignalement;
    }

    public void setTypeSignalement(TypeSignalement typeSignalement) {
        this.typeSignalement = typeSignalement;
    }

    public Region getRegion() {
        return region;
    }

    public void setRegion(Region region) {
        this.region = region;
    }
    
}
