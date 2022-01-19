/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package mg.ituproject.signalementproblemes.services;

import java.util.Date;
import mg.ituproject.signalementproblemes.models.Signalement;
import mg.ituproject.signalementproblemes.models.Utilisateur;
import mg.ituproject.signalementproblemes.utils.ControlException;
import mg.ituproject.signalementproblemes.utils.FieldError;
import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.criterion.Example;
import org.springframework.stereotype.Service;

/**
 *
 * @author sombiniaina
 */
@Service
public class UtilisateurService extends BaseService{
    public Utilisateur login(Utilisateur utilisateur) throws ControlException{
        try(Session session = this.getSessioFactory().openSession()) {
            Criteria criteria = session.createCriteria(Utilisateur.class);
            criteria.add(Example.create(utilisateur));
            utilisateur = (Utilisateur) criteria.uniqueResult();
            if(utilisateur == null){
                ControlException ex = new ControlException();
                ex.addError(new FieldError("non", "nom ou mot de passe incorrecte"));
                ex.addError(new FieldError("motDePassw", "nom ou mot de passe incorrecte"));
                throw ex;
            }
            return utilisateur;
        }
    }
    
    public Signalement addSignalement(Signalement signalement) throws ControlException{
        try(Session session = this.getSessioFactory().openSession()) {
            signalement.setDate(new Date());
            Transaction transaction = session.beginTransaction();
            String id = (String) session.save(signalement);
            transaction.commit();
            signalement.setId(id);
            return signalement;
        }
    }
}
