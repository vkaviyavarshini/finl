package com.example.birthdayback.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="orders")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(name="prod_id",nullable = false)
    private Long product_id;

    @Column(name="prod_name",nullable = false)
    private String product_name;

    @Column(name="amount",nullable = false)
    private double amount;

    @Column(name="address",nullable = false)
    private String address;

    @Column(name="contact",nullable = false)
    private String contact;

    @Column(name="text/url",nullable = false)
    private String text;
}
