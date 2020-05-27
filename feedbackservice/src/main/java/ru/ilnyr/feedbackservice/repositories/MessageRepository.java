package ru.ilnyr.feedbackservice.repositories;

import org.springframework.data.repository.CrudRepository;
import ru.ilnyr.feedbackservice.model.Message;

public interface MessageRepository extends CrudRepository<Message, Integer> {
}
