package com.cadastrobackend.cadastrobackend.controllers;

import java.net.URI;
import java.util.ArrayList;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.cadastrobackend.cadastrobackend.models.Students;

import jakarta.annotation.PostConstruct;

@RestController
public class StudentController {
    List<Students> students = new ArrayList<>();

    @PostConstruct
    public void init() {

        Students st01 = new Students(1, "João", "joaodoria@gmail.com", "84999838432", 1, 1);
        Students st02 = new Students(2, "Maria", "maria@gmail.com", "84998003455", 2, 2);
        Students st03 = new Students(3, "Eufranor", "eufranorfilho@gmail.com", "8498343322", 3, 4);

        students.add(st01);
        students.add(st02);
        students.add(st03);
    }

    @GetMapping("students")
    public List<Students> getStudents() {
        return students;
    }

    @GetMapping("students/{id}")
    public ResponseEntity<Students> getStudent(@PathVariable Integer id) {
        Students stud = students.stream()
                .filter(s -> s.getId() == id)
                .findFirst()
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Student not found"));

        return ResponseEntity.ok(stud);
    }

    @PostMapping("students")
    public ResponseEntity<Students> save(@RequestBody Students student) {
        student.setId(students.size() + 1);
        students.add(student);

        URI location = ServletUriComponentsBuilder
                .fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(student.getId())
                .toUri();

        return ResponseEntity.created(location).body(student);
    }
}
