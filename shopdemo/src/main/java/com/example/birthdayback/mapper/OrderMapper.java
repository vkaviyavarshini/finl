package com.example.birthdayback.mapper;

import com.example.birthdayback.dto.OrderDto;
import com.example.birthdayback.entity.Order;

public class OrderMapper {

    public static OrderDto mapToOrderDto(Order order) {
        return new OrderDto(
                order.getId(),
                order.getProduct_id(),
                order.getProduct_name(),
                order.getAmount(),
                order.getAddress(),
                order.getContact(),
                order.getText()
        );
    }

    public static Order mapToOrder(OrderDto orderDto) {
        return new Order(
                orderDto.getId(),
                orderDto.getProduct_id(),
                orderDto.getProduct_name(),
                orderDto.getAmount(),
                orderDto.getAddress(),
                orderDto.getContact(),
                orderDto.getText()
        );
    }
}
