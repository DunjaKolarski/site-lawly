import "./MessagesChat.css";
import type { Conversation } from "./messagesData";
import MessagesSession from "./MessagesSession";

type MessagesChatProps = {
  conversation: Conversation;
  onBack: () => void;
  onViewDetails: () => void;
};

function MessagesChat({
  conversation,
  onBack,
  onViewDetails,
}: MessagesChatProps) {
  return (
    <section className="messages-chat" aria-label="Conversation">
      <header className="messages-chat-header">
        <button
          type="button"
          className="messages-chat-back"
          aria-label="Back to conversations"
          onClick={onBack}
        >
          <i className="bi bi-chevron-left" aria-hidden="true"></i>
        </button>
        <img src={conversation.image} alt="" />
        <div className="messages-chat-person">
          <h2>{conversation.name}</h2>
          <button type="button" onClick={onViewDetails}>
            View Details
          </button>
        </div>
      </header>

      <MessagesSession />

      <div className="messages-chat-body">
        <div className="messages-chat-day">
          <span>Tuesday</span>
        </div>
        <div className="messages-chat-message messages-chat-message-received">
          <p>Lorem ipsum dolor sit amet consectetur.</p>
          <span>4:23 PM</span>
        </div>
        <div className="messages-chat-message messages-chat-message-sent">
          <p>Lorem ipsum dolor sit amet consectetur.</p>
          <span>4:23 PM</span>
        </div>

        <div className="messages-chat-message messages-chat-message-mobile">
          <p>
            Lorem ipsum dolor sit amet consectetur. Faucibus id condimentum.
          </p>
          <span>4:23 PM</span>
        </div>
        <div className="messages-chat-recommendation">
          <div className="messages-chat-recommendation-content">
            <h3>Cynthia L. recommended an offering</h3>

            <div className="messages-chat-offering">
              <h4>Natasha's Interview Prep</h4>
              <p>6 hours of coaching</p>

              <p className="messages-chat-offering-price">
                <span>$560</span>
                <span>Save $55</span>
              </p>

              <button type="button" className="primary-button">
                Buy now
              </button>
            </div>
          </div>

          <span>4:27 PM</span>
        </div>
        <div className="messages-chat-event">
          <p className="messages-chat-event-booked">
            <strong>Session Booked</strong> for 3/1/2025 3:30 to 4:30 pm EST
          </p>
          <span>4:28 PM</span>
        </div>

        <div className="messages-chat-day">
          <span>Yesterday</span>
        </div>

        <div className="messages-chat-event">
          <p className="messages-chat-event-canceled">
            <strong>Session Canceled</strong> for 1/3/2025 at 4:00 pm
          </p>
          <span>4:28 PM</span>
        </div>

        <div className="messages-chat-event">
          <p className="messages-chat-event-ended">
            <strong>Your Package With Cynthia Has Ended</strong>
            <span>5.0/5.0 Hours Completed</span>
          </p>
          <span>5:24 PM</span>
        </div>
        <div className="messages-chat-attachment">
          <div className="messages-chat-file">
            <i className="bi bi-file-earmark-pdf" aria-hidden="true"></i>
            <span>Harvard-Essay.PDF</span>
          </div>
          <span>5:24 PM</span>
        </div>

        <div className="messages-chat-review">
          <div className="messages-chat-review-content">
            <h3>Rate your experience with Cynthia</h3>

            <button type="button" className="primary-button">
              Leave a review
            </button>
          </div>
          <span>5:24 PM</span>
        </div>
      </div>

      <div className="messages-chat-composer">
        <p>
          It's <strong>3:59 AM</strong> for {conversation.name}
        </p>

        <div className="messages-chat-input">
          <textarea
            placeholder="Type a message"
            aria-label={`Message ${conversation.name}`}
            rows={2}
          />

          <button type="button" aria-label="Attach a file">
            <i className="bi bi-paperclip" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </section>
  );
}

export default MessagesChat;
