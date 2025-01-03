package com.kukuxer.kukubrary.controller;

import com.kukuxer.kukubrary.entity.Book;
import com.kukuxer.kukubrary.responsemodels.ShelfCurrentLoansResponse;
import com.kukuxer.kukubrary.service.BookService;
import com.kukuxer.kukubrary.utils.ExtractJWT;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("https://localhost:3000")
@RequestMapping("/api/books")
public class BookController {
    private BookService bookService;

    @Autowired
    public BookController(BookService bookService) {
        this.bookService = bookService;
    }

    @PutMapping("/secure/checkout")
    public Book checkoutBook(@RequestParam Long bookId,
                             @RequestHeader(value = "Authorization") String token) throws Exception {
        String userEmail = ExtractJWT.payloadJWTExtraction(token, "sub");
        return bookService.checkoutBook(userEmail, bookId);
    }

    @PutMapping("/secure/return")
    public void returnBook(@RequestHeader(value = "Authorization") String token, @RequestParam Long bookId) throws Exception {
        String userEmail = ExtractJWT.payloadJWTExtraction(token, "sub");
        bookService.returnBook(userEmail, bookId);
    }
    @PutMapping("/secure/renew/loan")
    public  void renewLoan(@RequestHeader(value = "Authorization")String token,@RequestParam long bookId) throws Exception{
        String userEmail = ExtractJWT.payloadJWTExtraction(token, "sub");
        bookService.renewLoan(userEmail,bookId);
    }

    @GetMapping("/secure/ischeckedout/byuser")
    public Boolean checkoutBookByUser(@RequestParam Long bookId,
                                      @RequestHeader(value = "Authorization") String token) {
        String userEmail = ExtractJWT.payloadJWTExtraction(token, "sub");
        return bookService.checkoutBookByUser(userEmail, bookId);
    }

    @GetMapping("/secure/currentLoans/count")
    public int currentLoansCount(@RequestHeader(value = "Authorization") String token) {
        String userEmail = ExtractJWT.payloadJWTExtraction(token, "sub");
        return bookService.currentLoansCount(userEmail);
    }

    @GetMapping("/secure/currentLoans")
    public List<ShelfCurrentLoansResponse> currentLoans(@RequestHeader(value = "Authorization") String token) throws Exception {
        String userEmail = ExtractJWT.payloadJWTExtraction(token, "sub");
        return bookService.currentLoans(userEmail);
    }
}
