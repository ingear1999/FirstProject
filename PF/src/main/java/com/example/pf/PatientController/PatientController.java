package com.example.pf.PatientController;
import com.example.pf.Dito.SignupDTO;
import com.example.pf.Dito.LoginDTO;
import com.example.pf.Dito.ResponseMessage;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000") // allow React to call backend
public class PatientController {

    // in-memory storage
    private List<SignupDTO> users = new ArrayList<>();

    @PostMapping("/signup")
    public ResponseMessage signup(@RequestBody SignupDTO signupDTO) {
        // simple check if user exists
        for(SignupDTO u : users){
            if(u.getId().equals(signupDTO.getId())){
                return new ResponseMessage("ID already exists", false);
            }
        }
        users.add(signupDTO);
        return new ResponseMessage("Signup successful", true);
    }

    @PostMapping("/login")
    public ResponseMessage login(@RequestBody LoginDTO loginDTO) {
        for(SignupDTO u : users){
            if(u.getId().equals(loginDTO.getId()) && u.getPass().equals(loginDTO.getPass())){
                return new ResponseMessage("Login successful", true);
            }
        }
        return new ResponseMessage("Login failed", false);
    }
}
