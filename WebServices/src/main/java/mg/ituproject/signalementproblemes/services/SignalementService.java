/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package mg.ituproject.signalementproblemes.services;

import java.util.Date;
import java.util.List;
import mg.ituproject.signalementproblemes.models.Region;
import mg.ituproject.signalementproblemes.models.Signalement;
import mg.ituproject.signalementproblemes.utils.ControlException;
import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.criterion.Example;
import org.hibernate.criterion.Restrictions;
import org.springframework.stereotype.Service;

/**
 *
 * @author sombiniaina
 */
@Service
public class SignalementService extends BaseService{
    public List<Signalement> findAll(Signalement signalement) throws ControlException{
        try(Session session = this.getSessioFactory().openSession()) {
            Criteria criteria = session.createCriteria(Signalement.class);
            criteria.add(Example.create(signalement));
            return criteria.list();
        }
    }
    
    public List<Signalement> findAllNonAffecte() throws ControlException{
        try(Session session = this.getSessioFactory().openSession()) {
            Criteria criteria = session.createCriteria(Signalement.class);
            criteria.add(Restrictions.isNull("region.id"));
            return criteria.list();
        }
    }
    
    public List<Signalement> findAllAffecte() throws ControlException{
        try(Session session = this.getSessioFactory().openSession()) {
            Criteria criteria = session.createCriteria(Signalement.class);
            criteria.add(Restrictions.isNotNull("region.id"));
            return criteria.list();
        }
    }
    
    public Signalement findById(String id) throws ControlException{
        try(Session session = this.getSessioFactory().openSession()) {
            return session.get(Signalement.class, id);
        }
    }
    
    public Signalement update(Signalement signalement) throws ControlException{
        try(Session session = this.getSessioFactory().openSession()) {
            Transaction transaction = session.beginTransaction();
            session.update(signalement);
            transaction.commit();
            return signalement;
        }
    }
}
