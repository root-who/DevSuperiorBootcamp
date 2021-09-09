package com.devsuperior.dsvends.DTOs;


import com.devsuperior.dsvends.entity.Seller;

import java.math.BigDecimal;

public class SalesSumBySellerDTO {
    private String sellerName;
    private BigDecimal sumAmountSale;


    public SalesSumBySellerDTO(Seller seller, BigDecimal sumAmountSale) {
        this.sellerName = seller.getName();
        this.sumAmountSale = sumAmountSale;
    }

    public String getSellerName() {
        return sellerName;
    }

    public void setSellerName(String sellerName) {
        this.sellerName = sellerName;
    }

    public BigDecimal getSumAmountSale() {
        return sumAmountSale;
    }

    public void setSumAmountSale(BigDecimal sumAmountSale) {
        this.sumAmountSale = sumAmountSale;
    }
}
