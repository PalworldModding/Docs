---
sidebar_position: 3
---

# Exportieren & Ersetzen von 3D Assets

Diese Anleitung wurde geschrieben von [KURAMAAA0](https://github.com/KURAMAAA0/PalModding)

In diesem Abschnitt wirst du lernen wie man die richtigen Dateien zum Exportieren findet um 3D Assets zu modifizieren. Wie Blender bedient wird, wird nicht gezeigt.


## Finden und Exportieren von 3D-Modellen von Pals

Um ein Pal 3D Modell zu finden, drücke `Steuerung + Umschalt + F` in FModel, oder klicke auf `Paket -> Suchen`, dann suche nach `SK_<PalCodeName>` (Ersetze \<PalCodeName\> mit dem Namen des Pals)


#### Um den Code-Namen des Pals zu finden drücke **[HIER](https://github.com/KURAMAAA0/PalModding/blob/main/PalNamesCodeNames.txt "HIER")** und suche nach dem Pal.

Doppelklicke das erste Ergebnis, dies sollte das **ohne** _`Skeleton` am Ende sein.

Dann gehe einen Ordner hoch, das heisst du sollst auf `Ordener` oben klicken.

![FMODEL2](https://github.com/KURAMAAA0/PalModding/assets/58988462/6c0d144c-5a52-465b-8d76-f404d6ab3474)

Rechts-Klicke auf den Ordner des Pals, klicke auf Ordnerpakete speichern **Texturen** (.png)
Rechts-Klicke auf den Ordner des Pals, klicke auf Ordnerpakete speichern **Models** (.psk)
Nun kannst du **Blender** öffnen.


## Importieren der Models in Blender

:::tip
    Stelle sicher, dass du entweder die Armatur und das Modell nach dem Import um 0,01 verkleinerst oder beim Exportieren die Skalierung auf 0,1 einstellst.

    Stelle sicher das `Add Leaf Bones` deaktiviert ist beim Export.

    Der armature Name sollte `Armature` sein
    ![Armature](./assets/Armature.png)
:::

In Blender, klicke auf `Datei -> Import -> Unreal PSK (.psk/.pskx)`

![BLENDER1](https://github.com/KURAMAAA0/PalModding/assets/58988462/98e6e332-75d2-4c60-ad49-d557459ce8d4)

Go to the output folder you set when changing FModel's settings, `Output -> Exports` go through the folders until you find the `SK_PalCodeName.psk` file and import it.
The textures should be in the same folder as the .psk, apply them to the Pal model if you don't want to replace it, otherwise ignore.
We'll make `Depresso` (code name: `NegativeKoala`) into a completely sleep-deprived `Depresso` by editing his model.
We will also change his textures, go to **this section** if you want to learn how to replace/edit images (same process as replacing/editing textures).

Gehen in den Ausgabeordner, den du beim Ändern der FModel-Einstellungen festgelegt hast, gehe unter `Output -> Exports` durch die Ordner, bis du die Datei "SK_PalCodeName.psk" findest, und importiere sie.
Die Texturen sollten sich im selben Ordner wie die .psk befinden, wendet sie auf das Pal-Modell an, wenn ihr es nicht ersetzen wollt, ansonsten ignoriert sie.
Wir machen aus `Depresso` (Codename: `NegativeKoala`) einen völlig schlaf entzogenen `Depresso`, indem wir sein Modell bearbeiten.
Wir werden auch seine Texturen ändern, geht zu **diesem Abschnitt**, wenn ihr lernen wollt, wie man Bilder ersetzt/bearbeitet (der gleiche Prozess wie das Ersetzen/Bearbeiten von Texturen).


## Modifizieren der 3D-Models in Blender
Wenn du nur dein Pal 3D-Modell ändern möchtest, kannst du das Modell im Ansichtsfenster belassen und die Änderungen direkt daran vornehmen.
If your model has a black background for his eyes and mouth, select the texture(s) with the issue, go to the **Shader Editor**, plug the **Alpha** channel of the texture into the **Alpha** property of the Principled BSDF.
Wenn dein Modell einen schwarzen Hintergrund für seine Augen und seinen Mund hat, wähle die Textur(en) mit dem Problem aus, gehe zum **Shader-Editor** und verbinde den **Alpha**-Kanal der Textur mit der **Alpha**-Eigenschaft der Principled BSDF.

![BLENDERSHADER1](https://github.com/KURAMAAA0/PalModding/assets/58988462/c988b8db-3d1a-48ed-b597-8beda449cfb8)



Dannach ändere `Blend Mode` zu `Alpha Blend` und `Shadow Mode` zu `None` im Material Properties Tab.

![BLENDERSHADER2](https://github.com/KURAMAAA0/PalModding/assets/58988462/41e5a112-f107-468d-b69b-e38b9a36bfce)


Dein Pal sollte nun gefixt sein und funktionieren!

![BLENDERSHADER3](https://github.com/KURAMAAA0/PalModding/assets/58988462/d0b93d38-ea6d-4a27-9ac4-14beab123f1f)



Hier ist der etwas schlecht gemachte `Schlafenzugs Depresso`, mit den geänderten Texturen.

![BLENDER3](https://github.com/KURAMAAA0/PalModding/assets/58988462/3cd4b1f6-17d9-4160-8c04-d0acc640ce92)


Um zu exportieren, gehe einfach zu `Datei > Export > FBX (.fbx)` und wähle, wo du exportieren möchtest.

Fahren wir nun mit dem letzten Schritt fort, [Verpacken der Datein in UE5 um eine Mod-Datei zu bekommen!](https://github.com/KURAMAAA0/PalModding/blob/main/Assset%20Swap%20Guide/PackagingInUE5.md)
