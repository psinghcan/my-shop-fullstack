package com.psinghcan.myshopfullstack.domain;

import jakarta.persistence.*;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "invoice", schema = "shop")
public class Invoice {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Integer id;

    @Size(max = 255)
    @Column(name = "contact_number")
    private String contactNumber;

    @Size(max = 255)
    @Column(name = "created_by")
    private String createdBy;

    @Size(max = 255)
    @Column(name = "email")
    private String email;

    @Size(max = 255)
    @Column(name = "name")
    private String name;

    @Size(max = 255)
    @Column(name = "payment_method")
    private String paymentMethod;

    @Size(max = 255)
    @Column(name = "product_detail")
    private String productDetail;

    @Column(name = "total_amount")
    private Double totalAmount;

    @Size(max = 255)
    @Column(name = "uuid")
    private String uuid;

}