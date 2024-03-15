package com.cadastrobackend.cadastrobackend.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cadastrobackend.cadastrobackend.models.Course;

import jakarta.annotation.PostConstruct;

@RestController
@CrossOrigin
public class CourseController {
    List<Course> courses = new ArrayList<>();

    @PostConstruct
    public void init(){
        Course c1 = new Course(1, "Engenharia de Software");
        Course c2 = new Course(2, "Ciência da Computação");
        courses.add(c1);
        courses.add(c2);
    }
    @GetMapping("courses")
    public List<Course> getCourses(){
        return courses;
    }
}
