import { ChatHeaderProps } from "react-chat-engine-advanced";
import { HiChatBubbleLeftRight, HiPhone } from "react-icons/hi2";

const Header = ({ chat }: { chat: ChatHeaderProps }) => {
  return (
    <div className="chat-header">
      <div className="flexbetween">
        <HiChatBubbleLeftRight />
        <h3 className="header-text">{chat.title}</h3>
      </div>

      <div className="flexbetween">
        <HiPhone className="icon-phone" />
        {chat.description !== "⬅️ ⬅️ ⬅️" ? (
          <p className="header-text">{chat.description}</p>
        ) : (
          <p className="header-text">no chat selected</p>
        )}
      </div>
    </div>
  );
};

export default Header;
