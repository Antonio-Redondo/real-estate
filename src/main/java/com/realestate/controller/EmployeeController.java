package com.realestate.controller;

import com.realestate.api.APIResponse;
import com.realestate.dto.EmployeeDTO;
import com.realestate.service.EmployeeService;
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
 * Created by arm on 6/6/2017.
 */
@Controller
@RequestMapping("/employee")
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;

    @Autowired
    private TaskService taskService;

    private static Logger LOG = LoggerFactory.getLogger(EmployeeController.class);
    protected static final String JSON_API_CONTENT_HEADER = "Content-type=application/json";
    public static final String SUCCESS = "SUCCESS";

    /**
     * Method in charge of getting all the employees
     * @return APIResponse
     * @throws Exception
     */
    @RequestMapping(value = "/fetchAll", method = RequestMethod.POST, headers = {JSON_API_CONTENT_HEADER})
    public @ResponseBody APIResponse fetchAll() throws Exception {
        List<EmployeeDTO> listEmployeeDTO = employeeService.findAllEmployees();
        return APIResponse.toOkResponse(listEmployeeDTO);
    }

    /**
     * Method responsible to finf an employee by id
     * @param employeeDTO employeeDTO
     * @return APIResponse
     * @throws Exception
     */
    @RequestMapping(value = "/updateEmployee", method = RequestMethod.POST, headers = {JSON_API_CONTENT_HEADER})
    public @ResponseBody APIResponse updateEmployee(@RequestBody EmployeeDTO employeeDTO) throws Exception {
        employeeService.findEmployeeById(employeeDTO.getId(), employeeDTO.getTaskId(), employeeDTO.getPropertyId());
        taskService.updateTask(employeeDTO.getTaskDTO(), employeeDTO.getTaskId());
        return APIResponse.toOkResponse(SUCCESS);
    }

    /**
     * Method in charge of saving an employee
     * @param employeeDTO employeeDTO
     * @return APIResponse
     * @throws Exception
     */
    @RequestMapping(value = "/saveEmployee", method = RequestMethod.POST, headers = {JSON_API_CONTENT_HEADER})
    public @ResponseBody APIResponse saveEmployee(@RequestBody EmployeeDTO employeeDTO) throws Exception {
        employeeService.saveEmployee(employeeDTO);
        return APIResponse.toOkResponse(SUCCESS);
    }

    /**
     * Method responsible of deleting an employee
     * @param id
     * @return APIResponse
     * @throws Exception
     */
    @RequestMapping(value = "/deleteEmployee", method = RequestMethod.POST, headers = {JSON_API_CONTENT_HEADER})
    public @ResponseBody APIResponse deleteEmployee(@RequestBody long id) throws Exception {
        employeeService.deleteEmployee(id);
        return APIResponse.toOkResponse(SUCCESS);
    }


}
