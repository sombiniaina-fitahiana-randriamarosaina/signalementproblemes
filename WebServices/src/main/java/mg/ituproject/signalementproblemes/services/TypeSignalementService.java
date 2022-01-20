/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package mg.ituproject.signalementproblemes.services;

import java.util.List;
import mg.ituproject.signalementproblemes.models.TypeSignalement;
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
public class TypeSignalementService extends BaseService{
    private void checkLibelle(Session session, TypeSignalement typeSignalement) throws ControlException{
        Criteria criteria = session.createCriteria(TypeSignalement.class);
        criteria.add(Example.create(typeSignalement));
        TypeSignalement result = (TypeSignalement) criteria.uniqueResult();
        
        if(result != null && typeSignalement.getId() != result.getId()){
            ControlException ex = new ControlException();
            ex.addError(new FieldError("libelle", "Libelle existant"));
            throw ex;
        }
    }
            
    public List<TypeSignalement> findAll() throws ControlException{
        try(Session session = this.getSessioFactory().openSession()) {
            Criteria criteria = session.createCriteria(TypeSignalement.class);
            return criteria.list();
        }
    }
    
    public TypeSignalement save(TypeSignalement typeSignalement) throws ControlException{
        try(Session session = this.getSessioFactory().openSession()) {
            Transaction transaction = session.beginTransaction();
            this.checkLibelle(session, typeSignalement);
            String id = (String) session.save(typeSignalement);
            transaction.commit();
            typeSignalement.setId(id);
            return typeSignalement;
        }
    }
    
    public TypeSignalement update(TypeSignalement typeSignalement) throws ControlException{
        try(Session session = this.getSessioFactory().openSession()) {
            Transaction transaction = session.beginTransaction();
            this.checkLibelle(session, typeSignalement);
            session.update(typeSignalement);
            transaction.commit();
            return typeSignalement;
        }
    }
}
