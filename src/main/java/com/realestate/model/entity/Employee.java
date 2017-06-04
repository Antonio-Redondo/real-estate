package com.realestate.model.entity;

import com.realestate.data.JPAEntity;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

/**
 * Created by arm on 6/4/2017.
 */
@Entity
@Table(name = "EMPLOYEE")
public class Employee extends JPAEntity<Long> implements Serializable {

    @Column(name = "NAME", nullable = false)
    private String name;

    @Column(name = "EMAIL", nullable = false)
    private String email;

    @Column(name = "TELEPHONE", nullable = false)
    private String telephone;

    @Column(name = "ADDRESS", nullable = true)
    private String address;

    @Column(name = "REMARKS", nullable = true)
    private String remarks;

    @Column(name = "CITY", nullable = true)
    private String city;

    @Column(name = "AGE", nullable = false)
    private long age;

    @Column(name = "IMAGE", nullable = true)
    private String image;

    @Column(name = "PROPERTY_ID", nullable = true)
    @OneToOne(targetEntity=Property.class, fetch = FetchType.LAZY, mappedBy = "employee")
    private Property properties;

    @Column(name = "TASK_ID", nullable = true)
    @OneToOne(targetEntity=Task.class, fetch = FetchType.LAZY, mappedBy = "employee")
    private Task tasks;


    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getTelephone() {
        return telephone;
    }

    public void setTelephone(String telephone) {
        this.telephone = telephone;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getRemarks() {
        return remarks;
    }

    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public long getAge() {
        return age;
    }

    public void setAge(long age) {
        this.age = age;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public Task getTasks() {
        return tasks;
    }

    public void setTasks(Task tasks) {
        this.tasks = tasks;
    }

    public Property getProperties() {
        return properties;

    }

    public void setProperties(Property properties) {
        this.properties = properties;
    }
}
