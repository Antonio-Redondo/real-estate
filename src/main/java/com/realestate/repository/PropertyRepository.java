package com.realestate.repository;

import com.realestate.data.BaseJPARepository;
import com.realestate.exception.NotFoundException;
import com.realestate.model.entity.Property;
import java.util.List;

/**
 * Created by arm on 6/6/2017.
 */
public interface PropertyRepository extends BaseJPARepository<Property, Long> {

    /**
     * Method in charge of getting all the properties from the database
     * @return List<Property>
     */
    public List<Property> findAllPorperties();


    /**
     * Method responsible to get a property by id
     * @param id id
     * @throws NotFoundException
     */
    public Property findPropertyById(long id)throws NotFoundException;


    /**
     * Method in charge of deleting a property by id
     * @param id
     * @throws NotFoundException
     */
    public void deletePropertyById(long id)throws NotFoundException;

    /**
     * Method responsible to update a particular property
     * @param property property
     * @throws NotFoundException NotFoundException
     */
    public void updateProperty(Property property) throws NotFoundException;


    /**
     * Method responsible to save a particular property
     * @param property property
     * @throws NotFoundException NotFoundException
     */
    public void insertProperty(Property property) throws NotFoundException;
}
