package com.example.pf.PatientController;

import com.example.pf.Dito.SignupDTO;

//import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
//import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class SignupController {

    @PostMapping("/signup")
    public String register(@RequestParam String id,
                            @RequestParam String pass,
                            @RequestParam String name,
                            @RequestParam String email) {

        System.out.println("ID: " + id);
        System.out.println("Password: " + pass);
        System.out.println("Name: " + name);
        System.out.println("Email: " + email);

        return "SignUp successful!";
    }
}
