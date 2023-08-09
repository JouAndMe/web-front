import React from "react";
import "../styles/Dash.css";
import SendIcon from '@mui/icons-material/Send';

const Dash = () => {
    return(
        <div className="dashboard">
            <div className="chatting">

                <div className="input-container">
                    <input
                        type="text"
                        className="chat-input"
                    />
                   <button
                        type="button"
                        className="btn-send"
                    >
                        <SendIcon />
                        
                    </button>
                </div>
            </div>
        </div>      
    )
}
export default Dash