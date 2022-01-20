/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package mg.ituproject.signalementproblemes.services;

import java.util.List;
import mg.ituproject.signalementproblemes.models.Region;
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
public class RegionService extends BaseService{
    private void checkNom(Session session, Region region) throws ControlException{
        Criteria criteria = session.createCriteria(Region.class);
        criteria.add(Example.create(region));
        Region result = (Region) criteria.uniqueResult();
        
        if(result != null && region.getId() != result.getId()){
            ControlException ex = new ControlException();
            ex.addError(new FieldError("nom", "Nom existant"));
            throw ex;
        }
    }
    
    public Region save(Region region) throws ControlException{
        try(Session session = this.getSessioFactory().openSession()) {
            Transaction transaction = session.beginTransaction();
            this.checkNom(session, region);
            String id = (String) session.save(region);
            transaction.commit();
            region.setId(id);
            return region;
        }
    }
    
    public List<Region> findAll() throws ControlException{
        try(Session session = this.getSessioFactory().openSession()) {
            Criteria criteria = session.createCriteria(Region.class);
            return criteria.list();
        }
    }
    
    public Region update(Region region) throws ControlException{
        try(Session session = this.getSessioFactory().openSession()) {
            Transaction transaction = session.beginTransaction();
            this.checkNom(session, region);
            session.update(region);
            transaction.commit();
            return region;
        }
    }
}
