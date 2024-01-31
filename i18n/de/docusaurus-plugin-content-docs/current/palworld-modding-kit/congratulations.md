---
sidebar_position: 4
---

# Exportieren des Projekts

:::note
Stelle sicher diese zwei Optionen sind eingestellt ![EditorPrefExp](./assets/EditorPrefrencesExperimental.png) ![ProjectSettingsPackaging](./assets/ProjectSettingsPackaging.png)
:::

1) Erstelle ein Data Asset ( Primary Asset Label ) benannt nach dem Namen deiner Mod in deinem Contents-Ordner. Setzte die Priorität auf 1, und die Chunk-ID zu einer merkbaren ID.
2) Setz die Chunk-ID deiner Mod (ModActor und alle anderen Assets, die ihr in eure Mod einbauen wollt) auf die gleiche, die ihr oben verwendet habt.
3) Gehe zu **Projekteinstellungen -> Asset Manager** und überprüfe, ob die Einstellungen den folgenden entsprechen (stelle sicher, dass die Regeln mit dem erstellten Primary Asset-Label übereinstimmen) ![AssetsManagerSettings](./assets/AssetsManagerSettings.png)
4) Wenn alle Chunk-IDs in jeder Mod-Datei übereinstimmen, kann das Projekt verpackt werden ![Package button](./assets/UEPackageButton.png)
5) Es sollte nun `pakchunk{Your Chunk ID}-Windows.pak` im Paks Ausgabe Ordner sein. Ändere den Dateinamen zu deinem Modnamen. Nun hast du deine verpackte Mod!

<details>
    <summary>Falls du nur 'pakchunk0-Windows.pak' anstelle deiner ID bekommst</summary>
    <div>
        Gehe zu **Projekt Einstellungen -> Packaging**<br/>
        Nun wähle  "Cook everything in the project content directory(ignore list of maps below)"<br/>
        ![image (5)](https://github.com/localcc/PalworldModdingKit/assets/10259891/c06cb6c6-8e2c-4560-bb1d-22f10f7563ad)
    </div>
</details>

:::tip
Denke daran BPModLoader in `Palworld\Pal\Binaries\Win64\Mods\mods.txt` zu aktivieren für UE4SS

![BPModLoader](./assets/BPModLoaderMod.png)
:::
