package com.example.pf.PatientService;

import com.example.pf.Dito.SignupDTO;
import org.springframework.stereotype.Service;

@Service
public class PatientxService {
    public String registerPatient(SignupDTO patient) {
        // Imagine saving to DB here
        System.out.println("Saving patient: " + patient.getId());
        return "Patient registered!";
    }
}
