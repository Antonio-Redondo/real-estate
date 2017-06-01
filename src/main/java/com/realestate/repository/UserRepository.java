package com.realestate.repository;

import com.realestate.data.BaseJPARepository;
import com.realestate.exception.NotFoundException;
import com.realestate.model.entity.User;

/**
 *
 * DD Repository for User related actions and events
 *
 * Created by Antonio Redondo on 5/25/2017.
 */
public interface UserRepository extends BaseJPARepository<User, Long> {
    /**
     * Finds a user with the given username and password
     *
     * @param username
     * @param password
     * @return User
     */
    public User findByUsernameAndPassword(String username, String password)throws NotFoundException;
}
