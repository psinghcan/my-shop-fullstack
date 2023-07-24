package com.psinghcan.myshopfullstack.mapper;

import com.psinghcan.myshopfullstack.domain.Invoice;
import com.psinghcan.myshopfullstack.model.InvoiceDto;
import org.mapstruct.*;

@Mapper(unmappedTargetPolicy = ReportingPolicy.IGNORE, componentModel = MappingConstants.ComponentModel.SPRING)
public interface InvoiceMapper {
    Invoice toEntity(InvoiceDto invoiceDto);

    InvoiceDto toDto(Invoice invoice);

    @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
    Invoice partialUpdate(InvoiceDto invoiceDto, @MappingTarget Invoice invoice);
}