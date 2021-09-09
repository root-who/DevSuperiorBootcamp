package com.devsuperior.dsvends.controllers;

import com.devsuperior.dsvends.DTOs.SaleDTO;
import com.devsuperior.dsvends.DTOs.SalesSumBySellerDTO;
import com.devsuperior.dsvends.DTOs.SuccessOfSellerDTO;
import com.devsuperior.dsvends.services.SaleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
@RequestMapping(value = "/sales")
public class SaleController {

    @Autowired
    private SaleService service;

    @GetMapping
    public ResponseEntity<Page<SaleDTO>> findAll(Pageable pageable){
        Page<SaleDTO> sales = this.service.findAll(pageable);
        return ResponseEntity.ok(sales);
    }

    @GetMapping(value="sumamount-by-seller")
        public ResponseEntity<List<SalesSumBySellerDTO>> sumOfAmount(){
            List<SalesSumBySellerDTO> sellerAndAmount = this.service.sumOfAmountBySeller();
            return ResponseEntity.ok(sellerAndAmount);
        }

    @GetMapping(value="success-of-seller")
    public ResponseEntity<List<SuccessOfSellerDTO>> successOfSeller(){
        List<SuccessOfSellerDTO> successOfSeller = this.service.dealsAndVisitsOfSeller();
        return ResponseEntity.ok(successOfSeller);
    }


}
