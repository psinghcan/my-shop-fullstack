package com.psinghcan.myshopfullstack.model;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Data;
import lombok.Value;

import java.io.Serializable;

/**
 * DTO for {@link com.psinghcan.myshopfullstack.domain.Product}
 */

@Data
public class ProductDto implements Serializable {
    Integer id;
    @Size(max = 255)
    String description;
    @Size(max = 255)
    String name;
    Double price;
    @Size(max = 255)
    String status;
    @NotNull
    CategoryDto category;
}