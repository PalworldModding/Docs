"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1625],{48590:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>h,contentTitle:()=>s,default:()=>l,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var n=o(85893),i=o(11151);const a={sidebar_position:6},s="Digging 101",r={id:"lua-modding/digging-101",title:"Digging 101",description:"Alright so at this point you maybe sorta understand some of the base functions available to you in UE4SS, but I know most of you are probably stuck on how to figure out what functions to actually hook onto or call to do whatever you actually want to do.",source:"@site/docs/lua-modding/digging-101.mdx",sourceDirName:"lua-modding",slug:"/lua-modding/digging-101",permalink:"/docs/lua-modding/digging-101",draft:!1,unlisted:!1,editUrl:"https://github.com/PalworldModding/Docs/docs/lua-modding/digging-101.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Intro to Hooking Functions",permalink:"/docs/lua-modding/hooking-functions"},next:{title:"Moar Digging",permalink:"/docs/lua-modding/more-digging"}},h={},c=[{value:"Well, welcome to Digging 101 \ud83d\udcd6",id:"well-welcome-to-digging-101-",level:3},{value:"Live View",id:"live-view",level:3},{value:"Header Files",id:"header-files",level:3}];function d(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h3:"h3",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components},{Details:a}=t;return a||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"digging-101",children:"Digging 101"}),"\n",(0,n.jsx)(t.p,{children:"Alright so at this point you maybe sorta understand some of the base functions available to you in UE4SS, but I know most of you are probably stuck on how to figure out what functions to actually hook onto or call to do whatever you actually want to do."}),"\n",(0,n.jsx)(t.h3,{id:"well-welcome-to-digging-101-",children:"Well, welcome to Digging 101 \ud83d\udcd6"}),"\n",(0,n.jsx)(t.p,{children:"Let's start class by getting hands-on. Hop onto a fresh game world and keep the UE4SS console ready. The first task here is going to be something a lot of people are interested in: hook the function that gets called when a chat message is sent and print that message to console."}),"\n",(0,n.jsx)(t.p,{children:"But we don't know anything about what function fires or where to even look. So let's dig into Live View."}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsx)(t.p,{children:"Live View might not actually be the best for this, since we're looking for a function, but I want you to start learning it and how you can switch back and forth between it and the header files, so bear with me."})}),"\n",(0,n.jsx)(t.h3,{id:"live-view",children:"Live View"}),"\n",(0,n.jsx)(t.p,{children:"In the Live View search bar start seaching for something chat message related. I recommend to keep your searches as simple as possible while still being relevant, until you have a better idea of what you're searching for. We're looking for a function here, because we want to hook into it, so don't bother looking through classes or objects, just check out functions. Once you've done a little searching and think you might have a function to try, or if you get stuck, come back check out the spoiler tags."}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsxs)(a,{children:[(0,n.jsx)("summary",{children:(0,n.jsx)("b",{children:"Hint: If you can't think of something to start searching for.."})}),(0,n.jsx)("blockquote",{children:'Try starting with just "chat" and see what you can find on that. We want to keep it simple after all.'})]}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsxs)(a,{children:[(0,n.jsx)("summary",{children:(0,n.jsx)("b",{children:"Think I found something!"})}),(0,n.jsxs)("blockquote",{children:['Alright! So if you searched for something along the lines of "chat" you probably wound up with some functions to sift through. Hopefully one of the functions you picked up on was ',(0,n.jsx)(t.code,{children:"BroadcastChatMessage"}),". If you did, great job! If you didn't, I'm going to make your life a bit easier for the sake of the tutorial, and ask you to hone in on that one in particular."]})]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.p,{children:"For demonstration purposes, lets try to hook that function you found and see if it actually fires when we say something in chat. Take this opportunity to use what you learned about functions to write up a script that:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Hooks that function"}),"\n",(0,n.jsx)(t.li,{children:"Prints something when the function is executed"}),"\n"]}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsxs)(a,{children:[(0,n.jsx)("summary",{children:(0,n.jsx)("b",{children:"Hint: But where do I get the function name/address thingie to hook?"})}),(0,n.jsxs)("blockquote",{children:["The function name for the hook is the full function path that you see in Live View, ",(0,n.jsxs)("code",{children:["/Script/Pal.PalGameStateInGame",":BroadcastChatMessage"]}),"."]})]}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsxs)(a,{children:[(0,n.jsx)("summary",{children:(0,n.jsx)("b",{children:"Sanity check code"})}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-lua",children:'-- if you did something along these lines, you\'re good\r\n-- Technically you can wrap this in the SAP hook, but since it\'s a /Script/, we don\'t need to do that\r\nRegisterHook("/Script/Pal.PalGameStateInGame:BroadcastChatMessage", function()\r\n    print("enter chat fired")\r\nend)\n'})})]}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(t.p,{children:"Now lets leave the world, reload our mod script, rejoin and type something in chat. If you code is all good, you should see your hook get fired and something get printed to chat!"}),"\n",(0,n.jsx)(t.p,{children:"Nice! That means we actually managed to hook the right function. If you hadn't been guided to the right function, you might have had to try out a couple different functions to find which one did exactly what you were looking for."}),"\n",(0,n.jsx)(t.p,{children:"But we want to know more about this function now. What does it return? What parameters can we hook into? Can we get the message out of it?"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:"In comes header files."})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h3,{id:"header-files",children:"Header Files"}),"\n",(0,n.jsxs)(t.p,{children:["Let's swap over to VSCode for a sec. Right-click on the ",(0,n.jsx)(t.code,{children:"CXXHeaderDump"})," folder in the workspace and click ",(0,n.jsx)(t.code,{children:"Find in Folder"}),"."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"CXXHeaderDump folder right-clicked, showing the menu",src:o(80961).Z+"",width:"454",height:"439"})}),"\n",(0,n.jsxs)(t.p,{children:["This will open a search dialogue with the ",(0,n.jsx)(t.code,{children:"./CXXHeaderDump"})," already filled in for the files to include. This lets us search for something in all files of that folder. In the first box we put whatever we're looking for, in this case we want to find more info on ",(0,n.jsx)(t.code,{children:"BroadcastChatMessage"})," so search for that. Since we already know what function we were looking for of course we get a hit and it's in ",(0,n.jsx)(t.code,{children:"Pal.hpp"}),". We can click on that search result to automatically open to it."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"VSCode Find in Files search for BroadcastChatMessage",src:o(68102).Z+"",width:"269",height:"246"})}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsx)(t.p,{children:'We also could have started off like this. Since we knew we were looking for something chat related, we could have just searched header files for "chat" and dug through what came up until we found something that looked promising.'})}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Header File Tip:"}),"\r\nIf you're using the ",(0,n.jsx)(t.code,{children:"CXXHeaderDump"})," most of the stuff we care about for Lua is going to be found in ",(0,n.jsx)(t.code,{children:"Pal.hpp"}),"."]})}),"\n",(0,n.jsx)(t.p,{children:"When we open to that spot, we can see that function and its parameter:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-hpp",children:"void BroadcastChatMessage(const FPalChatMessage& ChatMessage);\n"})}),"\n",(0,n.jsxs)(t.p,{children:["So that's neat, we can just pass that parameter straight to our hook and hopefully get the chat message. Before we dig deeper, let's give that a try and see what happens. Try to alter your hook to grab the ",(0,n.jsx)(t.code,{children:"ChatMessage"})," parameter, and try to print that to see what happens. I'll warn you that it ",(0,n.jsx)(t.em,{children:"won't"})," work, but this is the learning process."]}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsxs)(a,{children:[(0,n.jsx)("summary",{children:(0,n.jsx)("b",{children:"Sanity check code"})}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-lua",children:'-- I expect you\'ll come up with something like this\r\nRegisterHook("/Script/Pal.PalGameStateInGame:BroadcastChatMessage", function(self, ChatMessage)\r\n    print(ChatMessage:get())\r\nend)\n'})})]}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsxs)(a,{children:[(0,n.jsx)("summary",{children:(0,n.jsx)("b",{children:"Comprehension check! What's the self parameter of this hook?"})}),(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:["The self parameter is the UObject ",(0,n.jsx)(t.code,{children:"PalGameStateInGame"})]}),"\n"]})]}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(t.p,{children:"If you did it correctly, you probably got greeted with an error along the lines of:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"Parameter #1 must be of type 'string'. Was of type 'userdata'.\n"})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"print()"})," expects a string to be given to it, and we know from the function header, ",(0,n.jsx)(t.code,{children:"ChatMessage"})," is of type ",(0,n.jsx)(t.code,{children:"FPalChatMessage"}),". So of course it's going to be angry."]}),"\n",(0,n.jsxs)(t.p,{children:["Let's go back to the function in ",(0,n.jsx)(t.code,{children:"Pal.hpp"})," and check out what exactly ",(0,n.jsx)(t.code,{children:"FPalChatMessage"})," is, so we can break it down in our Lua. In VSCode, ",(0,n.jsx)(t.code,{children:"Ctrl + Left-Click"})," on the type to chase down it's definition."]}),"\n",(0,n.jsxs)(t.p,{children:["It should hop directly to the definition of ",(0,n.jsx)(t.code,{children:"FPalChatMessage"}),", pretty neat."]}),"\n",(0,n.jsx)(t.p,{children:"It looks something like this:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-hpp",children:"struct FPalChatMessage\r\n{\r\n    EPalChatCategory Category;\r\n    FString Sender;\r\n    FGuid SenderPlayerUId;\r\n    FString Message;\r\n    FGuid ReceiverPlayerUId;\r\n}; \n"})}),"\n",(0,n.jsxs)(t.p,{children:["So it's a struct that has a couple different components we could play with. For now, let's just try getting the actual ",(0,n.jsx)(t.code,{children:"FString Message"})," component, since we want to print the message to console."]}),"\n",(0,n.jsxs)(t.p,{children:["In order to access this property, we need to deconstruct the struct we get into its parts. So now that you know the parts of the ",(0,n.jsx)(t.code,{children:"ChatMessage"})," try to alter your hook to:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Get ",(0,n.jsx)(t.code,{children:"ChatMessage"})]}),"\n",(0,n.jsxs)(t.li,{children:["Access the ",(0,n.jsx)(t.code,{children:"Message"})," property"]}),"\n",(0,n.jsxs)(t.li,{children:["Print the ",(0,n.jsx)(t.code,{children:"Message"})," property to console"]}),"\n"]}),"\n",(0,n.jsxs)(a,{children:[(0,n.jsx)("summary",{children:(0,n.jsxs)("b",{children:["Hint: ",(0,n.jsx)("code",{children:"Was of type `userdata` error"})]})}),(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:["Take note of what type this is returning and remember what I told you before...UE never returns you simple strings. Take a look at the ",(0,n.jsx)(t.a,{href:"https://docs.ue4ss.com/dev/lua-api.html",children:"UE4SS docs"})," and see if you can find any useful methods for the ",(0,n.jsx)(t.code,{children:"Message"})," type."]}),"\n"]})]}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsxs)(a,{children:[(0,n.jsx)("summary",{children:(0,n.jsx)("b",{children:"Sanity check code"})}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-lua",children:'-- Something like this should do the trick\r\nRegisterHook("/Script/Pal.PalGameStateInGame:BroadcastChatMessage", function(self, ChatMessage)\r\n    local chat_message = ChatMessage:get()\r\n    local message = chat_message.Message:ToString() -- Take note of the :ToString()! FString is not the same as a string!\r\n    print(message)\r\nend)\n'})})]}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(t.p,{children:"Nice work! Now we can log chat messages or whatever else you'd like to do with them. In the next tutorial we'll move on to something else a bit more hands on."}),"\n",(0,n.jsx)("br",{})]})}function l(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},80961:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/vs_code_cxxfolder-2567ee198d7feec65837649070c345e4.png"},68102:(e,t,o)=>{o.d(t,{Z:()=>n});const n="data:image/png;base64,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"},11151:(e,t,o)=>{o.d(t,{Z:()=>r,a:()=>s});var n=o(67294);const i={},a=n.createContext(i);function s(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);