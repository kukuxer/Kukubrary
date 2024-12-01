package com.kukuxer.kukubrary.controller;

import com.kukuxer.kukubrary.entity.Book;
import com.kukuxer.kukubrary.service.BookService;
import com.kukuxer.kukubrary.utils.ExtractJWT;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/api/books")
public class BookController {
    private BookService bookService;

    @Autowired
    public BookController(BookService bookService){
        this.bookService = bookService;
    }

    @PutMapping("/secure/checkout")
    public Book checkoutBook(@RequestParam Long bookId,
                             @RequestHeader(value = "Authorization")String token) throws Exception {
        String userEmail = ExtractJWT.payloadJWTExtraction(token,"sub");
        return bookService.checkoutBook(userEmail,bookId);
    }

    @GetMapping("/secure/ischeckedout/byuser")
    public  Boolean checkoutBookByUser(@RequestParam Long bookId,
                                       @RequestHeader(value = "Authorization")String token){
        String userEmail = ExtractJWT.payloadJWTExtraction(token,"sub");
        return bookService.checkoutBookByUser(userEmail,bookId);
    }

    @GetMapping("/secure/currentLoans/count")
    public int currentLoansCount(@RequestHeader(value = "Authorization")String token){
        String userEmail = ExtractJWT.payloadJWTExtraction(token,"sub");
        return  bookService.currentLoansCount(userEmail);
    }
}
