import "./Messages.css";
import { useState } from "react";
import EventsHeader from "../components/events/EventsHeader";
import EventsSideBar from "../components/events/EventsSideBar";
import Footer from "../components/layout/Footer";
import MessagesList from "../components/messages/MessagesList";
import { initialConversations } from "../components/messages/messagesData";
import MessagesChat from "../components/messages/MessagesChat";
import MessagesAdvisor from "../components/messages/MessagesAdvisor";

function Messages() {
  const [selectedConversationId, setSelectedConversationId] =
    useState("jeremy");
  const [mobileView, setMobileView] = useState("list");

  const selectedConversation = initialConversations.find(
    (conversation) => conversation.id === selectedConversationId,
  );

  return (
    <>
      <EventsHeader />

      <div className="messages-layout">
        <EventsSideBar />

        <main className={`messages-content messages-view-${mobileView}`}>
          <div className="messages-main">
            <h1>Messages</h1>

            <div className="messages-workspace">
              <MessagesList
                conversations={initialConversations}
                selectedConversationId={selectedConversationId}
                onSelectConversation={(id) => {
                  setSelectedConversationId(id);
                  setMobileView("chat");
                }}
              />

              {selectedConversation && (
                <MessagesChat
                  key={selectedConversation.id}
                  conversation={selectedConversation}
                  onBack={() => setMobileView("list")}
                  onViewDetails={() => setMobileView("advisor")}
                />
              )}
            </div>
          </div>
          <MessagesAdvisor
            onBack={() => setMobileView("chat")}
            status="in-progress"
            showRecommendation={false}
          />
        </main>
      </div>

      <Footer />
    </>
  );
}

export default Messages;
