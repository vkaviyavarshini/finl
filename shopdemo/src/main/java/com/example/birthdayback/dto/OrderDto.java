package com.example.birthdayback.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class OrderDto {
    private Long id;
    private Long product_id;
    private String product_name;
    private double amount;
    private String address;
    private String contact;
    private String text;
}
