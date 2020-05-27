package ru.ilnyr.feedbackservice.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import ru.ilnyr.feedbackservice.model.Message;
import ru.ilnyr.feedbackservice.repositories.MessageRepository;

import java.util.List;

@Component
public class MessageService {
    @Autowired
    private MessageRepository messageRepository;

    public List<Message> getAllMessage() {
        return (List<Message>) messageRepository.findAll();
    }

    public void addMessage(Message message) {
        messageRepository.save(message);
    }
}
