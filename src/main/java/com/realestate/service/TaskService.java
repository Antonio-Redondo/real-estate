package com.realestate.service;

import com.realestate.data.BaseService;
import com.realestate.dto.TaskDTO;
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
}
