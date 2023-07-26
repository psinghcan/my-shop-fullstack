package com.psinghcan.myshopfullstack.controller;

import com.psinghcan.myshopfullstack.mapper.InvoiceMapper;
import com.psinghcan.myshopfullstack.model.InvoiceDto;
import com.psinghcan.myshopfullstack.model.ProductDto;
import com.psinghcan.myshopfullstack.repository.InvoiceRepository;
import jakarta.validation.Valid;
import lombok.NonNull;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/invoice")
public class InvoiceController {
    private final InvoiceRepository invoiceRepository;
    private final InvoiceMapper invoiceMapper;

    public InvoiceController(InvoiceRepository invoiceRepository, InvoiceMapper invoiceMapper) {
        this.invoiceRepository = invoiceRepository;
        this.invoiceMapper = invoiceMapper;
    }

    @GetMapping("")
    public List<InvoiceDto> getAllInvoices() {
        return invoiceRepository.findAll()
                .stream()
                .map(invoiceMapper::toDto)
                .collect(Collectors.toList());
    }

    @PostMapping("/new")
    public InvoiceDto saveCategory(@RequestBody @NonNull @Valid InvoiceDto invoiceDto) {
        return invoiceMapper.toDto(invoiceRepository.save(invoiceMapper.toEntity(invoiceDto)));
    }
}
