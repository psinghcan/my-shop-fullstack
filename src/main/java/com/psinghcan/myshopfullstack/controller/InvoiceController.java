package com.psinghcan.myshopfullstack.controller;

import com.psinghcan.myshopfullstack.domain.Category;
import com.psinghcan.myshopfullstack.domain.Invoice;
import com.psinghcan.myshopfullstack.mapper.InvoiceMapper;
import com.psinghcan.myshopfullstack.model.CategoryDto;
import com.psinghcan.myshopfullstack.model.InvoiceDto;
import com.psinghcan.myshopfullstack.model.ProductDto;
import com.psinghcan.myshopfullstack.repository.InvoiceRepository;
import jakarta.validation.Valid;
import lombok.NonNull;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Objects;
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

    @GetMapping("/{id}")
    public InvoiceDto getInvoiceById(@PathVariable Integer id) {
        return invoiceRepository.findById(id)
                .map(invoiceMapper::toDto)
                .orElseThrow(() -> new IllegalArgumentException("Invoice with id " + id + " not found"));
    }

    @PutMapping("/{id}")
    public InvoiceDto updateInvoice(
            @PathVariable Integer id,
            @Valid @RequestBody @NonNull InvoiceDto dto) {

        if (dto.getId() == null) {
            throw new IllegalArgumentException("Invoice id cannot be null");
        }
        if (!Objects.equals(id, dto.getId())) {
            throw new IllegalArgumentException("Incorrect invoice id; not matching with the passed invoice");
        }
        Invoice invoice = invoiceRepository.findById(dto.getId())
                .orElseThrow(() -> new IllegalArgumentException("invoice with id " + dto.getId() + " not found"));
        Invoice updatedInvoice = invoiceMapper.partialUpdate(dto, invoice);
        return invoiceMapper.toDto(invoiceRepository.save(updatedInvoice));
    }

    @PostMapping("")
    public InvoiceDto saveCategory(@RequestBody @NonNull @Valid InvoiceDto invoiceDto) {
        return invoiceMapper.toDto(invoiceRepository.save(invoiceMapper.toEntity(invoiceDto)));
    }
}
