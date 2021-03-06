package com.realestate.controller;

import com.realestate.api.APIResponse;
import com.realestate.dto.PropertyDTO;
import com.realestate.dto.UserDTO;
import com.realestate.model.entity.Property;
import com.realestate.model.entity.User;
import com.realestate.service.PropertyService;
import org.apache.commons.lang.StringUtils;
import org.apache.commons.lang.Validate;
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
 * Created by jose5750 on 04/06/2017.
 */
@Controller
@RequestMapping("/property")
public class PropertyController {

    private static Logger LOG = LoggerFactory.getLogger(PropertyController.class);
    protected static final String JSON_API_CONTENT_HEADER = "Content-type=application/json";
    public static final String SUCCESS = "SUCCESS";

     @Autowired
     private PropertyService propertyService;

    /**
     * Method in charge of fecthing all the properties
     * @return APIResponse
     * @throws Exception Exception
     */
    @RequestMapping(value = "/fetchAll", method = RequestMethod.POST, headers = {JSON_API_CONTENT_HEADER})
    public @ResponseBody APIResponse fetchAll() throws Exception {
      List<PropertyDTO> listPropertyDTO = propertyService.findAllProperties();
       return APIResponse.toOkResponse(listPropertyDTO);
    }

    /**
     * Method responsible to update a property
     * @return APIResponse
     * @throws Exception Exception
     */
    @RequestMapping(value = "/updateProperty", method = RequestMethod.POST, headers = {JSON_API_CONTENT_HEADER})
    public @ResponseBody APIResponse updateProperty(@RequestBody PropertyDTO propertyDTO) throws Exception {
        propertyService.findPropertyById(propertyDTO);
        return APIResponse.toOkResponse(SUCCESS);
    }

    /**
     * Method in charge of saving a particular property
     * @param propertyDTO propertyDTO
     * @return APIResponse
     * @throws Exception
     */
    @RequestMapping(value = "/saveProperty", method = RequestMethod.POST, headers = {JSON_API_CONTENT_HEADER})
    public @ResponseBody APIResponse saveProperty(@RequestBody PropertyDTO propertyDTO) throws Exception {
        propertyService.saveProperty(propertyDTO);
        return APIResponse.toOkResponse(SUCCESS);
    }

    /**
     * Method in charge of removing a property by id
     * @param id
     * @return APIResponse
     * @throws Exception
     */
    @RequestMapping(value = "/deleteProperty", method = RequestMethod.POST, headers = {JSON_API_CONTENT_HEADER})
    public @ResponseBody APIResponse deleteProperty(@RequestBody long id) throws Exception {
        propertyService.deleteProperty(id);
        return APIResponse.toOkResponse(SUCCESS);
    }

}
