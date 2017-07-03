package com.realestate.service;

import com.realestate.data.BaseService;
import com.realestate.dto.TaskDTO;
import com.realestate.exception.NotFoundException;
import com.realestate.model.entity.Task;

import java.util.List;

/**
 * Created by arm on 6/8/2017.
 */
public interface TaskService extends BaseService<Task, Long> {

    /**
     * Method in charge of getting all the tasks
     * @return List<TaskDTO>
     */
    public List<TaskDTO> findAllTasks();

    /**
     * Method responsible to update a particular task
     * @param taskDTO taskDTO
     * @param newTaskId long
     */
    public void updateTask(TaskDTO taskDTO, long newTaskId) throws NotFoundException;


    /**
     * Method responsible to find a task by if
     * @param taskDTO taskDTO
     * @throws NotFoundException
     */
    public void findTaskById(TaskDTO taskDTO)throws NotFoundException;


    /**
     * Method in charge of updating a task
     * @param task Task
     * @throws NotFoundException
     */
    public void updateTask(Task task)throws NotFoundException;



    /**
     * Method in charge of saving a task
     * @param TaskDTO taskDTO
     * @throws NotFoundException
     */
    public void saveTask(TaskDTO taskDTO)throws NotFoundException;


    /**
     * Method in charge of deleting a particular task
     * @param id id
     * @throws NotFoundException NotFoundException
     */
    public void deleteTask(long id) throws NotFoundException;
}
