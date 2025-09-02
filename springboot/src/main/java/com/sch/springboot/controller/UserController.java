package com.sch.springboot.controller;

import com.sch.springboot.dto.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import com.sch.springboot.service.UserService;

import java.util.Map;

@Controller
public class UserController {
    //UserService userService = new UserService(); //강한 결합(tight counpling)
    UserService userService;

    //생성자를 통해 느소한 결합(Loose Coupling)

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;


    }

    // setter 메소드를 통해 느소한 결합(loose Coupling)

    //    @Autowired
      //  public void setUserService(UserService userService) {
        //    this.userService = userService;

        //}

    @ResponseBody
    @PostMapping("/login")
    public Map<String, Object> login(User user){
        return userService.login(user);
    }


    @ResponseBody
    @PostMapping("/signup")
    public String signup( User user){
        return userService.sigUp(user);
    }
}
