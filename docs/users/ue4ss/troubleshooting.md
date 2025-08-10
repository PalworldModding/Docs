---
sidebar_position: 5
---

# Troubleshooting

## Important to Know

- Avoid using Mod Managers like Vortex or CurseForge Client for now. They're currently not working properly for Palworld and will install UE4SS and its mods incorrectly resulting in things not working. Follow the installation guide here instead.

- You might see mentions about needing to use something called "UE4SS Signatures". Please do not use this regardless of what anyone says. It was necessary back during Palworld's release in 2024, but it is not necessary anymore and will cause problems. If you have a folder called `UE4SS_Signatures`, delete it. You can find it in the Win64/WinGDK folder.

- Do **NOT** use the UE4SS version that was released back in February 14th 2024, because there are many bugs in the old version of UE4SS that were fixed ages ago. Same thing goes for any versions before 3.0.1. You should be using [experimental-palworld](https://github.com/Okaetsu/RE-UE4SS/releases/tag/experimental-palworld) fork, since it comes with an extra `MemberVariableLayout` file that prevents crashing issues with various mods.

- UE4SS will always come with some default mods like `BPModLoaderMod` or `BPML_GenericFunctions`. Do **NOT** delete these as that will cause UE4SS to not function properly. Leave the default mods alone. Same goes for `mods.txt` and `mods.json`, never ever touch these files, because you risk breaking UE4SS' functionality.

## Game Crashes on Startup after installing UE4SS

There could be multiple causes for this, but let's go step-by-step to ensure everything is right:

1. Check that you don't have leftover files from a potential old installation of UE4SS. This is easy to spot by checking if you have a `xinput1_3.dll` file where UE4SS was installed. If you see such file, delete it and try relaunching the game again.

2. Verify that you have the `MemberVariableLayout` file inside the ue4ss folder.

3. If you're still experiencing crashes at this point and you've installed mods, try removing any mods you added one by one until the game stops crashing.

## Mods are not loading

1. After launching the game, check the `ue4ss` folder to see if you have a `UE4SS.log` file. If you don't have [file name extensions enabled in Windows settings](https://support.microsoft.com/en-us/windows/common-file-name-extensions-in-windows-da4a4430-8e76-89c5-59f7-1cdbbc75cb01) then you're looking for a file called `UE4SS`. If you don't see the file, then that means UE4SS isn't correctly installed. Check to see if you have a `dwmapi.dll` file inside Win64/WinGDK folder and that you have `UE4SS.dll` and `UE4SS-Settings` files inside the ue4ss folder. If you don't have those three files in those locations then you need to redo the installation steps.

2. If you have a `Mods` folder inside Win64/WinGDK, move any mods from inside of it into `ue4ss/Mods` instead and if it asks to replace something, click **NO**. Delete the `Mods` folder inside Win64/WinGDK afterwards. Latest experimental version of UE4SS is moving towards using `ue4ss/Mods` as the mods folder.

3. Verify that you've installed the mods correctly by checking the mod's description or a potential pinned comment by the mod author.

4. If none of the previous worked, the mods that aren't working might be outdated. This game is constantly changing, meaning that some mods will cease to function depending on what they change about the game.