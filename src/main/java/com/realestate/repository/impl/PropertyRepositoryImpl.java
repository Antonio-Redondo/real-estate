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
import java.util.ArrayList;
import java.util.List;

/**
 * Created by arm on 6/6/2017.
 */
@Repository
public class PropertyRepositoryImpl  extends BaseHibernateJPARepository<Property, Long> implements PropertyRepository {

    @Override
    public List<Property> findAllPorperties() {
        return buildListResposnse((List<Object[]>)  sessionFactory.getCurrentSession().createSQLQuery("select * FROM PROPERTY").list());
    }

    @Override
    public Property findPropertyById(long id)throws NotFoundException {
        Query query = sessionFactory.getCurrentSession().createSQLQuery("select * from PROPERTY p where p.PROPERTY_ID = :id");
        query.setParameter("id", id);
        return buildResposnse((Object[]) query.uniqueResult());
    }

    /**
     * Method responsible to customize the expected response
     * @param result Object[] result
     * @return Property
     */
    private Property buildResposnse(Object[] result){
        Property property = new Property();

        if(result[0] != null){
            BigDecimal propertyId = (BigDecimal)result[0];
            property.setId(propertyId.longValue());
        }
        if(result[1] != null){
            property.setName((String)result[1]);
        }
        if(result[2] != null){
            property.setAddress((String)result[2]);
        }
        if(result[3] != null){
            property.setCity((String)result[3]);
        }
        return property;
    }


    /**
     * Method responsible to customize the expected response
     * @param list List<Object[]>
     * @return List<Property>
     */
    private List<Property> buildListResposnse(List<Object[]> list){
        List<Property> response = new ArrayList<>();


        list.stream().forEach(p->{
            Property property = new Property();
            if(p[0] != null){
                BigDecimal propertyId = (BigDecimal)p[0];
                property.setId(propertyId.longValue());
            }
            if(p[1] != null){
                property.setName((String)p[1]);
            }
            if(p[2] != null){
                property.setAddress((String)p[2]);
            }
            if(p[3] != null){
                property.setCity((String)p[3]);
            }
            response.add(property);
        });

        return response;
    }
}
