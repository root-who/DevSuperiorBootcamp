package com.devsuperior.dsvends.DTOs;

import com.devsuperior.dsvends.entity.Sale;

import java.io.Serializable;
import java.math.BigDecimal;
import java.time.LocalDate;

public class SaleDTO implements Serializable {
    private static final long serialVersionUID = 1L;

    private Long id;
    private LocalDate date;
    private Integer visitedClients;
    private Integer dealsMaked;
    private BigDecimal amount;
    private SellerDTO seller;

    public SaleDTO(Long id, LocalDate date, SellerDTO seller,
                   Integer visitedClients, Integer dealsMaked,
                   BigDecimal amount)
    {
        this.id = id; this.date = date; this.seller = seller;
        this.visitedClients = visitedClients;
        this.dealsMaked = dealsMaked; this.amount = amount;
    }

    public SaleDTO(Sale sale) {
        this.date = sale.getDate();
        this.seller = new SellerDTO(sale.getSeller());
        this.visitedClients = sale.getVisited();
        this.dealsMaked = sale.getDeals();
        this.amount = sale.getAmount();
        this.id = sale.getId();
    }

    public SaleDTO(){

    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public SellerDTO getSeller() {
        return seller;
    }

    public void setSeller(SellerDTO seller) {
        this.seller = seller;
    }

    public Integer getVisitedClients() {
        return visitedClients;
    }

    public void setVisitedClients(Integer visitedClients) {
        this.visitedClients = visitedClients;
    }

    public Integer getDealsMaked() {
        return dealsMaked;
    }

    public void setDealsMaked(Integer dealsMaked) {
        this.dealsMaked = dealsMaked;
    }

    public BigDecimal getAmount() {
        return amount;
    }

    public void setAmount(BigDecimal amount) {
        this.amount = amount;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
