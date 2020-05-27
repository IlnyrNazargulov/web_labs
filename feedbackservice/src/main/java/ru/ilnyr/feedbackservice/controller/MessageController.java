package ru.ilnyr.feedbackservice.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.ilnyr.feedbackservice.model.Message;
import ru.ilnyr.feedbackservice.requests.MessageResponse;
import ru.ilnyr.feedbackservice.services.MessageService;

import java.util.List;

@RestController
@RequestMapping(value = "api/message", produces = MediaType.APPLICATION_JSON_VALUE)
public class MessageController {
    @Autowired
    private MessageService messageService;

    @GetMapping
    public ResponseEntity<MessageResponse> getRoutes() {
        List<Message> allMessage = messageService.getAllMessage();
        return new ResponseEntity<>(new MessageResponse(allMessage), HttpStatus.OK);
    }

    @PostMapping()
    public ResponseEntity updateRoute(@RequestBody Message message) {
        messageService.addMessage(message);
        return new ResponseEntity(HttpStatus.OK);
    }

}
