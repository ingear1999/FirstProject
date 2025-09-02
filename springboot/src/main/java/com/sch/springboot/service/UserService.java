package com.sch.springboot.service;



import com.sch.springboot.dto.User;
import com.sch.springboot.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.Map;

@Service
public class UserService {

    UserRepository userRepository ;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
    /**
     * login: 로인 비즈니스 로직 처리
     */
    @ResponseBody
    @PostMapping("/login")
    public Map<String,Object> login(User user){
        System.out.println("UserService login");
        System.out.println(user.getId() + user.getName());
        return userRepository.login(user);

    }
    /**
     * signup: 회원가입 비즈니스 로직 처리
     */
    public String sigUp(User user){
        System.out.println("UserService signup");
        System.out.println(user.getId()+" " + user.getPass() + " " + user.getEmail()+" " + user.getName());
        return "userservive ---> signup";

    }
   @ResponseBody
   @PostMapping("/signup")
   public Map<String, String> signUp(User user) {
       return userRepository.signUp(user);
   }
}
