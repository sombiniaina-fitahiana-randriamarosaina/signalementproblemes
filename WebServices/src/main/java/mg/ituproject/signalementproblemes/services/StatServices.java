/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package mg.ituproject.signalementproblemes.services;

import java.util.List;
import mg.ituproject.signalementproblemes.models.Region;
import mg.ituproject.signalementproblemes.models.StatNbSigReg;
import mg.ituproject.signalementproblemes.utils.ControlException;
import org.hibernate.Criteria;
import org.hibernate.Session;
import org.springframework.stereotype.Service;

/**
 *
 * @author sombiniaina
 */
@Service
public class StatServices extends BaseService {
    public List<StatNbSigReg> findStatNombreSignalementRegion() throws ControlException{
        try(Session session = this.getSessioFactory().openSession()) {
            Criteria criteria = session.createCriteria(StatNbSigReg.class);
            return criteria.list();
        }
    }
}
