package com.realestate.repository.impl;

import com.realestate.data.BaseHibernateJPARepository;
import com.realestate.exception.NotFoundException;
import com.realestate.model.entity.Property;
import com.realestate.model.entity.User;
import com.realestate.repository.PropertyRepository;
import org.hibernate.Query;
import org.springframework.stereotype.Repository;

import java.math.BigDecimal;
import java.sql.PreparedStatement;
import java.util.List;

/**
 * Created by arm on 6/6/2017.
 */
@Repository
public class PropertyRepositoryImpl  extends BaseHibernateJPARepository<Property, Long> implements PropertyRepository {

    @Override
    public List<Property> findAllPorperties() {
        return (List<Property>) this.findAllByPage(-1, -1, null);
    }

    @Override
    public Property findPropertyById(long id)throws NotFoundException {
         Property property = new Property();

        Query query = sessionFactory.getCurrentSession().createSQLQuery("select * from PROPERTY p where p.PROPERTY_ID = :id");
        query.setParameter("id", id);


        Object[] result = (Object[]) query.uniqueResult();
        BigDecimal propertyId = (BigDecimal)result[0];
        property.setPropertyId(propertyId.longValue());
        property.setCity((String)result[3]);
        property.setAddress((String)result[2]);
        property.setName((String)result[1]);



        return property;
    }
}
