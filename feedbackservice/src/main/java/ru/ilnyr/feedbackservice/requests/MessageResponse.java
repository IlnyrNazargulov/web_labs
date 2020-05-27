package ru.ilnyr.feedbackservice.requests;

import lombok.Data;
import lombok.RequiredArgsConstructor;
import ru.ilnyr.feedbackservice.model.Message;

import java.util.List;

@Data
@RequiredArgsConstructor
public class MessageResponse {
    private final List<Message> messages;
}
