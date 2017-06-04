package com.realestate.controller;

import com.realestate.api.APIResponse;
import com.realestate.dto.PropertyDTO;
import com.realestate.dto.UserDTO;
import com.realestate.model.entity.User;
import org.apache.commons.lang.StringUtils;
import org.apache.commons.lang.Validate;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * Created by jose5750 on 04/06/2017.
 */
@Controller
@RequestMapping("/property")
public class PropertyController {

    private static Logger LOG = LoggerFactory.getLogger(PropertyController.class);
    protected static final String JSON_API_CONTENT_HEADER = "Content-type=application/json";


    @RequestMapping(value = "/fetchAll", method = RequestMethod.POST, headers = {JSON_API_CONTENT_HEADER})
    public @ResponseBody
    APIResponse fetchAll(@RequestBody PropertyDTO propertyDTO) throws Exception {

       /* User user = userService.findByUsernameAndPassword(userDTO.getUsername(),userDTO.getPassword());
        HashMap<String, Object> authResp = new HashMap<>();
        userService.loginUser(user);*/
        return APIResponse.toOkResponse(null);
    }
}
