import { useRef } from "react";
const ChatForm=({chatHistory,setChatHistory,generateBotResponse}) =>{
    const inputRef=useRef();

    const handleFormSubmit=(e)=>{
        e.preventDefault();
        const userMessage=inputRef.current.value.trim();
        if(!userMessage) return;
        //clearing the message input after getting the value
        inputRef.current.value="";


        //on form submit you see userMessage in console
        //console.log(userMessage);

        //Update chat history with the user's message
        setChatHistory((history)=> [...history, {role:"user",text:userMessage}]);
        
        //Delay 600ms before showing "thinking..." and generating response
        setTimeout(()=>{
            //Add a "thinking..." placeholder for the bots response
            setChatHistory((history)=> [...history, {role:"model",text:"Thinking..."}]);
     
            //Call the function to generate the bot's response
            generateBotResponse([...chatHistory, {role:"user",text:userMessage}]);
        },600);

    };
  return (
<form action="#" className="chat-form" onSubmit={handleFormSubmit}>
            <input
              ref={inputRef}
              type="text"
              placeholder="Message..."
              className="message-input"
              required
            />
            <button className="material-symbols-rounded">
              arrow_upward
            </button>
          </form>
            )
}

export default ChatForm