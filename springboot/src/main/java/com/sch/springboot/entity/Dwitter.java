package com.sch.springboot.entity;


import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity  //JPA가 관리하는 객체가 됨
public class Dwitter {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String name, message, image;

    @Column(name = "sdate")
    private LocalDateTime sdate;


    @PrePersist
    public void prePersist(){
        if(this.sdate==null){
            this.sdate=LocalDateTime.now();
        }
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public LocalDateTime getSdate() {
        return sdate;
    }

    public void setSdate(LocalDateTime sdate) {
        this.sdate = sdate;
    }
}