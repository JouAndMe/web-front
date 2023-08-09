import React from "react";
import "../styles/Dash.css";

const Dash = () => {
    return(
        <div className="dashboard">
            <div className="chatting">
                <>채팅하는 곳 ㅎ,ㅎ</>
                <div className="input-container">
                    <input
                        type="text"
                        className="chat-input"
                    />
                    <button
                        type="button"
                        className="btn-send"
                    >
                        Send
                    </button>
                </div>
            </div>
        </div>      
    )
}
export default Dash