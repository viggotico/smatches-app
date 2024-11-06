import { useLocation, useParams } from "react-router-dom"
import "../css/ChatPage.css"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

const getMessagesData = (id) => {
    const msg = sessionStorage.getItem(`chat-${id}`);
    return msg ? JSON.parse(msg) : [];
}

const setMessagesData = (id, value) => {
    const msg = JSON.stringify(value ?? []);
    sessionStorage.setItem(`chat-${id}`, msg);
}

export const ChatPage = () => {
    const { id } = useParams();
    const location = useLocation();
    const initialMessage = location.state?.initialMessage || "start your conversation"
    const initialName = location.state?.initialName ||  "name error "  
    
    const textInputRef = useRef();
    const sendButtonRef = useRef();
    const [messages, setMessages] = useState(getMessagesData(id));
    const navigate = useNavigate()

    const goBackToSmatchesPage = () => {
        navigate("/smatches")
    };

    const scrollToLastMessage = () => {
        setTimeout(() => {
            const items = document.querySelectorAll('.feedMsg');
            if (!items.length) return;
            const itemsArr = Array.from(items);
            const lastItem = itemsArr[itemsArr.length - 1];
            lastItem?.scrollIntoView(false);
        }, 150);
    }

    const handleSendMsg = () => {
        setMessages(prev => {
            if (!textInputRef.current?.value) return prev;
            const msg = [...prev, textInputRef.current?.value];
            setMessagesData(id, msg);
            scrollToLastMessage();
            return msg;
        });
    }

    useEffect(() => {
        let hasSentMsg = false;
        const sendMsg = (e) => {
            if (hasSentMsg) return;
            if (e.key === "Enter") {
              e.preventDefault();
              sendButtonRef.current?.click();
              scrollToLastMessage();
              hasSentMsg = true;
              setTimeout(() => {
                hasSentMsg = false;
              }, 500);
            }
        }

        textInputRef.current?.addEventListener('keypress', sendMsg);

        return () => {
            textInputRef.current?.removeEventListener('keypress', sendMsg);
        }
    }, []);

    return (
    <div className="chat-page">
        <div className="chat-header">
            <button className="back-button"
            
            onClick={goBackToSmatchesPage}
            >Gå tilbage</button>
            <h2 style={{color: "white"}}>{initialName}😘</h2>
            <button className="profile-button">Se profil</button>
        </div>

        <div className="icebreakers">
            <span>🎮 <p>{initialName}'s Icebreakers</p></span>
                <div className="button-container" >
            <button>Jeg har aldrig...</button>
            <button>Hvor sandsynligt er det...</button>
            <button>hvem er mest til...</button>
                </div>
        </div>

        <div className="chat-messages">
            <div className="message received">{initialMessage}</div>
            {/* additionl messages can be dynamically added here */}
            {messages?.map((msg, i) => {
                return  <div key={i} className="feedContainerRight">
                    <div className="feedMsg">{msg}</div>
                </div>
            })}
        </div>

        <div className="chat-input">
            <input ref={textInputRef} type="text" placeholder="Skriv en besked..."/>
            <button ref={sendButtonRef} onClick={handleSendMsg} className="send-button">➤</button>
        </div>
    </div>
    );
};

