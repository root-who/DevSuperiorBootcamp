package com.devsuperior.dsvends.services;

import com.devsuperior.dsvends.DTOs.SellerDTO;
import com.devsuperior.dsvends.entity.Seller;
import com.devsuperior.dsvends.repository.SellerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class SellerService {

    @Autowired
    private SellerRepository sellerRepository;

    public List<SellerDTO> findAll(){
        List<Seller> sellers = sellerRepository.findAll();
        return sellers.stream().map(SellerDTO::new).collect(Collectors.toList());
    }
}
