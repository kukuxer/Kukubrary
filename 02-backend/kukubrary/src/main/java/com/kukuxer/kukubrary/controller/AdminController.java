package com.kukuxer.kukubrary.controller;

import com.kukuxer.kukubrary.entity.Book;
import com.kukuxer.kukubrary.requestmodels.AddBookRequest;
import com.kukuxer.kukubrary.service.AdminService;
import com.kukuxer.kukubrary.utils.ExtractJWT;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("https://localhost:3000")
@RestController
@RequiredArgsConstructor
@RequestMapping("api/admin")
public class AdminController {
    private final AdminService adminService;

    @PostMapping("/secure/add/book")
    public void postBook(@RequestHeader(value = "Authorization")String token, @RequestBody AddBookRequest addBookRequest) throws Exception {
        String admin = ExtractJWT.payloadJWTExtraction(token, "userType");

        if(admin == null || !admin.equals("admin")){
            throw new Exception("Administration page only");
        }
        adminService.postBook(addBookRequest);
    }
    @PostMapping("/secure/increase/book/quantity")
    public void increaseQuantity(@RequestHeader(value = "Authorization")String token, @RequestParam Long bookId) throws Exception {
        String admin = ExtractJWT.payloadJWTExtraction(token, "userType");

        if(admin == null || !admin.equals("admin")){
            throw new Exception("Administration page only");
        }
        adminService.increaseBookQuantity(bookId);
    }
    @PostMapping("/secure/decrease/book/quantity")
    public void decreaseQuantity(@RequestHeader(value = "Authorization")String token, @RequestParam Long bookId) throws Exception {
        String admin = ExtractJWT.payloadJWTExtraction(token, "userType");

        if(admin == null || !admin.equals("admin")){
            throw new Exception("Administration page only");
        }
        adminService.decreaseQuantity(bookId);
    }

    @DeleteMapping("/secure/delete/book")
    public void deleteBook(@RequestHeader(value = "Authorization")String token, @RequestParam Long bookId) throws Exception {
        String admin = ExtractJWT.payloadJWTExtraction(token, "userType");
        if(admin == null || !admin.equals("admin")){
            throw new Exception("Administration page only");
        }
        adminService.deleteBook(bookId);
    }
}
