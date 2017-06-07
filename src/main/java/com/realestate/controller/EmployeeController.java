package com.realestate.controller;

import com.realestate.api.APIResponse;
import com.realestate.dto.EmployeeDTO;
import com.realestate.service.EmployeeService;
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

    private static Logger LOG = LoggerFactory.getLogger(EmployeeController.class);
    protected static final String JSON_API_CONTENT_HEADER = "Content-type=application/json";

    @RequestMapping(value = "/fetchAll", method = RequestMethod.POST, headers = {JSON_API_CONTENT_HEADER})
    public @ResponseBody
    APIResponse fetchAll(@RequestBody EmployeeDTO employeeDTO) throws Exception {
        List<EmployeeDTO> listEmployeeDTO = employeeService.findAllEmployees();
        return APIResponse.toOkResponse(listEmployeeDTO);
    }

}
