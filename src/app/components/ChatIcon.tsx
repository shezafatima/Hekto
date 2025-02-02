"use client"
import React, { useEffect } from 'react'

function ChatIcon() {
    useEffect(()=>{
const chattoken = process.env.NEXT_PUBLIC_CHAT_TOKEN
const chatapi = process.env.NEXT_PUBLIC_CHAT_API
    if (!chatapi) {
      console.error("Chatbot API key is missing.");
      return;
    }
        (function(
            w:Window &{chatbotConfig?:[string,string,{apiHost:string}]},
            d,
            s,
            ...args
        ){
            const div= d.createElement('div');
            div.id='aichatbot';
            d.body.appendChild(div);
            w.chatbotConfig=args as [string,string,{apiHost:string}]
            const f = d.getElementsByTagName(s)[0];
            const j=d.createElement(s) as HTMLScriptElement;
            j.defer=true;
            j.type="module";
            j.src='https://aichatbot.sendbird.com/index.js';
            f.parentNode?.insertBefore(j,f);
        })(
            window,
            document,
            'script',
            chattoken,
            chatapi,
            {
                apiHost:'https://api-45B8E0E2-1615-4995-BA18-729FA71DADDD.sendbird.com'
            }
        )
return()=>{
    const div=document.getElementById('aichatbot');
    if(div){
        document.body.removeChild(div);
    }
}
    },[])
  return (
    <div></div>
  )
}

export default ChatIcon