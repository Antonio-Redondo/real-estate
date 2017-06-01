package com.realestate.controller;

import com.realestate.exception.NotFoundException;
import org.apache.commons.codec.DecoderException;
import org.apache.commons.codec.binary.Base64;
import org.apache.commons.codec.binary.Hex;
import org.apache.commons.lang.StringUtils;
import org.apache.commons.lang.Validate;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import com.realestate.api.APIResponse;
import com.realestate.dto.UserDTO;
import com.realestate.model.entity.User;
import com.realestate.service.UserService;
import javax.crypto.*;
import javax.crypto.spec.IvParameterSpec;
import javax.crypto.spec.PBEKeySpec;
import javax.crypto.spec.SecretKeySpec;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.xml.bind.DatatypeConverter;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.security.InvalidAlgorithmParameterException;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;
import java.security.spec.InvalidKeySpecException;
import java.security.spec.KeySpec;
import java.util.Date;
import java.util.HashMap;

/**
 * @author: Antonio Redondo
 * Controller layer for user functionality
 *
 */
@Controller
@RequestMapping("/user")
public class UserController{
    private static Logger LOG = LoggerFactory.getLogger(UserController.class);

    private @Autowired UserService userService;

    protected static final String JSON_API_CONTENT_HEADER = "Content-type=application/json";


    /**
     * Authenticate a user
     *
     * @param userDTO
     * @return APIResponse
     */
    @RequestMapping(value = "/authenticate", method = RequestMethod.POST, headers = {JSON_API_CONTENT_HEADER})
    public @ResponseBody APIResponse authenticate(@RequestBody UserDTO userDTO) throws Exception {
        Validate.isTrue(StringUtils.isNotBlank(userDTO.getUsername()), "UserName is blank");
        Validate.isTrue(StringUtils.isNotBlank(userDTO.getPassword()), "Password is blank");

        User user = userService.findByUsernameAndPassword(userDTO.getUsername(),userDTO.getPassword());
        HashMap<String, Object> authResp = new HashMap<>();
        userService.loginUser(user);
        return APIResponse.toOkResponse(user);
    }

    /**
     * Register new user
     *
     * @param userDTO
     * @return APIResponse
     */
    @RequestMapping(value = "/register", method = RequestMethod.POST, headers = {JSON_API_CONTENT_HEADER})
    public @ResponseBody APIResponse register(@RequestBody UserDTO userDTO,
                                              HttpServletRequest request) throws NoSuchPaddingException, UnsupportedEncodingException, InvalidKeyException, NoSuchAlgorithmException, IllegalBlockSizeException, BadPaddingException, InvalidAlgorithmParameterException, InvalidKeySpecException, NotFoundException {
        Validate.isTrue(StringUtils.isNotBlank(userDTO.getUsername()), "User Name is blank");
        Validate.isTrue(StringUtils.isNotBlank(userDTO.getPassword()), "Encrypted password is blank");


        if(userService.isUserNameExist(userDTO.getUsername(), userDTO.getPassword())) {
            return APIResponse.toErrorResponse("Username and/or password is taken");
        }
        User user = new User();
        user.setFirstname(userDTO.getFirstname());
        user.setLastname(userDTO.getLastname());
        user.setUsername(userDTO.getUsername());
        user.setPassword(userDTO.getPassword());
        userService.registerUser(user);

        HashMap<String, Object> authResp = new HashMap<>();

        return APIResponse.toOkResponse(authResp);
    }
     /**
     * Logs out a user by deleting the session
     *
     * @param userDTO
     * @return APIResponse
     */
    @RequestMapping(value = "/logout",  method = RequestMethod.POST, headers = {JSON_API_CONTENT_HEADER})
    public @ResponseBody APIResponse logout(@RequestBody UserDTO userDTO) throws NotFoundException {

        User user = userService.findByFirstNameLastName(userDTO.getFirstname(), userDTO.getLastname());
        userService.logout(user);
        return APIResponse.toOkResponse("success");
    }

}
