package com.realestate.service.impl;

import com.realestate.data.BaseJPAServiceImpl;
import com.realestate.dto.EmployeeDTO;
import com.realestate.dto.PropertyDTO;
import com.realestate.dto.TaskDTO;
import com.realestate.exception.NotFoundException;
import com.realestate.model.entity.Employee;
import com.realestate.model.entity.Property;
import com.realestate.model.entity.Task;
import com.realestate.repository.EmployeeRepository;
import com.realestate.repository.PropertyRepository;
import com.realestate.repository.TaskRepository;
import com.realestate.service.EmployeeService;
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

    private static Logger LOG = LoggerFactory.getLogger(EmployeeServiceImpl.class);

    @Autowired
    private EmployeeRepository employeeRepository;

    @Autowired
    private PropertyRepository propertyRepository;

    @Autowired
    private TaskRepository taskRepository;

    @Override
    public List<EmployeeDTO> findAllEmployees() {
       List<Employee> list = employeeRepository.findAllEmployees();
       return this.convertEmployeeToEmployeeDTO(list);
    }
    @Override
    public void findEmployeeById(long id,long taskId, long propertyId){
        Employee employee =  employeeRepository.findById(id);
        employee.setPropertyId(propertyId);
        employee.setTaskId(taskId);
        employeeRepository.update(employee);
    }

    public void saveEmployee(EmployeeDTO employeeDTO){
        Employee employee =convertFromEmployeeDTOToEmployee(employeeDTO);
        employeeRepository.insert(employee);
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
            Task task = null;
            TaskDTO taskDTO = new TaskDTO();
            employeeDTO.setAddress(e.getAddress());
            employeeDTO.setAge(e.getAge());
            employeeDTO.setCity(e.getCity());
            employeeDTO.setEmail(e.getEmail());
            employeeDTO.setImage(e.getImage());
            employeeDTO.setName(e.getName());
            employeeDTO.setTelephone(e.getTelephone());
            employeeDTO.setId(e.getId());
            if(e.getUpdatedAt() != null){
                employeeDTO.setCreatedAt(e.getUpdatedAt());
            }


            if(e.getPropertyId()!= 0){
                try {
                    property = propertyRepository.findPropertyById(e.getPropertyId());
                } catch (Exception e1) {
                    LOG.error(e1 + "property not found");
                }
                propertyDTO.setImage(property.getImage());
                propertyDTO.setName(property.getName());
                propertyDTO.setCity(property.getCity());
                propertyDTO.setAddress(property.getAddress());
                propertyDTO.setId(property.getId());
                employeeDTO.setPropertyId(property.getId());

                employeeDTO.setPropertyDTO(propertyDTO);
            }

            if(e.getTaskId() != 0){
                try {
                    task = taskRepository.findTaskById(e.getTaskId());
                } catch (NotFoundException e1) {
                    LOG.error(e1 + "task not found");
                }

                taskDTO.setDateFrom(task.getDateFrom());
                taskDTO.setDateTo(task.getDateTo());
                taskDTO.setName(task.getName());
                taskDTO.setRemarks(task.getRemarks());
                taskDTO.setId(task.getId());
                employeeDTO.setTaskId(task.getId());

                employeeDTO.setTaskDTO(taskDTO);

            }

            listEmployeeDTO.add(employeeDTO);

        });
        return listEmployeeDTO;
    }

    /**
     * Method in charge of converting Employee entity to EmployeeDTO
     * @param employee employee
     * @return EmployeeDTO
     */
    private EmployeeDTO convertEmployeeToEmployeeDTO(Employee employee){
        EmployeeDTO employeeDTO = new EmployeeDTO();
        employeeDTO.setId(employee.getId());
        employeeDTO.setTaskId(employee.getTaskId());
        employeeDTO.setPropertyId(employee.getPropertyId());
        employeeDTO.setTelephone(employee.getTelephone());

        return employeeDTO;
    }

    /**
     * Method responsible to convert from DTO to entity
     * @param employeeDTO employeeDTO
     * @return Employee Employee
     */
    private Employee convertFromEmployeeDTOToEmployee(EmployeeDTO employeeDTO){
        Employee employee = new Employee();
        employee.setName(employeeDTO.getName());
        employee.setEmail(employeeDTO.getEmail());
        employee.setTelephone(employeeDTO.getTelephone());
        employee.setAge(employeeDTO.getAge());
        employee.setAddress(employeeDTO.getAddress());
        employee.setRemarks(employeeDTO.getRemarks());
        return employee;
    }

}
