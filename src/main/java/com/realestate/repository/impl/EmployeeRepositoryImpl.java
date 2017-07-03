package com.realestate.repository.impl;

import com.realestate.data.BaseHibernateJPARepository;
import com.realestate.exception.NotFoundException;
import com.realestate.model.entity.Employee;
import com.realestate.repository.EmployeeRepository;
import org.hibernate.Query;
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


    @Override
    public Employee findEmployeeByPropertyId(long propertyId)throws NotFoundException {
        Query query = sessionFactory.getCurrentSession().createSQLQuery("select * from EMPLOYEE e where e.PROPERTY_ID = :id");
        query.setParameter("id", propertyId);
        return (Employee) query.uniqueResult();

    }

    @Override
    public void updatePropertyIdIntoEmployee(long propertyId)throws NotFoundException {
        Query query = sessionFactory.getCurrentSession().createSQLQuery("update EMPLOYEE  set PROPERTY_ID=0 where PROPERTY_ID = :id");
        query.setParameter("id", propertyId);
        query.executeUpdate();
    }

    public void updateTaskIdIntoEmployee(long taskId)throws NotFoundException{
        Query query = sessionFactory.getCurrentSession().createSQLQuery("update EMPLOYEE  set TASK_ID=0 where TASK_ID = :id");
        query.setParameter("id", taskId);
        query.executeUpdate();
    }


}
