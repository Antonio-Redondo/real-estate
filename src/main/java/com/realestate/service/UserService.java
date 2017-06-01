package com.realestate.service;

import com.realestate.data.BaseService;
import com.realestate.exception.NotFoundException;
import com.realestate.model.entity.User;

import javax.servlet.http.HttpServletRequest;

/**
 *
 * Service class to have business logic operation on User entity
 *
 * Created by Antonio Redondo on 5/25/2017.
 */
public interface UserService extends BaseService<User, Long> {

    /**
     * Register a new user into the system
     *
     * @param user
     *
     * @return User
     */
    public User registerUser(User user);


    /**
     * Login a new user into the system
     *
     * @param user
     *
     * @return User
     */
    public User loginUser(User user);


    /**
     * Validates whether the given username and password
     * exists in the system.
     *
     * @param username
     * @param password
     *
     * @return boolean
     */
    public boolean isUserNameExist(String username, String password) throws NotFoundException;


    /**
     * Finds a user entity by the given email
     *
     * @param username
     * @param password
     * @return User
     */
    public User findByUsernameAndPassword(String username, String password) throws NotFoundException;
}
