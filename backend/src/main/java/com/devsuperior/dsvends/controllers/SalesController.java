package com.devsuperior.dsvends.controllers;

import com.devsuperior.dsvends.services.SalesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("sales")
public class SalesController {

    @Autowired
    private SalesService service;
}
