package com.sch.springboot.controller;



import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
public class SpringController {
    @GetMapping("/spring")
    public String spring(@RequestParam("name") String name,
                         @RequestParam("age") int age,
                         Model model){
        model.addAttribute("name",name);
        model.addAttribute("age",age);
        return "Hello ~~spring API";
     }
}
