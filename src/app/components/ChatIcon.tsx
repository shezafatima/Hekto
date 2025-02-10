"use client"
import React, { useEffect } from 'react'

function ChatIcon() {
    useEffect(()=>{
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
            '45B8E0E2-1615-4995-BA18-729FA71DADDD',
            'j4sPX67_0K1CPpGrDD5r7',
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