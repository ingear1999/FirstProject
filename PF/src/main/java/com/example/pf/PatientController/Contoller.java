package com.example.pf.PatientController;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

public class Contoller {
    @PostMapping("/register")
    public String registerPatient(@RequestParam String name,
                                  @RequestParam int age,
                                  @RequestParam String address) {
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("Address: " + address);
        return "Patient registered successfully!";
    }
}
