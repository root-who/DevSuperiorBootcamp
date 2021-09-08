package com.devsuperior.dsvends.entity;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="tb_sellers")
public class Seller {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY, mappedBy = "seller")
    private List<Sales> sales;

    public Seller(){

    }

    public Seller(String name) {
        this.name = name;
    }
}
