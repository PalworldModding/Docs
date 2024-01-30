---
sidebar_position: 6
---

# Verpacken der Mod-Datei mit UE5

Diese Anleitung wurde geschrieben von [KURAMAAA0](https://github.com/KURAMAAA0/PalModding)


Das meiste in diesem Abschnitt wurde inspiriert von [dieser Anleitung](https://www.abbiedoobie.com/2023/10/13/modding-robocop-rogue-city-and-other-ue-5-games/)! War sehr hilfreich!

Starte Unreal Engine 5.1.1.

![UE1](https://github.com/KURAMAAA0/PalModding/assets/58988462/ca1c0f4c-3d4d-4559-aded-fa5cd8c20c25)

Erstelle ein neues Projekt: `Games -> Blank Project`, Nenne es `Pal` **(Es ist sehr wichtig das der Name genau `Pal` ist da die Mod sonst nicht läd)**
Die Projekt Standards sollten sein:
- `Blueprint`
- Ziel Plattform: `Desktop`
- Start Inhalt: `unchecked`
- Raytracing: `unchecked`
-
![UE2](https://github.com/KURAMAAA0/PalModding/assets/58988462/0782bbbe-9b49-4597-b530-9805e1f14561)

Klicke auf `Platformen` im oberen Bereich, dann klicke `Packaging Settings`

![UESETTING](https://github.com/KURAMAAA0/PalModding/assets/58988462/5c65653c-c1de-4f95-9e40-e08622395890)

Deaktiviere `Use Io Store` und aktiviere `Generate Chunks`.

![UESETTING2](https://github.com/KURAMAAA0/PalModding/assets/58988462/41cfcb81-5046-4388-bf5d-7fa8253f8f38)

Suche nach `Cook everything` und aktiviere `Cook everything in the project content directory (…)`.

![UESETTING3](https://github.com/KURAMAAA0/PalModding/assets/58988462/2967a6ba-031e-4464-b245-b67ac9f140a8)

Erstelle eine Ordnerstruktur die der von FModel `übereinstimmt`. Ignoriere `Pal\Content\` da der Content Browser bereits in `Content` startet.
**Als Beispiel**, da Ich das Depresso Model modifiziert habe, Körper Textur und Augen Textur, muss ich die Ordnerstruktur nachbauen um zu diesen Dateien zu kommen.

![UEPATH1](https://github.com/KURAMAAA0/PalModding/assets/58988462/e86dc337-3c7d-4918-8646-448bbd962089)

![UE3](https://github.com/KURAMAAA0/PalModding/assets/58988462/f737c24f-8954-411d-a51f-5545d5ec050c)

Du kannst nun alle **MODIFIZIERTEN** Dateien in den entsprechenden Ordner ablegen. Wenn möglich, legen die Dateien, die in einen einzigen Ordner gehören, alle auf einmal ab. Klicken auf alle importieren und schließen den/die FBX-Importfehler.

![UE4](https://github.com/KURAMAAA0/PalModding/assets/58988462/bbbee6b6-fb03-4676-921c-4fecfde55c0b)

Wie man sieht, sehen unsere Texturen nicht gut aus. Das liegt einfach daran, dass wir transparente Materialien manuell einstellen müssen.
Doppelklick auf das Material (Kugel) mit der *normal* transparenten Textur (Augen, Mund, etc.)
Ändere den **Blend Mode** auf **Translucent** und verbinden **A** (Alpha) mit **Opacity**.

![UE5](https://github.com/KURAMAAA0/PalModding/assets/58988462/ec1e61ba-f8b8-4bd5-8b22-0588f51a4935)

Machen das bei jedem Material, das du brauchst, und vergiss dann nicht, alles zu speichern (unten rechts).

![UE6](https://github.com/KURAMAAA0/PalModding/assets/58988462/85905fae-a8f9-4dda-bac6-7ee05b3c1011)

Vergewissere dich, dass alle Dateien den EXAKT gleichen Namen haben, den sie ursprünglich in FModel hatten.

In meinem Fall:
- **DeprivedDepresso** wird zu **SK_NegativeKoala**
- **DeprivedDepresso_PhysicsAsset** wird zu **PA_NegativeKoala_PhysicsAsset**
- **DeprivedDepresso_Skeleton** wird zu **SK_NegativeKoala_Skeleton**


Beachte, dass sich SK_NegativeKoala_Skeleton ursprünglich nicht im gleichen Ordner wie die anderen Dateien befand, so dass wir neue Ordner erstellen und die Datei aus ihrem aktuellen Ordner verschieben müssen.
Denke immer daran, dass Pfade und Dateinamen sehr wichtig sind.

![UEPATH2](https://github.com/KURAMAAA0/PalModding/assets/58988462/817dda65-6094-4bf3-9ff6-cec499f17592)

![UE4 5](https://github.com/KURAMAAA0/PalModding/assets/58988462/2f0cfbef-06c0-4c18-b57b-d5f4d9dc899c)

Speichere alles (rechte untere Ecke).
Gehe zurück zu deinem **Inhalts-Ordner**, Rechts-klicke auf **Verschiedenes**, und klicke dann auf **Daten-Asset**.

![UE7](https://github.com/KURAMAAA0/PalModding/assets/58988462/a75cf69e-50d5-480b-b695-2fefde989276)

Wähle **PrimaryAssetLabel**.

![UE8](https://github.com/KURAMAAA0/PalModding/assets/58988462/ea81eeb5-4a13-407e-be31-9d01c842ae9f)

Nenne es “Label_YourModName”. Ich hab meins `Label_DeprivedDepresso` genannt.
Doppelklicke es und mache die folgenden Änderungen:
- Priorität auf **1 oder mehr** gesetzt
- Chunk ID auf **1000 oder mehr** setzen, dies wird in der endgültigen Mod-.pak stehen, um sie von anderen .pak-Dateien unterscheiden zu können.
- Cook-regel auf **Always Cook** eingestellt
- Label Assets in meinem Ordner **ausgewählt**. 
- Speichere alles (rechte untere Ecke).
Klicke auf **Platforms, Windows, Shipping**
Wähle dann **Platforms, Windows, Package Project**
Deine Mod wird nun verpackt, dies dauert eine Weile, also schnapp dir eine Tasse Tee!

![BLENDER3](https://github.com/KURAMAAA0/PalModding/assets/58988462/4be2947c-6056-4f43-9d9e-3c30fe1928b2)

Oder Kaffee..
Sobald die Verpackung fertig ist, hast du einen "Windows"-Ordner erstellt, gehe durch den Ordner: `Windows -> Pal -> Content -> Paks`.
Im Paks-Ordner hast du höchstwahrscheinlich zwei .pak-Dateien, **pakchunk0-Windows** und deine.
Meine heißt pakchunk1000-Windows, weil ich die Chunk-ID auf 1000 gesetzt habe.
Nun musst du in die lokalen Dateien deines Spiels gehen.

![STEAM1](https://github.com/KURAMAAA0/PalModding/assets/58988462/c8563873-11e1-4376-a6da-09df5fdd2c0e)

kopiere deine .pak Datei zu `D:\Palworld\Pal\Content\Paks`.
Ändere den Namen zu *YourModName***_P** und starte Palworld, und das ist alles!
**(DER .PAK-DATEINAME SOLLTE MIT "_P" ENDEN, SONST WIRD ER NICHT GELADEN.)**
Genieße deine wundervolle Schöpfung.


### Probleme & Lösungen
Wenn ihr auf Probleme stoßt, die ihr beheben könnt, schickt mir eine DM auf Discord **kurama0**, damit ich das Problem und die Lösung hier hinzufügen kann!
Bitte tut dies jedoch auf Englisch, sollte euch dies schwer Fallen meldet euch gerne bei **@Tctcl** auf Discord, dieser wird gerne helfen.
