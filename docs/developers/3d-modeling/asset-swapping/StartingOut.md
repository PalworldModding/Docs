---
sidebar_position: 2
---

# Starting out

This guide is written by [KURAMAAA0](https://github.com/KURAMAAA0/PalModding)

Start by opening FModel, a `Directory Selector` window will open.
If Palworld isn't in the first dropdown, click the interchanging arrows symbol to add an undetected game.

![DirectorySelector](./assets/dirselector.png)

Name it `Palworld` (Or whatever you want, doesn't matter.)
Change the directory to your `Palworld` executable directory, which by default is in `C:\Program Files (x86)\Steam\steamapps\common\Palworld\`
If you cannot find it, go to your `Steam library -> Right Click -> Palworld -> Manage -> Browse local files`, copy this path to the `Directory` section.

Click `OK` and go to FModel settings.
Change your `Output Directory` to somewhere you'll find easily.
In the `GAME` section, change `UE Versions` to `GAME_UE5_1`.
In the `ADVANCED` section, check `Local Mapping File` and change `Mapping File Path` to the [Palworld Mapping File](https://github.com/PalworldModding/UsefulFiles/raw/refs/heads/master/Mappings.usmap) you downloaded earlier.

On the left side of the settings, click on the `Models` tab.
Change your `Model Export Directory` to somewhere you'll find easily.
Change `Mesh Format` to `ActorX (psk / pskx)`
Change `Texture Format` to `PNG`.
Click `OK` and restart FModel.

------------


You can now start exploring and exporting the game files freely!
To find which file to export, go to one of these sections in the guide:
- [Exporting and modifying 3D assets (Pals, items, etc..)](ExportingModifying3DAssets.md "Exporting and modifying 3D assets (Pals, items, etc..)")