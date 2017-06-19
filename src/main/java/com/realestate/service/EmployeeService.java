package com.realestate.service;

import com.realestate.data.BaseService;
import com.realestate.dto.EmployeeDTO;
import com.realestate.model.entity.Employee;

import java.util.List;

/**
 * Created by arm on 6/6/2017.
 */
public interface EmployeeService extends BaseService<Employee, Long> {

    /**
     * Method in charge of getting all the employees
     * @return List<PropertyDTO>
     */
    public List<EmployeeDTO> findAllEmployees();

    /**
     * Method in charge of getting and Employee by id
     * @param id id
     * @param taskId taskId
     * @param propertyId propertyId
     */
    public void findEmployeeById(long id, long taskId, long propertyId);

    /**
     * Method responsible to update an employee
     * @param employee employee
     */
    public void updateEmloyee(Employee employee);

    /**
     * Method responsible to save an employee
     * @param employeeDTO employeeDTO
     */
    public void saveEmployee(EmployeeDTO employeeDTO);


    /**
     * Method responsible to save an employee
     * @param id id
     */
    public void deleteEmployee(long id);





}
