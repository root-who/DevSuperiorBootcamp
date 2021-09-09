package com.devsuperior.dsvends.repository;

import com.devsuperior.dsvends.DTOs.SalesSumBySellerDTO;
import com.devsuperior.dsvends.DTOs.SuccessOfSellerDTO;
import com.devsuperior.dsvends.entity.Sale;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SaleRepository extends JpaRepository<Sale, Long> {

    @Query("SELECT new com.devsuperior.dsvends.DTOs.SalesSumBySellerDTO(s.seller, SUM(s.amount))" +
            " FROM Sale s GROUP BY s.seller")
    List<SalesSumBySellerDTO> sumOfAmountBySeller();

    @Query("SELECT new com.devsuperior.dsvends.DTOs.SuccessOfSellerDTO(s.seller, SUM(s.visited), SUM(s.deals))" +
            " FROM Sale s GROUP BY s.seller")
    List<SuccessOfSellerDTO> dealsAndVisitsOfSeller();
}
