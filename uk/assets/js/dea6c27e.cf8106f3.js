"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7932],{52938:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var t=n(85893),i=n(11151);const r={sidebar_position:6},o="Packaging final mod file through UE5",a={id:"asset-swapping/PackagingInUE5",title:"Packaging final mod file through UE5",description:"This guide is written by KURAMAAA0",source:"@site/i18n/uk/docusaurus-plugin-content-docs/current/asset-swapping/PackagingInUE5.md",sourceDirName:"asset-swapping",slug:"/asset-swapping/PackagingInUE5",permalink:"/uk/docs/asset-swapping/PackagingInUE5",draft:!1,unlisted:!1,editUrl:"https://github.com/PalworldModding/Docs/docs/asset-swapping/PackagingInUE5.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Exporting & Modifying 2D Assets",permalink:"/uk/docs/asset-swapping/ExportingModifying2DAssets"},next:{title:"Advanced Asset Creation",permalink:"/uk/docs/category/advanced-asset-creation"}},c={},l=[{value:"Issues &amp; Fixes",id:"issues--fixes",level:3}];function d(e){const s={a:"a",code:"code",em:"em",h1:"h1",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"packaging-final-mod-file-through-ue5",children:"Packaging final mod file through UE5"}),"\n",(0,t.jsxs)(s.p,{children:["This guide is written by ",(0,t.jsx)(s.a,{href:"https://github.com/KURAMAAA0/PalModding",children:"KURAMAAA0"})]}),"\n",(0,t.jsxs)(s.p,{children:["Most of this section is heavily inspired by ",(0,t.jsx)(s.a,{href:"https://www.abbiedoobie.com/2023/10/13/modding-robocop-rogue-city-and-other-ue-5-games/",children:"this guide"}),"! Was incredibly helpful."]}),"\n",(0,t.jsx)(s.p,{children:"Launch Unreal Engine 5.1.1."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{src:"https://github.com/KURAMAAA0/PalModding/assets/58988462/ca1c0f4c-3d4d-4559-aded-fa5cd8c20c25",alt:"UE1"})}),"\n",(0,t.jsxs)(s.p,{children:["Create a new project: ",(0,t.jsx)(s.code,{children:"Games -> Blank Project"}),", name it exactly ",(0,t.jsx)(s.code,{children:"Pal"})," ",(0,t.jsx)(s.strong,{children:'(Very important that the project name is "Pal" or the mod won\'t load!)'}),"\r\nThe Project Defaults should be:"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"Blueprint"})}),"\n",(0,t.jsxs)(s.li,{children:["Target Platform: ",(0,t.jsx)(s.code,{children:"Desktop"})]}),"\n",(0,t.jsxs)(s.li,{children:["Starter Content: ",(0,t.jsx)(s.code,{children:"unchecked"})]}),"\n",(0,t.jsxs)(s.li,{children:["Raytracing: ",(0,t.jsx)(s.code,{children:"unchecked"})]}),"\n",(0,t.jsx)(s.li,{}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{src:"https://github.com/KURAMAAA0/PalModding/assets/58988462/0782bbbe-9b49-4597-b530-9805e1f14561",alt:"UE2"})}),"\n",(0,t.jsxs)(s.p,{children:["Click on ",(0,t.jsx)(s.code,{children:"Platforms"})," towards the top, then `Packaging Settings"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{src:"https://github.com/KURAMAAA0/PalModding/assets/58988462/5c65653c-c1de-4f95-9e40-e08622395890",alt:"UESETTING"})}),"\n",(0,t.jsxs)(s.p,{children:["Uncheck ",(0,t.jsx)(s.code,{children:"Use Io Store"})," and check ",(0,t.jsx)(s.code,{children:"Generate Chunks"}),"."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{src:"https://github.com/KURAMAAA0/PalModding/assets/58988462/41cfcb81-5046-4388-bf5d-7fa8253f8f38",alt:"UESETTING2"})}),"\n",(0,t.jsxs)(s.p,{children:["Search for ",(0,t.jsx)(s.code,{children:"Cook everything"})," in the search bar and check ",(0,t.jsx)(s.code,{children:"Cook everything in the project content directory (\u2026)"}),"."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{src:"https://github.com/KURAMAAA0/PalModding/assets/58988462/2967a6ba-031e-4464-b245-b67ac9f140a8",alt:"UESETTING3"})}),"\n",(0,t.jsxs)(s.p,{children:["Create a folder structure ",(0,t.jsx)(s.code,{children:"matching"})," the one from FModel. Ignore ",(0,t.jsx)(s.code,{children:"Pal\\Content\\"})," as the Content Browser already starts in ",(0,t.jsx)(s.code,{children:"Content"}),".\r\n",(0,t.jsx)(s.strong,{children:"For example"}),", since I modified Depresso model, body texture and eyes texture, I need to create the folder structure to get to these files."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{src:"https://github.com/KURAMAAA0/PalModding/assets/58988462/e86dc337-3c7d-4918-8646-448bbd962089",alt:"UEPATH1"})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{src:"https://github.com/KURAMAAA0/PalModding/assets/58988462/f737c24f-8954-411d-a51f-5545d5ec050c",alt:"UE3"})}),"\n",(0,t.jsxs)(s.p,{children:["You can now drop all your ",(0,t.jsx)(s.strong,{children:"MODIFIED"})," files into their corresponding folder. If possible, drop the files that go into a single folder all at once. Click Import All, close the FBX import error(s)."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{src:"https://github.com/KURAMAAA0/PalModding/assets/58988462/bbbee6b6-fb03-4676-921c-4fecfde55c0b",alt:"UE4"})}),"\n",(0,t.jsxs)(s.p,{children:["Now as you can see, our textures don\u2019t look good. That is simply because we need to manually set transparent materials.\r\nDouble click on the material (sphere) with your ",(0,t.jsx)(s.em,{children:"normally"})," transparent texture (eyes, mouth, etc..)\r\nChange the ",(0,t.jsx)(s.strong,{children:"Blend Mode"})," to ",(0,t.jsx)(s.strong,{children:"Translucent"}),", and connect ",(0,t.jsx)(s.strong,{children:"A"})," (alpha) to ",(0,t.jsx)(s.strong,{children:"Opacity"}),"."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{src:"https://github.com/KURAMAAA0/PalModding/assets/58988462/ec1e61ba-f8b8-4bd5-8b22-0588f51a4935",alt:"UE5"})}),"\n",(0,t.jsx)(s.p,{children:"Do that on any material you need, then dont forget to save everything (bottom right corner)."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{src:"https://github.com/KURAMAAA0/PalModding/assets/58988462/85905fae-a8f9-4dda-bac6-7ee05b3c1011",alt:"UE6"})}),"\n",(0,t.jsx)(s.p,{children:"Make sure that all your files have the EXACT same name they originally had in FModel."}),"\n",(0,t.jsx)(s.p,{children:"In my case:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"DeprivedDepresso"})," becomes ",(0,t.jsx)(s.strong,{children:"SK_NegativeKoala"})]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"DeprivedDepresso_PhysicsAsset"})," becomes ",(0,t.jsx)(s.strong,{children:"PA_NegativeKoala_PhysicsAsset"})]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"DeprivedDepresso_Skeleton"})," becomes ",(0,t.jsx)(s.strong,{children:"SK_NegativeKoala_Skeleton"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"Note that SK_NegativeKoala_Skeleton was originally not in the same folder as the other files, so we have to create new folders and move it from its current folder.\r\nAlways keep in mind that paths and filenames are very important."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{src:"https://github.com/KURAMAAA0/PalModding/assets/58988462/817dda65-6094-4bf3-9ff6-cec499f17592",alt:"UEPATH2"})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{src:"https://github.com/KURAMAAA0/PalModding/assets/58988462/2f0cfbef-06c0-4c18-b57b-d5f4d9dc899c",alt:"UE4 5"})}),"\n",(0,t.jsxs)(s.p,{children:["Save everything (bottom right corner).\r\nGo back to your ",(0,t.jsx)(s.strong,{children:"Content"})," folder, right click, hover over ",(0,t.jsx)(s.strong,{children:"Miscellaneous"}),", click on ",(0,t.jsx)(s.strong,{children:"Data Asset"}),"."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{src:"https://github.com/KURAMAAA0/PalModding/assets/58988462/a75cf69e-50d5-480b-b695-2fefde989276",alt:"UE7"})}),"\n",(0,t.jsxs)(s.p,{children:["Select ",(0,t.jsx)(s.strong,{children:"PrimaryAssetLabel"}),"."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{src:"https://github.com/KURAMAAA0/PalModding/assets/58988462/ea81eeb5-4a13-407e-be31-9d01c842ae9f",alt:"UE8"})}),"\n",(0,t.jsx)(s.p,{children:"Name it \u201cLabel_YourModName\u201d. I named mine \u201cLabel_DeprivedDepresso\u201d.\r\nDouble click it, and make the following changes:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Priority set to ",(0,t.jsx)(s.strong,{children:"1 or more"})]}),"\n",(0,t.jsxs)(s.li,{children:["Chunk ID set to ",(0,t.jsx)(s.strong,{children:"1000 or more"}),", this will be in your final mod .pak to help you differentiate it from other .pak files."]}),"\n",(0,t.jsxs)(s.li,{children:["Cook Rule set to ",(0,t.jsx)(s.strong,{children:"Always Cook"})]}),"\n",(0,t.jsxs)(s.li,{children:["Label Assets in My Directory ",(0,t.jsx)(s.strong,{children:"checked"}),".\r\nSave everything (bottom right corner).\r\nClick on ",(0,t.jsx)(s.strong,{children:"Platforms, Windows, Shipping"}),"\r\nThen click on ",(0,t.jsx)(s.strong,{children:"Platforms, Windows, Package Project"}),"\r\nYour mod will start packaging, this will take a while so grab a cup of tea!"]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{src:"https://github.com/KURAMAAA0/PalModding/assets/58988462/4be2947c-6056-4f43-9d9e-3c30fe1928b2",alt:"BLENDER3"})}),"\n",(0,t.jsxs)(s.p,{children:["Or coffee..\r\nOnce packaging is done, you\u2019ll have a \u201cWindows\u201d folder made, go in through folder: ",(0,t.jsx)(s.code,{children:"Windows -> Pal -> Content -> Paks"}),".\r\nIn the Paks folder, you\u2019ll most likely have two .pak files, ",(0,t.jsx)(s.strong,{children:"pakchunk0-Windows"})," and yours.\r\nMine is pakchunk1000-Windows because I set the Chunk ID to 1000.\r\nYou now need to go into your game local files."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{src:"https://github.com/KURAMAAA0/PalModding/assets/58988462/c8563873-11e1-4376-a6da-09df5fdd2c0e",alt:"STEAM1"})}),"\n",(0,t.jsxs)(s.p,{children:["Copy your .pak file to ",(0,t.jsx)(s.code,{children:"D:\\Palworld\\Pal\\Content\\Paks"}),".\r\nRename it to ",(0,t.jsx)(s.em,{children:"YourModName"}),(0,t.jsx)(s.strong,{children:"_P"})," launch Palworld, and that\u2019s it!\r\n",(0,t.jsx)(s.strong,{children:"(YOUR .PAK FILENAME SHOULD END WITH \u201c_P\u2019, ELSE IT WON\u2019T LOAD.)"}),"\r\nEnjoy your beautiful creation."]}),"\n",(0,t.jsx)(s.h3,{id:"issues--fixes",children:"Issues & Fixes"}),"\n",(0,t.jsxs)(s.p,{children:["If you run into issues that you manage to fix, DM me on Discord ",(0,t.jsx)(s.strong,{children:"kurama0"})," so I can potentially add the issue & fix here!"]})]})}function h(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,s,n)=>{n.d(s,{Z:()=>a,a:()=>o});var t=n(67294);const i={},r=t.createContext(i);function o(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);