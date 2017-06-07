package com.realestate.model.entity;

import com.realestate.data.JPAEntity;

import javax.persistence.*;
import java.io.Serializable;

/**
 * Created by arm on 6/4/2017.
 */

@Entity
@Table(name = "PROPERTY")
@Inheritance(strategy = InheritanceType.JOINED)
public class Property extends JPAEntity<Long> implements Serializable {


    @Column(name = "PROPERTY_ID", nullable = false)
    private long propertyId;

    @Column(name = "NAME", nullable = false)
    private String name;


    @Column(name = "ADDRESS", nullable = true)
    private String address;


    @Column(name = "CITY", nullable = true)
    private String city;

    @Column(name = "IMAGE", nullable = true)
    private String image;


    @OneToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "id")
    private Employee employee;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public Employee getEmployee() {
        return employee;
    }

    public void setEmployee(Employee employee) {
        this.employee = employee;
    }

    public long getPropertyId() {
        return propertyId;
    }

    public void setPropertyId(long propertyId) {
        this.propertyId = propertyId;
    }
}
