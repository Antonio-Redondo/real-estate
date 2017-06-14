package com.realestate.repository;

import com.realestate.data.BaseJPARepository;
import com.realestate.exception.NotFoundException;
import com.realestate.model.entity.Task;

import java.util.List;

/**
 * Created by arm on 6/8/2017.
 */
public interface TaskRepository extends BaseJPARepository<Task, Long> {

    /**
     * Method in charge of getting all the tasks from the database
     * @return List<Task>
     */
    public List<Task> findAllTasks();


    /**
     * Method responsible to get a task by id
     * @param id id
     * @throws NotFoundException
     */
    public Task findTaskById(long id)throws NotFoundException;


    /**
     * Method in charge of updating a task entity
     * @param task task
     * @throws NotFoundException NotFoundException
     */
    public void updateTask(Task task) throws NotFoundException;


    /**
     * Method in charge of creating a new task
     * @param task
     * @throws NotFoundException
     */
    public void insertTask(Task task) throws NotFoundException;

}

