package com.realestate.service.impl;

import com.realestate.dto.UserDTO;
import com.realestate.exception.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.realestate.data.BaseJPAServiceImpl;
import com.realestate.model.entity.User;
import com.realestate.repository.UserRepository;
import com.realestate.service.UserService;
import org.springframework.web.bind.annotation.RequestBody;

import javax.annotation.PostConstruct;
import javax.servlet.http.HttpServletRequest;
import java.util.Date;

/**
 * Service impl class to implement services for accessing the User object entity.
 * This class acts as an interface between the outer world and the UserRepository
 *
 * Created by Antonio Redondo on 5/25/2017.
 */
@Service
@Transactional
public class UserServiceImpl extends BaseJPAServiceImpl<User, Long> implements UserService {
    private @Autowired UserRepository userRepository;

    @PostConstruct
    public void setupService() {
        this.baseJpaRepository = userRepository;
        this.entityClass = User.class;
        this.baseJpaRepository.setupEntityClass(User.class);
    }



    @Override
    public User registerUser(User user) {
        return userRepository.insert(user);
    }


    @Override
    public User loginUser(final User user) {
        user.setUpdatedAt(new Date());

        return userRepository.update(user);
    }

    @Override
    public boolean isUserNameExist(String username, String password) throws NotFoundException{
        if (userRepository.findByUsernameAndPassword(username, password) != null) {
            return true;
        } else
            return false;
    }


    @Override
    public User findByUsernameAndPassword(String username, String password)throws NotFoundException {
        User user = userRepository.findByUsernameAndPassword(username,password);

        if(user != null) {
            return user;
        } else {
            throw new NotFoundException("User not found for username and password: "+username+ " " +password);
        }
    }

    @Override
    public User findByFirstNameLastName(String firstname, String lastname) throws NotFoundException {
        User user = userRepository.findByFirstNameLastName(firstname,lastname);

        if(user != null) {
            return user;
        } else {
            throw new NotFoundException("User not found for firstname and lastname: "+firstname+ " " +lastname);
        }
    }


    @Override
    public void logout(User user)throws NotFoundException{
        user.setUpdatedAt(null);
        userRepository.update(user);
    }
}
