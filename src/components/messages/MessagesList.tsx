import "./MessagesList.css";
import type { Conversation } from "./messagesData";

type MessagesListProps = {
  conversations: Conversation[];
  selectedConversationId: string;
  onSelectConversation: (id: string) => void;
};

function MessagesList({
  conversations,
  selectedConversationId,
  onSelectConversation,
}: MessagesListProps) {
  return (
    <section className="messages-list" aria-label="Conversations">
      <div className="messages-list-toolbar">
        <div className="messages-list-search">
          <i className="bi bi-search" aria-hidden="true"></i>

          <input
            type="search"
            placeholder="Search"
            aria-label="Search conversations"
          />
        </div>

        <button
          type="button"
          className="messages-list-filter-toggle"
          aria-label="Conversation filters"
        >
          <i className="bi bi-filter-left" aria-hidden="true"></i>
        </button>
      </div>

      {conversations.length === 0 ? (
        <p className="messages-list-empty">No messages to show.</p>
      ) : (
        conversations.map((conversation) => (
          <button
            key={conversation.id}
            type="button"
            className={
              selectedConversationId === conversation.id
                ? "messages-list-item messages-list-item-active"
                : "messages-list-item"
            }
            aria-pressed={selectedConversationId === conversation.id}
            onClick={() => onSelectConversation(conversation.id)}
          >
            <span className="messages-list-unread">
              {conversation.unread && (
                <span aria-label="Unread conversation">●</span>
              )}
            </span>

            <img src={conversation.image} alt="" />

            <span className="messages-list-preview">
              <strong>{conversation.name}</strong>
              <span>{conversation.preview}</span>
            </span>

            <span className="messages-list-meta">
              <span className="messages-list-markers">
                {conversation.flagged && (
                  <i className="bi bi-flag-fill" aria-label="Flagged"></i>
                )}
                {conversation.pinned && (
                  <i className="bi bi-pin-angle-fill" aria-label="Pinned"></i>
                )}
              </span>

              <span>{conversation.time}</span>
            </span>
          </button>
        ))
      )}
    </section>
  );
}

export default MessagesList;
