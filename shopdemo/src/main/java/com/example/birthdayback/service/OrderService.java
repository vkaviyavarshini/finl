package com.example.birthdayback.service;

// import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.birthdayback.entity.Order;
import com.example.birthdayback.repository.OrderRepository;

@Service
public class OrderService {

    private final OrderRepository orderRepository;

    // @Autowired
    public OrderService(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    public void saveOrder(Order order) {
        orderRepository.save(order);
    }
}
