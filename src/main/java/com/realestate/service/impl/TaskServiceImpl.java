package com.realestate.service.impl;

import com.realestate.data.BaseJPAServiceImpl;
import com.realestate.dto.TaskDTO;
import com.realestate.exception.NotFoundException;
import com.realestate.model.entity.Task;
import com.realestate.repository.TaskRepository;
import com.realestate.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by arm on 6/8/2017.
 */
@Service
@Transactional
public class TaskServiceImpl extends BaseJPAServiceImpl<Task, Long> implements TaskService {

    @Autowired
    private TaskRepository taskRepository;

    @Override
    public List<TaskDTO> findAllTasks() {
        List<TaskDTO> listTaskDTO = new ArrayList<>();
        return convertFromEntityToTaskDTO(taskRepository.findAllTasks());
    }

    @Override
    public void updateTask(TaskDTO taskDTO, long newTaskId) throws NotFoundException {
        Task task = null;
        try {
            task = taskRepository.findTaskById(newTaskId);
        } catch (NotFoundException e) {
            throw new NotFoundException("Task not found by id : " + taskDTO.getId());
        }
        task.setRemarks(taskDTO.getRemarks());
        task.setDateFrom(taskDTO.getDateFrom());
        task.setDateTo(taskDTO.getDateTo());
        taskRepository.updateTask(task);
    }

    @PostConstruct
    public void setupService() {
        this.baseJpaRepository = taskRepository;
        this.entityClass = Task.class;
        this.baseJpaRepository.setupEntityClass(Task.class);
    }

    private List<TaskDTO> convertFromEntityToTaskDTO(List<Task> list) {
        List<TaskDTO> listTaskDTO = new ArrayList<>();

        list.stream().forEach(t -> {
            TaskDTO taskDTO = new TaskDTO();
            taskDTO.setRemarks(t.getRemarks());
            taskDTO.setName(t.getName());
            taskDTO.setDateTo(t.getDateTo());
            taskDTO.setDateFrom(t.getDateFrom());
            taskDTO.setId(t.getId());
            taskDTO.setImage(t.getImage());
            listTaskDTO.add(taskDTO);
        });
            return listTaskDTO;
    }

}
