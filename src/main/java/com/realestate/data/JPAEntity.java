package com.realestate.data;

import org.codehaus.jackson.annotate.JsonIgnore;

import javax.persistence.*;
import com.realestate.data.Entity;
import javax.xml.bind.annotation.XmlElement;
import java.io.Serializable;
import java.util.Date;

/**
 * JPAEntity to declare fields to be in each entity table like id
 * and creational timestamps
 *
 * Created by Antonio Redondo on 5/25/2017.
 */
@MappedSuperclass
public abstract class JPAEntity<T extends Serializable> implements Entity {

    protected  T id;
    protected Date createdAt;
    protected Date updatedAt;


    public JPAEntity() {

    }


    /**
     * To make XStream deserialization assign values to
     * base class fields of createdAt and updatedAt
     *
     * @return
     */
    public Object readResolve() {
        if (this.createdAt == null) {
            this.createdAt = new Date();
            this.updatedAt = createdAt;
        }

        return this;
    }


    @Id @GeneratedValue(strategy=GenerationType.IDENTITY)
    public T getId() {
        return id;
    }


    public void setId(T id) {
        this.id = id;
    }


    @JsonIgnore @Temporal(TemporalType.DATE) @Column
    public Date getCreatedAt() {
        return createdAt;
    }


    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }


    @JsonIgnore @Temporal(TemporalType.TIMESTAMP) @Column
    public Date getUpdatedAt() {
        return updatedAt;
    }


    public void setUpdatedAt(Date updatedAt) {
        this.updatedAt = updatedAt;
    }
}
