package com.cadastrobackend.cadastrobackend.models;

public class Students {
    private Integer id;
    private String name;
    private String email;
    private String phone;
    private Integer idCourse;
    private Integer period;
    
    public Students(){

    }
    
    public Students(Integer id, String name, String email, String phone, Integer idCourse, Integer period) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.idCourse = idCourse;
        this.period = period;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

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

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public Integer getIdCourse() {
        return idCourse;
    }

    public void setIdCourse(Integer idCourse) {
        this.idCourse = idCourse;
    }

    public Integer getPeriod() {
        return period;
    }

    public void setPeriod(Integer period) {
        this.period = period;
    }


    


    
}

