package com.psinghcan.myshopfullstack.model;

import jakarta.validation.constraints.Size;
import lombok.Data;
import lombok.Value;

import java.io.Serializable;

/**
 * DTO for {@link com.psinghcan.myshopfullstack.domain.Invoice}
 */

@Data
public class InvoiceDto implements Serializable {
    Integer id;
    @Size(max = 255)
    String contactNumber;
    @Size(max = 255)
    String createdBy;
    @Size(max = 255)
    String email;
    @Size(max = 255)
    String name;
    @Size(max = 255)
    String paymentMethod;
    @Size(max = 255)
    String productDetail;
    Double totalAmount;
    @Size(max = 255)
    String uuid;
}