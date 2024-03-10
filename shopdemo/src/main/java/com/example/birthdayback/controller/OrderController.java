package com.example.birthdayback.controller;

import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.PostMapping;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.birthdayback.entity.Order;

import com.example.birthdayback.service.OrderService;



@RestController
@RequestMapping("/api/order")
public class OrderController {
    
    private final OrderService orderService;

    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @PostMapping("/submit")
    public ResponseEntity<String> submitOrder(@RequestBody Order order) {
        orderService.saveOrder(order);
        return ResponseEntity.ok("Order submitted successfully");
    }
}
