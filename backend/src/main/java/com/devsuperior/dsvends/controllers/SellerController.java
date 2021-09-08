package com.devsuperior.dsvends.controllers;

import com.devsuperior.dsvends.DTOs.SalesDTO;
import com.devsuperior.dsvends.DTOs.SellerDTO;
import com.devsuperior.dsvends.services.SalesService;
import com.devsuperior.dsvends.services.SellerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/sellers")
public class SellerController {

    @Autowired
    private SellerService service;

    @GetMapping
    public ResponseEntity <List<SellerDTO>> findAll(){
        List<SellerDTO> sellers = service.findAll();
        return ResponseEntity.ok(sellers);
    }
}
