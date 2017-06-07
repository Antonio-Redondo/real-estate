package com.realestate.util;

import com.realestate.dto.EmployeeDTO;
import com.realestate.dto.PropertyDTO;
import com.realestate.dto.TaskDTO;
import com.realestate.model.entity.Employee;
import com.realestate.model.entity.Property;
import com.realestate.service.PropertyService;
import com.realestate.service.impl.PropertyServiceImpl;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by arm on 6/6/2017.
 */
public class UtilConverter {

    private static Logger LOG = LoggerFactory.getLogger(UtilConverter.class);

    @Autowired
    private static PropertyServiceImpl propertyService;





    /**
     * Method responsible to convert from the entity to DTO object
     * @param listProperty listProperty
     * @return List<PropertyDTO>
     */
    public static List<PropertyDTO> convertPropertyToPropertyDTO(List<Property> listProperty){
        List<PropertyDTO> listPropertyDTO = new ArrayList<>();

        listProperty.stream().forEach(p ->{
            PropertyDTO propertyDTO = new PropertyDTO();
            propertyDTO.setAddress(p.getAddress());
            propertyDTO.setCity(p.getCity());
            propertyDTO.setName(p.getName());
            propertyDTO.setImage(p.getImage());
            listPropertyDTO.add(propertyDTO);
        });
        return listPropertyDTO;
    }


    /**
     * Method responsible to convert from the entity to DTO object
     * @param listEmployee listEmployee
     * @return List<EmployeeDTO>
     */
    public static List<EmployeeDTO> convertEmployeeToEmployeeDTO(List<Employee> listEmployee){
        List<EmployeeDTO> listEmployeeDTO = new ArrayList<>();

        listEmployee.stream().forEach(e ->{
            EmployeeDTO employeeDTO = new EmployeeDTO();
            PropertyDTO propertyDTO = new PropertyDTO();
            Property property = null;
            TaskDTO taskDTO = new TaskDTO();
            employeeDTO.setAddress(e.getAddress());
            employeeDTO.setAge(e.getAge());
            employeeDTO.setCity(e.getCity());
            employeeDTO.setEmail(e.getEmail());
            employeeDTO.setImage(e.getImage());

            try {
                property = propertyService.findById(e.getPropertyId());
            } catch (Exception e1) {
                LOG.error(e1 + "property not found");
            }
            propertyDTO.setImage(property.getImage());
            propertyDTO.setName(property.getName());
            propertyDTO.setCity(property.getCity());
            propertyDTO.setAddress(property.getAddress());

            employeeDTO.setPropertyDTO(propertyDTO);

          /*  taskDTO.setDateFrom(e.getTasks().getDateFrom());
            taskDTO.setDateTo(e.getTasks().getDateTo());
            taskDTO.setName(e.getTasks().getName());
            taskDTO.setRemarks(e.getTasks().getRemarks());

            employeeDTO.setTaskDTO(taskDTO);*/


            listEmployeeDTO.add(employeeDTO);

        });
        return listEmployeeDTO;
    }


}
