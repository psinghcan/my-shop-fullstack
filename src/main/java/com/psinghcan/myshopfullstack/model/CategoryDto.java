package com.psinghcan.myshopfullstack.model;

import jakarta.validation.constraints.Size;
import lombok.Data;
import lombok.Value;

import java.io.Serializable;

/**
 * DTO for {@link com.psinghcan.myshopfullstack.domain.Category}
 */

@Data
public class CategoryDto implements Serializable {
    Integer id;
    @Size(max = 255)
    String name;
}