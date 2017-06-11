package com.realestate.repository.impl;

import com.realestate.data.BaseHibernateJPARepository;
import com.realestate.exception.NotFoundException;
import com.realestate.model.entity.Task;
import com.realestate.repository.TaskRepository;
import org.hibernate.Query;
import org.springframework.stereotype.Repository;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 * Created by arm on 6/8/2017.
 */
@Repository
public class TaskRepositoryImpl  extends BaseHibernateJPARepository<Task, Long> implements TaskRepository{


    @Override
    public List<Task> findAllTasks() {
        return buildListResposnse((List<Object[]>)  sessionFactory.getCurrentSession().createSQLQuery("select * FROM TASK").list());
    }

    @Override
    public Task findTaskById(long id) throws NotFoundException {
        Query query = sessionFactory.getCurrentSession().createSQLQuery("select * from TASK p where p.TASK_ID = :id");
        query.setParameter("id", id);
        return buildResposnse((Object[]) query.uniqueResult());
    }


    /**
     * Method responsible to customize the expected response
     * @param result Object[] result
     * @return Task
     */
    private Task buildResposnse(Object[] result){
        Task task = new Task();

        if(result[0] != null){
            BigDecimal taskId = (BigDecimal)result[0];
            task.setId(taskId.longValue());
        }
        if(result[1] != null){
            task.setDateFrom((Date)result[1]);
        }
        if(result[2] != null){
            task.setDateTo((Date)result[2]);
        }

        if(result[3] != null){
            task.setRemarks((String)result[3]);
        }
        if(result[4] != null){
            task.setImage((String)result[4]);
        }

        if(result[5] != null){
            task.setName((String)result[5]);
        }

        return task;
    }

    /**
     * Method responsible to customize the expected response
     * @param List<Object[]> list
     * @return List<Task>
     */
    private List<Task> buildListResposnse(List<Object[]> list){
        List<Task> response = new ArrayList<>();


        list.stream().forEach(t->{
            Task task = new Task();
            if(t[0] != null){
                BigDecimal taskId = (BigDecimal)t[0];
                task.setId(taskId.longValue());
            }
            if(t[1] != null){
                task.setDateFrom((Date)t[1]);
            }
            if(t[2] != null){
                task.setDateTo((Date)t[2]);
            }

            if(t[3] != null){
                task.setRemarks((String)t[3]);
            }
            if(t[4] != null){
                task.setImage((String)t[4]);
            }

            if(t[5] != null){
                task.setName((String)t[5]);
            }
            response.add(task);
        });


        return response;
    }
}
