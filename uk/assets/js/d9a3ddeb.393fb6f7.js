"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2978],{17237:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>a});var o=n(85893),t=n(11151);const r={sidebar_position:5},s="Issues & Solutions",l={id:"palworld-modding-kit/solutions",title:"Issues & Solutions",description:"Solutions for any issues that may occur.",source:"@site/docs/palworld-modding-kit/solutions.md",sourceDirName:"palworld-modding-kit",slug:"/palworld-modding-kit/solutions",permalink:"/uk/docs/palworld-modding-kit/solutions",draft:!1,unlisted:!1,editUrl:"https://github.com/PalworldModding/Docs/docs/palworld-modding-kit/solutions.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Exporting The Project",permalink:"/uk/docs/palworld-modding-kit/congratulations"},next:{title:"Lua Modding",permalink:"/uk/docs/category/lua-modding"}},d={},a=[{value:"Solutions for any issues that may occur.",id:"solutions-for-any-issues-that-may-occur",level:2},{value:"Pal could not be compiled. Try rebuilding from source manually.",id:"pal-could-not-be-compiled-try-rebuilding-from-source-manually",level:3},{value:"Detected compiler newer than Visual Studio 2022, please update min version checking in WindowsPlatformCompilerSetup.h",id:"detected-compiler-newer-than-visual-studio-2022-please-update-min-version-checking-in-windowsplatformcompilersetuph",level:4}];function c(e){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.h1,{id:"issues--solutions",children:"Issues & Solutions"}),"\n",(0,o.jsx)(i.h2,{id:"solutions-for-any-issues-that-may-occur",children:"Solutions for any issues that may occur."}),"\n",(0,o.jsx)(i.h3,{id:"pal-could-not-be-compiled-try-rebuilding-from-source-manually",children:"Pal could not be compiled. Try rebuilding from source manually."}),"\n",(0,o.jsx)(i.p,{children:(0,o.jsx)(i.img,{alt:"Pal could not be compiled",src:n(20433).Z+"",width:"345",height:"117"})}),"\n",(0,o.jsx)(i.p,{children:"This is an error that you'll get when trying to launch the Modding Kit if you're missing things. This is a generic error, but luckily we can use the Pal.log file found in Saved/Logs folder of the Modding Kit to determine what's causing the issue! Here's a list of the errors you might get and how to fix them:"}),"\n",(0,o.jsx)(i.h4,{id:"detected-compiler-newer-than-visual-studio-2022-please-update-min-version-checking-in-windowsplatformcompilersetuph",children:"Detected compiler newer than Visual Studio 2022, please update min version checking in WindowsPlatformCompilerSetup.h"}),"\n",(0,o.jsxs)(i.p,{children:["Solution found by ",(0,o.jsx)(i.strong,{children:"GungnirIncarnate"})]}),"\n",(0,o.jsx)(i.p,{children:"Go to Visual Studio Installer -> Modify -> Individual Components and add \u201cMSVC v143 - VS 2022 c++ x64/x86 build tools (v14.38-17.8)\u201d\r\nYou can confirm if it\u2019s installed the correct one by going to the VS install path and seeing if the folder is there (C:\\Program Files\\Microsoft Visual Studio\\2022\\Enterprise\\VC\\Tools\\MSVC\\14.38.33130)\r\nChange your \u201c%appdata%\\Unreal Engine\\UnrealBuildTool\\BuildConfiguration.xml\u201d to"}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{children:'<?xml version="1.0" encoding="utf-8" ?>\r\n<Configuration xmlns="https://www.unrealengine.com/BuildConfiguration">\r\n    <WindowsPlatform>\r\n        <CompilerVersion>14.38.33130</CompilerVersion>\r\n        <ToolchainVersion>14.38.33130</ToolchainVersion>\r\n    </WindowsPlatform>\r\n</Configuration>\n'})})]})}function u(e={}){const{wrapper:i}={...(0,t.a)(),...e.components};return i?(0,o.jsx)(i,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},20433:(e,i,n)=>{n.d(i,{Z:()=>o});const o="data:image/png;base64,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"},11151:(e,i,n)=>{n.d(i,{Z:()=>l,a:()=>s});var o=n(67294);const t={},r=o.createContext(t);function s(e){const i=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),o.createElement(r.Provider,{value:i},e.children)}}}]);