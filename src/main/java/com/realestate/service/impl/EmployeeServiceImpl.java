package com.realestate.service.impl;

import com.realestate.data.BaseJPAServiceImpl;
import com.realestate.dto.EmployeeDTO;
import com.realestate.dto.PropertyDTO;
import com.realestate.dto.TaskDTO;
import com.realestate.model.entity.Employee;
import com.realestate.model.entity.Property;
import com.realestate.repository.EmployeeRepository;
import com.realestate.repository.PropertyRepository;
import com.realestate.service.EmployeeService;
import com.realestate.service.PropertyService;
import com.realestate.util.UtilConverter;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by arm on 6/6/2017.
 */
@Service
@Transactional
public class EmployeeServiceImpl extends BaseJPAServiceImpl<Employee, Long> implements EmployeeService{

    private static Logger LOG = LoggerFactory.getLogger(UtilConverter.class);

    @Autowired
    private EmployeeRepository employeeRepository;

    @Autowired
    private PropertyRepository propertyRepository;

    @Override
    public List<EmployeeDTO> findAllEmployees() {
       List<Employee> list = employeeRepository.findAllEmployees();
       return this.convertEmployeeToEmployeeDTO(list);
    }

    @PostConstruct
    public void setupService() {
        this.baseJpaRepository = employeeRepository;
        this.entityClass = Employee.class;
        this.baseJpaRepository.setupEntityClass(Employee.class);
    }



    /**
     * Method responsible to convert from the entity to DTO object
     * @param listEmployee listEmployee
     * @return List<EmployeeDTO>
     */
    private List<EmployeeDTO> convertEmployeeToEmployeeDTO(List<Employee> listEmployee){
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
            employeeDTO.setName(e.getName());
            employeeDTO.setTelephone(e.getTelephone());

            try {
                property = propertyRepository.findPropertyById(e.getPropertyId());
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
