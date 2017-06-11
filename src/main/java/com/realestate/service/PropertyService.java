package com.realestate.service;

import com.realestate.data.BaseService;
import com.realestate.dto.PropertyDTO;
import com.realestate.model.entity.Property;
import java.util.List;



/**
 * Created by arm on 04/06/2017.
 */
public interface PropertyService extends BaseService<Property, Long> {

    /**
     * Method in charge of getting all the properties
     * @return List<PropertyDTO>
     */
    public List<PropertyDTO> findAllProperties();

    /**
     * Method in charge of fetching a property by id
     * @param id id
     * @return Property Property
     */
    public Property findPropertyById(long id);

}
