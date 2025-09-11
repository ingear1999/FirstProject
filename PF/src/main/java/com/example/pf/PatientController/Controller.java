package com.example.pf.PatientController; // rename PatientController -> controller

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Controller {

    @PostMapping("/login")
    public String registerPatient(@RequestParam String id, @RequestParam String pass) {
        System.out.println("ID: " + id);
        System.out.println("Password: " + pass);
        return "Patient registered successfully!";
    }

    
}
