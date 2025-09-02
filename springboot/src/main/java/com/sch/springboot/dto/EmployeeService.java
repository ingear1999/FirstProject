package com.sch.springboot.dto;


import com.sch.springboot.repository.EmployeeReposity;
import com.sch.springboot.repository.JpaEmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class EmployeeService {
//    private final JdbcTemplateEmployeeRepository employeeRepository;

    private JpaEmployeeRepository employeeRepository;

    @Autowired
    public EmployeeService(JpaEmployeeRepository jpaEmployeeRepository) {
        this.employeeRepository = jpaEmployeeRepository;
    }

    //생성자를 이용하여 EmployeeRespoitory 를 loose -> DI

    EmployeeReposity employeeReposity;

  /*  @Autowired
    public EmployeeService(EmployeeReposity employeeReposity) {
        this.employeeReposity = employeeReposity;
    }*/

    //사원리스트

    public List<Employee> findAll(){
        return employeeReposity.selectAll();
    }
    //사원등록
    public int register(Employee employee) {
        return employeeRepository.insert(employee);
    }
}
