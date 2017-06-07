package com.realestate.service.impl;

import com.realestate.data.BaseJPAServiceImpl;
import com.realestate.dto.PropertyDTO;
import com.realestate.model.entity.Property;
import com.realestate.model.entity.User;
import com.realestate.repository.PropertyRepository;
import com.realestate.service.PropertyService;
import com.realestate.service.UserService;
import com.realestate.util.UtilConverter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.PostConstruct;
import java.util.List;

/**
 * Created by arm on 6/6/2017.
 */
@Service
@Transactional
public class PropertyServiceImpl  extends BaseJPAServiceImpl<Property, Long> implements PropertyService {
     @Autowired
     private PropertyRepository propertyRepository;

    @PostConstruct
    public void setupService() {
        this.baseJpaRepository = propertyRepository;
        this.entityClass = Property.class;
        this.baseJpaRepository.setupEntityClass(Property.class);
    }

    @Override
    public List<PropertyDTO> findAllProperties() {

        List<Property> list = propertyRepository.findAllPorperties();
        return UtilConverter.convertPropertyToPropertyDTO(list);
    }
    @Override
    public Property findPropertyById(long id){
        return propertyRepository.findById(id);
    }
}
