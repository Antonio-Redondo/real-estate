package com.realestate.repository;

import com.realestate.data.BaseJPARepository;
import com.realestate.exception.NotFoundException;
import com.realestate.model.entity.Employee;

import java.util.List;

/**
 * Created by arm on 6/6/2017.
 */
public interface EmployeeRepository extends BaseJPARepository<Employee, Long> {

    /**
     * Method in charge of getting all the employees from the database
     * @return List<Employee>
     */
    public List<Employee> findAllEmployees();

    /**
     * Method in charge of getting an employee by propertyId
     * @param propertyId propertyId
     * @return Employee Employee
     * @throws NotFoundException
     */
    public Employee findEmployeeByPropertyId(long propertyId)throws NotFoundException;


    /**
     * Method in charge of updating property id into employee
     * @param propertyId propertyId
     * @throws NotFoundException
     */
    public void updatePropertyIdIntoEmployee(long propertyId)throws NotFoundException;


    /**
     * Method in charge of updating task id into employee
     * @param taskId propertyId
     * @throws NotFoundException
     */
    public void updateTaskIdIntoEmployee(long taskId)throws NotFoundException;
}
