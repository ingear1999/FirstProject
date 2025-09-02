package com.sch.springboot.controller;

import com.sch.springboot.dto.Employee;
import com.sch.springboot.dto.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.List;

@Controller
public class EmployeeController {
    EmployeeService employeeService;

    //생성자를 이용한 Loose 커플링 DI
    @Autowired
    public EmployeeController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }
    @PostMapping("/register")
    public int register(Employee employee){
        return employeeService.register(employee);  //success or fail
    }

    @GetMapping("/list")
    public String list(Model model){
        List<Employee> list = employeeService.findAll();
        model.addAttribute("list",list);
        return "employeeList";
    }

}

