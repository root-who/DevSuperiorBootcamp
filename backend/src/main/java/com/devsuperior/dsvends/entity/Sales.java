package com.devsuperior.dsvends.entity;

import javax.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDate;

@Entity
@Table(name="tb_sales")
public class Sales {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Integer visited;
    private Integer deals;
    private BigDecimal amount;
    private LocalDate date;
    @ManyToOne
    @JoinColumn(name="seller_id")
    private Seller seller;

}
