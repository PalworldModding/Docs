"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9032],{83592:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var n=o(85893),i=o(11151);const s={},d="Going Deeper",r={id:"datatable-modding/uassetgui/UAssetGuide2",title:"Going Deeper",description:"Written by Guillotine - All mods in the link are made using this technique.",source:"@site/docs/datatable-modding/uassetgui/UAssetGuide2.md",sourceDirName:"datatable-modding/uassetgui",slug:"/datatable-modding/uassetgui/UAssetGuide2",permalink:"/de/docs/datatable-modding/uassetgui/UAssetGuide2",draft:!1,unlisted:!1,editUrl:"https://github.com/PalworldModding/Docs/docs/datatable-modding/uassetgui/UAssetGuide2.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/de/docs/datatable-modding/uassetgui/UAssetGuide1"},next:{title:"Publishing Your Mod",permalink:"/de/docs/category/publishing-your-mod"}},a={},l=[{value:"Step 1. Add more sell offers to merchants",id:"step-1-add-more-sell-offers-to-merchants",level:2},{value:"Step 2. Add recipes",id:"step-2-add-recipes",level:2},{value:"Step 3. Add functionality to existing items",id:"step-3-add-functionality-to-existing-items",level:2},{value:"Step 4. Combine your mod folders.",id:"step-4-combine-your-mod-folders",level:2},{value:"Finishing Notes",id:"finishing-notes",level:2}];function c(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"going-deeper",children:"Going Deeper"}),"\n",(0,n.jsxs)(t.p,{children:["Written by ",(0,n.jsx)(t.a,{href:"https://next.nexusmods.com/profile/GuilloMods/mods",children:"Guillotine"})," - All mods in the link are made using this technique."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:"Last updated: [09/12/24]"})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Difficulty:"})," Intermediate"]}),"\n",(0,n.jsxs)(t.p,{children:["Welcome back, let's dive deeper and I will give you more ideas on what is possible.\r\nIn this section, I expect that you understand the concept and basics in the ",(0,n.jsx)(t.a,{href:"./UAssetGuide1",children:"first guide on UAssetGUI"}),".\r\nIf you're ready, let's do this!"]}),"\n",(0,n.jsxs)(t.p,{children:["Programs you will ",(0,n.jsx)(t.strong,{children:"need"})," to follow along with this guide apart from the ones used in the first guide:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["For following along on the ",(0,n.jsx)(t.code,{children:"Step 3. Add functionality to existing items"})," - ",(0,n.jsx)(t.a,{href:"https://code.visualstudio.com/",children:"VSCode"})," - Don't worry, we're not writing any code for this guide, I will just show you some tricks that we can use."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Before heading into ",(0,n.jsx)(t.code,{children:"Step 3. Add functionality to existing items"})," you need to follow the ",(0,n.jsx)(t.code,{children:"install UE4SS to your game"})," , ",(0,n.jsx)(t.code,{children:"Breakdown - Dumpers"})," part and also the ",(0,n.jsx)(t.code,{children:"VSCode"})," section of ",(0,n.jsx)(t.code,{children:"Add CXXHeaderDump to Workspace"})," found on ",(0,n.jsx)(t.a,{href:"https://pwmodding.wiki/docs/lua-modding/lua-modding-tools",children:"this page"})]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"step-1-add-more-sell-offers-to-merchants",children:"Step 1. Add more sell offers to merchants"}),"\n",(0,n.jsx)(t.p,{children:"Let's start by showing you how you can add more items to the merchants, this will teach you the basics of the technique we will use for the future guides."}),"\n",(0,n.jsxs)(t.p,{children:["First I want you to export ",(0,n.jsx)(t.code,{children:"DT_ItemShopCreateData"}),", either by going to ",(0,n.jsx)(t.code,{children:"Pal>Content>Pal>Datatable>ItemShop"})," or at the top left, go ",(0,n.jsx)(t.code,{children:"Packages>Search"})," and type what we want to find, in this case ",(0,n.jsx)(t.code,{children:"ItemShopCreateData"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["Now open that file with UAssetGUI and go over to ",(0,n.jsx)(t.code,{children:"Village_Shop / ProductDataArray"})," and scroll all the way down on the ",(0,n.jsx)(t.code,{children:"right side"}),', you can see that we have 37 rows of "Variant" ',(0,n.jsx)(t.code,{children:"PalItemShopCreateDataStruct"})," so let's add a new line here."]}),"\n",(0,n.jsxs)(t.p,{children:["Click the ",(0,n.jsx)(t.code,{children:"PalItemShopCreateDataStruct"})," ONCE and copy + paste it to the next row and change the number to 38, hit ",(0,n.jsx)(t.code,{children:"save"})," and ",(0,n.jsx)(t.code,{children:"re-open"})," the file to update it."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"1",src:o(15679).Z+"",width:"672",height:"415"})}),"\n",(0,n.jsxs)(t.p,{children:["Now when you go back to ",(0,n.jsx)(t.code,{children:"Village_Shop / ProductDataArray"})," and scroll down on the ",(0,n.jsx)(t.code,{children:"left side"})," you can see that we now have a row called 38 that we can do whatever we want with so let's do something with it."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"2",src:o(37381).Z+"",width:"662",height:"176"})}),"\n",(0,n.jsxs)(t.p,{children:["Let's add Dog Coins, the ItemID for it is ",(0,n.jsx)(t.code,{children:"DogCoin"})," so enter that at the top row of ",(0,n.jsx)(t.code,{children:"StaticItemId"})," instead of ",(0,n.jsx)(t.code,{children:"PalItem_ToSell_05"})]}),"\n",(0,n.jsx)(t.p,{children:"Now you have 5 different properties to play around with and I will explain them in short"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["ProductType = This will be explained in the ",(0,n.jsx)(t.code,{children:"Step 3. Add functionality to existing items"})," section, come back later."]}),"\n",(0,n.jsxs)(t.li,{children:["OverridePrice = The price you want the item to cost in the ",(0,n.jsx)(t.code,{children:"Coin"})," currency"]}),"\n",(0,n.jsxs)(t.li,{children:["BuyRate = Multiplier for the price of the item decided in ",(0,n.jsx)(t.code,{children:"itemdatatable"}),", just leave it at 1 (you used to have to do math but they were nice and added OverridePrice, thanks Pocketpair)"]}),"\n",(0,n.jsx)(t.li,{children:"SellRate = the price the merchant will buy the item back for, just keep it at -1 for now"}),"\n",(0,n.jsx)(t.li,{children:"Stock = How many of this item the merchant will have in stock, put this at 0 or higher else the item will not be visible in the shop."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Congratulations, you have now added a new item to the Small Settlement merchant, open up the game and see if it worked."}),"\n",(0,n.jsxs)(t.p,{children:["Save this mod folder for when you come back after reading ",(0,n.jsx)(t.code,{children:"Step 3. Add functionality to existing items"})]}),"\n",(0,n.jsx)(t.h2,{id:"step-2-add-recipes",children:"Step 2. Add recipes"}),"\n",(0,n.jsx)(t.p,{children:"Now that you understand how to create new rows in a datatable, let's move onto adding new recipes and you will see how some files behave when trying to add new rows and how to combat it."}),"\n",(0,n.jsxs)(t.p,{children:["I want you to export ",(0,n.jsx)(t.code,{children:"DT_ItemRecipeDataTable"})," again, if you still have the mod folder from the first guide page, you can use that if you want."]}),"\n",(0,n.jsxs)(t.p,{children:["Now, I want you to open up ",(0,n.jsx)(t.code,{children:"2 instances"})," of UAssetGUI and have them next to eachother, open the same Recipe file on both windows"]}),"\n",(0,n.jsxs)(t.p,{children:["Decide which window will be your ",(0,n.jsx)(t.code,{children:"editing"})," window, i will use the left one."]}),"\n",(0,n.jsx)(t.p,{children:"Go to Table Info, scroll all the way down and copy the line HeadEquip023 onto row 591 to make a new line just like before, let's make a recipe for Air Cannon skill fruit, so name it Air Cannon or something similar, doesn't matter too much here."}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"Save & Re-Open"})," the file on the editor window"]}),"\n",(0,n.jsx)(t.p,{children:'Now that you scroll down, you will notice that your new line "Air Cannon" has nothing in it, so go to your 2nd UAssetGUI window and open any item row, for example the PalSphere.'}),"\n",(0,n.jsxs)(t.p,{children:["We now have to copy over the data from the PalSphere window over to our new Air Cannon window, so start copying each row ",(0,n.jsx)(t.code,{children:"one by one"})," (I know it's a bit tedious but hey, it's for the greater good) ",(0,n.jsx)(t.strong,{children:"Make sure to save"})," after you've transferred all 18 lines over. (it starts at 0 so ",(0,n.jsx)(t.code,{children:"total lines are 18"}),", don't be confused about it saying 17)"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"3",src:o(73621).Z+"",width:"928",height:"488"})}),"\n",(0,n.jsxs)(t.p,{children:["Now we just need to decide what our recipe will look like, so since we're making a recipe for Air Cannon we need the Item ID ",(0,n.jsx)(t.code,{children:"SkillCard_AirCanon"})," and for the sake of the guide we will just leave the rest of the lines as they are"]}),"\n",(0,n.jsx)(t.p,{children:"Congratulations, you've made a recipe, but wait.. There's no crafting table assigned to crafting skill fruits so we can't actually craft it anywhere."}),"\n",(0,n.jsx)(t.p,{children:"Let's add that functionality to the Pal Gear Workbench in the next step."}),"\n",(0,n.jsx)(t.h2,{id:"step-3-add-functionality-to-existing-items",children:"Step 3. Add functionality to existing items"}),"\n",(0,n.jsx)(t.p,{children:"This guide will start introducing you a bit to blueprint editing, which can be tricky at some parts and sometimes it just won't let us do what we want, but I will show you a little of what we can do."}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Note:"})," When working with blueprints, they will sometimes not allow us to open them and give us an error message, to combat this, I want you to export the whole ",(0,n.jsx)(t.code,{children:"blueprint folder"})," as many files depend on the whole folder structure to be intact to allow us to even open the files, sometimes it will even tell us which file is missing and you can add that file to your ",(0,n.jsx)(t.code,{children:"blueprint folder"}),". Store the folder wherever you want for future use."]}),"\n",(0,n.jsxs)(t.p,{children:["Now that you have a blueprint folder that you can work with, go ahead and also export ",(0,n.jsx)(t.code,{children:"BP_BuildObject_WorkBench_SkillUnlock"})," and store it in a ",(0,n.jsx)(t.code,{children:"new mod"})," folder for now."]}),"\n",(0,n.jsxs)(t.p,{children:["Now, open UAssetGUI again and go into your ",(0,n.jsx)(t.code,{children:"Blueprints"})," folder and locate this same file in ",(0,n.jsx)(t.code,{children:"Pal>Content>Pal>Blueprint>MapObject>BuildObject"})," (It's almost at the bottom)"]}),"\n",(0,n.jsxs)(t.p,{children:["Open ",(0,n.jsx)(t.code,{children:"Export Data > Export 9 (ItemConverterParameter) > PalMapObjectItemConverterParameterComponent"})," This is the part where it can get tricky so bear with me."]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.em,{children:"If you didn't do the VSCode installation at the top of this page, now is the time to do it."})}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Ok, let's do this, open up VSCode, right click ",(0,n.jsx)(t.code,{children:"CXXHeaderDump"})," and then ",(0,n.jsx)(t.code,{children:"Find In Folder"}),". Now I want you to search for ",(0,n.jsx)(t.code,{children:"PalMapObjectItemConverterParameter"})," and click what comes up in the search ",(0,n.jsx)(t.code,{children:"class PalMapObjectItemConverterParameter"})]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.em,{children:"We're going to go a bit off track here quickly for the sake of explaining how we can implement extra functionality that didn't exist on the items previously."})}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Here you see 7 different settings that we can choose to import to our ",(0,n.jsx)(t.code,{children:"WorkBench_SkillUnlock"})," but if you noticed in UAssetGUI we ",(0,n.jsx)(t.code,{children:"only have 3 of these settings"}),"\r\nSo let's start with importing ",(0,n.jsx)(t.code,{children:"AutoWorkAmountBySec"})," so make a new line by copying ",(0,n.jsx)(t.code,{children:"TargetRankMax"})," onto the next line, just like we've done in the previous steps."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"4",src:o(10269).Z+"",width:"397",height:"443"})}),"\n",(0,n.jsxs)(t.p,{children:["Now you also have to look at VSCode, next to ",(0,n.jsx)(t.code,{children:"AutoWorkAmountBySec"})," we see it says ",(0,n.jsx)(t.code,{children:"float"}),", that is important as we have to change the ",(0,n.jsx)(t.code,{children:"type"})," on our new row from ",(0,n.jsx)(t.code,{children:"IntProperty"})," to ",(0,n.jsx)(t.code,{children:"FloatProperty"})," and now you can put any number value you want here, voila we now have an Automatic Pal Gear Workbench."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"5",src:o(47715).Z+"",width:"718",height:"291"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.em,{children:"Ok, let's get back to what we were doing."})}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Let's talk about the ",(0,n.jsx)(t.code,{children:"ArrayProperty"})," of ",(0,n.jsx)(t.code,{children:"TargetTypesA/B"})," for crafting stations, these decide what items can be crafted on any specific table so in UAssetGUI, click on ",(0,n.jsx)(t.code,{children:"TargetTypesA"})," on the ",(0,n.jsx)(t.code,{children:"left side"})," to start with. You can see that it has a value of ",(0,n.jsx)(t.code,{children:"EPalItemTypeA::Essential"})," so let's go back to VSCode and make a new search for ",(0,n.jsx)(t.code,{children:"EPalItemTypeA"})," to see what comes up in that Array."]}),"\n",(0,n.jsxs)(t.p,{children:["Go to the first search result of ",(0,n.jsx)(t.code,{children:"enum class EPalItemTypeA"})," and you will see alot of different options that we can add to our table."]}),"\n",(0,n.jsxs)(t.p,{children:["But to make it even easier on you, scroll down and you will see ",(0,n.jsx)(t.code,{children:"enum class EPalItemTypeB"})," below our first search result. Here it's specified a bit better, Skills in this game are called ",(0,n.jsx)(t.code,{children:"Waza"})," in the game files and if you saw the option of ",(0,n.jsx)(t.code,{children:"ConsumeWazaMachine"})," then good job! Now we know our types are ",(0,n.jsx)(t.code,{children:"Type A = Consume"})," and ",(0,n.jsx)(t.code,{children:"Type B = ConsumeWazaMachine"})]}),"\n",(0,n.jsxs)(t.p,{children:["Let's go back and add a new row on Type A = ",(0,n.jsx)(t.code,{children:"EPalItemTypeA::Consume"})," and for Type B = ",(0,n.jsx)(t.code,{children:"EPalItemTypeB::ConsumeWazaMachine"})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"6",src:o(60316).Z+"",width:"745",height:"208"})}),"\n",(0,n.jsxs)(t.p,{children:["Congratulations, you can now craft skill fruits on the pal gear work bench, ",(0,n.jsx)(t.strong,{children:"but wait"}),", we were not working in our mod folder, we have been editing in the ",(0,n.jsx)(t.code,{children:"Blueprint folder"}),", remember?"]}),"\n",(0,n.jsxs)(t.p,{children:["So let's open up 2 folder windows, one with our ",(0,n.jsx)(t.code,{children:"mod folder"})," and one with the ",(0,n.jsx)(t.code,{children:"blueprint folder"})]}),"\n",(0,n.jsxs)(t.p,{children:["Go all the way into your ",(0,n.jsx)(t.code,{children:"mod folder"})," until you find the files of ",(0,n.jsx)(t.code,{children:"BP_BuildObject_WorkBench_SkillUnlock"})]}),"\n",(0,n.jsxs)(t.p,{children:["Now locate the same files in the ",(0,n.jsx)(t.code,{children:"blueprint folder"})," and ",(0,n.jsx)(t.code,{children:"copy"})," all ",(0,n.jsx)(t.strong,{children:"4 files"})," and replace the ",(0,n.jsx)(t.strong,{children:"2"})," that are in your ",(0,n.jsx)(t.code,{children:"mod folder"})," (edited files always come as 4 files)"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Note:"})," The reason I say ",(0,n.jsx)(t.code,{children:"copy"})," is because you maybe want to make further edits to your files and if they're no longer in the blueprint folder, you may not be able to open them without putting them back in the ",(0,n.jsx)(t.code,{children:"blueprint folder"})," first."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Now you're ready to try your mod out so ",(0,n.jsx)(t.strong,{children:".pak"})," up both your ",(0,n.jsx)(t.code,{children:"recipe mod"})," and your ",(0,n.jsx)(t.code,{children:"workbench mod"})," (make sure they end with _P) and install them to your game."]}),"\n",(0,n.jsxs)(t.p,{children:["If all went well, you should be able to craft ",(0,n.jsx)(t.code,{children:"Air Cannon Skill Fruit"})," on the Pal Gear Workbench now, good job!"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"7",src:o(90560).Z+"",width:"684",height:"345"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsxs)(t.em,{children:["As a last step, you may now ",(0,n.jsx)(t.code,{children:"use your new knowledge"})," and try to figure out what you can do with the ",(0,n.jsx)(t.code,{children:"Product Type"})," over at the merchants in Step 1."]})}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"step-4-combine-your-mod-folders",children:"Step 4. Combine your mod folders."}),"\n",(0,n.jsxs)(t.p,{children:["Before you upload your new mod, you may want to combine them so you don't upload ",(0,n.jsx)(t.code,{children:"2 different mod files"})]}),"\n",(0,n.jsx)(t.p,{children:"To do this, remember that the folder structure is very important for the mods to work."}),"\n",(0,n.jsxs)(t.p,{children:["What I do is ",(0,n.jsx)(t.code,{children:"open 2 folder windows"})," and go folder by folder until I find the point where they split, so in this case we would find that at ",(0,n.jsx)(t.code,{children:"Pal > Content > Pal"})," they split so we have one folder called ",(0,n.jsx)(t.code,{children:"Blueprint"})," and one is called ",(0,n.jsx)(t.code,{children:"DataTable"})," copy one or the other over and choose an appropriate name for your mod."]}),"\n",(0,n.jsx)(t.h2,{id:"finishing-notes",children:"Finishing Notes"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Important side-note:"})," Make sure you test your mods before uploading them so that you know your mod has the full intended functionality."]}),"\n",(0,n.jsx)(t.p,{children:"Congratulations, you've reached the end of the guide!"}),"\n",(0,n.jsxs)(t.p,{children:["If you have any questions, feel free to message me and if you haven't yet, join our community over at the ",(0,n.jsx)(t.a,{href:"https://discord.gg/VJ3vAVztjZ",children:"modding discord"})," we're more than happy to help with whatever you need help with."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Good luck"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Guillotine"})})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},15679:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/Image_1_Row_27-418bb2bb81b2f6c4cf49d6742c6331f7.png"},37381:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/Image_2_Row_29-cdf8865106dcd79f4ab027371bbd4700.png"},73621:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/Image_3_Row_60-f7966e49f5e6dcc3287e0fe15ed99c95.png"},10269:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/Image_4_Row_84-d2e8ea49a7a8aaa258c7f742308ba13a.png"},47715:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/Image_5_Row_89-6446cd505f1963525541909893d17f47.png"},60316:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/Image_6_Row_99-27023ccbc75e5564c1a917281b72afad.png"},90560:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/Image_7_Row_113-fd15db753dd6c924c237b540dee9ae93.png"},11151:(e,t,o)=>{o.d(t,{Z:()=>r,a:()=>d});var n=o(67294);const i={},s=n.createContext(i);function d(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);