package com.realestate.service.impl;

import com.realestate.data.BaseJPAServiceImpl;
import com.realestate.dto.PropertyDTO;
import com.realestate.exception.NotFoundException;
import com.realestate.model.entity.Property;
import com.realestate.model.entity.User;
import com.realestate.repository.PropertyRepository;
import com.realestate.service.PropertyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.realestate.repository.EmployeeRepository;

import javax.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 * Created by arm on 6/6/2017.
 */
@Service
@Transactional
public class PropertyServiceImpl  extends BaseJPAServiceImpl<Property, Long> implements PropertyService {
     @Autowired
     private PropertyRepository propertyRepository;
     @Autowired
     private EmployeeRepository employeeRepository;

    @PostConstruct
    public void setupService() {
        this.baseJpaRepository = propertyRepository;
        this.entityClass = Property.class;
        this.baseJpaRepository.setupEntityClass(Property.class);
    }

    @Override
    public List<PropertyDTO> findAllProperties() {

        List<Property> list = propertyRepository.findAllPorperties();
        return convertPropertyToPropertyDTO(list);
    }
    @Override
    public void findPropertyById(PropertyDTO propertyDTO)throws NotFoundException{
        Property property = null;
        try {
            property = propertyRepository.findPropertyById(propertyDTO.getId());
        } catch (NotFoundException e) {
            throw new NotFoundException("Property not found by id : " + propertyDTO.getId());
        }
        property.setName(propertyDTO.getName());
        property.setCity(propertyDTO.getCity());
        property.setAddress(propertyDTO.getAddress());
        property.setCreatedAt(new Date());
        property.setUpdatedAt(new Date());
        this.updateProperty(property);
    }

    @Override
    public void updateProperty(Property property)throws NotFoundException{
        try{
            propertyRepository.updateProperty(property);
        } catch (NotFoundException e) {
            throw new NotFoundException("Property not updated properly");
        }

    }

    @Override
    public void saveProperty(PropertyDTO PropertyDTO) throws NotFoundException{
        propertyRepository.insertProperty(converFromPropertyTOToProperty(PropertyDTO));
    }

    @Override
    public void deleteProperty(long id)throws NotFoundException{
        propertyRepository.deletePropertyById(id);
        employeeRepository.updatePropertyIdIntoEmployee(id);
    }

    /**
     * Method responsible to convert from the entity to DTO object
     * @param listProperty listProperty
     * @return List<PropertyDTO>
     */
    private static List<PropertyDTO> convertPropertyToPropertyDTO(List<Property> listProperty){
        List<PropertyDTO> listPropertyDTO = new ArrayList<>();

        listProperty.stream().forEach(p ->{
            PropertyDTO propertyDTO = new PropertyDTO();
            propertyDTO.setAddress(p.getAddress());
            propertyDTO.setCity(p.getCity());
            propertyDTO.setName(p.getName());
            propertyDTO.setImage(p.getImage());
            propertyDTO.setId(p.getId());
            if(p.getCreatedAt() !=null){
                propertyDTO.setCreatedAt(p.getCreatedAt());
            }
            if(p.getUpdatedAt() !=null){
                propertyDTO.setUpdatedAt(p.getUpdatedAt());
            }


            listPropertyDTO.add(propertyDTO);

        });
        return listPropertyDTO;
    }

    /**
     * Method responsible to convert from TO to entity
     * @param propertyDTO propertyDTO
     * @return Property
     */
    private Property converFromPropertyTOToProperty(PropertyDTO propertyDTO){
        Property property = new Property();
        property.setName(propertyDTO.getName());
        property.setCity(propertyDTO.getCity());
        property.setAddress(propertyDTO.getAddress());

        return property;

    }
}
