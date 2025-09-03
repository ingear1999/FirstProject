package Controller;

import Dto.PatientInfo;

@Controller
public class UserController {

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
