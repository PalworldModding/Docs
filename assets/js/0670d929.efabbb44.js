"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[483],{91909:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>t,metadata:()=>r,toc:()=>c});var i=a(85893),o=a(11151);const t={sidebar_position:8},s="Config Files",r={id:"lua-modding/config-files",title:"Config Files",description:"Now that you have a working base area mod, you could technically just release that as is and have people change the value in the main file. But that's lame and it's nice to provide a config file for better user experience. So here's a real brief lesson on that (which also doubles as an example on how to use separate files)",source:"@site/docs/lua-modding/config-files.mdx",sourceDirName:"lua-modding",slug:"/lua-modding/config-files",permalink:"/docs/lua-modding/config-files",draft:!1,unlisted:!1,editUrl:"https://github.com/PalworldModding/Docs/docs/lua-modding/config-files.mdx",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Moar Digging",permalink:"/docs/lua-modding/more-digging"},next:{title:"DataTables",permalink:"/docs/lua-modding/datatables"}},l={},c=[];function d(e){const n={code:"code",h1:"h1",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"config-files",children:"Config Files"}),"\n",(0,i.jsx)(n.p,{children:"Now that you have a working base area mod, you could technically just release that as is and have people change the value in the main file. But that's lame and it's nice to provide a config file for better user experience. So here's a real brief lesson on that (which also doubles as an example on how to use separate files)"}),"\n",(0,i.jsxs)(n.p,{children:["We can real simply add a ",(0,i.jsx)(n.code,{children:"config.lua"})," file to our ",(0,i.jsx)(n.code,{children:"/Scripts"})," folder, and then call that in our ",(0,i.jsx)(n.code,{children:"main.lua"})," file, like so:"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"config.lua"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:"local _my_mod_config = {\r\n    -- You can add comments with default values and such\r\n    -- Usually some explanation of what it does etc\r\n    area_range = 3500.0\r\n}\r\nreturn _my_mod_config\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"main.lua"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:'local config = require "config"\r\n\r\nNotifyOnNewObject("/Script/Pal.PalBaseCampModel", function(base_model)\r\n    print("found a base model, waiting for it to finish initializing")\r\n    ExecuteWithDelay(10000, function()\r\n        base_model.AreaRange = config.area_range\r\n        print("changed a bases range")\r\n    end)\r\nend)\n'})}),"\n",(0,i.jsx)(n.p,{children:"That's it!"})]})}function u(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},11151:(e,n,a)=>{a.d(n,{Z:()=>r,a:()=>s});var i=a(67294);const o={},t=i.createContext(o);function s(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);