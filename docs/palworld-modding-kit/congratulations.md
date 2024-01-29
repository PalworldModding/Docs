---
sidebar_position: 4
---

# Exporting The Project

:::note
Make Sure These Two Settings Have Been Enabled ![EditorPrefExp](./assets/EditorPrefrencesExperimental.png) ![ProjectSettingsPackaging](./assets/ProjectSettingsPackaging.png)
:::

1) Create a Data Asset ( Primary Asset Label ) named after your mod name in your Contents folder. Set the priority to 1, and the Chunk ID to a memorable ID.
2) Set your Mods  (ModActor and any other Assets you are going to include in your mod) Chunk ID to the same you used above.
3) Go into **Project Settings -> Asset Manager** and verify your settings are similar below ( Make sure the rules match the primary asset label you made ) ![AssetsManagerSettings](./assets/AssetsManagerSettings.png)
4) Once all Chunk ID's match on each mod file you are including, you can package your project ![Package button](./assets/UEPackageButton.png)
5) You should have `pakchunk{Your Chunk ID}-Windows.pak` in the Paks output folder. Rename that to the mod name. There's your packaged mod!

<details>
    <summary>If you only get 'pakchunk0-Windows.pak' instead of your memorable ID</summary>
    <div>
        Go into **Project Settings -> Packaging**<br/>
        Then tick "Cook everything in the project content directory(ignore list of maps below)"<br/>
        ![image (5)](https://github.com/localcc/PalworldModdingKit/assets/10259891/c06cb6c6-8e2c-4560-bb1d-22f10f7563ad)
    </div>
</details>

:::tip
Remember to enable BPModLoader in the `Palworld\Pal\Binaries\Win64\Mods\mods.txt` for UE4SS

![BPModLoader](./assets/BPModLoaderMod.png)
:::
