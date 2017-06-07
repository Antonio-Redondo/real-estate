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


}
