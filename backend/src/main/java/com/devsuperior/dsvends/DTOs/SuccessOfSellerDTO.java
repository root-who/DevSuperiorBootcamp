package com.devsuperior.dsvends.DTOs;

import com.devsuperior.dsvends.entity.Seller;

public class SuccessOfSellerDTO {

    private String sellerName;
    private Long clientsVisited;
    private Long dealsMaked;


    public SuccessOfSellerDTO(Seller seller, Long clientsVisited, Long dealsMaked){
        this.sellerName = seller.getName();
        this.dealsMaked = dealsMaked;
        this.clientsVisited = clientsVisited;
    }

    public Long getClientsVisited() {
        return clientsVisited;
    }

    public void setClientsVisited(Long clientsVisited) {
        this.clientsVisited = clientsVisited;
    }

    public Long getDealsMaked() {
        return dealsMaked;
    }

    public void setDealsMaked(Long dealsMaked) {
        this.dealsMaked = dealsMaked;
    }

    public String getSellerName() {
        return sellerName;
    }

    public void setSellerName(String sellerName) {
        this.sellerName = sellerName;
    }
}
