package com.devsuperior.dsvends.services;

import com.devsuperior.dsvends.DTOs.SaleDTO;
import com.devsuperior.dsvends.DTOs.SalesSumBySellerDTO;
import com.devsuperior.dsvends.DTOs.SuccessOfSellerDTO;
import com.devsuperior.dsvends.entity.Sale;
import com.devsuperior.dsvends.repository.SaleRepository;
import com.devsuperior.dsvends.repository.SellerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class SaleService {

    @Autowired
    private SaleRepository saleRepository;

    @Autowired
    private SellerRepository sellerRepository;

    @Transactional(readOnly = true)
    public Page<SaleDTO> findAll(Pageable pageable){
        this.sellerRepository.findAll();
        Page<Sale> sales = this.saleRepository.findAll(pageable);
        return sales.map(sale -> new SaleDTO(sale));
    }

    @Transactional(readOnly = true)
    public List<SalesSumBySellerDTO> sumOfAmountBySeller(){
        this.sellerRepository.findAll();
        return saleRepository.sumOfAmountBySeller();
    }

    @Transactional(readOnly = true)
    public List<SuccessOfSellerDTO> dealsAndVisitsOfSeller(){
        this.sellerRepository.findAll();
        return this.saleRepository.dealsAndVisitsOfSeller();
    }
}
