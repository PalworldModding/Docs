---
sidebar_position: 2
---

# Starten

Diese Anleitung wurde geschrieben von [KURAMAAA0](https://github.com/KURAMAAA0/PalModding)

Wir fangen an in dem wir FModel öffnen, ein `Directory Selector` Fenster wird sich öffnen.
Sollte Palworld nicht in zur Auswahl stehen, klicke die Pfeile um ein weiteres Spiel hinzuzufügen.

![DirectorySelector](./assets/dirselector.png)

Nenne es `Palworld` (Oder wie du willst, dies spielt keine Rolle)
Ändere den Pfad zu deinem `Palworld` Pfad, Standard ist `C:\Program Files (x86)\Steam\steamapps\common\Palworld\`
Solltest du ihn nicht finden gehe zu `Steam library -> Rechts klick -> Palworld -> Manage -> Browse local files`, kopiere diesen Pfad zur `Directory` Sektion.

Klicke `OK` und gehe zu den FModel Einstellungen.
Ändere dein `Output Directory` zu etwas das du leicht findest.
In der `GAME` Sektion, Ändere `UE Versions` zu `GAME_UE5_1`.
In der `ADVANCED` Sektion, aktiviere `Local Mapping File` und ändere `Mapping File Path` zum [Palworld Mapping File](https://github.com/KURAMAAA0/PalModding/raw/main/Assset%20Swap%20Guide/Mappings.usmap "Palworld mapping file"), das du vorher heruntergeladen hast.

Auf der linken Seite der Einstellungen klicke auf das `Models` Tab.
Ändere `Model Export Directory` zu etwas das du leicht findest.
Ändere `Mesh Format` zu `ActorX (psk / pskx)`
Ändere `Texture Format` zu `PNG`.
Klicke `OK` und starte FModel neu.

------------


Nun kannst du die Spieldateien frei erforschen und exportieren!
Um herauszufinden, welche Datei exportiert werden müssen, gehe zu einem der folgenden Abschnitte:
- [Exportieren und modifizieren von 3D assets (Pals, items, etc..)](ExportingModifying3DAssets.md "Exportieren und modifizieren von 3D assets (Pals, items, etc..)")
- [[WIP] Exportieren und ersetzen von 3D assets (Pals, items, etc..)](ExportingReplacing3DAssets.md)
- [[WIP] Exportieren und modifizieren von 2D assets (Icons, HUD elements, images)](ExportingModifying2DAssets.md)
- Animationen? Bin nicht sicher, ob das möglich ist, habe es noch nicht versucht. WIP.
