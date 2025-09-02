package com.sch.springboot.controller;

import com.sch.springboot.dto.Member;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
public class memberController {
    @ResponseBody
    @PostMapping("/member-api")
    public  Member memberApi(@ModelAttribute Member member ){

        return member;//Rest API

    }


    @PostMapping("/member")
    public String member(@ModelAttribute Member member,Model model ){
        System.out.println("post!!");
        model.addAttribute("member",member);
        return "member";

    }

    @GetMapping("/member")
    public String member(@RequestParam ("name") String name  ,
                         @RequestParam ("age") int age,
                         @RequestParam ("address") String address,
                         Model model) {

        Member member = new Member();
        member.setName(name);
        member.setAge(age);
        member.setAddress(address);


        model.addAttribute("member",member);

        /*System.out.println(name);
        System.out.println(age);
        System.out.println(address);*/
        return "member"; //View name
    }
}
