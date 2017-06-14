package com.realestate.controller;

import com.realestate.api.APIResponse;
import com.realestate.dto.TaskDTO;
import com.realestate.service.TaskService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

/**
 * Created by arm on 6/8/2017.
 */
@Controller
@RequestMapping("/task")
public class TaskController {

    private static Logger LOG = LoggerFactory.getLogger(TaskController.class);
    protected static final String JSON_API_CONTENT_HEADER = "Content-type=application/json";
    public static final String SUCCESS = "SUCCESS";


    @Autowired
    private TaskService taskService;

    @RequestMapping(value = "/fetchAll", method = RequestMethod.POST, headers = {JSON_API_CONTENT_HEADER})
    public @ResponseBody
    APIResponse fetchAll(@RequestBody TaskDTO taskDTO) throws Exception {
        List<TaskDTO> listTaskDTO = taskService.findAllTasks();
        return APIResponse.toOkResponse(listTaskDTO);
    }


    @RequestMapping(value = "/updateTask", method = RequestMethod.POST, headers = {JSON_API_CONTENT_HEADER})
    public @ResponseBody APIResponse updateTask(@RequestBody TaskDTO taskDTO) throws Exception {
        taskService.findTaskById(taskDTO);
        return APIResponse.toOkResponse(SUCCESS);
    }

    @RequestMapping(value = "/saveTask", method = RequestMethod.POST, headers = {JSON_API_CONTENT_HEADER})
    public @ResponseBody APIResponse saveTask(@RequestBody TaskDTO taskDTO) throws Exception {
        taskService.saveTask(taskDTO);
        return APIResponse.toOkResponse(SUCCESS);
    }
}
