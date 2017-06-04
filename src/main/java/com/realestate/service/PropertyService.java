package com.realestate.service;

import com.realestate.data.BaseService;
import com.realestate.model.entity.Property;
import com.realestate.model.entity.User;
import java.util.List;



/**
 * Created by arm on 04/06/2017.
 */
public interface PropertyService extends BaseService<Property, Long> {

    public List<Property> findAllPorperties();

}
