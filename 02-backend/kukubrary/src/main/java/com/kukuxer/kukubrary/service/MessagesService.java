package com.kukuxer.kukubrary.service;

import com.kukuxer.kukubrary.dao.MessageRepository;
import com.kukuxer.kukubrary.entity.Message;
import com.kukuxer.kukubrary.requestmodels.AdminQuestionRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestHeader;

import java.util.Optional;

@Service
@Transactional
public class MessagesService {
    private MessageRepository messageRepository;

    @Autowired
    public MessagesService(MessageRepository messageRepository){
        this.messageRepository = messageRepository;
    }
    public void postMessage(Message messageRequest,String userEmail){
        Message message = new Message(messageRequest.getTitle(), messageRequest.getQuestion());
        message.setUserEmail(userEmail);
        messageRepository.save(message);
    }
    public  void  putMessage(AdminQuestionRequest adminQuestionRequest,String userEmail)throws Exception {
        Optional<Message> message = messageRepository.findById(adminQuestionRequest.getId());
        if(!message.isPresent()){
            throw new Exception("Message not found");
        }
        message.get().setAdminEmail(userEmail);
        message.get().setResponse(adminQuestionRequest.getResponse());
        message.get().setClosed(true);
        messageRepository.save(message.get());
    }


}
