package com.realestate.model.entity;

import com.realestate.data.JPAEntity;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

/**
 * Created by arm on 6/4/2017.
 */
@Entity
@Table(name = "TASK")
@Inheritance(strategy = InheritanceType.JOINED)
public class Task extends JPAEntity<Long> implements Serializable {


    @Column(name = "TASK_ID", nullable = false)
    private long taskId;


    @Column(name = "NAME", nullable = false)
    private String name;

    @Column(name = "IMAGE", nullable = false)
    private String image;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "DATE_FROM", nullable = false)
    private Date dateFrom;


    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "DATE_TO", nullable = false)
    private Date dateTo;

    @Column(name = "REMARKS", nullable = false)
    private String remarks;

    @OneToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "id")
    private Employee employee;


    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Date getDateFrom() {
        return dateFrom;
    }

    public void setDateFrom(Date dateFrom) {
        this.dateFrom = dateFrom;
    }

    public Date getDateTo() {
        return dateTo;
    }

    public void setDateTo(Date dateTo) {
        this.dateTo = dateTo;
    }

    public String getRemarks() {
        return remarks;
    }

    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }

    public Employee getEmployee() {
        return employee;
    }

    public void setEmployee(Employee employee) {
        this.employee = employee;
    }

    public long getTaskId() {
        return taskId;
    }

    public void setTaskId(long taskId) {
        this.taskId = taskId;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }
}
