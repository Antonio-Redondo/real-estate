package com.realestate.repository.impl;

import com.realestate.data.BaseHibernateJPARepository;
import com.realestate.model.entity.Employee;
import com.realestate.repository.EmployeeRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by arm on 6/6/2017.
 */
@Repository
public class EmployeeRepositoryImpl  extends BaseHibernateJPARepository<Employee, Long> implements EmployeeRepository {
    @Override
    public List<Employee> findAllEmployees() {
        return (List<Employee>) this.findAllByPage(-1, -1, null);
    }
}
