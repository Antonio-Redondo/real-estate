package com.realestate.repository.impl;

import com.realestate.dto.UserDTO;
import com.realestate.exception.NotFoundException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Repository;
import com.realestate.data.BaseHibernateJPARepository;
import com.realestate.model.entity.User;
import com.realestate.repository.UserRepository;
import org.springframework.web.bind.annotation.RequestBody;

/**
 *
 * User Repository Implementation
 *
 * Created by Antonio Redondo on 5/25/2017.
 */
@Repository
public class UserRepositoryImpl extends BaseHibernateJPARepository<User, Long> implements UserRepository {
    private static Logger LOG = LoggerFactory.getLogger(UserRepositoryImpl.class);

    @Override
    public User findByUsernameAndPassword(String username, String password)throws NotFoundException {
        return (User) sessionFactory.getCurrentSession().createQuery("from User u where u.username = :username and u.password =:password")
                .setParameter("username", username).setParameter("password", password).uniqueResult();
    }

    @Override
    public void logout(@RequestBody UserDTO userDTO)throws NotFoundException{

    }

    public User findByFirstNameLastName(String firstname, String lastname)throws NotFoundException{
        return (User) sessionFactory.getCurrentSession().createQuery("from User u where u.firstname = :firstname and u.lastname =:lastname")
                .setParameter("firstname", firstname).setParameter("lastname", lastname).uniqueResult();
    }
}
