package com.sch.springboot.repository;

import com.sch.springboot.entity.Dwitter;

import java.util.List;

public interface DwitterRepositoryInterface {
    List<Dwitter> findAll();
    String insert(Dwitter dwitter);
    String delete(Long id);
}