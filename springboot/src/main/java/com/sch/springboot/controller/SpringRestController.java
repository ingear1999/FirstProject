package com.sch.springboot.controller;

import com.sch.springboot.dto.Member;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

//@ResponseBody 생략 가능 --> @Restcontroller 기때문에
@RestController
public class SpringRestController {
    @GetMapping("/spring-api")
    public String springApi(){
        Member member = new Member();
        member.setName("홍길동");
        member.setAge(30);
        member.setAddress("서울시");
        member.setSubject("스프링부트");
        return member.toString();
    }
}
