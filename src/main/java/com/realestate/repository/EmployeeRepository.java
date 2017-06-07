package com.realestate.repository;

import com.realestate.data.BaseJPARepository;
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
}
