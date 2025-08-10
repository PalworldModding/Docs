---
sidebar_position: 1
---

# Downloading

This is the most important part here. You want to make sure you're downloading the correct version of UE4SS or you **WILL** face crashes with certain mods that access specific in-game values.

This has to do with Palworld introducing engine edits related to UEnum during patch 0.4.15 which breaks default install of UE4SS due to memory layout shift. Some mods will function fine while some mods will crash the game whenever that mod tries to access the mentioned 'UEnums'.

UE4SS allows the end user to provide their own memory layout of the game with a `MemberVariableLayout` file. Now before anyone starts shaking their fist at Pocketpair, know that these changes to the game were necessary so that new active skills and Pal types can be added to the game, because the game was limited to a maximum of 255 active skills and tribes/pal types before the changes. See the [issue](https://github.com/UE4SS-RE/RE-UE4SS/issues/802) if you want to read more about it.

Two methods of downloading UE4SS will be provided below, bundled and manual.

## Bundled (Palworld Fork)

This method will involve downloading UE4SS from a fork which already contains the `MemberVariableLayout` fix with UE4SS' files, meaning you only have to worry about downloading UE4SS and then installing it.

1. Download `UE4SS-Palworld.zip` from [here](https://github.com/Okaetsu/RE-UE4SS/releases/tag/experimental-palworld) which contains the necessary `MemberVariableLayout` fix.

2. After you're done downloading UE4SS, if you open the .zip file, you should see a ue4ss folder and dwmapi.dll inside. This means you've downloaded the correct version of UE4SS.

3. Done, you can now move on to [Installation (Client)](./installation.mdx) or [Installation (Dedicated Server)](./installation-server.mdx).

## Manual (Official Repository)

1. Download `UE4SS_v3.0.1-xxx-xxxxxxxx.zip` from [here](https://github.com/UE4SS-RE/RE-UE4SS/releases/tag/experimental-latest) where the Xs are replaced by the latest version available. You'll have to scroll all the way down to the 'Assets' section where you can see the downloadable assets.

2. After you're done downloading UE4SS, if you open the .zip file, you should see a ue4ss folder and dwmapi.dll inside. This means you've downloaded the correct version of UE4SS.

3. You'll need to download the `MemberVariableLayout` from [here](https://github.com/PalworldModding/UsefulFiles/blob/master/MemberVariableLayout.ini). We'll cover the MemberVariableLayout.ini file in the Installation section of the guide, so be patient.

4. Done, you can now move on to [Installation (Client)](./installation.mdx) or [Installation (Dedicated Server)](./installation-server.mdx).