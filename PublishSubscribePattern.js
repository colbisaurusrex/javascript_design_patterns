/* Publish/Subscribe Pattern */

/* TLDR; Promotes loose coupling. Rather than single objects calling on the methods of other objects directly, they instead subscribe to specific task or activity of another object */

var mailCounter = 0;

// This implies publish and subscribe has already been implemented
var subscriber1 = subscribe("inbox/newMesssage", function(topic, data) {
  console.log("A new message was receieved: ", topic);
  $(".messageSender").html(data.sender);
  $(".messagePreview").html(data.body);
});

// Here's another subscriber using the same data to perform a different task.
var subscriber2 = subscribe("inbox/newMessage", function(topic, data) {
  $(".newMessageCenter").html(mailCounter++);
});

publish("inbox/newMessage", [
  {
    sender: "hello@google.com",
    body: "Hey there! How are you doing today?"
  }
]);
/*
    Notes:
        - Similar to the Observe Pattern, but uses a topic/event channel that sits between the objects wishing to receive notifications (subscribers) and the object firing the even (the publisher)
        - the idea is to avoid dependencies between the subscriber and publisher
        - differs from the Observer pattern as it allows any subscriber implementing an appropriate event handlerr to register for and receive topic notifications broadcast by the publisher
        -" While it may not always be the best solution to every problem, these patterns remain one of the best tools for designing decoupled systems and should be considered an important tool in any JavaScript developer’s utility belt"
*/
