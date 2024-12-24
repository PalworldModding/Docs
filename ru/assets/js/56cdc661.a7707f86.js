"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5449],{74893:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var o=n(85893),i=n(11151);const r={},s="Using Blueprints with Lua",a={id:"lua-modding/blueprints-with-lua",title:"Using Blueprints with Lua",description:"When writing a Lua mod, you can call a method inside a ModActor blueprint. This is useful, as your Lua mod can hook into functions that aren't exposed via Blueprints, then you can create most of your mod's functionality within Blueprints. If you haven't yet, follow the steps to make a basic Blueprint mod in the Creating A Blueprint Mod section, and then come back to this section.",source:"@site/docs/lua-modding/blueprints-with-lua.mdx",sourceDirName:"lua-modding",slug:"/lua-modding/blueprints-with-lua",permalink:"/ru/docs/lua-modding/blueprints-with-lua",draft:!1,unlisted:!1,editUrl:"https://github.com/PalworldModding/Docs/docs/lua-modding/blueprints-with-lua.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Lua Basics",permalink:"/ru/docs/lua-modding/lua-basics"},next:{title:"Asset Swapping",permalink:"/ru/docs/category/asset-swapping"}},l={},d=[];function c(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",img:"img",p:"p",pre:"pre",...(0,i.a)(),...e.components},{Details:r}=t;return r||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"using-blueprints-with-lua",children:"Using Blueprints with Lua"}),"\n",(0,o.jsxs)(t.p,{children:["When writing a Lua mod, you can call a method inside a ModActor blueprint. This is useful, as your Lua mod can hook into functions that aren't exposed via Blueprints, then you can create most of your mod's functionality within Blueprints. If you haven't yet, follow the steps to make a basic Blueprint mod in the ",(0,o.jsx)(t.a,{href:"/ru/docs/creating-blueprint-mods/mod-setup-1",children:"Creating A Blueprint Mod"})," section, and then come back to this section."]}),"\n",(0,o.jsxs)(t.p,{children:["First, we have to let our Lua mod know that the Blueprints mod is active. We'll do this by creating a ",(0,o.jsx)(t.code,{children:"Lua_ModInitialized"})," function in our blueprint like so:"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"1",src:n(13222).Z+"",width:"448",height:"89"})}),"\n",(0,o.jsxs)(t.p,{children:["This function will return your ModActor as a parameter to your Lua mod. Your Lua mod will then use your ModActor to call the functions inside of it. After making this ",(0,o.jsx)(t.code,{children:"Lua_ModInitialized"})," function, we'll need to set an output parameter which will include our ModActor blueprint. This is what gets sent to our Lua mod so we can cache it and call our other functions found inside the blueprint."]}),"\n",(0,o.jsx)(t.admonition,{type:"note",children:(0,o.jsx)(t.p,{children:"When creating events in blueprints for use with Lua mods, make sure the event name is unique. Currently, RegisterCustomEvent only allows one hook per event name; otherwise, any previous hook with the same name will get overwritten and won't be called at all. This also means that multiple Lua mods can't hook to the same blueprint event, for example, in case the blueprint mod in question is a library. This may change in the future, but for now this is the implementation."})}),"\n",(0,o.jsx)(t.p,{children:"Your function should look like this:"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"1",src:n(88557).Z+"",width:"926",height:"432"})}),"\n",(0,o.jsxs)(r,{children:[(0,o.jsx)("summary",{children:"If you have multiple ModActor blueprints in the dropdown"}),(0,o.jsx)("div",{children:(0,o.jsxs)(t.p,{children:["This can be avoided by creating another Actor blueprint within your mod's folder and letting that blueprint handle all of the logic instead. By doing this, ModActor is only responsible for spawning the \"core\" Actor blueprint, and you'll have an easier time since you can reference that 'core' Actor instead. ",(0,o.jsx)("br",{}),"As an example, assuming we have a mod called MyFirstMod, we'll create a new BP_FirstModCore Actor blueprint in the folder next to ModActor: ",(0,o.jsx)("br",{}),"\r\n",(0,o.jsx)(t.img,{alt:"folder",src:n(47208).Z+"",width:"370",height:"340"}),(0,o.jsx)("br",{}),"\r\nAfter that, we'll spawn a new BP_FirstModCore actor from inside ModActor: ",(0,o.jsx)("br",{}),"\r\n",(0,o.jsx)(t.img,{alt:"spawnActor",src:n(7723).Z+"",width:"592",height:"465"})," ",(0,o.jsx)("br",{}),"\r\nLastly, we'll handle the logic from inside the BP_FirstModCore blueprint and continue the tutorial from there:",(0,o.jsx)("br",{}),"\r\n",(0,o.jsx)(t.img,{alt:"actorHandlingLogic",src:n(61531).Z+"",width:"489",height:"346"}),(0,o.jsx)("br",{})]})})]}),"\n",(0,o.jsxs)(t.p,{children:["Now we'll connect the PostBeginPlay event to this function. As mentioned in the ",(0,o.jsx)(t.a,{href:"/ru/docs/creating-blueprint-mods/mod-setup-1",children:"Setting Up A Basic Mod"})," section, PreBeginPlay is called too early to initialize our mod, so we'll use PostBeginPlay instead."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"4",src:n(3421).Z+"",width:"450",height:"157"})}),"\n",(0,o.jsxs)(t.p,{children:["Next, let's create a new ",(0,o.jsx)(t.code,{children:"main.lua"})," file and set up our mod. We'll explain our new ",(0,o.jsx)(t.code,{children:"main.lua"})," script step-by-step:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-lua",children:"local _ModActor = nil\n"})}),"\n",(0,o.jsx)(t.p,{children:"Here, we're initializing our Lua mod's ModActor variable to nil. We'll be checking this variable to see if our mod has been initialized or not. This will ensure that our hooks are bound to our events only once; otherwise, you may notice that your mod will bind to events multiple times which is not what we want."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-lua",children:'RegisterCustomEvent("Lua_ModInitialized", function (ModActor)\r\n    if ModActor:get() ~= nil and ModActor:get():IsValid() then\r\n        _ModActor = ModActor:get()\r\n        print("Blueprint Loaded!\\n")\r\n    end\n'})}),"\n",(0,o.jsxs)(t.p,{children:["We use ",(0,o.jsx)(t.code,{children:"RegisterCustomEvent"})," instead of ",(0,o.jsx)(t.code,{children:"RegisterHook"})," here since we're waiting on our ",(0,o.jsx)(t.code,{children:"Lua_ModInitialized"})," function to be called. When the function is called, our Lua mod catches it, and then checks if our local _ModActor is nil. ",(0,o.jsx)(t.code,{children:"ModActor:get():IsValid()"})," calls the Unreal Engine ",(0,o.jsx)(t.a,{href:"https://dev.epicgames.com/documentation/en-us/unreal-engine/API/Functions/IsValid",children:"IsValid() method"})," to ensure that the blueprint is valid before setting our ",(0,o.jsx)(t.code,{children:"_ModActor"})," variable to our passed-in ModActor. Then, we print to the console so we can confirm that our ModActor blueprint has not only been successfully validated, but also cached and ready to use within our Lua mod."]}),"\n",(0,o.jsx)(t.p,{children:"Now, let's initialize our Lua mod. It has been recommended to register our hooks through the PalHUDService as it is considered performant even for lower-end PCs:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-lua",children:'ExecuteAsync(function ()\r\n    local HUDService = FindFirstOf("PalHUDService")\r\n\r\n    if HUDService ~= nil and HUDService:IsValid() then\r\n        RegisterHooks()\r\n        return\r\n    end\r\n\r\n    NotifyOnNewObject("/Script/Pal.PalHUDService", function (Context)\r\n        RegisterHooks()\r\n    end)\r\nend)\n'})}),"\n",(0,o.jsxs)(t.p,{children:["Here, the script attempts to find the first active ",(0,o.jsx)(t.code,{children:"PalHUDService"})," component in the scene and sets it to our HUDService variable. If HUDService is not nil and HUDService is valid, then we call the ",(0,o.jsx)(t.code,{children:"RegisterHooks()"})," function. Let's write that function now."]}),"\n",(0,o.jsxs)(t.p,{children:["Our ",(0,o.jsx)(t.code,{children:"RegisterHooks()"})," function is where we'll register our hooks. For our example, we'll create a hook similar to the one we made in the ",(0,o.jsx)(t.a,{href:"hooking-functions",children:"Intro to Hooking Functions"})," section where we hooked into an Otomo being activated:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-lua",children:'local function RegisterHooks()\r\n    RegisterHook("/Game/Pal/Blueprint/Component/OtomoHolder/BP_OtomoPalHolderComponent.BP_OtomoPalHolderComponent_C:ActivateOtomo", \r\n    function (Context, SlotID)\r\n        print("LUA: Activating otomo: " .. SlotID:get())\r\n        local HolderComponent = Context:get()\r\n        _ModActor:PrintPalNameFromHolder(HolderComponent)\r\n    end)\r\nend\n'})}),"\n",(0,o.jsx)(t.p,{children:"When activating a pal (or technically, our \"otomo\"), we'll print a message from our Lua mod to confirm that the Lua mod registered our hook correctly. Next, we'll call a function in our ModActor Blueprints mod by name, and for the purposes of this example, pass in the HolderComponent variable."}),"\n",(0,o.jsx)(t.p,{children:"Your completed Lua mod should look like this:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-lua",children:'local _ModActor = nil\r\n\r\nlocal function RegisterHooks()\r\n    RegisterHook("/Game/Pal/Blueprint/Component/OtomoHolder/BP_OtomoPalHolderComponent.BP_OtomoPalHolderComponent_C:ActivateOtomo", \r\n    function (Context, SlotID)\r\n        print("LUA: Activating otomo: " .. SlotID:get())\r\n        local HolderComponent = Context:get()\r\n        _ModActor:PrintPalNameFromHolder(HolderComponent)\r\n    end)\r\nend\r\n\r\nRegisterCustomEvent("Lua_ModInitialized", function (ModActor)\r\n    if ModActor:get() ~= nil and ModActor:get():IsValid() then\r\n        _ModActor = ModActor:get()\r\n        print("Blueprint Loaded!\\n")\r\n    end\r\nend)\r\n\r\nExecuteAsync(function ()\r\n    local HUDService = FindFirstOf("PalHUDService")\r\n\r\n    if HUDService ~= nil and HUDService:IsValid() then\r\n        RegisterHooks()\r\n        return\r\n    end\r\n\r\n    NotifyOnNewObject("/Script/Pal.PalHUDService", function (Context)\r\n        RegisterHooks()\r\n    end)\r\nend)\n'})}),"\n",(0,o.jsx)(t.p,{children:"Now that our Lua mod is set up and we're calling the function by name from our Lua mod, let's create that function in our blueprint."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"5",src:n(24242).Z+"",width:"473",height:"259"})}),"\n",(0,o.jsxs)(t.p,{children:["After creating the function, we should create a new input for the function which will match the function we're trying to call from our Lua mod. You may have noticed that in our Lua mod, we have a local variable called ",(0,o.jsx)(t.code,{children:"HolderComponent"})," which we assign as ",(0,o.jsx)(t.code,{children:"Context:get()"}),". If you followed the ",(0,o.jsx)(t.a,{href:"ue4ss-functions",children:"UE4SS"})," section, you'll remember that Context is the UObject that called the function. Therefore, when we pass our ",(0,o.jsx)(t.code,{children:"HolderComponent"})," variable to our ",(0,o.jsx)(t.code,{children:"ModActor:PrintPalNameFromHolder(HolderComponent)"}),", we are passing the BP_OtomoPalHolderComponent_C component to our method."]}),"\n",(0,o.jsx)(t.p,{children:'With that said, create a new input for our function, give the variable a name, and then set the input type to "Pal Otomo Holder Component Base".'}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"6",src:n(92033).Z+"",width:"574",height:"105"})}),"\n",(0,o.jsxs)(t.p,{children:["Now when we call ",(0,o.jsx)(t.code,{children:"ModActor:PrintPalNameFromHolder(HolderComponent)"})," from our Lua mod, we can use the Pal Otomo Holder Component and do whatever we want with it within our Blueprints mod. For the sake of this example, we'll get the currently selected pal from the Pal Otomo Holder Component and then print the pal's name to the mod loader."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"7",src:n(45774).Z+"",width:"1667",height:"500"})}),"\n",(0,o.jsxs)(t.p,{children:["As you can see from the image above, we take the ",(0,o.jsx)(t.code,{children:"PalOtomoHolderComponentBase"})," that's passed in, use the ",(0,o.jsx)(t.code,{children:"TryGetCurrentSelectPalActor"})," function to get the currently selected Pal's ",(0,o.jsx)(t.code,{children:"CharacterParameterComponent"}),", then use the ",(0,o.jsx)(t.code,{children:"GetNickname"})," function to get that Pal's nickname. We use the ",(0,o.jsx)(t.code,{children:"FormatText"})," method to create a readable string that takes the Pal's name as an input, then convert the formatted text to a string before printing our new string to the mod loader with ",(0,o.jsx)(t.code,{children:"PrintToModLoader"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["After that's done, you're ready to test your new mod. Assuming your Lua mod is set up correctly in the game's installation folder, follow the steps in the ",(0,o.jsx)(t.a,{href:"/ru/docs/palworld-modding-kit/congratulations",children:"Exporting The Project"})," section to export your mod's .pak file, copy the .pak file into the LogicMods folder located in ",(0,o.jsx)(t.code,{children:"Palworld/Pal/Content/Paks"}),", then start the game."]}),"\n",(0,o.jsx)(t.admonition,{type:"note",children:(0,o.jsx)(t.p,{children:"If you don't have a LogicMods folder in your Paks folder yet, you can create it yourself."})}),"\n",(0,o.jsx)(t.p,{children:"If everything is correct, you should see your Lua mod's message print in the mod loader when you start the game. Try sending out one of your pals, and you'll see your pal's name printed to the mod loader from your Blueprints mod."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"8",src:n(49838).Z+"",width:"1296",height:"843"})}),"\n",(0,o.jsxs)(t.p,{children:["Success! You can see that when printing to the mod loader from our blueprint, our message is prefixed with ",(0,o.jsx)(t.code,{children:"[MyTestMod]"}),", which is the name of the mod we gave it when we created the mod."]}),"\n",(0,o.jsx)(t.p,{children:"Now you can use Lua and Blueprints together to create mods, achieving the best of both worlds in the process. Happy modding!"})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},13222:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/1-b5d803fbce16b957fd6531de4006802c.png"},88557:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/2-00a19ef64920531a1c1440283eb8322d.png"},3421:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/4-48efb205e3decbad8a09d637dbb8ff92.png"},24242:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/5-c780058fcc5f373624595c86b94237e7.png"},92033:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/6-93d88a6920c3b03d5e12db8b4f3f4e1a.png"},45774:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/7-4cff6add6974f541fe4a6e22e5812847.png"},49838:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/8-df9d4cf01a8db739d4b85095828163cb.png"},61531:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/actorHandlingLogic-08952d78a80cf501117b1fb81edafdac.png"},47208:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/folder-18db7709feb67fa3dbd0d19962f4fe33.png"},7723:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/spawnActor-7146fe4e6bbb202679ca12914c8535fb.png"},11151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>s});var o=n(67294);const i={},r=o.createContext(i);function s(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);