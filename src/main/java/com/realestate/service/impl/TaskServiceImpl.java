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
import java.util.Date;
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
        task.setCreatedAt(new Date());
        task.setUpdatedAt(new Date());
        taskRepository.updateTask(task);
    }

    @Override
    public void findTaskById(TaskDTO taskDTO)throws NotFoundException{
        Task task = null;
        try {
            task = taskRepository.findTaskById(taskDTO.getId());
        } catch (NotFoundException e) {
            throw new NotFoundException("Task not found by id : " + taskDTO.getId());
        }
        task.setName(taskDTO.getName());
        task.setRemarks(taskDTO.getRemarks());
        task.setCreatedAt(new Date());
        task.setUpdatedAt(new Date());

        this.updateTask(task);
    }

    @Override
    public void updateTask(Task task)throws NotFoundException{
        try{
            taskRepository.updateTask(task);
        } catch (NotFoundException e) {
            throw new NotFoundException("Task not updated properly");
        }

    }

    @Override
    public void saveTask(TaskDTO taskDTO)throws NotFoundException{
        try{
            taskRepository.insertTask(convertFromTaskDTOTotask(taskDTO));
        } catch (NotFoundException e) {
            throw new NotFoundException("Task not updated properly");
        }

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
            if(t.getCreatedAt()!=null){
                taskDTO.setCreatedAt(t.getCreatedAt());
            }
            if(t.getUpdatedAt()!= null){
                taskDTO.setUpdatedAt(t.getUpdatedAt());
            }


            listTaskDTO.add(taskDTO);
        });
            return listTaskDTO;
    }

    /**
     * Method in charge of converting from the DTO to task entity
     * @param taskDTO taskDTO
     * @return Task
     */
    private Task convertFromTaskDTOTotask(TaskDTO taskDTO){
        Task task = new Task();
        task.setName(taskDTO.getName());
        task.setRemarks(taskDTO.getRemarks());
        return task;
    }

}
