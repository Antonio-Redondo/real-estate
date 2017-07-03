package com.realestate.service;

import com.realestate.data.BaseService;
import com.realestate.dto.PropertyDTO;
import com.realestate.exception.NotFoundException;
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
     * @param propertyDTO propertyDTO
     * @return Property Property
     */
    public void findPropertyById(PropertyDTO propertyDTO)throws NotFoundException;


    /**
     * Method responsible of updating a property
     * @param property
     */
    public void updateProperty(Property property)throws NotFoundException;

    /**
     * Method responsible to save a new property
     * @param PropertyDTO
     * @throws NotFoundException
     */
    public void saveProperty(PropertyDTO PropertyDTO) throws NotFoundException;

    /**
     * Method in charge of deleting a particular property
     * @param id id
     * @throws NotFoundException NotFoundException
     */
    public void deleteProperty(long id) throws NotFoundException;

}
