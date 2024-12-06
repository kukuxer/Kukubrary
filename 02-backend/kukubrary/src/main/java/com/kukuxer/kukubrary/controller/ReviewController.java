package com.kukuxer.kukubrary.controller;


import com.kukuxer.kukubrary.requestmodels.ReviewRequest;
import com.kukuxer.kukubrary.service.ReviewService;
import com.kukuxer.kukubrary.utils.ExtractJWT;
import com.nimbusds.jose.crypto.impl.XC20P;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/api/reviews")
public class ReviewController {

    private ReviewService reviewService;

    public  ReviewController(ReviewService reviewService){
        this.reviewService = reviewService;
    }

    @GetMapping("/secure/user/book")
    public Boolean reviewBookByUser(@RequestHeader(value = "Authorization")String token,@RequestParam Long bookId) throws Exception{
        String userEmail = ExtractJWT.payloadJWTExtraction(token,"sub");
        if(userEmail == null){
            throw new Exception("User email is missing");
        }
        return  reviewService.userReviewListed(userEmail,bookId);
    }

    @PostMapping("/secure")
    public void  postReview(@RequestHeader(value = "Authorization")String token,
    @RequestBody ReviewRequest reviewRequest) throws Exception {
        String userEmail = ExtractJWT.payloadJWTExtraction(token,"sub");
        if(userEmail == null){
            throw new Exception("User email is missing");
        }
        reviewService.postReview(userEmail,reviewRequest);
    }
}